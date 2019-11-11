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
                        :disabled="disabledElement"
                        :colorActiveElement="colorActiveElement"
                ></UlType>
            </template>

            <template v-if="type === 'ol'">
                <OlType :items="items"
                        :styles="styles"
                        :styleClass="styleClass"
                        :active="activeElement"
                        :disabled="disabledElement"
                        :colorActiveElement="colorActiveElement"
                ></OlType>
            </template>

            <template v-if="type === 'div'">
                <DivType :items="items"
                         :styles="styles"
                         :styleClass="styleClass"
                         :active="activeElement"
                         :disabled="disabledElement"
                         :colorActiveElement="colorActiveElement"
                ></DivType>
            </template>
        </template>

        <template v-else>{{ isEmptyList }}</template>
    </div>
</template>

<script>
    import UlType from "./components/types/UlType";
    import OlType from "./components/types/OlType";
    import DivType from "./components/types/DivType";

    export default {
        name: 'VueListPackage',
        components: {
            UlType,
            OlType,
            DivType,
        },
        props: {
            items: [ Array, Object ],
            header: String,
            listType: String,
            emptyListMsg: String,
            styles: Object,
            active: String,
            disabled: String,
        },
        computed: {
            type: function () {
                return this.listTypes.includes(this.listType) ? this.listType : 'ul';
            },
            countItems: function () {
                if (typeof this.items === 'object') {
                    return Object.keys(this.items).length;
                }

                return this.items ? this.items.length : null;
            },
            isEmptyList() {
                if (this.emptyListMsg === undefined) {
                    return 'List is empty.';
                } else if (typeof this.emptyListMsg !== 'string') {
                    return "'emptyListMsg' is must be a String.";
                }

                return this.emptyListMsg;
            },
            styleClass() {
                return this.styles && this.styles.class ? this.styles.class : 'bootstrap';
            },
            activeElement() {
                return this.active ? Number(this.active) : null;
            },
            disabledElement() {
                return this.disabled ? Number(this.disabled) : null;
            },
            colorActiveElement() {
                return this.styles && this.styles.colorActive ? this.styles.colorActive : 'primary';
            },
        },
        data() {
            return {
                listTypes: ['ul', 'ol', 'div'],
            }
        }
    }
</script>




<style lang="scss">
    .vue-list-package {
        .header {
            margin: 0 0 16px 0;
            font-size: 1.35rem;
            font-weight: 500;
            text-align: center;
            line-height: 1.2;
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

                &.disabled {
                    color: #6c757d;
                    pointer-events: none;
                    background-color: #fff;
                }
            }

            .list-group-item-action {
                color: #495057;
                text-align: inherit;
                text-decoration: none;

                &:hover {
                    z-index: 1;
                    color: #495057;
                    text-decoration: none;
                    background-color: #f8f9fa;
                }
            }
        }

        .badge {
            display: inline-block;
            padding: .25em .4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: .25rem;
        }

        .badge-pill {
            padding-right: .6em;
            padding-left: .6em;
            border-radius: 10rem;
        }

        .badge-primary {
            color: #fff;
            background-color: #007bff;
        }

        .has-badge {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
