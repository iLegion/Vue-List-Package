<template>
    <li :class="getClasses"
        @click="$emit('clickOnItem')">
      {{ value }}

      <span v-if="badge"
            class="badge badge-primary badge-pill">
        {{ badge }}
      </span>
    </li>
</template>

<script>
export default {
  name: "LiItem",
  props: {
    i: [Number, String],
    item: [ Object, String, Number ],
    active: Boolean,
    disable: Boolean,
    colorActiveElement: String,
  },
  computed: {
    value() {
      return this.item.value ?? this.item ?? null;
    },
    badge() {
      return this.item?.badge ?? null;
    },
    getClasses() {
      return [
        'list-group-item',
        { active: this.active },
        { disable: this.disable },
        this.colorActiveElement,
        { 'has-badge': this.badge }
      ].join(' ');
    }
  }
}
</script>

<style scoped>
li {
  display: list-item !important;
}
</style>
