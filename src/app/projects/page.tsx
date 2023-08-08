import Link from "next/link"
import PostItem from "../_components/PostItem"
import { getProjects } from "../_db/projects"
import toSlug from "../_utils/toSlug"
import routes from "../_constants/routes"
import PostList from "../_components/PostList"

export const revalidate = 0

export default async function Projects(props: PageProps) {
	const {
		searchParams: { tag },
	} = props
	const projectsResult = await getProjects()
	const projects = projectsResult.data as Project[]
	return (
		<PostList
			directory={routes.PROJECTS}
			posts={projects}
			filterByTag={tag}
		/>
	)
}
