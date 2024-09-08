import { AxiosError } from "axios";


export interface SimpleError {
  statusText?: string;
  message?: string;
}

export type Error = SimpleError | AxiosError;
