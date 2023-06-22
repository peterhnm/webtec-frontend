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
        margin: 83px auto 77px;
        width: 100%;
        max-width: 619px;
        align-items: center;
        box-sizing: border-box;
    }

    .container p {
        margin: 0;
        text-align: center;

        color: var(--text-col);
        font-weight: 800;
        font-size: 48px;
        line-height: 58px;
    }

    .logo {
        margin-bottom: 18px;
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
