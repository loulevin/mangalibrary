export const PageNewManga = () => {
  return /*html*/ `
<div class="page pageNewManga">
	<form action="data/mangal.json">
		<fieldset>
			<legend>New Manga enter here</legend>
			<label class="row">Titel: <input type="text"></label>
			<label class="row">Author: <input type="text"></label>
			<label class="row">Band: <input type="number"></label>
			<label class="row">Genre <select name="genre" id="genre">
				<option value="seinen">Seinen</option>
				<option value="shounen">Shounen</option>
				<option value="josei">Josei</option>
				<option value="shoujo">Shoujo</option>
			</select></label>
			<div class="buttonRow">
				<button class="btnManga">Create!</button>
			</div>
		</fieldset>
	</form>
</div>
`;
};


export const attachPageWelcomeEvents = () => {
	const apiUrl = 'http://localhost:5555';

	const btn = document.querySelector('.btnContactForm');
	btn?.addEventListener('click', (e: Event) => {
		e.preventDefault();
		
		const elemFullName = document.querySelector<HTMLInputElement>('.contactForm #fullName');
		const elemEmail = document.querySelector<HTMLInputElement>('.contactForm #email');
		const elemAge = document.querySelector<HTMLInputElement>('.contactForm #age');

		const fullName = elemFullName?.value;
		const email = elemEmail?.value;
		const age = elemAge?.value;

		const formData = {
			fullName,
			email,
			age
		};

		(async () => {
			const response = await axios.post(`${apiUrl}/contacts`, formData);
			if (response.status !== 201) {
				console.log(response.status);
			} else {
				if(elemFullName) elemFullName.value = '';
				if(elemEmail) elemEmail.value = '';
				if(elemAge) elemAge.value = '';
			}
		})();
	});
}
