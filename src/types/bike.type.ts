export type TBike = {
  _id: string;
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
