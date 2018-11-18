<template>
    <div class="main">
        <h3>内容测试</h3>
        <p>分转元：{{amount1}}</p>
        <p>元转分：{{amount2}}</p>
        <p>{{date}}</p>
    </div>
</template>

<script>
    import Utils from '../utils/utils'

    export default {
        name: 'Index',
        data() {
            return {
                amount1: 0,
                amount2: 0,
                date: ''
            }
        },
        methods: {
            init() {
                let pp = Utils.Amount.fenToYuan({
                    price: 1234,
                    util: '¥'
                })
                this.amount1 = pp

                let qq = Utils.Amount.yuanTofen()
                this.amount2 = qq

                let oo = Utils.Time.getTimes({
                    // time:1541606400000,
                    style: 'Y年M月D日'
                })
                this.date = oo
            }
        },
        created() {
            this.init()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
    }
</style>
