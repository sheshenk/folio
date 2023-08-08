import { PropsWithChildren } from "react"
import "./globals.css"
import { DM_Sans } from "next/font/google"
import NavItems from "./_components/NavItems"
import Logo from "./_components/Logo"
import SocialButtons from "./_components/SocialButtons"
import Link from "next/link"
import routes from "./_constants/routes"

const dmSans = DM_Sans({ subsets: ["latin"] })

export default function RootLayout(props: PropsWithChildren) {
	const { children } = props
	return (
		<html lang="en">
			<body className={dmSans.className}>
				<div className="flex w-full justify-center px-8">
					<div className="flex flex-wrap md:flex-nowrap w-full max-w-4xl md:gap-16">
						<div className="relative flex items-stretch w-full md:max-w-sm flex-wrap md:flex-nowrap">
							<div className="flex items-center w-full py-12 md:sticky md:h-screen md:top-0">
								<div className="w-full">
									<Logo className="w-full opacity-10 -mb-8" />
									<div className="flex flex-row md:flex-col gap-8 w-full">
										<Link href={routes.HOME}>
											<h1 className="md:text-right">
												Shashank
												<br />
												<span className="font-bold text-accent">
													Acharya
												</span>
											</h1>
										</Link>
										<SocialButtons className="hidden md:flex w-full justify-end" />
										<NavItems className="w-full items-end justify-center" />
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center w-full pb-32 md:pt-32">
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
