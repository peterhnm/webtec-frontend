<script lang="ts">
    import "./style.css";
    import "@fontsource/inter/400.css";
    import "@fontsource/inter/600.css";
    import "@fontsource/inter/700.css";
    import "@fontsource/inter/800.css";
    import Header from "./Header.svelte";
    import Logo from "./Logo.svelte";
    import { headingStore } from "./stores";
</script>

<div class="app">
    <Header />

    <main>
        <Logo bind:text={$headingStore} />
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
            "main"
            "footer";
        grid-template-rows: 57px 1fr 121px;
        min-height: 100vh;
    }

    main {
        grid-area: main;
        box-sizing: border-box;
        margin: 83px 0;
    }

    footer {
        grid-area: footer;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 57px;
        background: var(--footer-col);

        color: var(--link-col);
        line-height: 19px;
    }

    footer .left {
        justify-self: start;
    }

    footer .right {
        justify-self: end;
    }

    @media (max-width: 480px) {
        .app {
            grid-template-rows: 57px 100% 121px;
        }

        footer {
            padding: 0 16px;
        }
    }
</style>
