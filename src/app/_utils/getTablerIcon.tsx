import {
	IconAppWindow,
	IconBrain,
	IconBrandAsana,
	IconBrandGithub,
	IconBrandLinkedin,
	IconCurrencyEthereum,
	IconLink,
	IconMail,
	IconPaint,
	IconPaperclip,
	TablerIconsProps,
} from "@tabler/icons-react"

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
		case "window":
			return <IconAppWindow {...props} />
		case "brain":
			return <IconBrain {...props} />
		case "ethereum":
			return <IconCurrencyEthereum {...props} />
		case "paint":
			return <IconPaint {...props} />
		default:
			return <IconLink {...props} />
	}
}
