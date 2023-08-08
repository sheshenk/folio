import Image from "next/image"
import Chip from "./Chip"
import getDateString from "../_utils/getDateString"
import Link from "next/link"
import routes from "../_constants/routes"
import toSlug from "../_utils/toSlug"

interface PostItemProps {
	post: Post
	isProject?: boolean
}

export default function PostItem(props: PostItemProps) {
	const { post, isProject } = props
	const directory = isProject ? routes.PROJECTS : routes.BLOG
	const { hero_src, is_featured, title, subtitle, date } = post
	return (
		<div className="flex flex-col group">
			<div className="w-full aspect-video flex items-center overflow-hidden relative">
				<Image
					src={hero_src || "/images/test-image.jpeg"}
					alt="Test"
					width={600}
					height={300}
					className="object-fit group-hover:scale-110 with-transition"
				/>
				<div className="absolute top-0 left-0 w-full h-full from-white/0 via-white/0 to-white/50 bg-gradient-to-b z-10" />
				{Boolean(is_featured) && (
					<Chip className="absolute top-4 left-4 z-20 bg-white">
						Featured
					</Chip>
				)}
			</div>
			<div className="flex flex-col gap-4 px-8 -mt-8 z-20">
				<div className="flex flex-col">
					<h2 className="font-bold">{title}</h2>
					<h3>{subtitle}</h3>
				</div>
				<p className="text-sm">
					<span className="text-accent mr-2">/</span>
					{getDateString(date)}
				</p>
				{Boolean(post.tags.length) && (
					<div className="flex flex-wrap gap-2">
						{post.tags.map((tag) => (
							<Link href={`${directory}?tag=${toSlug(tag)}`}>
								<Chip className="bg-gray-200 hover:bg-gray-300 with-transition">
									{tag}
								</Chip>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
