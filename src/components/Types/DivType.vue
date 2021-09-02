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
           :item="item"
           :active="typeof active === 'object' ? item.active : active === (i ? i : index)"
           :disable="typeof disable === 'object' ? item.disabled : disable === (i ? i : index)"
           :colorActiveElement="colorActiveElement"
           @onClickItem="$emit('onClickItem')"
    ></AItem>
  </transition-group>
</template>

<script>
    import AItem from '../Items/AItem';

    export default {
        name: "DivType",
        components: {AItem},
        props: {
            items: [Array, Object],
            styles: Object,
            styleClass: String,
            active: Number,
            disable: Number,
            colorActiveElement: String,
            mode: String,
            animations: Object,
        },
        computed: {
            listMode() {
                return this.mode === 'horizontal' ? {'flex-direction': 'row'} : null;
            },
        }
    }
</script>

<style scoped>

</style>
