<template>
    <ul class="list-group">
        <LiItem v-for="(item, index) in items"
                :key="index"
                :value="item"
        ></LiItem>
    </ul>
</template>

<script>
    import LiItem from "../items/LiItem";

    export default {
        name: "UlType",
        components: { LiItem },
        props: {
            items: Array || Object,
        },
    }
</script>

<style scoped>

</style>