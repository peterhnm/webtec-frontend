<script lang="ts">
    import logo from "$lib/images/jambuddy_Loggo.png";

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
        margin: 0;
        text-align: center;

        font-weight: 800;
        font-size: 48px;
        line-height: 58px;
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
