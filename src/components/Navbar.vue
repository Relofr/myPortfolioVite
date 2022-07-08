<template>
    <div class="navbar bg-secondary text-accent-100">
        <div class="container flex">
            <p class="logo fw-bold">KH</p>
            <nav>
                <ul role="nav-list">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/work">Work</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    }
}
</script>

<style>
.navbar {
    height: 70px;
    width: 100%;
}

a {
    color: var(--clr-primary);
    font-size: var(--fs-nav);
}

.navbar .flex {
    padding: 0 40px;
    justify-content: space-between;
}

.navbar ul {
    display: flex;
}

.navbar a {
    margin: 10px;
}

/* .navbar a:hover {
    border-bottom: 2px #fff solid;
} */

.logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--clr-primary);
    color: var(--clr-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>