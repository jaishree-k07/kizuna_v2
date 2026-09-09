import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-C8IrD_fr.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatLinger(seconds) {
	if (seconds < 15) return "just arrived";
	if (seconds < 60) return `${seconds}s lingered`;
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	if (m < 60) return s ? `${m}m ${s}s lingered` : `${m}m lingered`;
	return `${Math.floor(m / 60)}h ${m % 60}m lingered`;
}
function relativeTime(ts) {
	const diff = Date.now() - ts;
	const min = Math.round(diff / 6e4);
	if (min < 1) return "just now";
	if (min < 60) return `${min}m ago`;
	const hr = Math.round(min / 60);
	if (hr < 24) return `${hr}h ago`;
	const d = Math.round(hr / 24);
	if (d < 14) return `${d}d ago`;
	return new Date(ts).toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
var hour = 36e5;
var now = Date.now();
var neighborhoods = [
	{
		id: "meadow-edge",
		name: "Meadow Edge",
		epithet: "Where the peninsula forgets the road",
		description: "Long grass, cassette hiss, and cottages that face the harbor instead of each other. People here leave doors unlatched and conversations unfinished on purpose.",
		climate: "Salt wind, late gold",
		cover: "/images/neighborhoods/meadow-edge.jpg",
		accent: "meadow"
	},
	{
		id: "conservatory",
		name: "The Conservatory",
		epithet: "Glass, soil, and patience",
		description: "A climate of misted panes and terracotta. Dwellings here are tended like plants — slowly, with both hands, and never for an audience.",
		climate: "Humid green, filtered sun",
		cover: "/images/neighborhoods/conservatory.jpg",
		accent: "leaf"
	},
	{
		id: "hearth-grain",
		name: "Hearth & Grain",
		epithet: "The hours after the ovens are lit",
		description: "Night kitchens, steam, copper, and the kind of talk that only happens when everyone is a little tired. Bread is a public language.",
		climate: "Warmth, flour, lampglow",
		cover: "/images/neighborhoods/hearth-grain.jpg",
		accent: "ember"
	},
	{
		id: "night-terrace",
		name: "Night Terrace",
		epithet: "Roofs, film, and unfinished maps",
		description: "The high side of the peninsula. People gather less often and stay longer. Looking is considered a form of company.",
		climate: "Blue hour, paper, silence",
		cover: "/images/neighborhoods/night-terrace.jpg",
		accent: "star"
	}
];
var people = [
	{
		id: "you",
		name: "You",
		craft: "Wanderer",
		letter: "I just crossed the threshold. The rooms are still empty. If you visit, leave something small — I am still learning how to host.",
		bio: "A newly lit dwelling at the edge of the atlas. Unfinished on purpose.",
		portrait: "/images/portraits/you.jpg",
		cover: "/images/dwellings/you.jpg",
		neighborhoodId: "meadow-edge",
		mood: "threshold",
		x: 82,
		y: 46,
		isYou: true
	},
	{
		id: "mira",
		name: "Mira Solène",
		craft: "Ceramicist",
		letter: "If you come in with wet shoes, that is fine. The floor is already clay. Sit with a bowl that isn't finished. I like company that does not need to be useful.",
		bio: "Throws vessels that are meant to be held, not displayed. Keeps a guest wheel by the window.",
		portrait: "/images/portraits/mira.jpg",
		cover: "/images/dwellings/mira.jpg",
		neighborhoodId: "conservatory",
		mood: "clay",
		x: 34,
		y: 48
	},
	{
		id: "jonah",
		name: "Jonah Hale",
		craft: "Field recordist",
		letter: "I am often out. If the shed is empty, the meadow is not. Borrow the headphones on the hook. The best hour is the one just before the insects start.",
		bio: "Collects the sound of places so they can be visited twice. Speaks softly, records loudly.",
		portrait: "/images/portraits/jonah.jpg",
		cover: "/images/dwellings/jonah.jpg",
		neighborhoodId: "meadow-edge",
		mood: "dusk",
		x: 24,
		y: 72
	},
	{
		id: "aya",
		name: "Aya Nakamura",
		craft: "Night baker",
		letter: "The door is unlocked from eleven until the first loaves come out. You do not have to talk. You can sit at the marble and be warm. If you are hungry I will know.",
		bio: "Bakes when the peninsula is asleep. Believes tired people tell the truth.",
		portrait: "/images/portraits/aya.jpg",
		cover: "/images/dwellings/aya.jpg",
		neighborhoodId: "hearth-grain",
		mood: "ember",
		x: 58,
		y: 50
	},
	{
		id: "leo",
		name: "Leo Vargas",
		craft: "Botanist",
		letter: "Please do not tap the glass. The ferns startle. Walk the long way around the banana and you will find a chair that faces the mist. Stay until something new unfurls. It might take a week.",
		bio: "Keeps a public conservatory and a private list of plants that have outlived their owners.",
		portrait: "/images/portraits/leo.jpg",
		cover: "/images/dwellings/leo.jpg",
		neighborhoodId: "conservatory",
		mood: "chlorophyll",
		x: 40,
		y: 36
	},
	{
		id: "sable",
		name: "Sable Quinn",
		craft: "Letterpress printer",
		letter: "The press is louder than I am. If you want to talk, write it first and we can set it in type. Visitors who ink their fingers are always welcome back.",
		bio: "Prints other people's letters so they have weight. Collects orphaned sorts.",
		portrait: "/images/portraits/sable.jpg",
		cover: "/images/dwellings/sable.jpg",
		neighborhoodId: "night-terrace",
		mood: "ink",
		x: 50,
		y: 54
	},
	{
		id: "rafi",
		name: "Rafi Okonkwo",
		craft: "Poet & astronomer",
		letter: "The roof holds two. Bring a coat. I do not narrate the sky. If a satellite passes we can pretend it is a wish, once, and then we will be quiet again.",
		bio: "Writes the kind of poems that fit on a matchbook. Keeps a telescope that is better at listening than looking.",
		portrait: "/images/portraits/rafi.jpg",
		cover: "/images/dwellings/rafi.jpg",
		neighborhoodId: "night-terrace",
		mood: "starlight",
		x: 74,
		y: 22
	},
	{
		id: "elena",
		name: "Elena Voss",
		craft: "Slow-cinema maker",
		letter: "There is a chair in the darkroom that is not for watching me work. It is for sitting in red light until your eyes change. If you need to speak, whisper. Silver is shy.",
		bio: "Films people doing almost nothing until it becomes everything. Develops by hand.",
		portrait: "/images/portraits/elena.jpg",
		cover: "/images/dwellings/elena.jpg",
		neighborhoodId: "night-terrace",
		mood: "silver",
		x: 66,
		y: 40
	},
	{
		id: "kai",
		name: "Kai Chen",
		craft: "Tea blender",
		letter: "Steam hour is four o'clock, whether or not anyone comes. The first cup is always for the room. If you stay for a second, tell me something you have been steeping.",
		bio: "Blends teas the way some people compose letters. Believes every visit should have a temperature.",
		portrait: "/images/portraits/kai.jpg",
		cover: "/images/dwellings/kai.jpg",
		neighborhoodId: "hearth-grain",
		mood: "steam",
		x: 46,
		y: 62
	}
];
var sparks = [
	{
		id: "sp-mira-1",
		dwellingId: "mira",
		title: "A bowl that leaked",
		body: "I threw six bowls this morning and one of them would not hold water. I kept it anyway. Some vessels are for carrying. Some are for teaching the hands to slow down.",
		image: "/images/sparks/mira-1.jpg",
		createdAt: now - 5 * hour,
		mood: "clay"
	},
	{
		id: "sp-mira-2",
		dwellingId: "mira",
		title: "Guest wheel",
		body: "Someone sat at the extra wheel yesterday and made a lid with no pot. I put it on the shelf. If they come back they can finish the sentence.",
		image: "/images/sparks/mira-2.jpg",
		createdAt: now - 30 * hour,
		mood: "clay"
	},
	{
		id: "sp-jonah-1",
		dwellingId: "jonah",
		title: "The meadow before insects",
		body: "Twenty-three minutes of almost nothing: cloth, wind, one distant boat. I will not put it on a map. You have to walk here for it.",
		image: "/images/sparks/jonah-1.jpg",
		createdAt: now - 8 * hour,
		mood: "dusk"
	},
	{
		id: "sp-jonah-2",
		dwellingId: "jonah",
		title: "Borrowed headphones",
		body: "They are still on the hook. Whoever had them last left the volume very low, which I take as a form of manners.",
		image: "/images/sparks/jonah-2.jpg",
		createdAt: now - 52 * hour,
		mood: "dusk"
	},
	{
		id: "sp-aya-1",
		dwellingId: "aya",
		title: "First loaves",
		body: "The peninsula smells like fennel after midnight. I left two loaves on the sill for whoever is walking home later than they meant to.",
		image: "/images/sparks/aya-1.jpg",
		createdAt: now - 3 * hour,
		mood: "ember"
	},
	{
		id: "sp-aya-2",
		dwellingId: "aya",
		title: "The marble",
		body: "A man sat here for an hour and did not speak. When he left he wiped the flour from the edge, which is how I knew he had been a guest and not a ghost.",
		image: "/images/sparks/aya-2.jpg",
		createdAt: now - 27 * hour,
		mood: "ember"
	},
	{
		id: "sp-leo-1",
		dwellingId: "leo",
		title: "The fern that startles",
		body: "It is not shy. It is particular. If you enter slowly it will stay open. I have started to treat people the same way.",
		image: "/images/sparks/leo-1.jpg",
		createdAt: now - 12 * hour,
		mood: "chlorophyll"
	},
	{
		id: "sp-leo-2",
		dwellingId: "leo",
		title: "A plant with no owner",
		body: "I inherited a citrus from a woman who moved inland. It still fruits toward her old window. I will not turn the pot.",
		image: "/images/sparks/leo-2.jpg",
		createdAt: now - 70 * hour,
		mood: "chlorophyll"
	},
	{
		id: "sp-sable-1",
		dwellingId: "sable",
		title: "Orphaned sorts",
		body: "I found a drawer of Qs with no Us. I am printing a broadsheet of questions that do not want answers.",
		image: "/images/sparks/sable-1.jpg",
		createdAt: now - 9 * hour,
		mood: "ink"
	},
	{
		id: "sp-sable-2",
		dwellingId: "sable",
		title: "Weight",
		body: "A letter is different once it has been pressed. You can feel the sentence with your thumb. I wish more of us would send things that have a body.",
		image: "/images/sparks/sable-2.jpg",
		createdAt: now - 44 * hour,
		mood: "ink"
	},
	{
		id: "sp-rafi-1",
		dwellingId: "rafi",
		title: "Matchbook",
		body: "Tonight's poem, entire: / the satellite thought it was a star / and for three seconds / so did we.",
		image: "/images/sparks/rafi-1.jpg",
		createdAt: now - 6 * hour,
		mood: "starlight"
	},
	{
		id: "sp-rafi-2",
		dwellingId: "rafi",
		title: "Two coats",
		body: "I keep a second coat on the peg for the person who always forgets. It has never been Mira. It is always Mira.",
		image: "/images/sparks/rafi-2.jpg",
		createdAt: now - 38 * hour,
		mood: "starlight"
	},
	{
		id: "sp-elena-1",
		dwellingId: "elena",
		title: "Four minutes of a hand",
		body: "I filmed Kai pouring tea until the steam left the frame. Nothing happens and then it does. This is the only plot I trust.",
		image: "/images/sparks/elena-1.jpg",
		createdAt: now - 14 * hour,
		mood: "silver"
	},
	{
		id: "sp-elena-2",
		dwellingId: "elena",
		title: "Safelight",
		body: "People look different in red. Kinder, or more like themselves. I am not sure which. Stay until you know.",
		image: "/images/sparks/elena-2.jpg",
		createdAt: now - 61 * hour,
		mood: "silver"
	},
	{
		id: "sp-kai-1",
		dwellingId: "kai",
		title: "Steam hour",
		body: "Today's blend is roasted barley, osmanthus, a little smoked hay. It tastes like a field remembering a fire.",
		image: "/images/sparks/kai-1.jpg",
		createdAt: now - 2 * hour,
		mood: "steam"
	},
	{
		id: "sp-kai-2",
		dwellingId: "kai",
		title: "The first cup",
		body: "I poured it for the empty stool. When Aya came later she drank it without asking whose it was. That is the correct use of a first cup.",
		image: "/images/sparks/kai-2.jpg",
		createdAt: now - 20 * hour,
		mood: "steam"
	}
];
var keepsakes = [
	{
		id: "k1",
		dwellingId: "mira",
		fromId: "kai",
		kind: "steam",
		note: "For the bowl that leaked. Some things are allowed to not hold.",
		image: "/images/keepsakes/steam.jpg",
		createdAt: now - 4 * hour
	},
	{
		id: "k2",
		dwellingId: "aya",
		fromId: "jonah",
		kind: "stone",
		note: "From the path behind the bakery. It was warm from the chimney.",
		image: "/images/keepsakes/stone.jpg",
		createdAt: now - 7 * hour
	},
	{
		id: "k3",
		dwellingId: "leo",
		fromId: "mira",
		kind: "bowl",
		note: "Unglazed, so the soil can breathe. For the citrus that faces the old window.",
		image: "/images/keepsakes/bowl.jpg",
		createdAt: now - 18 * hour
	},
	{
		id: "k4",
		dwellingId: "sable",
		fromId: "elena",
		kind: "silver",
		note: "A frame of your hands setting type. Nothing happens. Then it does.",
		image: "/images/keepsakes/silver.jpg",
		createdAt: now - 11 * hour
	},
	{
		id: "k5",
		dwellingId: "rafi",
		fromId: "sable",
		kind: "page",
		note: "Printed the matchbook poem in 14pt Caslon. Two copies. One is for the roof.",
		image: "/images/keepsakes/page.jpg",
		createdAt: now - 16 * hour
	},
	{
		id: "k6",
		dwellingId: "kai",
		fromId: "aya",
		kind: "crumb",
		note: "Fennel crust. For steam hour. I sat. I did not rush.",
		image: "/images/keepsakes/crumb.jpg",
		createdAt: now - 6 * hour
	},
	{
		id: "k7",
		dwellingId: "jonah",
		fromId: "leo",
		kind: "leaf",
		note: "Pressed in the meadow ledger. The fern did not startle.",
		image: "/images/keepsakes/leaf.jpg",
		createdAt: now - 22 * hour
	},
	{
		id: "k8",
		dwellingId: "elena",
		fromId: "rafi",
		kind: "star",
		note: "For the chair in the red light. I stayed until my eyes changed.",
		image: "/images/keepsakes/star.jpg",
		createdAt: now - 9 * hour
	},
	{
		id: "k9",
		dwellingId: "mira",
		fromId: "sable",
		kind: "type",
		note: "The word GUEST, printed backwards so you can read it in clay.",
		image: "/images/keepsakes/type.jpg",
		createdAt: now - 40 * hour
	},
	{
		id: "k10",
		dwellingId: "you",
		fromId: "mira",
		kind: "thread",
		note: "Welcome. The floor is already clay. You do not have to be useful.",
		image: "/images/keepsakes/thread.jpg",
		createdAt: now - 1 * hour
	}
];
var hearths = [
	{
		id: "kept",
		title: "What did you keep this week?",
		prompt: "Not what you made. What you refused to throw away. Pass the object, or the sentence, around the fire.",
		hostId: "mira",
		neighborhoodId: "conservatory",
		cover: "/images/hearths/kept.jpg",
		startsAt: now - 24e5,
		durationMin: 180,
		seated: [
			"mira",
			"leo",
			"sable",
			"kai"
		]
	},
	{
		id: "night-bread",
		title: "Night bread",
		prompt: "The ovens are on. Sit at the marble. You may speak or you may be warm. Both count as presence.",
		hostId: "aya",
		neighborhoodId: "hearth-grain",
		cover: "/images/hearths/night-bread.jpg",
		startsAt: now - 15e5,
		durationMin: 240,
		seated: [
			"aya",
			"kai",
			"jonah"
		]
	},
	{
		id: "letters",
		title: "Letters we never sent",
		prompt: "Bring a sentence you could not give to its person. We will set some of them in type. The rest we will burn.",
		hostId: "sable",
		neighborhoodId: "night-terrace",
		cover: "/images/hearths/letters.jpg",
		startsAt: now + 2 * hour,
		durationMin: 120,
		seated: [
			"sable",
			"elena",
			"rafi"
		]
	},
	{
		id: "walk",
		title: "A walk for people who don't want to talk",
		prompt: "Meet at the meadow path. Headphones optional. The point is to be beside someone without performing company.",
		hostId: "jonah",
		neighborhoodId: "meadow-edge",
		cover: "/images/hearths/walk.jpg",
		startsAt: now + 5 * hour,
		durationMin: 90,
		seated: ["jonah", "leo"]
	},
	{
		id: "steam",
		title: "Tea at steam hour",
		prompt: "Four o'clock. The first cup is for the room. The second is for whatever you have been steeping.",
		hostId: "kai",
		neighborhoodId: "hearth-grain",
		cover: "/images/hearths/steam.jpg",
		startsAt: now - 6e5,
		durationMin: 90,
		seated: [
			"kai",
			"aya",
			"mira"
		]
	},
	{
		id: "looking-up",
		title: "Looking up",
		prompt: "The roof holds whoever comes. No narration. If a satellite passes we may pretend, once.",
		hostId: "rafi",
		neighborhoodId: "night-terrace",
		cover: "/images/hearths/looking-up.jpg",
		startsAt: now + 8 * hour,
		durationMin: 150,
		seated: ["rafi", "elena"]
	}
];
var embers = [
	{
		id: "e1",
		hearthId: "kept",
		fromId: "mira",
		body: "I kept the leaking bowl. It teaches my hands a slower circle.",
		createdAt: now - 168e4
	},
	{
		id: "e2",
		hearthId: "kept",
		fromId: "leo",
		body: "A label from a plant I never identified. I like not knowing its name.",
		createdAt: now - 126e4
	},
	{
		id: "e3",
		hearthId: "kept",
		fromId: "sable",
		body: "A drawer of Qs. They are waiting for a question worth asking.",
		createdAt: now - 84e4
	},
	{
		id: "e4",
		hearthId: "night-bread",
		fromId: "aya",
		body: "Fennel tonight. Two loaves on the sill. The marble is warm.",
		createdAt: now - 108e4
	},
	{
		id: "e5",
		hearthId: "night-bread",
		fromId: "kai",
		body: "I brought the leftover steam-hour blend. It tastes like a field after fire.",
		createdAt: now - 72e4
	},
	{
		id: "e6",
		hearthId: "night-bread",
		fromId: "jonah",
		body: "Sitting. Not talking. The oven is doing the speaking.",
		createdAt: now - 36e4
	},
	{
		id: "e7",
		hearthId: "steam",
		fromId: "kai",
		body: "First cup poured. The stool is empty and that is correct.",
		createdAt: now - 48e4
	},
	{
		id: "e8",
		hearthId: "steam",
		fromId: "mira",
		body: "Clay under my nails in your cup. Sorry. Not sorry.",
		createdAt: now - 24e4
	}
];
var letters = [
	{
		id: "l1",
		fromId: "mira",
		toId: "you",
		body: "I saw a new light on the atlas. The Clay Room has a guest wheel. You do not have to make anything. You can just sit with the unfinished bowl.",
		sentAt: now - 3 * hour,
		arrivesAt: now - 2.5 * hour,
		read: false
	},
	{
		id: "l2",
		fromId: "kai",
		toId: "you",
		body: "Steam hour is four, whether or not you come. If you do, tell me something you have been steeping. If you don't, the first cup will still be for the room.",
		sentAt: now - 54e5,
		arrivesAt: now - 42e5,
		read: false
	},
	{
		id: "l3",
		fromId: "jonah",
		toId: "aya",
		body: "I left a stone on your marble. It was warm from the chimney. I did not want to wake you to say I was there.",
		sentAt: now - 8 * hour,
		arrivesAt: now - 7 * hour,
		read: true
	}
];
function neighborhoodById(id) {
	return neighborhoods.find((n) => n.id === id);
}
function hearthStatus(h, at = Date.now()) {
	const end = h.startsAt + h.durationMin * 60 * 1e3;
	if (at < h.startsAt) return "soon";
	if (at < end) return "live";
	return "ember";
}
var KEEPSAKE_META = {
	stone: {
		label: "A river stone",
		meaning: "I stayed long enough to grow quiet.",
		image: "/images/keepsakes/stone.jpg"
	},
	bowl: {
		label: "A small bowl",
		meaning: "Something in here held me.",
		image: "/images/keepsakes/bowl.jpg"
	},
	crumb: {
		label: "A warm crumb",
		meaning: "I was fed.",
		image: "/images/keepsakes/crumb.jpg"
	},
	leaf: {
		label: "A pressed leaf",
		meaning: "This place is still growing.",
		image: "/images/keepsakes/leaf.jpg"
	},
	type: {
		label: "A letter of type",
		meaning: "A word of yours stayed with me.",
		image: "/images/keepsakes/type.jpg"
	},
	star: {
		label: "A paper star",
		meaning: "I looked up with you.",
		image: "/images/keepsakes/star.jpg"
	},
	silver: {
		label: "A strip of silver",
		meaning: "I will remember the light.",
		image: "/images/keepsakes/silver.jpg"
	},
	steam: {
		label: "A curl of steam",
		meaning: "I sat. I did not rush.",
		image: "/images/keepsakes/steam.jpg"
	},
	key: {
		label: "A spare key",
		meaning: "I would like to return.",
		image: "/images/keepsakes/key.jpg"
	},
	thread: {
		label: "A length of thread",
		meaning: "We are connected now.",
		image: "/images/keepsakes/thread.jpg"
	},
	shell: {
		label: "A tide shell",
		meaning: "I brought the outside in.",
		image: "/images/keepsakes/shell.jpg"
	},
	page: {
		label: "A blank page",
		meaning: "Write back when you are ready.",
		image: "/images/keepsakes/page.jpg"
	}
};
var defaultIdentity = {
	name: "You",
	craft: "Wanderer",
	letter: "I just crossed the threshold. The rooms are still empty. If you visit, leave something small — I am still learning how to host.",
	mood: "threshold",
	neighborhoodId: "meadow-edge"
};
function withYou(identity) {
	return people.map((p) => p.id === "you" ? {
		...p,
		name: identity.name || "You",
		craft: identity.craft || "Wanderer",
		letter: identity.letter,
		neighborhoodId: identity.neighborhoodId,
		mood: identity.mood
	} : p);
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
var initialArrivals = [{
	id: "a-welcome",
	kind: "letter",
	title: "A letter from Mira",
	body: "The Clay Room has a guest wheel.",
	href: "/letters",
	at: Date.now() - 9e6,
	read: false
}, {
	id: "a-hearth",
	kind: "hearth",
	title: "Night bread is lit",
	body: "Aya has the ovens on. The marble is warm.",
	href: "/hearth/night-bread",
	at: Date.now() - 12e5,
	read: false
}];
var useDwellStore = create()(persist((set, get) => ({
	hydrated: false,
	onboardingComplete: false,
	identity: defaultIdentity,
	people: withYou(defaultIdentity),
	sparks,
	keepsakes,
	letters,
	embers,
	hearthsJoined: [],
	keyring: ["mira"],
	visits: {},
	arrivals: initialArrivals,
	completeOnboarding: (identity) => {
		const next = {
			...get().identity,
			...identity
		};
		set({
			onboardingComplete: true,
			identity: next,
			people: withYou(next)
		});
	},
	setIdentity: (patch) => {
		const next = {
			...get().identity,
			...patch
		};
		set({
			identity: next,
			people: withYou(next)
		});
	},
	linger: (dwellingId, seconds = 3) => {
		const visits = { ...get().visits };
		const prev = visits[dwellingId];
		visits[dwellingId] = {
			dwellingId,
			lastAt: Date.now(),
			seconds: (prev?.seconds ?? 0) + seconds,
			count: prev?.count ?? (seconds >= 3 ? 1 : 0)
		};
		if (!prev) visits[dwellingId].count = 1;
		set({ visits });
	},
	keepKey: (dwellingId) => {
		if (dwellingId === "you") return;
		const keyring = get().keyring;
		if (keyring.includes(dwellingId)) return;
		set({
			keyring: [...keyring, dwellingId],
			arrivals: [{
				id: uid("a"),
				kind: "visitor",
				title: "A key kept",
				body: `You kept a key to ${get().people.find((p) => p.id === dwellingId)?.name ?? "a dwelling"}.`,
				href: "/me",
				at: Date.now(),
				read: true
			}, ...get().arrivals]
		});
	},
	dropKey: (dwellingId) => {
		set({ keyring: get().keyring.filter((id) => id !== dwellingId) });
	},
	leaveKeepsake: (dwellingId, kind, note) => {
		const item = {
			id: uid("k"),
			dwellingId,
			fromId: "you",
			kind,
			note,
			image: KEEPSAKE_META[kind].image,
			createdAt: Date.now()
		};
		const host = get().people.find((p) => p.id === dwellingId);
		set({
			keepsakes: [item, ...get().keepsakes],
			arrivals: [{
				id: uid("a"),
				kind: "keepsake",
				title: `You left ${KEEPSAKE_META[kind].label.toLowerCase()}`,
				body: host ? `On the shelf in ${host.name}'s dwelling.` : note,
				href: `/dwell/${dwellingId}`,
				at: Date.now(),
				read: true
			}, ...get().arrivals]
		});
	},
	addSpark: (title, body, mood) => {
		set({ sparks: [{
			id: uid("sp"),
			dwellingId: "you",
			title,
			body,
			createdAt: Date.now(),
			mood
		}, ...get().sparks] });
	},
	sendLetter: (toId, body) => {
		const travel = 8e3 + Math.floor(Math.random() * 7e3);
		set({ letters: [{
			id: uid("l"),
			fromId: "you",
			toId,
			body,
			sentAt: Date.now(),
			arrivesAt: Date.now() + travel,
			read: false
		}, ...get().letters] });
	},
	markLetterRead: (id) => {
		set({ letters: get().letters.map((l) => l.id === id ? {
			...l,
			read: true
		} : l) });
	},
	joinHearth: (hearthId) => {
		if (get().hearthsJoined.includes(hearthId)) return;
		set({ hearthsJoined: [...get().hearthsJoined, hearthId] });
	},
	leaveHearth: (hearthId) => {
		set({ hearthsJoined: get().hearthsJoined.filter((id) => id !== hearthId) });
	},
	addEmber: (hearthId, body) => {
		const ember = {
			id: uid("e"),
			hearthId,
			fromId: "you",
			body,
			createdAt: Date.now()
		};
		set({ embers: [...get().embers, ember] });
	},
	markArrivalsRead: () => {
		set({ arrivals: get().arrivals.map((a) => ({
			...a,
			read: true
		})) });
	},
	resetWorld: () => {
		set({
			onboardingComplete: false,
			identity: defaultIdentity,
			people: withYou(defaultIdentity),
			sparks,
			keepsakes,
			letters,
			embers,
			hearthsJoined: [],
			keyring: ["mira"],
			visits: {},
			arrivals: initialArrivals
		});
	}
}), {
	name: "dwell-world-v1",
	skipHydration: true,
	partialize: (s) => ({
		onboardingComplete: s.onboardingComplete,
		identity: s.identity,
		sparks: s.sparks,
		keepsakes: s.keepsakes,
		letters: s.letters,
		embers: s.embers,
		hearthsJoined: s.hearthsJoined,
		keyring: s.keyring,
		visits: s.visits,
		arrivals: s.arrivals
	})
}));
async function rehydrateDwell() {
	await useDwellStore.persist.rehydrate();
	const s = useDwellStore.getState();
	useDwellStore.setState({
		hydrated: true,
		people: withYou(s.identity)
	});
}
//#endregion
export { hearths as a, people as c, useDwellStore as d, hearthStatus as i, rehydrateDwell as l, cn as n, neighborhoodById as o, formatLinger as r, neighborhoods as s, KEEPSAKE_META as t, relativeTime as u };
