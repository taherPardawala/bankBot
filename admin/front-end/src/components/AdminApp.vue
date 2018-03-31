<template>
    <div class="adminapp">
        <v-toolbar :flat="true" :fixed="true" class="cyan lighten-4">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer temporary v-model="drawer" fixed class="blue lighten-3" dark>
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{bankName}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list>
                <v-list-tile @click="updatePath('/admin/appointments')">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Appointments</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/admin/careers')">
                    <v-list-tile-action>
                        <v-icon>work</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Careers</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="updatePath('/admin/accounts')">
                    <v-list-tile-action>
                        <v-icon>account_balance</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>New Account Applications</v-list-tile-title>
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
                <v-card-text class="cyan lighten-4">
                    &copy;2018 — <strong>BankBot</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    import http from '../services/http';
    import router from '../router';
    export default {
        name: 'AdminApplication',
        data() {
            return {
                drawer: null,
                title: '',
                bankName:''
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
            if (typeof this.$store.getters.auth == 'string'  && typeof this.$store.getters.accountType == 'number' &&  this.$store.getters.accountType == 1) {
                let result = await http.getUserName(1);
                this.bankName = result.name;
                this.updatePath('/admin/careers')
            } else {
                this.updatePath('/login')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>