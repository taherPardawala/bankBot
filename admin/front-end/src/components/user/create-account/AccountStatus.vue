<template>
    <div class="create-account">
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs1 sm2 md2 lg2 xl2>
                </v-flex>
                <v-flex xs10 sm8 md8 lg8 xl8>
                    <v-text-field v-model="refNum" name="ref-number" label="Account Reff No." single-line prepend-icon="search"></v-text-field>
                    <v-btn @click="getAccountStatus()" >Check Status</v-btn>
                </v-flex>
                <v-flex xs1 sm2 md2 lg2 xl2>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                refNum: ''
            }
        },
        methods: {
            getAccountStatus() {
                if ( this.refNum != '' ) {

                } else {
                    alert('Enter a Reference Number to check status');
                }
            }
        },
        created() {}
    }
</script>

<style scoped>
</style>