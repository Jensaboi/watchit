import app from "./app.ts";
import "./config/config.ts";

app.listen(8000, () =>
  console.log(`Server connected listening on ${process.env.PORT}`),
);
