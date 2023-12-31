import Image from "next/image"
import Chip from "./Chip"
import getDateString from "../_utils/getDateString"
import Link from "next/link"
import TagRow from "./TagRow"
import getNextUrl from "../_utils/getNextUrl"

interface PostItemProps {
	post: Post
	directory: string
}

export default function PostItem(props: PostItemProps) {
	const { post, directory } = props
	const { hero_src, is_featured, title, subtitle, date, slug } = post
	return (
		<Link href={`${directory}/${slug}`} className="flex flex-col group">
			<div className="w-full aspect-video flex items-center overflow-hidden relative">
				<Image
					src={getNextUrl(hero_src || "/images/test-image.jpeg")}
					alt="Test"
					width={600}
					height={300}
					className="object-fit group-hover:scale-105 with-transition"
				/>
				<div className="absolute top-0 left-0 w-full h-full from-white/0 via-white/0 to-white/50 bg-gradient-to-b z-10" />
				{Boolean(is_featured) && (
					<Chip className="absolute top-4 left-4 z-20 bg-white">
						Featured
					</Chip>
				)}
			</div>
			<div className="flex flex-col gap-4 px-8 -mt-4 z-20">
				<div className="flex flex-col">
					<h2 className="font-bold">{title}</h2>
					<h3>{subtitle}</h3>
				</div>
				<p className="text-base">
					<span className="text-accent mr-2">/</span>
					{getDateString(date)}
				</p>
				<TagRow
					tags={post.tags}
					directory={directory}
					className="flex-wrap"
				/>
			</div>
		</Link>
	)
}
