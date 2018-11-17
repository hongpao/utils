<template>
    <div class="hello">
        qwe
    </div>
</template>

<script>
    import Utils from '../utils/utils'

    export default {
        name: 'Index',
        data() {
            return {}
        },
        methods: {
            init() {
                Utils.Amount.fenToYuan()
            }
        },
        created() {
            this.init()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
