import Icon from "@/app/_components/Icon"
import PostDetail from "@/app/_components/PostDetail"
import routes from "@/app/_constants/routes"
import { getProject } from "@/app/_db/projects"
import toTitleCase from "@/app/_utils/toTitleCase"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 0

export default async function Project(props: PageProps) {
	const {
		params: { slug },
	} = props
	const projectResult = await getProject(slug)
	const project = projectResult.data as Project
	if (!project) return <></> // TODO: replace with not found
	const { repo, website, stack } = project
	return (
		<PostDetail post={project} directory={routes.PROJECTS}>
			{Boolean(stack.length) && (
				<div className="flex flex-wrap gap-x-4 gap-y-8">
					{stack.map((skill, j) => (
						<Icon
							key={j}
							tooltip={toTitleCase(skill)}
							className="w-12 h-12"
							src={`skills/${skill}.svg`}
						/>
					))}
				</div>
			)}
			{(repo || website) && (
				<div className="flex flex-wrap gap-4">
					{repo && (
						<Link className="link with-transition" href={repo}>
							GitHub Repo
						</Link>
					)}
					{website && (
						<Link className="link with-transition" href={website}>
							Project Website
						</Link>
					)}
				</div>
			)}
		</PostDetail>
	)
}
