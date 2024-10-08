"use client";

import { PopulationChart } from "@/app/_components/population-chart";
import { PhosphorIcon } from "@/app/_components/phosphor-icon";
import useRecentCountries from "@/app/_states/recent-countries";
import { getCountryByCode } from "@/app/api/country";
import { TCountryInfo } from "@/app/types/country";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CountryInfoWrapper = () => {
  const { countryCode } = useParams();
  const { allRecentCountries, onAddRecentCountry, onDeleteRecent } =
    useRecentCountries();
  const [countryInfo, setCountryInfo] = useState<TCountryInfo | null>(null);

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    saveRecent();
  }, [countryInfo]);

  async function getDatas() {
    try {
      const data = await getCountryByCode(countryCode as string);
      setCountryInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  function saveRecent() {
    if (!countryInfo) return;
    const existingRecent = allRecentCountries.find(
      (recentItem) => recentItem.countryCode === countryInfo.countryCode
    );
    if (existingRecent) {
      onDeleteRecent(existingRecent);
    }
    return onAddRecentCountry({
      name: countryInfo.commonName,
      countryCode: countryInfo.countryCode,
    });
  }

  if (!countryInfo) {
    return (
      <div className="w-full h-[100svh] flex items-center justify-center -z-10 relative">
        <PhosphorIcon name="Spinner" className="animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex justify-center flex-col items-center gap-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          className="rounded-md border shadow-sm"
          width={350}
          height={350}
          src={countryInfo?.flagUrl}
          alt={`The ${countryInfo?.commonName} country flag`}
        />

        <div className="flex flex-col text-md md:min-w-[450px]">
          <p className="font-semibold">
            Name: <span className="font-normal">{countryInfo.commonName}</span>
          </p>

          <p className="font-semibold">
            Region: <span className="font-normal">{countryInfo.region}</span>
          </p>

          <p className="font-semibold">
            Country code:{" "}
            <span className="font-normal">{countryInfo.countryCode}</span>
          </p>

          <p className="font-semibold">
            Borders:{" "}
            <span className="font-normal">
              {countryInfo.borders.length > 0
                ? countryInfo.borders
                    .map((borderCountry) => borderCountry.commonName)
                    .join(", ")
                : "None"}
            </span>
          </p>

          <p className="font-semibold">
            Population ({" "}
            {countryInfo.populationInfo[countryInfo.populationInfo.length - 1]
              ?.year ?? ""}
            ):{" "}
            <span className="font-normal">
              {countryInfo.populationInfo[
                countryInfo.populationInfo.length - 1
              ]?.value?.toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <PopulationChart data={countryInfo.populationInfo} />
    </div>
  );
};

export default CountryInfoWrapper;
