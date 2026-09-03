export type InquiryStatus = "New" | "In Progress" | "Resolved" | "Closed";

export type Inquiry = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  status: InquiryStatus;
};
