import Image from "next/image"
import getNextUrl from "../_utils/getNextUrl"

interface IconProps {
	src: string
	className?: string
	tooltip?: string
}

export default function Icon(props: IconProps) {
	const {
		src: injectedSrc,
		tooltip,
		className: injectedClassName = "",
	} = props
	const src = getNextUrl(injectedSrc)
	const className = `w-8 h-8 ${injectedClassName}`
	const imageJsx = (
		<Image
			src={src}
			alt={src}
			className={className}
			width={50}
			height={50}
		/>
	)
	if (!tooltip) return imageJsx
	return (
		<div className="flex flex-col relative group">
			{imageJsx}
			<div className="flex text-xs w-full with-transition justify-center absolute -bottom-6 opacity-0 group-hover:opacity-50">
				{tooltip}
			</div>
		</div>
	)
}
