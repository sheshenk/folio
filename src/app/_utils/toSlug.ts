export default function toSlug(text: string): string {
	const original =
		"àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
	const cleaned =
		"aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
	const pattern = new RegExp(original.split("").join("|"), "g")
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(pattern, (c) => cleaned.charAt(original.indexOf(c)))
		.replace(/&/g, "-and-")
		.replace(/[^\w\-]+/g, "")
		.replace(/\-\-+/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "")
}
