"use client"
import { ReactNode, useState } from "react"
import { ElementWithHTMLProps } from "../_types/ElementWithHTMLProps"
import { IconCaretDown } from "@tabler/icons-react"

export interface AccordionItem {
	title: ReactNode
	body: ReactNode
}

interface AccordionProps extends ElementWithHTMLProps<HTMLDivElement> {
	items: AccordionItem[]
}

export default function Accordion(props: AccordionProps) {
	const { items } = props
	const [selected, setSelected] = useState<number | null>(0)
	if (!items.length) return <></>
	return (
		<div className="w-full flex flex-col">
			{items.map((item, i) => (
				<div
					key={i}
					className={`px-4 py-8 ${
						i > 0 ? "border-t-2" : "border-t-0"
					} cursor-pointer`}
					onClick={() => setSelected(selected === i ? null : i)}
				>
					<div className="flex items-center gap-4 w-full">
						<div className="flex flex-col gap-4 w-full">
							{item.title}
							{i === selected && <div>{item.body}</div>}
						</div>
						<IconCaretDown
							opacity={0.25}
							className={
								i === selected ? "rotate-0" : "-rotate-90"
							}
						/>
					</div>
				</div>
			))}
		</div>
	)
}
