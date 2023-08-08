import routes from "../_constants/routes"
import PostList from "../_components/PostList"

export const revalidate = 0

export default async function Blog(props: PageProps) {
	const {
		searchParams: { tag },
	} = props
	const postsResult = await { data: [] }
	const posts = postsResult.data as Project[]
	return <PostList directory={routes.BLOG} posts={posts} filterByTag={tag} />
}
