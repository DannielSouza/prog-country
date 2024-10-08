import { axiosFlagInstance } from ".";
import { TAllFlagsResponse } from "../types/flag";

export async function getAllCountriesFlags() {
  try {
    const response = await axiosFlagInstance.get<TAllFlagsResponse>("/");
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
