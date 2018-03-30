<template>
    <li class="table-row">
        <div class="col col-1" data-label="Applicant's Name">{{application.firstname+" "+application.middlename+" "+application.lastname}}</div>
        <div class="col col-2" data-label="Pan Number">{{application.adharNumber}}</div>
        <div class="col col-3" data-label="Adhar Number">{{application.panNumber}}</div>
        <div class="col col-4" data-label="Update Status">
            <v-layout row justify-center>
                <v-dialog v-model="dialog" ref="kuchbhi" persistent max-width="310">
                    <v-btn class="position" color="primary" dark slot="activator">
                        <v-icon>add</v-icon>
                    </v-btn>
                    <v-card>
                        <v-card-title class="headline">Application Details</v-card-title>
                        <v-card-text>
                            <label>Application Status</label>
                            <v-select :items="items" v-model="e1" label="Select" single-line></v-select>
                            <h2>Aadhar Card</h2>
                            <img height="200px" width="auto" :src="uri+'/fileop/v0.1/getFile'+'?id='+application.adharImageFileName">
                            <h2>Pan Card</h2>
                            <img height="200px" width="auto" :src="uri+'/fileop/v0.1/getFile'+'?id='+application.panImageFileName">
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat @click="updateStatus">Update Status</v-btn>
                            <v-btn id="close" color="green darken-1" flat @click.native="dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </div>
    </li>
</template>

<script>
    import http from '../../../services/http'
    export default {
        name: 'ApplicationTemp',
        data() {
            return {
                dialog: false,
                uri:http.baseUri, 
                valid: true,
                items: ['pending','processing','approved','rejected'],
                e1:''
            }
        },
        methods: {
            async updateStatus() {
                let result = await http.updateSavingsAccountStatus(this.application.refNo,{status:this.e1})
                if(result.ok){
                    document.getElementById('close').click()
                    alert(result.message);
                    this.$emit('refresh');
                } else {
                    this.dialog = false;
                    alert(result.message);
                }
            }
        },
        created() {
            this.e1 = this.application.status
        },
        props:[
            'application'
        ]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .responsive-table li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .responsive-table .table-header {
        background-color: #95a5a6;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }
    .responsive-table .table-row {
        background-color: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }
    .responsive-table .col-1 {
        flex-basis: 10%;
    }
    .responsive-table .col-2 {
        flex-basis: 40%;
    }
    .responsive-table .col-3 {
        flex-basis: 25%;
    }
    .responsive-table .col-4 {
        flex-basis: 25%;
    }
    @media all and (max-width: 767px) {
        .responsive-table .table-header {
            display: none;
        }
        .responsive-table li {
            display: block;
        }
        .responsive-table .col {
            flex-basis: 100%;
        }
        .responsive-table .col {
            display: flex;
            padding: 10px 0;
        }
        .responsive-table .col:before {
            color: #6c7a89;
            padding-right: 10px;
            content: attr(data-label);
            flex-basis: 50%;
            text-align: right;
        }
    }
</style>