export const NewManga = () => {
  return /*html*/ `
<div class="page pageWelcome">
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
		</fieldset>
	</form>
</div>
`;
};
