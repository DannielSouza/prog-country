import { Response } from "express";
import { getAllCountries, getCountryByCode } from "../api/country";
import { getAllCountriesFlags } from "../api/flag";
import { getAllCountriesPopulation } from "../api/population";

export async function getCountries(res: Response) {
  try {
    const allCountries = await getAllCountries();
    return res.status(200).send(allCountries);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
}

export async function getCountryInfo(countryCode: string, res: Response) {
  try {
    if (!countryCode) throw new Error("The country code is required");

    const [countryInfo, flags, countriesPopulation] = await Promise.all([
      getCountryByCode(countryCode),
      getAllCountriesFlags(),
      getAllCountriesPopulation(),
    ]);

    const flagInfo = flags.find((flag) => flag.iso2 === countryCode) ?? null;
    const flagUrl = flags.find((flag) => flag.iso2 === countryCode)?.flag ?? "";
    const populationInfo =
      countriesPopulation.find(
        (population) => population.iso3 === flagInfo?.iso3
      )?.populationCounts ?? null;

    const responseBody = {
      ...countryInfo,
      flagUrl,
      populationInfo,
    };

    return res.status(200).send(responseBody);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
}
