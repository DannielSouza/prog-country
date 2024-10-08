import { axiosCountryInstance } from ".";
import { TAllCountryResponse, TCountry } from "../types/country";

export async function getAllCountries() {
  try {
    const response = await axiosCountryInstance.get<TAllCountryResponse[]>(
      "/api/v3/AvailableCountries"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCountryByCode(countryCode: string) {
  try {
    const response = await axiosCountryInstance.get<TCountry[]>(
      `/api/v3/CountryInfo/${countryCode}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
