import Accordion, { AccordionItem } from "../_components/Accordion"
import Icon from "../_components/Icon"
import { getExperiences } from "../_db/experiences"
import getDateString from "../_utils/getDateString"
import toTitleCase from "../_utils/toTitleCase"

export default async function Experiences() {
	const experiencesResult = await getExperiences()
	const experiences = experiencesResult.data as Experience[]
	const accordionItems: AccordionItem[] = experiences.map((experience) => ({
		title: (
			<div className="flex flex-col items-start">
				<caption className="text-accent">
					{getDateString(experience.start)} -{" "}
					{getDateString(experience.end)}
				</caption>
				<h3>{experience.title}</h3>
				<h3 className="opacity-50">{experience.company}</h3>
			</div>
		),
		body: (
			<div className="flex flex-col items-start gap-4">
				<p>{experience.description}</p>
				<div className="flex gap-2">
					{experience.stack.map((skill, i) => (
						<Icon
							key={i}
							tooltip={toTitleCase(skill)}
							src={`skills/${skill}.svg`}
						/>
					))}
				</div>
			</div>
		),
	}))
	return <Accordion items={accordionItems} />
}
