import type { Inquiry } from "@/src/types/inquiry";

export const inquiries: Inquiry[] = [
  {
    _id: "68b1f2a1c9e4d2a1b3f4e5d6",
    name: "Sujan Shrestha",
    email: "sujan.shrestha@example.com",
    phone: "+977 981-2345678",
    subject: "Product Information",
    message:
      "We're setting up a small sleep lab and want to know more about the BMC G3 A20 — pricing and lead time for 5 units.",
    isRead: false,
    status: "New",
    createdAt: "2026-09-01T09:12:00Z",
    updatedAt: "2026-09-01T09:12:00Z",
  },
  {
    _id: "68b1f2a1c9e4d2a1b3f4e5d7",
    name: "Anita Karki",
    email: "anita.karki@example.com",
    phone: "+977 980-1122334",
    subject: "Technical Support",
    message:
      "Our CPAP machine is showing an error code E-05 intermittently. Can someone advise or arrange a technician visit?",
    isRead: true,
    status: "In Progress",
    createdAt: "2026-08-30T14:45:00Z",
    updatedAt: "2026-08-31T08:00:00Z",
  },
  {
    _id: "68b1f2a1c9e4d2a1b3f4e5d8",
    name: "Rajesh Thapa",
    email: "rajesh.thapa@example.com",
    phone: "+977 984-5566778",
    subject: "Installation & Service",
    message:
      "We recently purchased two oxygen concentrators and need installation support at our clinic in Pokhara.",
    isRead: true,
    status: "Resolved",
    createdAt: "2026-08-27T11:20:00Z",
    updatedAt: "2026-08-28T10:00:00Z",
  },
];
