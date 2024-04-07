"use server";
import "server-only";
import { createClient } from "./server";
import { Enums } from "@/types/supabase";

export const getPrograms = async (level: Enums<'degree_level'>) => {
  const supabase = createClient();
  // select all programs from a specific institution
  const { data } = await supabase
    .from("programs")
    .select(
      `id, level, degree_type, degree_subject_area, created_at, name, abbreviation, link, country, image, notes, institution (name)`
    )
    .eq("level", level);

  if (!data) {
    return null;
  }

  return data;
};