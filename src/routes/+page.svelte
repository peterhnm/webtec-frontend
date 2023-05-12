<script lang="ts">
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import "./style.css";
  import Tags from "./Tags.svelte";

  function result() {
    // Here we post the data to the backend and redirect to the result page.
    goto(`${base}/result`);
  }
</script>

<h1>Jam Buddy</h1>

<input placeholder="Jam Theme..." type="text">

<Tags />

<button on:click={result}>Start Dreaming</button>

<style>
</style>
