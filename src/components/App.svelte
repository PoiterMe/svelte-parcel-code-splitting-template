<script>
    import Loadable from 'svelte-loadable'
    import {fade} from 'svelte/transition';
    export let name;
    let loaded = false;
    (() => {
        setTimeout(() => {
            loaded = !loaded
        }, 2000)
    })()
</script>

<style lang="scss">
    .wrap {
        display: flex;
        min-width: 200px;
        width: 30vw;
        border: 1px solid black;
        padding: 1rem;
    }
    h1 {
        span.asyncText {
            color: green;
        }
    }
</style>

<h1>
    <span>
        Hello..
    </span>
    {#if loaded}
        <span class="asyncText" transition:fade="{{duration: 200}}">
            <Loadable txt="{name}" loader={() => import('./Async.svelte')}/>
        </span>
    {/if}
</h1>
