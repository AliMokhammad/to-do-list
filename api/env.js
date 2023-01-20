var dotenv = require("dotenv");
const path = require("path");
envPath = path.join(__dirname, ".env");
console.log({ envPath });
dotenv.config({ path: envPath });
