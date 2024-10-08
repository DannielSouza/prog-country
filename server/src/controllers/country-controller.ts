import { Request, Response } from "express";
import { getCountryInfo, getCountries } from "../services/country-service";

export async function getCountryByCode(req: Request, res: Response) {
  const { countryCode } = req.params;
  return await getCountryInfo(countryCode, res);
}

export async function getAllCountries(req: Request, res: Response) {
  return await getCountries(res);
}
