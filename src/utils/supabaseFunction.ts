import { supabase } from "./supabase";

export const getAllData = async () => {
  const { data, error } = await supabase.from("idol-data").select("*");
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
};
