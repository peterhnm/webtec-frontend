<script>
    import { base } from "$app/paths";
    import logoSmall from "$lib/images/jambuddy_small.png";
</script>

<header>
    <a href="{base}/">
        <img alt="JamBuddy Logo small" class="logo-small" src={logoSmall} />
    </a>

    <nav>
        <ul>
            <li>
                <a href="{base}/">Home</a>
            </li>
            <li>
                <p>Contact</p>
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
        margin-left: 14px;
    }

    header nav {
        width: 100%;
        margin: auto 0;
        color: var(--link-col);
        line-height: 19px;
    }

    ul {
        display: flex;
        margin: 0 24px;
        padding: 0;
        place-content: center end;
        list-style: none;
    }

    li:not(:last-child) {
        float: left;
        margin-right: 34px;
    }

    li p {
        margin: 0;
        color: var(--link-col);
        font-weight: 700;
        cursor: not-allowed;
    }

    a {
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
