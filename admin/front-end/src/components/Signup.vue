<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card>
                            <v-toolbar dark color="indigo lighten-1">
                                <v-toolbar-title>Signup form</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form v-model="valid" ref="form">
                                    <v-layout justify-space-between>
                                        <v-flex xs5>
                                            <v-text-field label="First Name" id="firstName" v-model="firstName" :rules="nameRules" type="text" required>
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-text-field label="Last Name" id="lastName" v-model="lastName" :rules="nameRules" type="text" required>
                                            </v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row justify-space-between>
                                        <v-flex xs5>
                                            <v-text-field label="Email" id="email" v-model="email" :rules="emailRules" type="email" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-text-field label="Mobile Number" id="mobileNumber" v-model="mobileNumber" :rules="mobileNumberRules" type="number" required></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field label="Password" id="password" v-model="password" :rules="passwordRules" :append-icon="p1 ? 'visibility' :'visibility_off'" :append-icon-cb="() => (p1 = !p1)" :type="p1 ? 'password' : 'text'" required></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field label="Confirm Password" id="confirmPassword" v-model="confirmPassword" :append-icon="p2 ? 'visibility' :'visibility_off'" :append-icon-cb="() => (p2 = !p2)" :type="p2 ? 'password' : 'text'" required :rules="confirmPasswordRules"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-card-actions style="margin-top:20px">
                                        <v-spacer></v-spacer>
                                        <v-btn @click="clear" style="width:25%" color="indigo lighten-1 white--text">Clear</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="createAccount" color="indigo lighten-1 white--text">Create Account</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="updateRoute('/login')" style="width:25%" color="indigo lighten-1 white--text">Login</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
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
        name: 'Signup',
        data() {
            return {
                valid: true,
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
                password: '',
                confirmPassword: '',
                nameRules: [
                    (v) => !!v || 'Name is required',
                    (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
                ],
                passwordRules: [
                    (v) => !!v || 'Password is required',
                    (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}/.test(v) || 'Password Must be atleast 8 char, 1 lowercase, 1 Uppercase char and 1 number'
                ],
                confirmPasswordRules: [
                    (v) => {
                        if (v == password.value && password.value != '') {
                            return true;
                        } else {
                            return 'Passwords do not match'
                        }
                    },
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                mobileNumberRules: [
                    v => !!v || 'Number is required',
                    v => /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(v) || 'Number must be valid'
                ],
                p1: true,
                p2: true,
            }
        },
        methods: {
            clear() {
                this.$refs.form.reset()
            },
            updateRoute(path) {
                router.replace(path);
            },
            async createAccount() {
                let result = await http.signupUser(
                    {
                        id:this.email,
                        email:this.email,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        mobileNumber: this.mobileNumber,
                        password: this.password
                    }
                );

                if ( result.ok ) {
                    alert(result.message);
                    router.replace('/login');
                } else {
                    alert(result.message);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
