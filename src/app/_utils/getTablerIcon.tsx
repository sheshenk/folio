import { IconBrandGithub, IconBrandLinkedin, IconLink, IconMail, IconPaperclip, TablerIconsProps } from "@tabler/icons-react"

export default function getTablerIcon(
	key: string,
	props?: TablerIconsProps
): JSX.Element {
	switch (key) {
		case "linkedin":
			return <IconBrandLinkedin {...props} />
		case "github":
			return <IconBrandGithub {...props} />
		case "mail":
			return <IconMail {...props} />
		case "resume":
			return <IconPaperclip {...props} />
		default:
			return <IconLink {...props} />
	}
}
