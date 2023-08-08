import Link from "next/link"
import getTablerIcon from "../_utils/getTablerIcon"
import services from "../_constants/services"

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
