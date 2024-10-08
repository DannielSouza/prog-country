"use client";

import React, { useEffect, useState } from "react";
import { getAllCountries } from "../api/country";
import { TCountry } from "../types/country";
import { CountryItem } from "../_components/country-item";
import useRecentCountries from "../_states/recent-countries";
import { Title } from "../_components/title";
import useCountries from "../_states/countries";

export const MainPageWrapper = () => {
  const { allRecentCountries, onResetRecentCountries } = useRecentCountries();
  const { onSetCountries } = useCountries();
  const [countries, setCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    getDatas();
  }, []);

  async function getDatas() {
    try {
      const data = await getAllCountries();
      setCountries(data);
      onSetCountries(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {allRecentCountries.length > 0 && (
        <>
          <div className="w-full flex justify-between items-start">
            <Title title="Recent countries" />

            <p
              onClick={onResetRecentCountries}
              className="text-sm underline text-gray-800 cursor-pointer"
            >
              Clear
            </p>
          </div>
          <div className="flex gap-4 max-w-full flex-wrap items-center mb-8">
            {allRecentCountries.map((country) => (
              <CountryItem key={country.countryCode} data={country} />
            ))}
          </div>
        </>
      )}

      <Title title="All countries" />

      <div className="flex gap-4 max-w-full flex-wrap items-center justify-center">
        {countries.map((country) => (
          <CountryItem key={country.countryCode} data={country} />
        ))}
      </div>
    </>
  );
};
