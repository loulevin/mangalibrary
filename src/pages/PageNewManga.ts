import axios from "axios";

export const PageNewManga = () => {
  return /*html*/ `
<div class="page pageNewManga">
	<form class="mangaForm">
		<fieldset>
			<legend>New Manga enter here</legend>
			<label class="row">Titel: <input type="text" id="title"></label>
			<label class="row">Author: <input type="text" id="author"></label>
			<label class="row">Band: <input type="number" id="issues"></label>
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


export const attachPageNewMangaEvents = () => {
	const apiUrl = 'http://localhost:5555';

	const btn = document.querySelector('.btnManga');
	btn?.addEventListener('click', (e: Event) => {
		e.preventDefault();
		
		const elemTitle = document.querySelector<HTMLInputElement>('.mangaForm #title');
		const elemAuthor = document.querySelector<HTMLInputElement>('.mangaForm #author');
		const elemIssues = document.querySelector<HTMLInputElement>('.mangaForm #issues');
		const elemGenre = document.querySelector<HTMLInputElement>('.mangaForm #genre');


		const title = elemTitle?.value;
		const author = elemAuthor?.value;
		const issues = elemIssues?.value;
		const genre = elemGenre?.value;

		const formData = {
			title,
			author,
			issues,
			genre
		};

		console.log(formData);

		(async () => {
			const response = await axios.post(`${apiUrl}/mangas`, formData);
			if (response.status !== 201) {
				console.log(response.status);
			} else {
				if(elemTitle) elemTitle.value = '';
				if(elemAuthor) elemAuthor.value = '';
				if(elemIssues) elemIssues.value = '';
				if(elemGenre) elemGenre.value = '';
			}
		})();
	});
}
