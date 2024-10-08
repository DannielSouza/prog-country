"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import useCountries from "../_states/countries";
import { useRouter } from "next/navigation";
import { TCountry } from "../types/country";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<TCountry[]>([]);
  const { allCountries } = useCountries();
  const router = useRouter();

  useEffect(() => {
    if (searchValue.length > 0) {
      const filteredCountries = allCountries.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResult(filteredCountries);
    } else {
      setSearchResult([]);
    }
  }, [searchValue, allCountries]);

  return (
    <div className="w-full h-16 bg-blue-600 flex shadow fixed top-0 left-0 items-center justify-around">
      <Link className="text-2xl font-bold text-white" href="/">
        Countries
      </Link>

      <div className="w-fit relative">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border rounded-[45px] z-20 relative h-8 w-64 px-3 py-2 focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none"
          placeholder="Search country..."
        />

        {searchResult.length > 0 && (
          <ul className="absolute top-4 pt-4 z-10 bg-white w-full border border-t-0 left-0 max-h-[350px] overflow-y-auto">
            {searchResult.map((country) => (
              <div
                onClick={() => {
                  setSearchValue("");
                  router.push(`/${country.countryCode}`);
                }}
                className="px-2 py-1 cursor-pointer hover:bg-gray-50 truncate"
                key={country.countryCode}
              >
                {country.name}
              </div>
            ))}
          </ul>
        )}
      </div>

      <div />
    </div>
  );
};
