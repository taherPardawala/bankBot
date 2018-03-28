<template>
    <div class="app">
        <v-toolbar :flat="true" :fixed="true" class="indigo lighten-1 white--text">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <!--v-spacer></v-spacer-->
        </v-toolbar>
        <v-navigation-drawer temporary v-model="drawer" absolute class="blue lighten-3" dark>
            <v-list>
                <!-- Filer list item start -->
                <v-list-tile @click="updatePath('/app/hello')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile><v-list-tile @click="updatePath('/app/hello')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/hello')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/hello')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- Filer list item end -->
                <v-list-tile @click="updatePath('/app/hello')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/careers')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Careers</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/app/createaccount')">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Create Bank Account</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-group prepend-icon="restaurant" no-action>
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
                <v-list-group prepend-icon="school" no-action>
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
                <v-list-group prepend-icon="school" no-action>
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
                <v-list-group prepend-icon="school" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Account</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/creditcard')">
                        <v-list-tile-content>
                            <v-list-tile-title>Change Password</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="updatePath('/app/creditcard')">
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <router-view @title="updateTitle" />
        <v-footer height="auto" :fixed="true">
            <v-card style="width:100%" flat tile class="indigo lighten-1 white--text text-xs-center">
                <v-card-text class="white--text">
                    &copy;2018 — <strong>BankBot</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    import router from '../router';
    export default {
        name: 'Application',
        data() {
            return {
                drawer: null,
                title: ''
            }
        },
        methods: {
            updateTitle(data) {
                this.title = data;
            },
            updatePath(path) {
                router.replace(path);
            }
        },
        created() {
            router.replace('/app/hello');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>