export default function getUrlPrefix(url: string): string | undefined {
	const match = url.match(/^(\/[^\/]*).*$/)
	if (!match) return
	return match.at(1)
}
