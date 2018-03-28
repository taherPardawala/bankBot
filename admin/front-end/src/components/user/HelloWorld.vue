<template>
  <div class="hello">
    <v-jumbotron color="primary" height="500px" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-2">Welcome to BankBot</h3>
            <h3 class="display-1">Get answers to all your bank queries</h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-1">Talk to your personal bank assiatnt</h3>
            <v-btn large color="gray" class="mx-0">Talk now</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Create a new bank account from home!</div>
          <v-btn large color="primary" class="mx-0">Create Account</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      this.$emit('title', '')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
