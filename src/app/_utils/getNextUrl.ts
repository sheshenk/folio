export default function getNextUrl(url: string): string {
	switch (true) {
		case url.startsWith("/"):
		case url.startsWith("http"):
			return url
		default:
			const [bucket, resource] = url.split("/", 2)
			return resource // TODO: use supabase getPublicUrl
	}
}
