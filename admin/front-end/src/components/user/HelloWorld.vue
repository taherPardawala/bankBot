<template>
  <div id="hello" class="hello">
    <v-jumbotron color="blue-grey lighten-2" height="500px" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-2 l-blue-darken-3">Welcome to BankBot</h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-1">Get answers to all your bank queries</h3>
            <h3 class="display-1">Talk to your personal bank assistant</h3>
            <br>
            <v-btn large color="deep-orange lighten-1" class="mx-0" @click="redirect">Talk now</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-jumbotron color="grey darken-3" height="100%">
      <v-container>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-1 paper">Our Partners</h3>
          </v-flex>
        </v-layout>
        <v-divider class="my-3"></v-divider>
        <v-layout align-center>
          <v-flex>
            <h3 class="headline paper">ICICI</h3>
          </v-flex>
          <v-flex>
            <h3 class="headline paper">YES</h3>
          </v-flex>
          <v-flex>
            <h3 class="headline paper">SBI</h3>
          </v-flex>
          <v-flex>
            <h3 class="headline paper">BOI</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-jumbotron color="grey lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3"><span class="welcome-text-color">Know Us a Little</span></h3>
            <span class="headline">BankBot is the world's first neutral online <strong>assistant</strong> for instant customised rate quotes on loans and credit cards. Shop for loans & cards just like you buy everything else now - online.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Create a new savings bank account from home!</div>
            <v-btn large color="primary" class="mx-0" @click="updatePath('/app/createaccount')">Create Account</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
  import http from '../../services/http'
  import router from '../../router'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      updatePath(path) {
        router.replace(path);
      },
      redirect() {
        window.location.href = 'https://www.facebook.com/BankBot-566352947071318/'
      }
    },
    async created() {
      this.$emit('title', 'BankBot')
      
      // document.getElementById('toolbar').offsetHeight
    },
    mounted() {
      document.getElementById('hello').style.marginTop = ''+document.getElementById('toolbar').offsetHeight+'px';
      // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin-top: 100px;
  }
  .welcome-text-color {
    color: #c0b283 !important;
  }
  .l-blue-darken-3 {
    color: #0277BD !important;
  }
  .paper {
    color: #f4f4f4 !important;
  }
</style>
