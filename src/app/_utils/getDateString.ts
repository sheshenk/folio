import dayjs from "dayjs"

export default function getDateString(
	date?: string,
	format?: string,
	fallback?: string
) {
	const nextFallback = fallback || "Present"
	if (!date) return nextFallback
	const nextFormat = format || "MMM YYYY"
	const nextDate = dayjs(date)
	return nextDate.format(nextFormat)
}
