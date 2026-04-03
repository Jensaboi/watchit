import express from "express";
import cors from "cors";
import tmdbService from "./service/tmdbService.ts";

const app = express();

app.use(cors());

// under the hood: /api/xxxx = baseurl/xxxx
// e.g. /api/movie/popular
app.get("/api/*splat", async (req, res, next) => {
  try {
    const url = req.originalUrl;

    const path = url.split("/api")[1];

    if (!path)
      throw new Error(
        "You must provide an url path to the resource you want to access.",
      );

    const data = await tmdbService.get(path);

    return res.status(200).json(data);
  } catch (err: any) {
    return res.status(err?.status ?? 500).json({
      message: err.message,
      status: err?.status ?? 500,
      success: err?.cause?.success ?? false,
      error: err?.cause?.status_message,
    });
  }
});

export default app;
