import { getCountryByCode } from "@/app/api/country";
import React, { ReactNode } from "react";

type PageParams = {
  params: { countryCode: string };
};

export async function generateMetadata({ params }: PageParams) {
  const countryInfo = await getCountryByCode(params.countryCode as string);

  return {
    title: `Countries | ${countryInfo.commonName}`,
  };
}

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
