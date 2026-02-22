"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { users } from "../../db/schema";

export async function addUser(formData: FormData) {
  const email = formData.get("email") as string;
  const name = (formData.get("name") as string) || null;

  if (!email?.trim()) return;

  await db.insert(users).values({
    email: email.trim(),
    name: name?.trim() || null,
  });

  revalidatePath("/");
}
