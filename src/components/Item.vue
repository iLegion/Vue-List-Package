<template>
    <li class="list-group-item">{{ data }}</li>
</template>

<script>
    export default {
        name: "Item",
        props: {
            data: String,
        }
    }
</script>

<style scoped>

</style>