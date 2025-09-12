// lib/types.ts

export interface Order {
  id?: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  equipmentName: string;
  quantity: number;
  installationDate: string;
  description?: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  statusHistory?: Array<{
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    changedAt: Date;
    admin?: {
      email: string;
      name: string;
    };
  }>;
}

export interface Company {
  name: string;
  representative: string;
  registrationNumber: string;
  establishedDate: string;
  address: string;
  business: string;
  specialization: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}
