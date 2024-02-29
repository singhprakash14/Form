//  ** React-hook-from imports
import { Control, FieldErrors } from "react-hook-form";

export type TUserData = {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govt_id_type?: string;
  govt_id?: string;
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: string;
};


export type Props = {
  userControl: Control<TUserData>;
  errors: FieldErrors<TUserData>;
};