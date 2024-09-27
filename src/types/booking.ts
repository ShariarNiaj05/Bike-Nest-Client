import { TUser } from "@/redux/features/authSlice";
import { TBike } from "./bike.type";

export type TRental = {
  userId: string | TUser;
  bikeId: string | TBike;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
};
