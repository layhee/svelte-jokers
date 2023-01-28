/** @type {import('./$types').PageServerLoad} */

export async function load() {
	
	const result = await fetch('https://icanhazdadjoke.com/search', {
		headers: {
			'Accept': 'application/json'
		}
	})
	const res = await result.json()
	return res;
}
