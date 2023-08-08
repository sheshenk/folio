import supabase from "../_lib/supabase"

export const getProjects = () =>
	supabase
		.from("projects")
		.select("*")
		.order("is_featured", { ascending: false })
