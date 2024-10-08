import axios from "axios";
require("dotenv").config();

const COUNTRY_API_URL = process.env.COUNTRY_API_URL;
const FLAG_API_URL = process.env.FLAG_API_URL;
const POPULATION_API_URL = process.env.POPULATION_API_URL;

export const axiosCountryInstance = axios.create({
  baseURL: COUNTRY_API_URL,
});

export const axiosFlagInstance = axios.create({
  baseURL: FLAG_API_URL,
});

export const axiosPopulationInstance = axios.create({
  baseURL: POPULATION_API_URL,
});
