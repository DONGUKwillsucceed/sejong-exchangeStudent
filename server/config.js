import env from "dotenv";

function getenv(key) {
  const env = process.env[key];
  if (!env) {
    throw new Error("ENV NOT FOUND!!");
  }
  return env;
}

env.config();

export const config = {
  hash: {
    rounds: getenv("HASH_NUM"),
  },
  jwt: {
    accessToken: getenv("ACCESS_TOKEN"),
    refreshToken: getenv("REFRESH_TOKEN"),
  },
};
