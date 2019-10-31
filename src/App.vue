<template>
    <div id="app">
        <template v-if="countItems">
            <ul class="list-group">
                <item v-for="(dataItem, index) in dataItems"
                      :key="index"
                      :data="dataItem"
                ></item>
            </ul>
        </template>
        <template v-else>{{ emptyListMsg }}</template>
    </div>
</template>

<script>
    import Item from './components/Item.vue'

    export default {
        name: 'app',
        components: {
            Item,
        },
        props: {
            listType: String,
        },
        computed: {
            type: function () {
                let type = this.listType ? this.listType : 'ul';

                if (this.listTypes.includes(this.listType)) {
                    return type;
                }
                // return ;
            },
            countItems: function () {
                return this.dataItems.length;
            },
        },
        data() {
            return {
                listTypes: ['ul', 'ol', 'div'],
                dataItems: ['One'],
                emptyListMsg: 'List is empty.',
            }
        }
    }
</script>

<style lang="scss">
    #app {
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
