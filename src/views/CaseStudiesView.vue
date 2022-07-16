<template>
    <div>
        <p data-aos="fade-up" data-aos-delay="75" id="case-studies-title" class="flex fw-bold primary-heading">Projects</p>
        <div class="flex-grid-thirds">
            <div class="col">
                <Card title="Tracy Aviary UX/UI" date="July 13th, 2022" src="/tracyaviary/hero-ta.png" route="tracy-aviary" />
            </div>
            <div class="col">
                <Card title="USDA Redesign" date="April 16th, 2022" src="/usda/hero-usda.png" route="usda" />
            </div>
            <div class="col">
                <Card title="ReClaim App" src="/reclaim/hero-reclaim.png" route="reclaim" />
            </div>
            <div class="col">
                <Card title="UX/UI Portfolio" src="/portfolio/hero-portfolio.png" route="portfolio" />
            </div>
            <div class="col">
                <Card title="DailyUI" src="/dailyui/hero-dailyui.png" route="daily-ui" />
            </div>
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
    flex-wrap: wrap;
}

.flex-grid-thirds .col {
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.col {
    display: flex;
    align-content: space-between;
}

@media (max-width: 800px) {
    .flex-grid-thirds {
        display: flex;
        flex-direction: column;

        .col {
            width: 100%;
            margin: 0 0 25px 0;
            justify-content: space-between;
            display: flex;
        }
    }
}
</style>