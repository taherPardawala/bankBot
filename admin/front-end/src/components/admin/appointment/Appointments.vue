<template>
    <div class="appointments">
        <div v-if="appointments.length>0" class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Name</div>
                    <div class="col col-2">Prefered Date</div>
                    <div class="col col-3">Contact Details</div>
                    <div class="col col-4">Dismiss</div>
                    <div class="col col-5">Confirm Appointment</div>
                </li>
                <appointment @refresh="init" v-for="(i, key) in appointments" :appointment="i" :key=key></appointment>
            </ul>
        </div>
        <h1 style="margin-top:10%" v-else>You have no appointments</h1>
    </div>
</template>

<script>
    import http from '../../../services/http'
    import Appointment from './Appointment.vue'
    export default {
        name: 'Appointments',
        data() {
            return {
                appointments:[]
            }
        },
        methods: {
            async init(){
                let result = await http.getAppointments();
                if(result.ok){
                    this.appointments = result.appointments;
                } else {
                    console.error(result);
                    alert("Something went wrong")
                }
            }
        },
        components: {
            'appointment': Appointment 
        },
        async created() {
            this.$emit('title', 'Appointments');
            this.init();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .appointments {
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