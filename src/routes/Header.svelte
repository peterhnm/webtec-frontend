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
        </ul>
    </nav>
</header>

<style>
    header {
        grid-area: header;
        display: grid;
        grid-template-columns: 1fr 1fr;

        max-height: 57px;

        background: #3B6660;
    }

    header p {
        justify-self: start;

        margin: 0 0 0 14px;
        padding: 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 57px;

        color: #DCDCDC;
    }

    header nav {
        justify-self: end;

        margin: 0 14px 0 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #DCDCDC;

    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    a:visited {
        color: #DCDCDC;
    }
</style>
