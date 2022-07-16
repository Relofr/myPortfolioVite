<template>
    <div data-aos="fade-up" data-aos-delay="75" class="overview">
        <div class="overview-text">
            <span class="primary-heading fw-bold">Project Overview</span>
            <p>{{ about }}</p>
            <p>{{ description }}</p>
        </div>
        <div class="even-columns">
            <div class="col">
                <span class="fw-bold secondary-heading">
                    Role<p class="fw-regular">{{ role }}</p>
                </span>

                <span class="fw-bold secondary-heading">
                    Date
                <p class="fw-regular">{{ date }}</p>
                </span>
            </div>
            <div class="col">
                <span class="fw-bold secondary-heading">
                Team
                <p class="fw-regular">{{ team }}</p>
                </span>

                <span class="fw-bold secondary-heading">
                    Tools
                <p class="fw-regular">{{ tools }}</p>
                </span>
            </div>
        </div>
        <div class="problem-text">
            <span class="secondary-heading fw-bold">Exploring the problem</span>
            <p>{{ problem }}</p>
            <span class="secondary-heading fw-bold">The Solution</span>
            <p>{{ solution }}</p>
        </div>
    </div>
</template> 

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        about: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        team: {
            type: String,
            required: true
        },
        tools: {
            type: String,
            required: true
        },
        problem: {
            type: String,
            required: true
        },
        solution: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.even-columns {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
}

.col {
    align-content: center;
    flex-direction: column;
}

@media (max-width: 800px) {
    .even-columns {
        display: flex;
        flex-direction: column;
    }
    .even-columns>* {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
}
</style>