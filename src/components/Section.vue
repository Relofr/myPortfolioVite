<template>
    <div class="section-container">
        <div v-show="heroImage" class="section-container">
            <img class="hero-image" :src="`src/assets/images/` + heroImage" alt="">
            <div class="section-title fw-bold fs-56 text-accent">{{ sectionTitle }}</div>
        </div>
        <div class="even-columns">

            <div v-show="contentOne" class="col fw-semi-bold">
                <p class="fw-bold fs-primary-heading">{{sectionTitle}}</p>
                <p>{{ contentOne }}</p>
            </div>

            <div v-show="showImage" class="section-container">
                <div v-for="(key, value) in images" :key="value">
                    <img :src="`/src/assets/images/` + key" :alt="alt">
                </div>
            </div>

        </div>
        <div v-show="showIcons" class="skills-container flex">
            <div class="fw-bold fs-primary-heading">{{ skillsTitle }}</div>
            <div class="icons-wrapper">
                <div class="skills-icons" v-for="(key, value) in skills" :key="value">
                    <Tooltip :text="value">
                        <img id="icon-image" :src="`/src/assets/icons/` + key" :alt="alt">
                    </Tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
    data() {
        return {
            skills: { "Figma": "figma.png", "Invision": "invision.png", "Miro": "Miro.png", "Wireframing": "wireframe.png", "Photoshop": "photoshop.png", "Adobe Illustrator": "ai.png", "Vue.js": "vue.png", "Github": "github.png" },
            images: {
                "ta-desktop": "ta-desktop.png"
            }
        };
    },
    props: {
        heroImage: {
            type: String,
        },
        sectionTitle: {
            type: String,
        },


        skillsTitle: {
            type: String,
        },
        sectionTitle: {
            type: String
        },
        contentOne: {
            type: String,
        },
        contentTwo: {
            type: String,
        },
        headingType: {
            type: String,
        },
        showIcons: {
            type: Boolean
        },
        showImage: {
            type: Boolean,
        },
        alt: {
            type: String,
        }
    },
    components: { Tooltip }
}
</script>

<style>
.section-container {
    position: relative;
    text-align: center;
}

.section-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 1px solid #fff; */
    padding: 10px;
    /* background-color: rgba(0, 0, 0, .60); */
}

.hero-image {
    width: 100%;
    height: 400px;
    background-position: center;
    object-fit: cover;
    text-align: center;
    border-radius: 3px;
}

.even-columns {
    display: flex;
    align-items: center;
    gap: 1em;
}

.even-columns>* {
    flex: 1;
}

.skills-container {
    display: flex;
    flex-direction: column;
}

.skills-icons {
    width: 64px;
}

.icons-wrapper {
    display: flex;
    flex-direction: row;
    gap: 25px;
    flex-wrap: wrap;
    margin: 25px 0 0;
}
</style>