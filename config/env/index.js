import "dotenv";
import PRODUCTION from "./production";
import DEVELOPMENT from "./development";
import QA from "./qa";

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
  currentEnv = QA;
}

export default currentEnv;
