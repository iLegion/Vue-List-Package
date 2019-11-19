<template>
  <transition-group name="ul"
                    tag="ul"
                    class="list-group"
                    :class="styleClass"
                    :style="[listType, listMode]"
                    :enter-active-class="animations.start"
                    :leave-active-class="animations.end">
    <LiItem v-for="(item, index, i) in items"
            :key="i ? i : index"
            :i="i ? i : index"
            :value="item"
            :active="active === (i ? i : index)"
            :disabled="disabled === (i ? i : index)"
            :colorActiveElement="colorActiveElement"
            @clickOnItem="$emit('clickOnItem')"
    ></LiItem>
  </transition-group>
</template>

<script>
    import LiItem from "../items/LiItem";

    export default {
        name: "UlType",
        components: {LiItem},
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