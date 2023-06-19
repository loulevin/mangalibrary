import './styles/main.scss';
import { getMenu, getCurrentPage, attachEvents } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>Info Site</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;

attachEvents();