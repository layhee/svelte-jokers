/** @type {import('./$types').PageServerLoad} */

export async function load({params}) {
	const {slug} = params
	const result = await fetch(`https://icanhazdadjoke.com/j/${slug}`, {
		headers: {
			'Accept': 'application/json'
		}
	})
	const res = await result.json()
	return res;
}
