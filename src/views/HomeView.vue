<template>
    <div>
        <!-- <Hero /> -->
        <div class="about-me-container">
            <img id="profile-picture" src="../assets/images/ProfilePicture.jpeg" alt="profile picture">
            <div class="about-me-content">
                <p class="fs-primary-heading fw-bold"> {{ name }}</p>
                <p class="fs-secondary-heading fw-semi-bold">{{ job }}</p>
                <p>{{ bio }}</p>
                <button @click="downloadResume()" class="button button-primary">Resume</button>
            </div>
        </div>
        <CaseStudiesVue />
    </div>
</template>

<script setup>
// import Hero from '../components/Hero.vue';
import CaseStudiesVue from './CaseStudies.vue';
</script>

<script>
export default {
    data() {
        return {
            name: 'Kyle Hatch',
            job: 'Software Engineer + UX/UI designer at LogMeIn',
            bio: 'Passionate about bringing my ideas to life and creating a great user experience.'
        }
    },
    methods: {
        downloadResume() {
            window.open("https://drive.google.com/file/d/1r8OXqJwIf0fBbCHYqIz0P9WEDIuXsjRt/view?usp=sharing")
        }
    }
}
</script>

<style>
.about-me-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    justify-content: center;
    height: calc(100vh - 70px);
    position: sticky;
}

.about-me-content p {
    padding: 0 0 10px;
}

#profile-picture {
    width: 350px;

    border-radius: 50%;
}
</style>