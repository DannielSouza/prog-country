import { create } from "zustand";
import { TCountry } from "../types/country";

interface useRecentCountriesStore {
  allRecentCountries: TCountry[];
  onAddRecentCountry: (recentCountries: TCountry) => void;
  onSetRecentCountries: (recentCountriess: TCountry[]) => void;
  onDeleteRecent: (removedRecent: TCountry) => void;
  onResetRecentCountries: () => void;
}

const useRecentCountries = create<useRecentCountriesStore>((set, get) => ({
  allRecentCountries: [],
  onResetRecentCountries: () => set({ allRecentCountries: [] }),
  onAddRecentCountry: (recentCountries: TCountry) =>
    set({
      allRecentCountries: [
        recentCountries,
        ...get().allRecentCountries,
      ] as TCountry[],
    }),
  onDeleteRecent: (removedRecent: TCountry) =>
    set({
      allRecentCountries: get().allRecentCountries.filter(
        (recentItem) => recentItem.countryCode !== removedRecent.countryCode
      ) as TCountry[],
    }),
  onSetRecentCountries: (recentCountries: TCountry[]) =>
    set({ allRecentCountries: recentCountries }),
}));

export default useRecentCountries;
