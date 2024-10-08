export type TPopulationCount = {
  year: string;
  value: string;
};

export type TCountryPopulation = {
  country: string;
  code: string;
  iso3: string;
  populationCounts: TPopulationCount[];
};

export type TCountryPopulationResponse = {
  data: TCountryPopulation[];
};
