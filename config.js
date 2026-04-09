// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Dev',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'A wild morning appears!',
	greetingAfternoon: 'The adventure continues,',
	greetingEvening: 'The tall grass rustles...',
	greetingNight: 'Your Pokemon are resting,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '288752458e9b0130f398aa44af330a02', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '22.719568',
	defaultLongitude: '75.857727',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Daily.dev',
			icon: 'rss',
			link: 'https://app.daily.dev/',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'message-circle',
			link: 'https://reddit.com',
		},
		{
			id: '4',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '5',
			name: 'StackOverflow',
			icon: 'layers',
			link: 'https://stackoverflow.com/',
		},
		{
			id: '6',
			name: 'ChatGPT',
			icon: 'sparkles',
			link: 'https://chat.openai.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'Discord',
			icon: 'message-square',
			link: 'https://discord.com/app',
		},
		{
			id: '3',
			name: 'Twitch',
			icon: 'tv',
			link: 'https://twitch.tv/',
		},
		{
			id: '4',
			name: 'HackerNews',
			icon: 'flame',
			link: 'https://news.ycombinator.com/',
		},
		{
			id: '5',
			name: 'DevDocs',
			icon: 'book-open',
			link: 'https://devdocs.io/',
		},
		{
			id: '6',
			name: 'Monkeytype',
			icon: 'keyboard',
			link: 'https://monkeytype.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'code',
			id: '1',
			links: [
				{
					name: 'DevDocs',
					link: 'https://devdocs.io/',
				},
				{
					name: 'MDN',
					link: 'https://developer.mozilla.org/',
				},
				{
					name: 'Can I Use',
					link: 'https://caniuse.com/',
				},
				{
					name: 'Regex101',
					link: 'https://regex101.com/',
				},
			],
		},
		{
			icon: 'gamepad-2',
			id: '2',
			links: [
				{
					name: 'PokeAPI',
					link: 'https://pokeapi.co/',
				},
				{
					name: 'Monkeytype',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'HackerNews',
					link: 'https://news.ycombinator.com/',
				},
				{
					name: 'xkcd',
					link: 'https://xkcd.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Lofi Girl',
					link: 'https://www.youtube.com/live/lHpYyYtkmrw',
				},
				{
					name: 'SoundCloud',
					link: 'https://soundcloud.com/',
				},
				{
					name: 'Last.fm',
					link: 'https://www.last.fm/',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Trending',
					link: 'https://github.com/trending',
				},
				{
					name: 'UnixPorn',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'Awesome',
					link: 'https://github.com/sindresorhus/awesome',
				},
				{
					name: 'Repos',
					link: 'https://github.com/predystopic-dev',
				},
			],
		},
	],
};
