<template>
    <li class="list-group-item"
        :class="[{ active: active }, { disabled: disabled}, colorActiveElement, { 'has-badge': badge }]"
    >
        {{ content }}

        <span v-if="badge"
              class="badge badge-primary badge-pill">{{ badge }}</span>
    </li>
</template>

<script>
    export default {
        name: "LiItem",
        props: {
            i: Number,
            value: [ String, Object ],
            active: Boolean,
            disabled: Boolean,
            colorActiveElement: String,
        },
        computed: {
            content() {
                if (typeof this.value === 'object') {
                    if (this.value.name || this.value.title) {
                        return this.value.title ? this.value.title : this.value.name;
                    } else {
                        return "'value' must contains prop 'title' or 'name'.";
                    }
                }

                return this.value;
            },
            badge() {
                return typeof this.value === 'object' && this.value.badge ? this.value.badge : null;
            },
        },
    }
</script>

<style scoped>
    li {
        display: list-item !important;
    }
</style>