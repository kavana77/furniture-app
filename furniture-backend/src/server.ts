import connectDB from "./config/db";
import app from "./app";
import env from "./utils/validateEnv";

const PORT = env.PORT || 5001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
