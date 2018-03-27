<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
                Core Docs
              </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
                Forum
              </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
                Community Chat
              </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
                Twitter
              </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
                Docs for This Template
              </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
                vue-router
              </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
                vuex
              </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
                vue-loader
              </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
                awesome-vue
              </a>
      </li>
    </ul>
    <div class="divTable">
      <div class="divTableBody">
        <div class="divTableRow">
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
          <div class="divTableCell">taher</div>
        </div>
      </div>
    </div>
    <!-- DivTable.com -->
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello {
    margin-top: 60px;
  }
  /* DivTable.com */
  .divTable {
    display: table;
    width: 100%;
    border: 1px solid #000;
  }
  .divTableRow {
    display: table-row;
  }
  .divTableHeading {
    background-color: #EEE;
    display: table-header-group;
  }
  .divTableCell,
  .divTableHead {
    border: 1px solid #999999;
    display: table-cell;
    padding: 3px 10px;
  }
  .divTableHeading {
    background-color: #EEE;
    display: table-header-group;
    font-weight: bold;
  }
  .divTableFoot {
    background-color: #EEE;
    display: table-footer-group;
    font-weight: bold;
  }
  .divTableBody {
    display: table-row-group;
  }
</style>
