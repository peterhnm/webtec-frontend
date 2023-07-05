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
        <p class="left">Webtechnologien Sommersemester 2023</p>
        <ul class="right">
            <li>
                <a href="https://atmogd.itch.io/">Dennis Hawran</a>
            </li>
            <li><p>Peter Heinemann</p></li>
            <li><p>Anna Tribulowski</p></li>
        </ul>
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
        display: grid;
        grid-template-rows: min-content auto;
        grid-gap: 77px;
        margin: 83px 0 180px;
    }

    footer {
        grid-area: footer;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 26px;
        background: var(--footer-col);
        line-height: 19px;
    }

    footer p {
        margin: 0;
        color: var(--link-col);
    }

    footer a {
        color: var(--link-col);
    }

    footer .left {
        justify-self: start;
    }

    footer .right {
        justify-self: end;
    }

    footer ul {
        margin: 16px 0;
        padding: 0;
        list-style: disc;
    }

    footer li {
        float: left;
        color: var(--link-col);
    }

    footer li:not(:last-child) {
        margin-right: 22px;
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
