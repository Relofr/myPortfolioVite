<template>
    <div class="image-container">
        <div v-show="heroImage" class="image-container">
            <img class="hero-image" :src="`src/assets/images/` + heroImage" alt="">
            <div class="section-title fw-bold fs-56 text-accent">{{ sectionTitle }}</div>
        </div>
        <div class="even-columns">

            <div class="col fw-semi-bold">
                <p>{{ contentOne }}</p>
            </div>

            <div v-show="showImage" class="image-container">
                <div v-for="(key, value) in images" :key="value">
                    <img :src="`/src/assets/images/` + key" :alt="alt">
                </div>
            </div>

            <div v-show="showIcons" class="skills-container">
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
                "ProfilePicture": "ProfilePicture.jpeg"
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


        title: {
            type: String,
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

<style scoped>

.image-container {
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
</style>