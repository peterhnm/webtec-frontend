<script lang="ts">
    export let text: string;
</script>

<div class="logo">
    <h1>Logo</h1>
    <h1>{text}</h1>
</div>

<style>
    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }
</style>
