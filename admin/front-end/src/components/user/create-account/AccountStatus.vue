<template>
    <div class="create-account">
        <v-container fluid grid-list-md>
            <h3 v-if="display!=null">{{display}}</h3>
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
    import http from '../../../services/http'
    export default {
        data() {
            return {
                refNum: '',
                display: null,
            }
        },
        methods: {
            async getAccountStatus() {
                if ( this.refNum != '' ) {
                    let result = await http.getRefStatus(this.refNum);
                    if(result.status != ""){
                        this.display = "STATUS: "+result.status
                    } else {
                        this.display = "No such reference number found"
                    }
                } else {
                    alert('Enter a Reference Number to check status');
                }
            }
        },
        async created() {
            
        }
    }
</script>

<style scoped>
</style>