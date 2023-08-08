import { ElementWithHTMLProps } from "../_types/ElementWithHTMLProps"

export default function Chip(props: ElementWithHTMLProps<HTMLDivElement>) {
	const { className: injectedClassName = "", ...rest } = props
	const className = `px-3 py-1 text-sm flex items-center justify center ${injectedClassName}`
	return <div className={className} {...rest} />
}
