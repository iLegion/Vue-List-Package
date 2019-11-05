<template>
    <ul class="list-group" :class="styleClass" :style="listType">
        <LiItem v-for="(item, index, i) in items"
                :key="index"
                :i="i"
                :value="item"
                :active="active === index"
                :colorActiveElement="colorActiveElement"
        ></LiItem>
    </ul>
</template>

<script>
    import LiItem from "../items/LiItem";

    export default {
        name: "UlType",
        components: { LiItem },
        props: {
            items: {},
            styles: Object,
            styleClass: String,
            active: Number,
            colorActiveElement: String,
        },
        computed: {
            listType() {
                if (this.styles && this.styles.listType) {
                    return {
                        'list-style-type': this.styles.listType,
                        'list-style-position': 'inside',
                    }
                }

                return {
                    'list-style-type': 'none',
                };
            },
        },
    }
</script>

<style scoped>

</style>