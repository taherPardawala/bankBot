<template>
    <div class="appointment">
        <li class="table-row">
            <div class="col col-1" data-label="Name">{{appointment.name}}</div>
            <div class="col col-2" data-label="Prefered Date">{{appointment.date}}</div>
            <div class="col col-3" data-label="Contact Details">{{appointment.contact}}</div>
            <div class="col col-4" data-label="Dismiss">
                <v-btn small color="primary" dark @click="deleteAppointment">
                    <v-icon>remove</v-icon>
                </v-btn>
            </div>
            <div class="col col-5" data-label="Confirm Appointment">
                <v-btn small color="secondary" dark @click.native.stop="modal2 = true">
                    <v-icon>add</v-icon>
                </v-btn>
            </div>
            <v-dialog ref="dialog" persistent v-model="modal2" lazy full-width width="290px" :return-value.sync="time" format="24hr" >
                <v-time-picker v-model="time" actions>
                    <v-spacer></v-spacer>
                    <v-btn flat id="cancel" color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="sendConfirmation">Confirm</v-btn>
                </v-time-picker>
            </v-dialog>
        </li>
    </div>
</template>

<script>
    import http from '../../../services/http'
    export default {
        name: 'ApplicationTemp',
        data() {
            return {
                time: null,
                modal2: false
            }
        },
        methods: {
            async deleteAppointment() {
                let result = await http.deleteAppointment(this.appointment.appointmentId);
                if (result.ok) {
                    let result1 = await http.sendMessage({user:this.appointment.user,channel:this.appointment.channel,page:this.appointment.page},`Your appointment with ${this.appointment.bankName} has been dismissed please try again later.`);
                    if(result1.ok){
                        alert(result.message);
                    } else {
                        alert("Send message failed")
                    }
                    this.$emit('refresh');
                } else {
                    alert(result.message);
                    this.$emit('refresh');
                }
            },
            async sendConfirmation() {
                console.log(this.time);
                document.getElementById('cancel').click();
                if(this.time != null) {
                    let anteMeridiemOrPastMidday = Number(this.time.split(':')[0]) >= 12 ? 'PM' : 'AM';
                    let result = await http.sendMessage({user:this.appointment.user,channel:this.appointment.channel,page:this.appointment.page},`Your appointment with ${this.appointment.bankName} has been confirmed \nat ${this.time+" "+anteMeridiemOrPastMidday} IST on ${this.appointment.date}.`);
                    if(result.ok){
                        document.getElementById('cancel').click();
                        alert("Send notification success");
                        this.$emit('refresh');
                    } else {
                        document.getElementById('cancel').click();
                        alert("Send notification failed");
                        this.$emit('refresh');
                    }
                } else {
                    document.getElementById('cancel').click();
                    alert('Please select a time to confirm the appointment');

                }
            }
        },
        created() {},
        props: [
            'appointment'
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