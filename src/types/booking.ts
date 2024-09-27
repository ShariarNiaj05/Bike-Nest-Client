import { TUser } from "@/redux/features/authSlice";
import { TBike } from "./bike.type";

export type TBooking = {
  userId: string | TUser;
  bikeId: string | TBike;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
};
