<template>
    <div id="credit-score" class="credit-score">
        <iframe id='credit-window' src="http://www.calcxml.com/calculators/credit-score-calculator#results" width="100%" height="650" frameborder="0" style="position:relative;z 
            index:999" ref="frame">
          </iframe>
    </div>
</template>

<script>
    import http from '../../services/http'
    import router from '../../router'
    export default {
        name: 'CreditScore',
        data() {
            return {}
        },
        methods: {
            updatePath(path) {
                router.replace(path);
            },
        },
        async created() {
            this.$emit('title', 'Check Credit Score');
        },
        mounted() {
            document.getElementById('credit-score').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
            // console.log(document.getElementById('credit-window').contentDocument.body)
            let iframe = document.getElementById('credit-window');
            let style = document.createElement('style');
            style.textContent =
                'div .articles{' +
                '  display: none;' +
                '}';
            iframe.contentDocument.head.appendChild(style);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .credit-score {
        margin-top: 60px;
    }
</style>
