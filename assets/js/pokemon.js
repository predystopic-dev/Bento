// ┌─┐┌─┐┬┌─┌─┐┌┬┐┌─┐┌┐┌
// ├─┘│ │├┴┐├┤ ││││ ││││
// ┴  └─┘┴ ┴└─┘┴ ┴└─┘┘└┘
// Pokemon / Emerald Easter Eggs

const pokemonQuotes = [
	'"I see now that the circumstances of one\'s birth are irrelevant; it is what you do with the gift of life." - Mewtwo',
	'"The important thing is not how long you live. It is what you accomplish with your life." - Grovyle',
	'"Strong Pokemon. Weak Pokemon. That is only the selfish perception of people." - Karen',
	'"We do have a lot in common. The same Earth, the same air, the same sky." - Meowth',
	'"Take charge of your destiny." - Rayquaza',
	'"There\'s no Pokemon that can\'t be befriended." - N',
	'"Even if we don\'t understand each other, that\'s not a reason to reject each other." - Alder',
	'"Make your wonderful dream a reality, it will become your truth." - N',
	'"I will show you that my love for my Pokemon conquers all." - Drake',
	'"Believe in yourself and the Pokemon who choose you!" - Prof. Oak',
	'"Do you want to have a Pokemon battle with all you\'ve got?" - Red',
	'"We dreamt of creating the world\'s strongest Pokemon... and we succeeded." - Dr. Fuji',
	'"A caterpie may change into a butterfree, but the heart that beats inside remains the same." - Brock',
	'"The world\'s greatest Pokemon Master is waiting for me!" - Ash',
	'"Your Pokemon journey is about to begin." - Prof. Birch',
];

const starterPokemon = [
	{ name: 'Treecko', id: 252 },
	{ name: 'Torchic', id: 255 },
	{ name: 'Mudkip', id: 258 },
	{ name: 'Pikachu', id: 25 },
	{ name: 'Rayquaza', id: 384 },
	{ name: 'Gardevoir', id: 282 },
	{ name: 'Salamence', id: 373 },
	{ name: 'Metagross', id: 376 },
	{ name: 'Absol', id: 359 },
	{ name: 'Blaziken', id: 257 },
	{ name: 'Swampert', id: 260 },
	{ name: 'Sceptile', id: 254 },
	{ name: 'Flygon', id: 330 },
	{ name: 'Milotic', id: 350 },
	{ name: 'Aggron', id: 306 },
];

// Show a random Pokemon quote below the greeting
const showQuote = () => {
	const quoteEl = document.getElementById('pokemon-quote');
	if (quoteEl) {
		const quote = pokemonQuotes[Math.floor(Math.random() * pokemonQuotes.length)];
		quoteEl.innerText = quote;
	}
};

// Rotate quotes every 30 seconds
showQuote();
setInterval(showQuote, 30000);

// Pokeball click easter egg - shows a random Pokemon sprite
const pokeball = document.getElementById('pokeball');
const toast = document.getElementById('pokemon-toast');

if (pokeball && toast) {
	pokeball.addEventListener('click', () => {
		pokeball.classList.add('pokeball-shake');

		setTimeout(() => {
			pokeball.classList.remove('pokeball-shake');
			const pokemon = starterPokemon[Math.floor(Math.random() * starterPokemon.length)];
			const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

			toast.innerHTML = `
				<img src="${spriteUrl}" alt="${pokemon.name}" />
				<span>A wild <strong>${pokemon.name}</strong> appeared!</span>
			`;
			toast.classList.add('show');

			setTimeout(() => {
				toast.classList.remove('show');
			}, 3500);
		}, 600);
	});
}

// Konami code easter egg (up up down down left right left right b a)
let konamiProgress = 0;
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
	if (e.keyCode === konamiCode[konamiProgress]) {
		konamiProgress++;
		if (konamiProgress === konamiCode.length) {
			konamiProgress = 0;
			// Activate super secret Emerald mode
			document.body.classList.toggle('emerald-mode');
			const toast = document.getElementById('pokemon-toast');
			if (toast) {
				toast.innerHTML = `
					<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png" alt="Rayquaza" />
					<span><strong>EMERALD MODE ACTIVATED!</strong><br>Rayquaza descends!</span>
				`;
				toast.classList.add('show');
				setTimeout(() => toast.classList.remove('show'), 4000);
			}
		}
	} else {
		konamiProgress = 0;
	}
});
