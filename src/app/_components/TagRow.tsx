import Link from "next/link"
import { ElementWithHTMLProps } from "../_types/ElementWithHTMLProps"
import toSlug from "../_utils/toSlug"
import Chip from "./Chip"

interface TagRowProps extends ElementWithHTMLProps<HTMLDivElement> {
	tags: string[]
	prefix: string
}

export default function TagRow(props: TagRowProps) {
	const { tags, prefix, className: injectedClassName = "" } = props
	const className = `flex gap-2 ${injectedClassName}`
	if (!tags.length) return <></>
	return (
		<div className={className}>
			{tags.map((tag, i) => (
				<Link key={i} href={`${prefix}?tag=${toSlug(tag)}`}>
					<Chip className="bg-gray-200 hover:bg-gray-300 with-transition">
						{tag}
					</Chip>
				</Link>
			))}
		</div>
	)
}
