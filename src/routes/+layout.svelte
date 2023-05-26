<script lang="ts">
    import "./style.css";
    import "@fontsource/inter/400.css";
    import "@fontsource/inter/600.css";
    import "@fontsource/inter/800.css";
    import Header from "./Header.svelte";
    import Logo from "./Logo.svelte";
    import { headingStore } from "./stores";
</script>

<div class="app">
    <Header />

    <Logo bind:text={$headingStore} />

    <main>
        <slot />
    </main>

    <footer>
        <p class="left">Webtechnologien</p>
        <p class="right">Social Media</p>
    </footer>
</div>

<style>
    .app {
        display: grid;
        grid-template-areas:
            "header"
            "logo"
            "main"
            "footer";
        grid-template-rows: 57px 283px auto 121px;
        min-height: 100vh;
    }

    main {
        grid-area: main;
        box-sizing: border-box;
    }

    footer {
        grid-area: footer;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 57px;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #ffffff;
        background: #667d77;
    }

    footer .left {
        justify-self: start;
    }

    footer .right {
        justify-self: end;
    }
</style>
