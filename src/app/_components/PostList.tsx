import Link from "next/link"
import toSlug from "../_utils/toSlug"
import PostItem from "./PostItem"

interface PostListProps {
	posts: Post[]
	directory: string
	filterByTag?: string
}

export default function PostList(props: PostListProps) {
	const { posts, directory, filterByTag } = props
	const nextPosts = posts.filter(
		(post) => !filterByTag || post.tags.map(toSlug).includes(filterByTag)
	)
	return (
		<div className="flex flex-col gap-12 w-full">
			{filterByTag && (
				<div className="flex justify-between items-center gap-4">
					<h3>
						<span className="font-semibold">Filtering: </span>
						{filterByTag}
					</h3>
					<Link href={directory} className="link with-transition">
						Clear
					</Link>
				</div>
			)}
			{nextPosts.map((project, i) => (
				<PostItem key={i} post={project} directory={directory} />
			))}
			{!Boolean(nextPosts.length) && "no posts found :("}
		</div>
	)
}
