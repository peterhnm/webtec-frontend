<script lang="ts">
    export let text: string;
</script>

<div class="logo">
    <p>Logo</p>
    <p>{text}</p>
</div>

<style>
    .logo {
        display: grid;
        align-items: center;
        width: 100%;
        max-width: 619px;
        height: 100%;
        max-height: 283px;
        margin: 0 auto;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 58px;
        text-align: center;

        color: #333333;
    }

    .logo p {
        margin: 0;
    }
</style>
