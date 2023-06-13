<script>
    import { page } from "$app/stores";
</script>

<header>
    <p>JAMBUDDY</p>

    <nav>
        <ul>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">Home</a>
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

        max-height: 57px;

        background: #3b6660;
    }

    header p {
        justify-self: start;

        margin: 0 0 0 20px;
        padding: 0;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 57px;

        color: #dcdcdc;
    }

    header nav {
        width: 100%;
        margin: auto 0;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #dcdcdc;
    }

    ul {
        display: flex;
        place-content: center end;
        margin: 0 24px;
        padding: 0;
        list-style: none;
    }

    li:not(:last-child) {
        float: left;
        margin-right: 35px;
    }

    li p {
        margin: 0;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #dcdcdc;
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: #dcdcdc;
    }
</style>
