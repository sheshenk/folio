import Image from "next/image"

export default function Home() {
	return (
		<div className="flex flex-col gap-8">
			<Image
				src={"/images/portrait.png"}
				width={300}
				height={300}
				alt="Portrait"
			/>
			<div className="flex flex-col gap-4">
				<p>
					<span className="font-bold">Hello! I&apos;m Shashank,</span>{" "}
					currently a Computer Science junior living in sunny
					Singapore. My passion lies in creating practical and
					valuable apps that have the potential to transform
					businesses.
				</p>
				<p>
					I&apos;m also on the lookout for opportunities to
					collaborate with startups right here in Singapore.
				</p>
				<p>
					Feel at home as you explore my portfolio and blog -
					it&apos;s a space where we can connect, share ideas, and
					inspire one another!
				</p>
			</div>
		</div>
	)
}
