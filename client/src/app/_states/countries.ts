import { create } from "zustand";
import { TCountry } from "../types/country";

interface useCountriesStore {
  allCountries: TCountry[];
  onSetCountries: (countriess: TCountry[]) => void;
}

const useCountries = create<useCountriesStore>((set) => ({
  allCountries: [],
  onSetCountries: (countries: TCountry[]) => set({ allCountries: countries }),
}));

export default useCountries;
