import supabase from "../_lib/supabase"

export const getExperiences = () => supabase.from("experiences").select("*")
