<script>
    import { page } from "$app/stores";
</script>

<header>
    <div class="corner">
        <p>JAMBUDDY</p>
    </div>

    <div class="corner">
        <nav>
            <ul>
                <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                    <a href="/">Home</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
    }

    .corner {
        width: 3em;
        height: 3em;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }

    li {
        position: relative;
        height: 100%;
    }
</style>
