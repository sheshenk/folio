import PostItem from "../_components/PostItem"
import { getProjects } from "../_db/projects"

export const revalidate = 0

export default async function Projects() {
	const projectsResult = await getProjects()
	const projects = projectsResult.data as Project[]
	return (
		<div className="flex flex-col gap-12">
			{projects.map((project) => (
				<PostItem post={project} isProject />
			))}
		</div>
	)
}
