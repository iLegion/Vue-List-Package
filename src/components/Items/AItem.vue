<template>
    <a :href="link"
       class="list-group-item list-group-item-action"
       :class="[{ active: active }, { disable: disable }, colorActiveElement, { 'has-badge': badge }]"
       @click="$emit('onClickItem', item)">
      {{ value }}

      <span v-if="badge"
            class="badge badge-primary badge-pill">
        {{ badge }}
      </span>
    </a>
</template>

<script>
    export default {
        name: "AItem",
        props: {
            i: [Number, String],
            item: [ Object, String, Number ],
            active: Boolean,
            disable: Boolean,
            colorActiveElement: String,
        },
        computed: {
            value() {
              return this.item?.value ?? this.item ?? null;
            },
            link() {
              return this.item?.href ?? this.item?.link ?? null;
            },
            badge() {
                return this.item?.badge ?? null;
            }
        },
    }
</script>

<style scoped>

</style>
