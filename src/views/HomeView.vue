<template>
    <div>
        <div class="about-me-container">
            <img id="profile-picture" src="../assets/images/ProfilePicture.jpeg" alt="profile picture">
            <div class="about-me-content">
                <p class="fs-primary-heading fw-bold"> {{ name }}</p>
                <p class="fs-secondary-heading fw-semi-bold">{{ job }}</p>
                <p>{{ bio }}</p>
                <button @click="downloadResume()" class="button button-primary">Resume <fa icon="file" size="lg"></fa>
                </button>
            </div>
        </div>
        <div class="down-arrow">
            <fa @click="scrollToElement('caseStudies')" icon="fa-angle-down" size="2xl" bounce></fa>
        </div>
        <div ref="caseStudies">
            <CaseStudiesView />
        </div>
    </div>
</template>

<script setup>
// import Hero from '../components/Hero.vue';
import CaseStudiesView from './CaseStudiesView.vue';
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
        },
        scrollToElement(refName) {
            const el = this.$refs[refName]
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        }
    }
}
</script>

<style lang="less">
.about-me-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    justify-content: center;
    height: calc(100vh - 150px);
}

#profile-picture {
    width: 350px;
    border-radius: 50%;
}

.down-arrow {
    transform: translateY(-20px);
    display: flex;
    justify-content: center;

    & svg {
        cursor: pointer;
    }
}
</style>