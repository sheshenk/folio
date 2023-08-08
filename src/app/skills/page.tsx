import Icon from "../_components/Icon"
import skillSections from "../_constants/skills"
import toTitleCase from "../_utils/toTitleCase"

export default function Skills() {
	return (
		<div className="flex flex-col gap-16">
			{skillSections.map((section, i) => (
				<div key={i} className="flex flex-col gap-4">
					<h3>{section.title}</h3>
					<div className="flex flex-wrap gap-x-4 gap-y-8">
						{section.skills.map((skill, j) => (
							<Icon
								key={j}
								tooltip={toTitleCase(skill)}
								className="w-12 h-12"
								src={`skills/${skill}.svg`}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
