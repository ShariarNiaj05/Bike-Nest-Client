export type TBike = {
  _id?: string;
  brand: string;
  model: string;
  imageUrl: string;
  pricePerHour: number;
  isAvailable?: boolean; // Defaults to true if not provided
  cc: number;
  year: number;
  name: string;
  description: string;
};

export interface IBike {
  _id?: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
