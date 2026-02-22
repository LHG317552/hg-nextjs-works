import { config } from "dotenv";
import path from "node:path";
import { defineConfig } from "drizzle-kit";

// drizzle-kit CLI 실행 시 .env.local 로드 (Next는 자동 로드하지만 Node 스크립트는 아님)
config({ path: path.resolve(process.cwd(), ".env.local") });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
