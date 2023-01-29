<script>
  export let data
  import Quotes from "../components/quotes.svelte";
</script>
<h1>Welcome to Lehi's first Svelte App!</h1>
<h2>yes, i followed a very helpful tutorial <a href="https://www.youtube.com/watch?v=KHwB2CKM2cE" target="_blank" rel="noreferrer">found here</a></h2>
<ul>
  {#each data.results as item}
    <li>
      <div>
        <a href={`/jokes/${item.id}`}>
        <Quotes joke={item.joke}/>
        </a>
      </div>
    </li>
    {/each}
</ul>

<style>
  li{
    list-style: none;
  }
</style>