import Image, { ImageProps } from "next/image"

export default function Logo(props: Partial<ImageProps>) {
	const { width = 500, height = 500, ...rest } = props
	return (
		<Image
			width={width}
			height={height}
			{...rest}
			src="/images/logo-wordmark.png"
			alt="Portfolio Logo"
		/>
	)
}
