interface Post {
	id: number
	slug: string
	title: string
	subtitle: string
	description: string
	date: string
	body: string
	hero_src?: string
	hero_alt?: string
	is_featured?: boolean
	tags: string[]
}
