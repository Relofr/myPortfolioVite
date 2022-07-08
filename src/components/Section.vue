<template>
    <!-- <div :class="`container` + bgColor + ' ' + fontColor">
        <p v-if="title" :class="`even-columns` + ' ' + fontSize">
            {{ title }}
        </p>
        <div class="split">
            <div v-show="leftContent">
                <p>{{ leftContent }}</p>
            </div>
            <div v-show="rightContent">
                <p>{{ rightContent }}</p>
            </div>
            <div v-show="showIcons" v-for="(key, value) in icons" :key="index">
                <img :src="`/src/assets/icons/` + key">
            </div>
            <div v-show="showImage" v-for="(key, value) in images" :key="index">
                <img :src="`/src/assets/images/` + key">
            </div>
        </div>
    </div> -->

    <div :class="`container` + ' ' + bgColor">
        <div class="even-columns">
            <div>
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