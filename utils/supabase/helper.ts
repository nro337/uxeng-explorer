"use server";
import "server-only";
import { createClient } from "./server";

export const getPrograms = async (level: string) => {
  const supabase = createClient();
  // select all programs from a specific institution
  const { data } = await supabase
    .from("programs")
    .select(
      `id, level, degree_subject_area, created_at, name, abbreviation, link, country, image, institution (name)`
    )
    .eq("level", level);

  if (!data) {
    return undefined;
  }

  return data;
};