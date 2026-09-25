import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { AdminAuthGuard } from '../auth/guards/admin-auth.guard';
import { ProductService } from '../product/product.service';

@Controller('dashboard')
@UseGuards(AdminAuthGuard)
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly productService: ProductService,
  ) {}

  @Get('stats')
  async getStats() {
    return this.dashboardService.getStats();
  }

  @Get('performance')
  async getPerformance() {
    return this.dashboardService.getPerformance();
  }

  @Get('top-products')
  async getTopProducts() {
    return this.productService.findTopPerforming(5);
  }
}
