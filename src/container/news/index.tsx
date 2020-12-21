import React from "react";
import { NewsLetterScreen } from './screen';

function _NewsLetterPage(props) {

	const { history } = props;

	const dataNews = `
	<div class="dataNewsContainer">
		<img src="https://www.politico.eu/wp-content/uploads/2020/06/GettyImages-1216605083-1160x773.jpg"/>
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
	</div>
	;`

	return (
		<NewsLetterScreen
			dataNews={dataNews}
			{...props}
		/>
	)
}
export const NewsLetterPage = React.memo((_NewsLetterPage));
