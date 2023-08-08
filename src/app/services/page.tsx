import Link from "next/link"
import getTablerIcon from "../_utils/getTablerIcon"

const services = [
	{
		title: "Full Stack Development",
		description:
			"I have over 5 years of experience in developing full stack applications across a range of industries, leveraging technologies like React, Mongo, Express, GraphQL, AWS and more.",
		icon: "window",
	},
	{
		title: "AI/ML Development",
		description:
			"With certifications in natural language processing to computer vision, reach out to me for help integrating technologies like PyTorch and OpenAI into your products.",
		icon: "brain",
	},
	{
		title: "Web3/Blockchain Development",
		description:
			"With ventures in the dapp space, I can help translate visionary concepts into decentralized realities using technologies like Solidity, Rust, Lightning and more.",
		icon: "ethereum",
	},
	{
		title: "UI/UX Design",
		description:
			"I use tools like Figma, XD, Illustrator, and Sketch to craft captivating interfaces, employing a user-centered approach to elevate user satisfaction.",
		icon: "paint",
	},
]

export default function Services() {
	return (
		<div className="flex flex-col gap-8">
			{services.map((service, i) => (
				<div
					key={i}
					className="flex flex-col gap-4 relative pt-12 pl-12"
				>
					{getTablerIcon(service.icon, {
						className: "w-24 h-24 absolute top-0 left-0 opacity-5",
					})}
					<div className="flex flex-col">
						<h2 className="font-bold">{service.title}</h2>
						<p>{service.description}</p>
					</div>
					<Link
						href={`mailto:acharya.s@icloud.com?subject=${encodeURI(
							`Looking for ${service.title} services`
						)}`}
						className="text-accent"
					>
						Get in Touch
					</Link>
				</div>
			))}
		</div>
	)
}
