"use client"
import routes from "@/app/_constants/routes"
import { ElementWithHTMLProps } from "@/app/_types/ElementWithHTMLProps"
import getNextUrl from "@/app/_utils/getNextUrl"
import toTitleCase from "@/app/_utils/toTitleCase"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItems(props: ElementWithHTMLProps<HTMLDivElement>) {
	const pathname = usePathname()
	const { className: injectedClassName = "" } = props
	const className = `flex flex-col ${injectedClassName}`
	return (
		<div className={className}>
			{Object.entries(routes).map(([key, value]) => (
				<Link
					key={key}
					href={getNextUrl(value)}
					className={
						pathname.startsWith(value)
							? "text-accent font-bold"
							: "link with-transition"
					}
				>
					<h2>{toTitleCase(key)}</h2>
				</Link>
			))}
		</div>
	)
}
