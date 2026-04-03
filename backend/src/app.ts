import express from "express";
import cors from "cors";
import tmdbService from "./service/tmdbService.ts";

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  try {
    const url = req.originalUrl;

    console.log(url);

    const data = await tmdbService.get(url);

    return res.status(200).json(data);
  } catch (err) {}
});

export default app;
