<template>
    <li class="list-group-item">
        <template v-if="i">{{ i }}</template>
        {{ value }}
    </li>
</template>

<script>
    export default {
        name: "LiItem",
        props: {
            value: String,
            i: Number,
        }
    }
</script>

<style scoped>

</style>