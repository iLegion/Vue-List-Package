<template>
    <li class="list-group-item"
        :class="[{ active: active }, colorActiveElement]"
    >{{ content }}
    </li>
</template>

<script>
    export default {
        name: "LiItem",
        props: {
            i: Number,
            value: [ String, Object ],
            active: Boolean,
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
            }
        },
    }
</script>

<style scoped>
    li {
        display: list-item !important;
    }
</style>