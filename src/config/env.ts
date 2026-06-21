import "dotenv/config";

const required = (key: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const env = {
  PORT: Number(process.env.PORT) || 3000,

  JWT_SECRET: required("JWT_SECRET", process.env.JWT_SECRET),
  JWT_EXPIRES_IN: (process.env.JWT_EXPIRES_IN as "1d" | "7d" | "30d") || "1d",

  DATABASE_URL: required("DATABASE_URL", process.env.DATABASE_URL),
};