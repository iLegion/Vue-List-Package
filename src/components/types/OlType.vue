<template>
    <ol class="list-group" :class="styleClass" :style="listType">
        <LiItem v-for="(item, index, i) in items"
                :key="i"
                :i="i"
                :value="item"
                :active="active === i"
                :disabled="disabled === i"
                :colorActiveElement="colorActiveElement"
        ></LiItem>
    </ol>
</template>

<script>
    import LiItem from "../items/LiItem";

    export default {
        name: "OlType",
        components: { LiItem },
        props: {
            items: [ Array, Object ],
            styles: Object,
            styleClass: String,
            active: Number,
            disabled: Number,
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