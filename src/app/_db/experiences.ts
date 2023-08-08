import supabase from "../_lib/supabase"

export const getExperiences = () =>
	supabase
		.from("experiences")
		.select("*")
		.order("end", { ascending: false, nullsFirst: true })
		.order("start", { ascending: false })
