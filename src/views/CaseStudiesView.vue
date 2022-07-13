<template>
    <p id="case-studies-title" class="flex fw-bold fs-primary-heading">Case Studies</p>
    <div class="flex-grid-thirds">
        <div class="col">
            <Card title="Tracy Aviary UX/UI" src="hero-ta.png" route="tracy-aviary" />
        </div>
        <div class="col">
            <Card title="USDA Redesign" src="hero-usda.png" route="usda"/>
        </div>
        <div class="col">
            <Card title="DailyUI" src="hero-dailyui.png" route="daily-ui"/>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    data() {
        return {

        }
    },
    components: { Card }
}
</script>

<style lang="less">
#case-studies-title {
    display: flex;
    justify-content: center;
}

.flex-grid-thirds {
    display: flex;
    justify-content: space-between;
}

.flex-grid-thirds .col {
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 768px) {
    .flex-grid-thirds {
        display: flex;
        flex-direction: column;

        .col {
            width: 100%;
            margin: 0 0 25px 0;
            justify-content: center;
            display: flex;
        }
    }
}
</style>