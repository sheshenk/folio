import socials from "@/app/_constants/socials"
import { ElementWithHTMLProps } from "@/app/_types/ElementWithHTMLProps"
import getNextUrl from "@/app/_utils/getNextUrl"
import Link from "next/link"
import getTablerIcon from "../_utils/getTablerIcon"

export default function SocialButtons(
	props: ElementWithHTMLProps<HTMLDivElement>
) {
	const { className: injectedClassName = "", ...rest } = props
	const className = `flex gap-2 ${injectedClassName}`
	return (
		<div className={className} {...rest}>
			{socials.map((social) => (
				<Link
					key={social.key}
					href={getNextUrl(social.href)}
					className="link with-transition"
				>
					{getTablerIcon(social.key, { className: "w-8 h-8" })}
				</Link>
			))}
		</div>
	)
}
