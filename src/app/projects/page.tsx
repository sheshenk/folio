import { getProjects } from "../_db/projects"
import routes from "../_constants/routes"
import PostList from "../_components/PostList"

export const revalidate = 600

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
