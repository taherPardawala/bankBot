<template>
    <div class="careers">
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-btn class="position" color="primary" dark fab slot="activator">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-card>
                    <v-card-title class="headline">Add Career</v-card-title>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field name="input-1" v-model="title" label="Title" :rules="[v => !!v || 'Item is required']" required></v-text-field>
                            <v-text-field name="input-2" v-model="description" label="Description" :rules="[v => !!v || 'Item is required']" required></v-text-field>
                            <v-text-field name="input-3" v-model="pay" label="Pay" type="numbner" :rules="[v => !!v || 'Item is required']" required></v-text-field>
                            <v-text-field name="input-4" v-model="contact" label="Contact Info" :rules="[v => !!v || 'Item is required']" required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click="addJob" :disabled="!valid">Add</v-btn>
                        <v-btn id="close" color="green darken-1" flat @click.native="dialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
        <div v-if="careers.length>0" class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Job Title</div>
                    <div class="col col-2">Job Description</div>
                    <div class="col col-3">Pay</div>
                    <div class="col col-4">Contact Details</div>
                    <div class="col col-5">Remove Job </div>
                </li>
                <career @refresh="init" v-for="(i,key) in careers" :career="i" :key=key></career>
            </ul>
        </div>
        <h1 style="margin-top:10%" v-else>You have no Careers</h1>
    </div>
</template>

<script>
    import http from '../../../services/http'
    import Career from './Career.vue'
    export default {
        name: 'Careers',
        data() {
            return {
                dialog: false,
                title: '',
                description: '',
                pay: '',
                contact: '',
                valid: true,
                careers: []
            }
        },
        methods: {
            async init() {
                let result = await http.getCareers();
                if (result.ok) {
                    this.careers = result.careers;
                } else {
                    console.error(result);
                    alert("Something went wrong")
                }
            },
            async addJob() {
                document.getElementById('close').click()
                if (this.$refs.form.validate()) {
                    let careerId = new Date().getTime();
                    let result = await http.createCareer({
                        careerId: careerId,
                        title: this.title,
                        description: this.description,
                        pay: this.pay,
                        contact: this.contact
                    })
                    if (result.ok) {
                        document.getElementById('close').click()
                        alert(result.message);
                        this.init();
                    } else {
                        document.getElementById('close').click()
                        alert(result.message);
                        this.init();
                    }
                } else {
                    alert("Fill the form correctly first")
                }
            }
        },
        components: {
            'career': Career
        },
        async created() {
            this.$emit('title', 'Careers');
            this.init();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .careers {
        margin-top: 60px;
    }
    .position {
        position: fixed;
        right: 5%;
        bottom: 10%;
        z-index: 4;
    }
    .container {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 10px;
        padding-right: 10px;
    }
    h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
    }
    h2 small {
        font-size: 0.5em;
    }
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