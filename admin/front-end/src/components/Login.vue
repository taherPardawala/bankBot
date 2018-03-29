<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form>
                            <v-text-field prepend-icon="mail" color="red" name="email" label="Email" v-model="email" :rules="emailRules" type="email"></v-text-field>
                            <v-text-field prepend-icon="lock" color="red" name="password" label="Password" v-model="password" :rules="passwordRules" id="password" type="password"></v-text-field>
                            <v-btn color="indigo lighten-1" @click="logUser">Login</v-btn>
                            <v-btn color="indigo lighten-1" @click="updateRoute('/signup')">Signup</v-btn>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import http from '../services/http'
    import router from '../router'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                passwordRules: [
                    (v) => !!v || 'Password is required',
                    (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}/.test(v) || 'Password Must be atleast 8 char, 1 lowercase, 1 Uppercase char and 1 number'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ]
            }
        },
        methods: {
            async logUser() {
                let result = await http.login({
                    id: this.email,
                    password: this.password
                });
                if (result.ok) {
                    if (result.accountType == 10) {
                        this.$store.commit('auth', result.token);
                        this.$store.commit('accountType', result.accountType);
                        this.updateRoute('/');
                    } else {
                        this.$store.commit('auth', result.token);
                        this.$store.commit('accountType', result.accountType);
                        this.updateRoute('/admin');
                    }
                } else {
                    alert('Invalid username or password');
                }
            },
            updateRoute(path) {
                router.replace(path);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #inspire {
        background-image: url('../assets/material.jpg');
    }
</style>
