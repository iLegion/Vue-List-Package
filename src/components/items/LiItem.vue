<template>
    <li class="list-group-item"
        :class="[{ active: active }, colorActiveElement]"
    >{{ value }}
    </li>
</template>

<script>
    export default {
        name: "LiItem",
        props: {
            i: Number,
            value: String,
            active: Boolean,
            colorActiveElement: String,
        },
    }
</script>

<style scoped>
    li {
        display: list-item !important;
    }
</style>