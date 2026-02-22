import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../db/schema";

/**
 * Drizzle DB 클라이언트 (서버 전용)
 * Server Components, Server Actions, Route Handlers에서만 사용하세요.
 * DATABASE_URL은 .env.local에 설정합니다.
 */
const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString, { max: 1 });
export const db = drizzle(client, { schema });
