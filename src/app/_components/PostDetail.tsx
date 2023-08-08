import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren } from "react"
import getNextUrl from "../_utils/getNextUrl"

interface PostDetailProps extends PropsWithChildren {
	post: Post
	directory: string
}

export default function PostDetail(props: PostDetailProps) {
	const { post, directory, children } = props
	const { hero_src, hero_alt, title, subtitle, description } = post
	return (
		<div className="flex flex-col gap-8">
			<Link
				href={directory}
				className="flex w-fit gap-2 link with-transition"
			>
				<p>Back</p>
			</Link>
			<div className="flex flex-col">
				<h2 className="font-bold">{title}</h2>
				<h3>{subtitle}</h3>
			</div>
			<Image
				width={800}
				height={800}
				src={getNextUrl(hero_src || "/images/test-image.jpeg")}
				alt={hero_alt || hero_src || ""}
				className="w-full"
			/>
			{children}
			<h3 className="border-l-8 pl-4 py-2">
				<span className="opacity-50">{description}</span>
			</h3>
		</div>
	)
}
