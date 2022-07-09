<template>
    <footer>
        <div class="footer bg-secondary text-accent-100">
            <div class="container flex">
                <div class="social-icons">
                    <a href="https://github.com/Relofr" target="_blank"><img class="profile-picture" alt="github icon"
                            src="../assets/social-icons/github_icon.png" /></a>
                    <a href="https://www.linkedin.com/in/kyle-hatch/" target="_blank"><img class="profile-picture"
                            alt="linkedin icon" src="../assets/social-icons/linkedin_icon.png" /></a>
                    <a href="mailto:ky13h4tch@gmail.com" target="_blank"><img class="profile-picture" alt="email icon"
                            src="../assets/social-icons/email_icon.png" /></a>
                </div>
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
                <p>©{{ new Date().getFullYear() }} Portfolio - Kyle Hatch</p>
            </div>
        </div>
    </footer>

</template>

<script>
</script>

<style>
.footer {
    position: relative;
    bottom: 0;
    height: 200px;
}

a {
    color: var(--clr-primary);
    font-size: var(--fs-nav);
}

.footer .flex {
    flex-direction: column;
    justify-content: space-evenly;
}

.footer ul {
    display: flex;
}

.footer a {
    margin: 10px;
    font-size: var(--fs-16);
}

.social-icons {
    display: flex;
    flex-direction: row;
}

.social-icons img {
    width: 32px;
    height: 32px;
    filter: invert(1);
    transition: transform .2s ease;
}

.social-icons img:hover {
    transform: scale(1.2);
}
</style>