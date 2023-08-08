import socials from "@/app/_constants/socials"
import { ElementWithHTMLProps } from "@/app/_types/ElementWithHTMLProps"
import getNextUrl from "@/app/_utils/getNextUrl"
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandTelegram,
	IconLink,
	IconPaperclip,
	TablerIconsProps,
} from "@tabler/icons-react"
import Link from "next/link"

const getSocialButtonIcon = (
	key: string,
	props?: TablerIconsProps
): JSX.Element => {
	switch (key) {
		case "linkedin":
			return <IconBrandLinkedin {...props} />
		case "github":
			return <IconBrandGithub {...props} />
		case "telegram":
			return <IconBrandTelegram {...props} />
		case "resume":
			return <IconPaperclip {...props} />
		default:
			return <IconLink {...props} />
	}
}

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
					{getSocialButtonIcon(social.key, { className: "w-8 h-8" })}
				</Link>
			))}
		</div>
	)
}
