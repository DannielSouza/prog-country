export type TFlag = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};

export type TAllFlagsResponse = {
  data: TFlag[];
};
