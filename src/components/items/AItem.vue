<template>
    <a :href="link" class="list-group-item list-group-item-action"
       :class="[{ active: active }, { disabled: disabled}, colorActiveElement, { 'has-badge': badge }]"
       @click="$emit('clickOnItem')"
    >
        {{ content }}

        <span v-if="badge"
              class="badge badge-primary badge-pill">{{ badge }}</span>
    </a>
</template>

<script>
    export default {
        name: "AItem",
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
            link() {
                if (this.value.href || this.value.link) {
                    return this.value.href ? this.value.href : this.value.link;
                }

                return null;
            },
            badge() {
                return this.value.badge ? this.value.badge : null;
            }
        },
    }
</script>

<style scoped>

</style>