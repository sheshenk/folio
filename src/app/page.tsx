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
					a Computer Science junior at NUS currently living in sunny
					Singapore. My passion lies in creating practical and
					valuable apps that have the potential to transform
					businesses.
				</p>
				<p>
					I&apos;m on the lookout for opportunities to collaborate
					with startups right here in Singapore. Feel free to look
					around my portfolio and{" "}
					<a
						className="text-accent"
						href="mailto:acharya.s@icloud.com"
					>
						get in touch
					</a>{" "}
					if you&apos;re interested in wokring together!
				</p>
			</div>
		</div>
	)
}
