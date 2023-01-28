<script>
  export let data
  import Quotes from "../components/quotes.svelte";
</script>

<h1>Welcome to Lehi.work</h1>
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