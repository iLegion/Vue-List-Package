<template>
    <div id="app" class="vue-list-package">

        <template v-if="countItems">
            <template v-if="header">
                <div class="header">{{ header }}</div>
            </template>

            <template v-if="type === 'ul'">
                <UlType :items="items"></UlType>
            </template>

            <template v-if="type === 'ol'">
                <OlType :items="items"></OlType>
            </template>
        </template>

        <template v-else>{{ emptyListMsg }}</template>
    </div>
</template>

<script>
    import UlType from "./components/types/UlType";
    import OlType from "./components/types/OlType";

    export default {
        name: 'app',
        components: {
            UlType,
            OlType,
        },
        props: {
            // items: Array || Object,
            header: String,
            listType: String,
        },
        computed: {
            type: function () {
                return this.listTypes.includes(this.listType) ? this.listType : 'ul';
            },
            countItems: function () {
                return this.items ? this.items.length : null;
            },
        },
        data() {
            return {
                items: ['One', 'Two', 'Three'],
                // header: 'Test',
                // listType: '',

                listTypes: ['ul', 'ol'],
                emptyListMsg: 'List is empty.',
            }
        }
    }
</script>

<style lang="scss">
    #app {
        .header {
            margin: 0 0 7px 10px;
            font-size: 1.3rem;
        }

        .list-group {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;

            .list-group-item {
                &:first-child {
                    border-top-left-radius: .25rem;
                    border-top-right-radius: .25rem;
                }

                position: relative;
                display: block;
                padding: .75rem 1.25rem;
                margin-bottom: -1px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, .125);
            }
        }
    }
</style>
