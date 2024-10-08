import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TPopulationInfo } from "../types/country";
import { Title } from "./title";

type PopulationChartProps = {
  data: TPopulationInfo[];
};

export const PopulationChart = ({ data }: PopulationChartProps) => {
  return (
    <div className="w-full h-full">
      <Title title="Population growth" />

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 40 }}
        >
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toLocaleString()} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
