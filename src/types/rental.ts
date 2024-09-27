import { TUser } from "@/redux/features/authSlice";
import { TBike } from "./bike.type";

export type TRental = {
  _id: string;
  userId: TUser;
  bikeId: TBike;
  startTime: Date | string;
  returnTime: Date | string;
  totalCost: number;
  isReturned: boolean;
};
