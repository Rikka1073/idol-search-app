import { supabase } from "./supabase";

export const getIdolData = async (page: number, limit: number) => {
  console.log(page, limit);
  const start = (page - 1) * limit;
  const end = start + limit - 1;
  console.log(start, end);
  const { data, error } = await supabase.from("idol-data").select("*").range(start, end);

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
};

export const getAllData = async () => {
  const { data, error } = await supabase.from("idol-data").select("*");

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
};
