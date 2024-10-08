import express from "express";
import {
  getAllCountries,
  getCountryByCode,
} from "../controllers/country-controller";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:countryCode", getCountryByCode);

export default router;
