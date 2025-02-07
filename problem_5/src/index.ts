import app from "./app";
import AppConfig from "./config/app";

/* Server Config */
const { PORT } = AppConfig;
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
