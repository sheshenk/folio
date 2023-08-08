import Icon from "../_components/Icon"
import toTitleCase from "../_utils/toTitleCase"

const advanced = {
	title: "I'm pretty good at",
	skills: [
		"react",
		"nextjs",
		"swift",
		"objectivec",
		"python",
		"nodejs",
		"wordpress",
		"javascript",
		"mongodb",
		"graphql",
		"angularjs",
		"php",
		"sketch",
		"figma",
	],
}
const intermediate = {
	title: "I'm getting the hang of",
	skills: [
		"go",
		"docker",
		"c",
		"cplusplus",
		"pytorch",
		"redis",
		"mysql",
		"selenium",
		"flask",
		"django",
		"java",
		"gimp",
		"illustrator",
		"blender",
	],
}
const basic = {
	title: "I've dabbled occasionally in",
	skills: ["r", "spring", "vuejs", "flutter", "unity", "unrealengine"],
}
const skillSections = [advanced, intermediate, basic]

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
