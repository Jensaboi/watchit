import app from "./app.ts";
import "./config/config.ts";
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(`Server connected listening on ${PORT}`));
