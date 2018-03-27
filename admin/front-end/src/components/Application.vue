<template>
    <div class="app">
        <v-toolbar :flat="true" :fixed="true" class="indigo lighten-1 white--text">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <!--v-spacer></v-spacer-->
        </v-toolbar>
        <v-navigation-drawer temporary v-model="drawer" absolute class="blue lighten-3" dark>
            <v-list>
                <v-list-group prepend-icon="restaurant" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Insaurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>List Item</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>restaurant</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-group prepend-icon="restaurant" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Insaurance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>List Item</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>restaurant</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-group prepend-icon="school" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Loans</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>List Item</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>List Item 2</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
            <v-list>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>restaurant</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Careers</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list>
                <v-list-group prepend-icon="school" no-action>
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>Account</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Change Password</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon></v-icon>
                        </v-list-tile-action>
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
                icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
                items: [{
                        action: 'restaurant',
                        title: 'Loans',
                        active: false,
                        items: [{
                                title: 'Breakfast & brunch'
                            },
                            {
                                title: 'New American'
                            },
                            {
                                title: 'Sushi'
                            }
                        ]
                    },
                    {
                        action: 'school',
                        title: 'Insurance',
                        items: [{
                            title: 'List Item',
                        }]
                    },
                    {
                        action: 'directions_run',
                        title: 'Account',
                        items: [{
                            title: 'List Item'
                        }]
                    }
                ],
                drawer: null,
                title: ''
            }
        },
        methods: {
            updateTitle(data) {
                this.title = data;
            }
        },
        created() {
            router.replace('/hello');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>