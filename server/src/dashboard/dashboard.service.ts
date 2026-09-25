import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../product/schemas/product.schema';
import {
  ProductViewLog,
  ProductViewLogDocument,
} from '../product/schemas/product-view-log.schema';
import {
  Contact,
  ContactDocument,
  ContactStatus,
} from '../contact/schemas/contact.schema';

const SERVICE_SUBJECTS = [
  'Technical Support',
  'Installation & Service',
  'After-Sales Support',
];

function percentChange(current: number, previous: number): number {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Math.round(((current - previous) / previous) * 1000) / 10; // one decimal
}

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectModel(ProductViewLog.name)
    private readonly viewLogModel: Model<ProductViewLogDocument>,
    @InjectModel(Contact.name)
    private readonly contactModel: Model<ContactDocument>,
  ) {}

  // ===============================
  // Stat cards
  // ===============================

  async getStats() {
    const now = new Date();
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    const [
      totalProducts,
      activeProducts,
      newInquiries,
      newInquiriesLastMonth,
      newInquiriesThisMonth,
      serviceRequestsThisMonth,
      serviceRequestsLastMonth,
    ] = await Promise.all([
      this.productModel.countDocuments({}),
      this.productModel.countDocuments({ isPublished: true }),
      this.contactModel.countDocuments({ status: ContactStatus.NEW }),
      this.contactModel.countDocuments({
        createdAt: { $gte: startOfLastMonth, $lt: startOfThisMonth },
      }),
      this.contactModel.countDocuments({
        createdAt: { $gte: startOfThisMonth },
      }),
      this.contactModel.countDocuments({
        subject: { $in: SERVICE_SUBJECTS },
        createdAt: { $gte: startOfThisMonth },
      }),
      this.contactModel.countDocuments({
        subject: { $in: SERVICE_SUBJECTS },
        createdAt: { $gte: startOfLastMonth, $lt: startOfThisMonth },
      }),
    ]);

    return {
      totalProducts: { value: totalProducts },
      activeProducts: { value: activeProducts },
      newInquiries: {
        value: newInquiries,
        changePercent: percentChange(
          newInquiriesThisMonth,
          newInquiriesLastMonth,
        ),
      },
      serviceRequests: {
        value: serviceRequestsThisMonth,
        changePercent: percentChange(
          serviceRequestsThisMonth,
          serviceRequestsLastMonth,
        ),
      },
    };
  }

  // ===============================
  // Performance chart — last 7 days, views vs inquiries
  // ===============================

  async getPerformance() {
    const days: { label: string; start: Date; end: Date }[] = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const start = new Date(now);
      start.setDate(now.getDate() - i);
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setDate(start.getDate() + 1);
      days.push({
        label: start.toLocaleDateString('en-US', { weekday: 'short' }),
        start,
        end,
      });
    }

    const results = await Promise.all(
      days.map(async (day) => {
        const [views, inquiries] = await Promise.all([
          this.viewLogModel.countDocuments({
            viewedAt: { $gte: day.start, $lt: day.end },
          }),
          this.contactModel.countDocuments({
            createdAt: { $gte: day.start, $lt: day.end },
          }),
        ]);
        return { day: day.label, views, inquiries };
      }),
    );

    return results;
  }
}
