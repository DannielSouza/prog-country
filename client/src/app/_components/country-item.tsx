"use client";

import React from "react";
import { TCountry } from "../types/country";
import { useRouter } from "next/navigation";

type CountryItemProps = {
  data: TCountry;
};

export const CountryItem = ({ data }: CountryItemProps) => {
  const router = useRouter();

  function handleRedirect() {
    router.push(`/${data.countryCode}`);
  }

  return (
    <div
      onClick={handleRedirect}
      className="cursor-pointer bg-gray-100/60 hover:bg-gray-100/20 border p-2 rounded-md transition"
    >
      {data.name}
    </div>
  );
};
