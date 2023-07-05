<script>
    import { base } from "$app/paths";
    import logoSmall from "$lib/images/logo_small.svg";
</script>

<header>
    <a href="{base}/">
        <img alt="JamBuddy Logo Small" class="logo-small" src={logoSmall} />
    </a>

    <nav>
        <ul>
            <li>
                <a href="{base}/">Home</a>
            </li>
            <li>
                <button on:click={() => window.scrollTo(0, document.body.scrollHeight)}
                    >Contact
                </button>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        grid-area: header;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 57px;
        align-items: center;
        background: var(--header-col);
    }

    .logo-small {
        width: 46px;
        height: 34px;
    }

    header nav {
        width: 100%;
        margin: auto 0;
        color: var(--link-col);
    }

    ul {
        display: flex;
        margin: 0 22px;
        place-content: center end;
        list-style: none;
    }

    li:not(:last-child) {
        float: left;
        margin-right: 34px;
    }

    li button {
        color: var(--link-col);
        background: none;
        font-weight: 700;
        font-size: 16px;
    }

    a {
        margin: 0 0 0 14px;
        width: min-content;
        font-weight: 700;
        text-decoration: none;
    }

    a:link {
        color: var(--link-col);
    }

    a:visited {
        color: var(--link-col);
    }
</style>
