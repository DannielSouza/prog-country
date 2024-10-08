export type TCountry = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[];
};

export type TAllCountryResponse = {
  countryCode: string;
  name: string;
};
