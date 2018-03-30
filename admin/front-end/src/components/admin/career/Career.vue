<template>
    <li class="table-row">
        <div class="col col-1" data-label="Job Title">{{career.title}}</div>
        <div class="col col-2" data-label="Job Description">{{career.description}}</div>
        <div class="col col-3" data-label="Pay">{{career.pay}}</div>
        <div class="col col-4" data-label="Contact Details">{{career.contact}}</div>
        <div class="col col-5" data-label="Remove Job">
            <v-btn color="pink" dark @click="deleteCareer">
                <v-icon>remove</v-icon>
            </v-btn>
        </div>
    </li>
</template>

<script>
    import http from '../../../services/http'
    export default {
        name: 'Career',
        data() {
            return {}
        },
        methods: {
            async deleteCareer(){
                let result = await http.deleteCareer(this.career.careerId);
                if(result.ok){
                    alert(result.message);
                    this.$emit('refresh');
                } else {
                    alert(result.message);
                }
            }
        },
        created() {},
        props:[
            'career'
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