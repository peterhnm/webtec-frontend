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
            <li>Peter Heinemann</li>
            <li>Anna Tribulowski</li>
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
        grid-template-rows: 57px minmax(100vh, 1fr) 121px;
        min-height: 100vh;
    }

    p {
        margin: 0;
        color: var(--link-col);
    }

    a {
        color: var(--link-col);
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

    footer .left {
        justify-self: start;
    }

    footer .right {
        justify-self: end;
    }

    footer ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    footer li {
        float: left;
        color: var(--link-col);
        white-space: pre;
    }

    footer li:after {
        content: " \2022  ";
    }

    footer li:last-child:after {
        content: "";
    }

    @media (max-width: 480px) {
        footer {
            padding: 0 16px;
        }

        footer ul {
            width: min-content;
            list-style: disc;
        }

        footer li:after {
            content: "";
        }

        footer li:not(:last-child) {
            margin-bottom: 4px !important;
        }
    }
</style>
