<template>
    <div>
        <Section class="about-me-container flex" isReverse showImage src="ProfilePicture.jpeg" sectionTitle="Kyle Hatch"
            contentOne="Software Engineer + UX/UI designer at LogMeIn" contentTwo="Passionate about bringing my ideas to life and creating a great user experience." button/>
        <div class="down-arrow">
            <fa @click="scrollToElement('caseStudies')" icon="fa-angle-down" size="2xl" bounce></fa>
        </div>
        <div ref="caseStudies">
            <CaseStudiesView />
        </div>
    </div>
</template>

<script setup>
import CaseStudiesView from './CaseStudiesView.vue';
import Button from '../components/Button.vue';
import Section from '../components/Section.vue';
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
        // downloadResume() {
        //     window.open("https://drive.google.com/file/d/1r8OXqJwIf0fBbCHYqIz0P9WEDIuXsjRt/view?usp=sharing")
        // },
        scrollToElement(refName) {
            const el = this.$refs[refName]
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        }
    },
    components: { Section, Button }
}
</script>

<style lang="less">
.about-me-container {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 70px);
    justify-content: center;
}

.about-me-container img {
    width: 350px;
    border-radius: 50%;
}

// .about-me-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
// }

// #profile-picture {
//     width: 350px;
//     border-radius: 50%;
// }

.down-arrow {
    transform: translateY(-50px);
    display: flex;
    justify-content: center;

    & svg {
        cursor: pointer;
    }
}
</style>