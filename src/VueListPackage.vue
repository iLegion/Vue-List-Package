<template>
    <div id="app" class="vue-list-package">

        <template v-if="countItems">
            <template v-if="header">
                <div class="header">{{ header }}</div>
            </template>

            <template v-if="type === 'ul'">
                <UlType :items="items"
                        :styles="styles"
                        :styleClass="styleClass"
                        :active="activeElement"
                        :colorActiveElement="colorActiveElement"
                ></UlType>
            </template>

            <template v-if="type === 'ol'">
                <OlType :items="items"
                        :styles="styles"
                        :styleClass="styleClass"
                        :active="activeElement"
                        :colorActiveElement="colorActiveElement"
                ></OlType>
            </template>
        </template>

        <template v-else>{{ isEmptyList }}</template>
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
            // header: String,
            // listType: String,
            // emptyListMsg: String,
            // styles: Object,
            // active: String,
        },
        computed: {
            type: function () {
                return this.listTypes.includes(this.listType) ? this.listType : 'ul';
            },
            countItems: function () {
                return this.items ? this.items.length : null;
            },
            isEmptyList() {
                if (typeof this.emptyListMsg !== 'string') {
                    return "'emptyListMsg' is must be a String.";
                }

                return this.emptyListMsg ? String(this.emptyListMsg) : null;
            },
            styleClass() {
                return this.styles && this.styles.class ? this.styles.class : 'bootstrap';
            },
            activeElement() {
                return this.active ? Number(this.active) : null;
            },
            colorActiveElement() {
                return this.styles && this.styles.colorActive ? this.styles.colorActive : 'primary';
            },
        },
        data() {
            return {
                items: ['One', 'Two', 'Three'],
                active: '0',
                header: 'Test',
                listType: '',
                styles: {
                    class: 'bootstrap',
                    listType: 'none',
                    colorActive: 'danger',
                },
                emptyListMsg: 'List is empty',

                listTypes: ['ul', 'ol'],
                errors: {},
            }
        }
    }
</script>

<style lang="scss">
    .vue-list-package {
        .header {
            margin: 0 0 7px 10px;
            font-size: 1.3rem;
        }

        .bootstrap {
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

                &.active, &.active.primary {
                    color: #fff;
                    background-color: #007bff;
                    border-color: #007bff;
                    z-index: 2;

                    &.secondary {
                        background-color: #6c757d;
                        border-color: #6c757d;
                    }

                    &.success {
                        background-color: #28a745;
                        border-color: #28a745;
                    }

                    &.danger {
                        background-color: #dc3545;
                        border-color: #dc3545;
                    }
                }
            }
        }
    }
</style>
