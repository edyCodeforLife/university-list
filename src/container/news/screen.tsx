import React, {memo} from "react";
import "../../components/app.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import * as LS from 'local-storage';

function _NewsLetter(props) {

	const dataNews = `
	<img style={{marginTop: 20}} src="https://www.politico.eu/wp-content/uploads/2020/06/GettyImages-1216605083-1160x773.jpg"/>
	<p>
		The coronavirus crisis will hit British universities a lot harder than their continental European counterparts — at least initially.

		Much like schools, higher education institutes across the world had to shut their doors and switch to distance learning as the pandemic took hold.

		With terms now drawing to a close in most European countries, students are fretting about their summer exams, but university leaders are also worried — with many bracing for the financial storm looming over the higher education landscape.
	</p>

	<p>
		“Unlike schools, which are sheltered under the safe shield of public funding, universities will have to confront a serious assault to their business model,” said Dirk Van Damme of the OECD Directorate for Education and Skills.

		Given travel restrictions, universities are expecting a pandemic-induced drop in international students, who usually pay higher fees than their domestic or EU counterparts, leaving a hole in their budgets. The imminent economic crisis, meanwhile, puts their public funding in jeopardy. More domestic students are also likely to struggle to pay fees during a recession; others might delay going to university until distance learning ends.
	</p>

	<p>
		All this, Van Damme said, will hit universities with the highest fees the hardest. And given that British and other Anglo-Saxon institutions tend to charge much more than those on the Continent, they’re likely to experience a far greater drop in income.

		“The pandemic will reinforce hierarchies in the higher education landscape,” he said. “Institutions with large endowments or other buffers will be more resilient. But it will also shake up the landscape, with Anglo-Saxon universities on the ‘losing’ side and European universities on the ‘winning’ side.”

		Continental universities, however, could also face financial trouble down the line if the post-pandemic economic downturn prompts states to slash the higher education budgets they depend on.
	</p>

	<h2 style={{textAlign: 'left'}}>Higher fee, more problems</h2>

	<p>
		British universities in particular rely on high tuition fees and international students for their income. According to the Office for Budget Responsibility, education is the sector hardest hit by the coronavirus in the U.K., with the impact likely to be felt most by universities. Some have warned that the pandemic could even spell the end for some institutions.

		Universities U.K., an advocacy organization, warned that a significant drop in international student numbers could have dire consequences. International fees amount to about £6.9 billion annually, about a third of all tuition fee income, they said.

		“Universities cannot face this financial storm alone. Without any action, universities would be forced to make huge cuts, jobs would be lost, vital research will be halted and most importantly students will suffer,” a Universities U.K. spokesperson said.

		After the financial crisis of 2008, the U.K. higher education system underwent a drastic change — reducing direct public funding and increasing tuition fees, said Thomas Estermann, director of governance and funding at the European University Association. “That new funding is now particularly vulnerable.”

		The same goes for high-fee universities in the United States and Australia.

		Nearly half of students who intended to study abroad have changed their study plans due to the pandemic, according to a recent worldwide survey from QS, an educational rankings agency. Half of the universities surveyed said that the virus will have a “detrimental impact” on the number of student applications to their institutions.
	</p>`;

	return (
		<div className="homeContainer">
			<Header
				userName={LS.get("currentLoggedIn")}
				{...props}
			/>

			<div
				className="containerScreen adjustContainer"
				dangerouslySetInnerHTML={{__html: dataNews}}
			/>

			<Footer />
		</div>
	);
}
export default memo(_NewsLetter);
export const NewsLetterScreen = memo(_NewsLetter);
