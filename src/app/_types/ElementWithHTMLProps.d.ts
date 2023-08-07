import { DetailedHTMLProps, HTMLAttributes } from "react"

type ElementWithHTMLProps<T extends HTMLElement> = DetailedHTMLProps<
	HTMLAttributes<T>,
	T
>
