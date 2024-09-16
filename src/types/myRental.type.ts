import { IBike } from "./bike.type";
import { IUser } from "./user.type";

export interface IMyRental {
  _id: string;
  userId: IUser;
  bikeId: IBike;
  startTime: string;
  returnTime: string;
  totalCost: number;
  isReturned: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
