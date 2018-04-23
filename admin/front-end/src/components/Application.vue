<template>
    <div class="app">
        <v-toolbar id="toolbar" :flat="true" :fixed="true" class="cyan lighten-4">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <!--v-spacer></v-spacer-->
        </v-toolbar>
        <v-navigation-drawer temporary v-model="drawer" fixed class="teal darken-1" dark>
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <!-- <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/86.jpg">
                    </v-list-tile-avatar> -->
                    <v-list-tile-content>
                        <v-list-tile-title>{{fname+" "+lname}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list>
                <v-list-tile @click="updatePath('/app/hello')">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/createaccount')">
                    <v-list-tile-action>
                        <v-icon>account_balance</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Create Bank Account</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/creditscore')">
                    <v-list-tile-action>
                        <v-icon>track_changes</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Check Credit Score</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-group prepend-icon="transfer_within_a_station" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Loans</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/homeloan')">
                        <v-list-tile-content>
                            <v-list-tile-title>Home Loan</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/carloan')">
                        <v-list-tile-content>
                            <v-list-tile-title>Car Loan</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/usedcarloan')">
                        <v-list-tile-content>
                            <v-list-tile-title>Used Car Loan</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/personalloan')">
                        <v-list-tile-content>
                            <v-list-tile-title>Personal Loan</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group prepend-icon="credit_card" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Card</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/creditcard')">
                        <v-list-tile-content>
                            <v-list-tile-title>Credit Card</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-group prepend-icon="security" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Insurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/lifeinsurance')">
                        <v-list-tile-content>
                            <v-list-tile-title>Life Insurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/carinsurance')">
                        <v-list-tile-content>
                            <v-list-tile-title>Car Insurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/twowheelerinsurance')">
                        <v-list-tile-content>
                            <v-list-tile-title>Two wheeler Insurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/healthinsurance')">
                        <v-list-tile-content>
                            <v-list-tile-title>Health Insurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile @click="updatePath('/app/news')">
                    <v-list-tile-action>
                        <v-icon>show_chart</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>News</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/careers')">
                    <v-list-tile-action>
                        <v-icon>work</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Careers</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/faqs')">
                    <v-list-tile-action>
                        <v-icon>question_answer</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>FAQs</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-group prepend-icon="account_box" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Account</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="logout">
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <router-view @title="updateTitle" />
        <v-footer height="auto" :fixed="true">
            <v-card style="width:100%" flat tile class="cyan lighten-4 text-xs-center">
                <v-card-text class="">
                    &copy;2018 — <strong>BankBot</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    import http from '../services/http'
    import router from '../router';
    export default {
        name: 'Application',
        data() {
            return {
                drawer: null,
                title: '',
                fname:'',
                lname:''
            }
        },
        methods: {
            updateTitle(data) {
                this.title = data;
            },
            updatePath(path) {
                router.replace(path);
            },
            logout(){
                this.$store.dispatch('clearAuth');
                window.localStorage.removeItem('vuex');
                router.replace('/login')
            }
        },
        async created() {
            console.log(typeof this.$store.getters.accountType)
            if (typeof this.$store.getters.auth == 'string' && typeof this.$store.getters.accountType == 'number' &&  this.$store.getters.accountType == 10) {
                let result = await http.getUserName(10);
                this.fname = result.firstName;
                this.lname = result.lastName;
                if(window.location.hash == '#/' || window.location.hash == '/') {
                    router.replace('/app/hello');
                } else {
                    let hash = window.location.hash.split('#/')
                    router.replace("/"+hash[hash.length-1]);
                }
            } else {
                this.updatePath('/login')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>