<template>
    <ol class="list-group">
        <LiItem v-for="(item, index) in items"
                :key="index"
                :value="item"
                :i="++index"
        ></LiItem>
    </ol>
</template>

<script>
    import LiItem from "../items/LiItem";

    export default {
        name: "OlType",
        components: { LiItem },
        props: {
            item: Array || Object,
        },
    }
</script>

<style scoped>

</style>