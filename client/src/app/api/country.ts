import axiosInstance from ".";
import { TCountry, TCountryInfo } from "../types/country";

export async function getAllCountries() {
  try {
    const response = await axiosInstance.get<TCountry[]>("/country");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCountryByCode(countryCode: string) {
  try {
    const response = await axiosInstance.get<TCountryInfo>(
      `/country/${countryCode}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
