export type TCountry = {
  countryCode: string;
  name: string;
};

export type TPopulationInfo = {
  year: string;
  value: string;
};

export type TCountryInfo = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: TCountryInfo[];
  populationInfo: TPopulationInfo[];
  flagUrl: string;
};
