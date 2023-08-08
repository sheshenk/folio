import supabase from "../_lib/supabase"

export const getProjects = () =>
	supabase
		.from("projects")
		.select("*")
		.order("date", { ascending: false })
		.order("is_featured", { ascending: false })

export const getProject = (slug: string) =>
	supabase.from("projects").select("*").eq("slug", slug).maybeSingle()
