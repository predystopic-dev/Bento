// ┌─┐┌─┐┬┌─┌─┐┌┬┐┌─┐┌┐┌
// ├─┘│ │├┴┐├┤ ││││ ││││
// ┴  └─┘┴ ┴└─┘┴ ┴└─┘┘└┘
// Pokemon / Emerald Easter Eggs

// ── Quotes ──────────────────────────────────────────────

const pokemonQuotes = [
	'"I see now that the circumstances of one\'s birth are irrelevant; it is what you do with the gift of life." — Mewtwo',
	'"The important thing is not how long you live. It is what you accomplish with your life." — Grovyle',
	'"Strong Pokemon. Weak Pokemon. That is only the selfish perception of people." — Karen',
	'"We do have a lot in common. The same Earth, the same air, the same sky." — Meowth',
	'"Take charge of your destiny." — Rayquaza',
	'"There\'s no Pokemon that can\'t be befriended." — N',
	'"Even if we don\'t understand each other, that\'s not a reason to reject each other." — Alder',
	'"Make your wonderful dream a reality, it will become your truth." — N',
	'"Believe in yourself and the Pokemon who choose you!" — Prof. Oak',
	'"A caterpie may change into a butterfree, but the heart that beats inside remains the same." — Brock',
	'"Your Pokemon journey is about to begin." — Prof. Birch',
	'"The world is full of mysteries. Go see them with your own eyes!" — Steven Stone',
	'"Do you believe in the potential of Pokemon?" — Cynthia',
	'"Every journey begins with a single step." — Prof. Elm',
	'"I will grind down my pokemon with effort and power!" — Brendan',
];

// ── Local GIF pool for encounters ───────────────────────

const localPokemonGifs = [
	{ name: 'Pikachu', src: 'assets/run-pikachu.gif' },
	{ name: 'Mudkip', src: 'assets/mudkip-pokemon.gif' },
	{ name: 'Snorlax', src: 'assets/snorlax-pokemon.gif' },
	{ name: 'Charizard', src: 'assets/charizard-pokemon.gif' },
	{ name: 'Bulbasaur', src: 'assets/bulbizarre.gif' },
	{ name: 'Charmander', src: 'assets/shiny-charmander-pokemon.gif' },
	{ name: 'Mew', src: 'assets/mew-pokemon.gif' },
	{ name: 'Jirachi', src: 'assets/jirachi-pokémon.gif' },
	{ name: 'Darkrai', src: 'assets/darkrai-pokémon-darkrai.gif' },
	{ name: 'Chansey', src: 'assets/chansey-pokemon.gif' },
	{ name: 'Cleffa', src: 'assets/pokemon-cleffa.gif' },
	{ name: 'Wooper', src: 'assets/wooper-pokemon.gif' },
	{ name: 'Scorbunny', src: 'assets/scorbunny-pokemon.gif' },
	{ name: 'Gibble', src: 'assets/pokemon-gibble.gif' },
	{ name: 'Politoed', src: 'assets/politoed-pokemon.gif' },
	{ name: 'Skorupi', src: 'assets/skorupi-pokemon.gif' },
	{ name: 'Blastoise', src: 'assets/blastoise-pokemon-pokemon.gif' },
];

const snorlaxQuotes = [
	'Snorlax is blocking the path!',
	'Zzz... Snorlax is fast asleep...',
	'You need a Poke Flute to wake it!',
	'Snorlax used Rest!',
	'Snorlax dreams of hamburgers...',
	'*snore* *snore* *munch munch*',
];

// ── Quote rotator ───────────────────────────────────────

const showQuote = () => {
	const quoteEl = document.getElementById('pokemon-quote');
	if (quoteEl) {
		const quote = pokemonQuotes[Math.floor(Math.random() * pokemonQuotes.length)];
		quoteEl.innerText = quote;
	}
};

showQuote();
setInterval(showQuote, 25000);

// ── Fade in decorative Pokemon after load ───────────────

window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelectorAll('.pokemon-deco').forEach((el, i) => {
			setTimeout(() => el.classList.add('visible'), i * 400);
		});
	}, 800);
});

// ── Snorlax click interaction ───────────────────────────

const snorlaxEl = document.querySelector('.pokemon-snorlax');
if (snorlaxEl) {
	// Create tooltip
	const tooltip = document.createElement('div');
	tooltip.className = 'snorlax-tooltip';
	document.body.appendChild(tooltip);

	snorlaxEl.style.pointerEvents = 'auto';
	snorlaxEl.addEventListener('click', () => {
		const quote = snorlaxQuotes[Math.floor(Math.random() * snorlaxQuotes.length)];
		tooltip.innerText = quote;
		tooltip.classList.add('show');
		setTimeout(() => tooltip.classList.remove('show'), 2500);
	});
}

// ── Cleffa click — little sparkle ───────────────────────

const cleffaEl = document.querySelector('.pokemon-cleffa');
if (cleffaEl) {
	cleffaEl.style.pointerEvents = 'auto';
	cleffaEl.addEventListener('click', () => {
		// Spin animation
		cleffaEl.style.animation = 'none';
		cleffaEl.offsetHeight; // trigger reflow
		cleffaEl.style.transition = 'transform 0.5s';
		cleffaEl.style.transform = 'rotate(360deg) scale(1.3)';
		setTimeout(() => {
			cleffaEl.style.transform = '';
			cleffaEl.style.transition = '';
			cleffaEl.style.animation = 'cleffa-bounce 3s ease-in-out infinite';
		}, 600);
	});
}

// ── Pokeball click — encounter a random Pokemon ─────────

const pokeball = document.getElementById('pokeball');
const toastEl = document.getElementById('pokemon-toast');

if (pokeball && toastEl) {
	pokeball.addEventListener('click', () => {
		pokeball.classList.add('pokeball-shake');

		setTimeout(() => {
			pokeball.classList.remove('pokeball-shake');
			const pokemon = localPokemonGifs[Math.floor(Math.random() * localPokemonGifs.length)];

			toastEl.innerHTML = `
				<img src="${pokemon.src}" alt="${pokemon.name}" />
				<span>A wild <strong>${pokemon.name}</strong> appeared!</span>
			`;
			toastEl.classList.add('show');

			setTimeout(() => {
				toastEl.classList.remove('show');
			}, 3500);
		}, 600);
	});
}

// ── Konami code — Emerald Mode ──────────────────────────
// up up down down left right left right B A

let konamiProgress = 0;
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
	if (e.keyCode === konamiCode[konamiProgress]) {
		konamiProgress++;
		if (konamiProgress === konamiCode.length) {
			konamiProgress = 0;
			document.body.classList.toggle('emerald-mode');

			if (toastEl) {
				const isOn = document.body.classList.contains('emerald-mode');
				toastEl.innerHTML = `
					<img src="assets/charizard-pokemon.gif" alt="Rayquaza" />
					<span><strong>${isOn ? 'EMERALD MODE ACTIVATED!' : 'Emerald mode deactivated.'}</strong>
					<br>${isOn ? 'Rayquaza descends from the ozone layer!' : 'Back to normal...'}</span>
				`;
				toastEl.classList.add('show');
				setTimeout(() => toastEl.classList.remove('show'), 4000);
			}
		}
	} else {
		konamiProgress = 0;
	}
});

// ── Secret: click the clock 5 times to change greeting ──

let clockClicks = 0;
const timeBlock = document.querySelector('.timeBlock .clock');
const trainerNames = [
	'Trainer', 'Champion', 'Ace Trainer', 'Pokemon Master',
	'Bug Catcher', 'Gym Leader', 'Elite Four',
];

if (timeBlock) {
	timeBlock.style.cursor = 'default';
	timeBlock.addEventListener('click', () => {
		clockClicks++;
		if (clockClicks >= 5) {
			clockClicks = 0;
			const greetEl = document.getElementById('greetings');
			if (greetEl) {
				const title = trainerNames[Math.floor(Math.random() * trainerNames.length)];
				greetEl.innerText = `Level up, ${title}!`;
				setTimeout(() => {
					// Restore normal greeting after 4 seconds
					const hour = new Date().getHours();
					const name = CONFIG.name;
					if (hour >= 23 || hour < 6) greetEl.innerText = CONFIG.greetingNight + '\xa0' + name;
					else if (hour >= 6 && hour < 12) greetEl.innerText = CONFIG.greetingMorning + '\xa0' + name;
					else if (hour >= 12 && hour < 17) greetEl.innerText = CONFIG.greetingAfternoon + '\xa0' + name;
					else greetEl.innerText = CONFIG.greetingEvening + '\xa0' + name;
				}, 4000);
			}
		}
	});
}
