<script lang="ts">
    import logo from "$lib/images/logo_big.svg";

    export let text: string;
</script>

<div class="container">
    <img alt="JamBuddy Logo" class="logo" src={logo} />
    <p>{text}</p>
</div>

<style>
    .container {
        display: grid;
        grid-template-rows: 127px min-content;
        grid-gap: 18px;

        margin: 0 auto;
        max-width: 619px;
        width: 100%;
        min-height: 0;
    }

    .container p {
        text-align: center;
        font-weight: 800;
        font-size: 48px;
    }

    .logo {
        width: 587px;
        height: 127px;
        justify-self: center;
    }

    @media (max-width: 480px) {
        .container {
            width: 480px;
        }

        .container img {
            width: 90%;
            place-self: center;
            object-fit: scale-down;
        }
    }
</style>
