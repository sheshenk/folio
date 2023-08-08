import supabase from "../_lib/supabase"

export default function getNextUrl(url: string): string {
	switch (true) {
		case url.startsWith("/"):
		case url.startsWith("http"):
		case url.startsWith("mailto"):
			return url
		default:
			const [bucket, resource] = url.split("/", 2)
			return supabase.storage.from(bucket).getPublicUrl(resource).data
				.publicUrl
	}
}
