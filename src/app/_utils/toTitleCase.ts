export default function toTitleCase(str: string): string {
	return str.replace(
		/\w\S*/g,
		(unit) => unit.charAt(0).toUpperCase() + unit.substring(1).toLowerCase()
	)
}
