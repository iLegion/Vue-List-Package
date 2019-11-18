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
                :mode="mode"
                :animations="l_animations"
        ></UlType>
      </template>

      <template v-if="type === 'ol'">
        <OlType :items="items"
                :styles="styles"
                :styleClass="styleClass"
                :active="activeElement"
                :disabled="disabledElement"
                :colorActiveElement="colorActiveElement"
                :mode="mode"
                :animations="l_animations"
        ></OlType>
      </template>

      <template v-if="type === 'div'">
        <DivType :items="items"
                 :styles="styles"
                 :styleClass="styleClass"
                 :active="activeElement"
                 :disabled="disabledElement"
                 :colorActiveElement="colorActiveElement"
                 :mode="mode"
                 :animations="l_animations"
        ></DivType>
      </template>
    </template>

    <template v-else>
      <component v-if="isListMsgComponent" :is="listMsg">{{ this.config.emptyListMsg.text }}</component>
      <div v-else
           :id="this.config && this.config.emptyListMsg ? this.config.emptyListMsg.id : ''"
           :class="this.config && this.config.emptyListMsg ? this.config.emptyListMsg.class : ''">{{ listMsg }}
      </div>
    </template>
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
            items: [Array, Object],
            config: {
                mode: String,
                emptyListMsg: {
                    id: String,
                    class: [String, Array],
                    isComponent: Boolean,
                    componentName: String,
                    text: String,
                }
            },
            header: String,
            listType: String,
            styles: {
                class: String,
                listType: String,
                colorActive: String,
            },
            active: String,
            disabled: String,
            animations: Object,
        },
        computed: {
            countItems: function () {
                if (typeof this.items === 'object') {
                    return Object.keys(this.items).length;
                } else if (Array.isArray(this.items)) {
                    return this.items.length;
                }

                return null;
            },
            isListMsgComponent() {
                return !!(
                    this.config &&
                    this.config.emptyListMsg &&
                    this.config.emptyListMsg.isComponent &&
                    this.config.emptyListMsg.componentName
                );
            },
            listMsg() {
                return this.config &&
                this.config.emptyListMsg &&
                this.config.emptyListMsg.componentName ?
                    this.config.emptyListMsg.componentName : 'List is empty.';
            },
            type: function () {
                return this.listTypes.includes(this.listType) ? this.listType : 'ul';
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
                return this.styles && this.styles.colorActive ? this.styles.colorActive : 'default';
            },
            mode() {
                return this.config && this.config.mode ? this.config.mode : 'vertical';
            },
            l_animations() {
                if (typeof this.animations === 'object' && Object.keys(this.animations).length) {
                    return {
                        start: this.animations.start ? this.animations.start : null,
                        end: this.animations.end ? this.animations.end : null,
                    };
                }

                return {
                    start: null,
                    end: null,
                };
            },
        },
        data() {
            return {
                listTypes: ['ul', 'ol', 'div'],
                lastItems: this.items,
            }
        },
        beforeCreate() {
            this.$emit('beforeCreate');
        },
        created() {
            this.$emit('created');
        },
        beforeMount() {
            this.$emit('beforeMount');
        },
        mounted() {
            this.$emit('mounted');
        },
        beforeUpdate() {
            this.$emit('beforeUpdate');
        },
        updated() {
            this.$emit('updated');
        },
        beforeDestroy() {
            this.$emit('beforeDestroy');
        },
        destroyed() {
            this.$emit('destroyed');
        },
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

        &.active, &.active.primary, &.active.default {
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

    div.materialize {
      margin: .5rem 0 1rem 0;
      border: 1px solid #e0e0e0;
      border-radius: 2px;
      overflow: hidden;
      position: relative;

      a {
        display: block;
        -webkit-transition: .25s;
        transition: .25s;
        color: #26a69a;
        background-color: #fff;
        line-height: 1.5rem;
        padding: 10px 20px;
        margin: 0;
        border-bottom: 1px solid #e0e0e0;
        text-decoration: none;

        &:hover {
          background-color: #ddd;
        }

        &.active, &.active.default {
          background-color: #26a69a;
          color: #eafaf9;

          &.red {
            color: rgba(255, 255, 255, 0.9);
            background-color: #D32F2F
          }

          &.purple {
            color: rgba(255, 255, 255, 0.9);
            background-color: #4a148c;
          }
        }
      }
    }

    .fadeIn {
      animation: fadeIn 1.7s;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .fadeOut {
      animation: fadeOut 0.7s;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }


  }
</style>
