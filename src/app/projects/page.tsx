import PostItem from "../_components/PostItem"
import { getProjects } from "../_db/projects"

export default async function Projects() {
	const projectsResult = await getProjects()
	const projects = projectsResult.data as Project[]
	return (
		<div className="flex flex-col gap-12">
			{projects.map((project, i) => (
				<PostItem key={i} post={project} isProject />
			))}
		</div>
	)
}
