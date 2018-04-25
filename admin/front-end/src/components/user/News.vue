<template>
    <div id="news" class="news">
        <iframe src="https://www.financialexpress.com/industry/banking-finance/" width="100%" height="650" frameborder="0" style="position:relative;z 
        index:999" ref="frame">
      </iframe>
    </div>
</template>

<script>
    import http from '../../services/http'
    import router from '../../router'
    export default {
        name: 'News',
        data() {
            return {}
        },
        methods: {
            updatePath(path) {
                router.replace(path);
            },
        },
        async created() {
            this.$emit('title', 'News');
        },
        mounted() {
            document.getElementById('news').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .news {
        margin-top: 60px;
    }
</style>
