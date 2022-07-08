<template>
    <div>
        <div class="image-container">
            <img v-show="heroImage" class="hero-image" :src="`src/assets/images/` + heroImage" alt="">
            <div class="section-title fw-bold fs-56 text-accent">{{ sectionTitle }}</div>
        </div>
        <div class="container flex even-columns">
            <div class="content">
                <h1 v-show="title" :class="`fs-` + headingType + `-heading` + ' ' + `fw-bold`">{{ title }}</h1>
                <p v-show="content">{{ content }}</p>
            </div>
            <div class="skills-icons" v-show="showIcons" v-for="(key, value) in skills" :key="value">
                <img :src="`/src/assets/icons/` + key" :alt="alt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills: { "Figma": "figma.png", "Invision": "invision.png", "Miro":"Miro.png", "Wireframing": "wireframe.png", "Photoshop": "photoshop.png", "Adobe Illustrator": "ai.png", "Vue.js": "vue.png", "Github": "github.png" }
        }
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
        content: {
            type: String,
        },
        headingType: {
            type: String,
        },
        showIcons: {
            type: Boolean
        },
        showImage: {
            type: String,
        },
        alt: {
            type: String,
        }
    }
}
</script>

<style scoped>
.hero-image {
    width: 100%;
    height: 400px;
    background-position: center;
    object-fit: cover;
    text-align: center;
    border-radius: 3px;
}

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

.skills-icons {
    display: flex;
    flex-direction: column;
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

img {
    width: 100%;
    height: 64px;
}
</style>