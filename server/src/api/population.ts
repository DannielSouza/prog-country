import { axiosPopulationInstance } from ".";
import { TCountryPopulationResponse } from "../types/population";

export async function getAllCountriesPopulation() {
  try {
    const response =
      await axiosPopulationInstance.get<TCountryPopulationResponse>("/");
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
