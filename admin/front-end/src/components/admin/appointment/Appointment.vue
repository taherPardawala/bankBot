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
        </li>
    </div>
</template>

<script>
    import http from '../../../services/http'
    export default {
        name: 'ApplicationTemp',
        data() {
            return {}
        },
        methods: {
            async deleteAppointment(){
                let result = await http.deleteAppointment(this.appointment.userId);
                if(result.ok){
                    alert(result.message);
                } else {
                    alert(result.message);
                }
            }
        },
        created() {},
        props:[
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