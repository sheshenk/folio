import { PropsWithChildren } from "react"
import "./globals.css"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({ subsets: ["latin"] })

export default function RootLayout(props: PropsWithChildren) {
	const { children } = props
	return (
		<html lang="en">
			<body className={dmSans.className}>{children}</body>
		</html>
	)
}
