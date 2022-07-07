<template>
    <div :class="bgColor + ' ' + fontColor">
        <p v-if="title" :class="`title` + ' ' + fontSize">{{ title }}</p>
        <div class="split">
            <div v-if="leftContent">
                <p>{{ leftContent }}</p>
            </div>
            <div v-if="rightContent">
                <p>{{ rightContent }}</p>
            </div>
            <div v-if="imageSrc" v-for="(key, value) in post.icons" :key="index">
                <img :src="`/src/assets/icons/` + key">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post:
                { icons: { "Figma": "figma.png",  "Invision" : "invision.png", "Wireframing": "wireframe.png", "Photoshop": "photoshop.png", "Adobe Illustrator": "ai.png", "Vue.js": "vue.png", "Github": "github.png" } },
        }
    },
    props: {
        bgColor: {
            type: String,
            required: false
        },
        fontColor: {
            type: String,
            required: false
        },
        fontSize: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        leftContent: {
            type: String,
            required: false
        },
        rightContent: {
            type: String,
            required: false
        },
        imageSrc: {
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

<style>
.title {
    display: flex;
    justify-content: center;
    padding: 15px 0;
}

.split {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
}
</style>