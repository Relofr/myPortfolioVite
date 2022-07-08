<template>
    <div :class="bgColor">
        <div v-if="heroImage">
            <img class="hero-image" src="../assets/images/hero-image.avif" alt="">
            <p class="container section-title fw-bold fs-primary-heading">{{ sectionTitle }}</p>
        </div>
        <div class="container flex even-columns">
            <div class="content">
                <h1 v-if="title" :class="`fs-` + headingType + `-heading` + ' ' + `fw-bold`">{{ title }}</h1>
                <p v-if="content">{{ content }}</p>
            </div>
            <div v-show="showIcons" v-for="(key, value) in icons" :key="index">
                <img :src="`/src/assets/icons/` + key" :alt="alt">
            </div>
            <div v-show="showImage" v-for="(key, value) in images" :key="index">
                <img :src="`/src/assets/images/` + key" :alt="alt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: { "Figma": "figma.png", "Invision": "invision.png", "Wireframing": "wireframe.png", "Photoshop": "photoshop.png", "Adobe Illustrator": "ai.png", "Vue.js": "vue.png", "Github": "github.png" },
            images: { "ProfilePicture": "ProfilePicture.jpeg" },
        }
    },
    props: {
        bgColor: {
            type: String,
            required: false
        },
        heroImage: {
            type: Boolean,
            required: true
        },
        sectionTitle: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: false
        },
        headingType: {
            type: String,
            required: true
        },
        showIcons: {
            type: Boolean,
            required: false
        },
        showImage: {
            type: Boolean,
            required: false
        },
        alt: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0 0 0;
}

.hero-image {
    width: 100%;
    height: 400px;
    background-position: center;
    object-fit: cover;
}

.title {
    display: flex;
    justify-content: center;
    padding: 15px 0;
}

.even-columns {
    justify-content: space-evenly;
    padding: 15px;
}
</style>