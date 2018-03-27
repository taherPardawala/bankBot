<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                            <v-btn color="indigo lighten-1">Login</v-btn>
                            <v-btn color="indigo lighten-1">Signup</v-btn>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #inspire {
        background-image: url('../assets/material.jpg');
    }
</style>
