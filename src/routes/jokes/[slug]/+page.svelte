<script>
    /** @type {import('./$types').PageData  */
    export let data;
import Quotes from '../../../components/quotes.svelte';
</script>

<Quotes joke={data.joke}/>