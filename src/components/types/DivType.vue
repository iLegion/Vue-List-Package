<template>
  <transition-group name="div"
                    tag="div"
                    class="list-group"
                    :class="styleClass"
                    :style="listMode"
                    :enter-active-class="animations.start"
                    :leave-active-class="animations.end">
    <AItem v-for="(item, index, i) in items"
           :key="i ? i : index"
           :i="i ? i : index"
           :value="item"
           :active="typeof active === 'object' ? item.active : active === (i ? i : index)"
           :disabled="typeof disabled === 'object' ? item.disabled : disabled === (i ? i : index)"
           :colorActiveElement="colorActiveElement"
           @clickOnItem="$emit('clickOnItem')"
    ></AItem>
  </transition-group>
</template>

<script>
    import AItem from '../items/AItem';

    export default {
        name: "DivType",
        components: {AItem},
        props: {
            items: [Array, Object],
            styles: Object,
            styleClass: String,
            active: Number,
            disabled: Number,
            colorActiveElement: String,
            mode: String,
            animations: Object,
        },
        computed: {
            listMode() {
                return this.mode === 'horizontal' ? {'flex-direction': 'row'} : null;
            },
        },
        updated() {
            this.$emit('listUpdated');
        },
    }
</script>

<style scoped>

</style>