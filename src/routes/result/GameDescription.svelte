<script lang="ts">
    export let data: string;
</script>

<div class="gameDesc">
    <p>Game Description:</p>
    <textarea readonly>{data}</textarea>
</div>

<style>
    .gameDesc {
        grid-area: desc;
        grid-template-rows: 44px auto;
    }

    .gameDesc p {
        margin: 0 0 18px 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;

        color: #333333;
    }

    .gameDesc textarea {
        width: 100%;
        height: 338px;
        max-width: 400px;
        max-height: 338px;

        border: none;
        resize: none;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }
</style>