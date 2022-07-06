<template>
    <div :class="bgColor + ' ' + textColor + ' ' + orientation">
        <p>{{ title }}</p>
        <div class="split">
            <div>
                <p>{{ leftContent }}</p>
            </div>
            <div>
                <p>{{ rightContent }}</p>
            </div>
            <div v-if="imageSrc">
                <img :src="`/src/assets/images/` + imageSrc" :alt="alt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgColor: {
            type: String,
            required: true
        },
        textColor: {
            type: String,
            required: true
        },
        orientation: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        leftContent: {
            type: String,
            required: true
        },
        rightContent: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.horizontal {
    
}
.vertical {

}
</style>