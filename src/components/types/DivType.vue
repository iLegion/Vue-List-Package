<template>
    <div class="list-group" :class="styleClass">
        <AItem v-for="(item, index, i) in items"
               :key="i"
               :i="i"
               :value="item"
               :active="active === i"
               :disabled="disabled === i"
               :colorActiveElement="colorActiveElement"
        ></AItem>
    </div>
</template>

<script>
    import AItem from '../items/AItem';

    export default {
        name: "DivType",
        components: { AItem },
        props: {
            items: [ Array, Object ],
            styles: Object,
            styleClass: String,
            active: Number,
            disabled: Number,
            colorActiveElement: String,
        },
    }
</script>

<style scoped>

</style>