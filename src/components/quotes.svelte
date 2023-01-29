<script>
    export let joke
</script>

<div class="cont">
    <blockquote>
        {joke}
    </blockquote>
</div>

<style>
    blockquote{
        font-size: 1.6rem;
    }
    .cont{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>