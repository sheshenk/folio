"use client"
import routes from "@/app/_constants/routes"
import { ElementWithHTMLProps } from "@/app/_types/ElementWithHTMLProps"
import getNextUrl from "@/app/_utils/getNextUrl"
import getUrlPrefix from "@/app/_utils/getUrlPrefix"
import toTitleCase from "@/app/_utils/toTitleCase"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavItems(props: ElementWithHTMLProps<HTMLDivElement>) {
	const pathname = usePathname()
	const { className: injectedClassName = "" } = props
	const className = `flex flex-col gap-1 ${injectedClassName}`
	return (
		<div className={className}>
			{Object.entries(routes)
				.filter(([_, value]) => value !== routes.HOME)
				.map(([key, value]) => (
					<Link
						key={key}
						href={getNextUrl(value)}
						className={
							pathname === getUrlPrefix(value)
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
