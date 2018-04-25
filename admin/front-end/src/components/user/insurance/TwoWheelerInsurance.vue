<template>
    <div id="twowheeler" class="twowheeler">
        <!-- <v-layout row justify-center>
                <v-tooltip left>
                    <v-btn class="position" color="primary" dark fab slot="activator" @click="redirect">
                        <v-icon>chat</v-icon>
                    </v-btn>
                    <span>Set an appointment!</span>
                </v-tooltip>
            </v-layout> -->
        <div class="twowheeler">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Two wheeler Insurance provider</div>
                    <div class="col col-2">Cashless Network Garages</div>
                    <div class="col col-3">Third Party Insurance Cover</div>
                    <div class="col col-4">Personal Accident Coverage</div>
                    <div class="col col-5">Incurred Claim Ratio - Motor Insurance</div>
                    <div class="col col-6">Policy Term</div>
                </li>
                <li class="table-row" v-for="(item, key) in data" :key=key>
                    <div class="col col-1" data-label="Two wheeler Insurance provider">{{item['Two wheeler Insurance provider']}}</div>
                    <div class="col col-2" data-label="Cashless Network Garages">{{item['Cashless Network Garages']}}</div>
                    <div class="col col-3" data-label="Third Party Insurance Cover">{{item['Third Party Insurance Cover']}}</div>
                    <div class="col col-4" data-label="Personal Accident Coverage">{{item['Personal Accident Coverage']}}</div>
                    <div class="col col-5" data-label="Incurred Claim Ratio - Motor Insurance">{{item['Incurred Claim Ratio - Motor Insurance']}}</div>
                    <div class="col col-6" data-label="Policy Term">{{item['Policy Term']}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                        "Two wheeler Insurance provider": "Bajaj Allianz Two Wheeler Insurance",
                        "Cashless Network Garages": "Available",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Coverage up to Rs.1 lakh for the owner-driver",
                        "Incurred Claim Ratio - Motor Insurance": "69.19 %",
                        "Policy Term": "1-3 years",
                        "No Claim Bonus": "No Claim Bonus (NCB) benefits",
                        "Bike Insurance Online Renewal": "Available"
                    },
                    {
                        "Two wheeler Insurance provider": "Bharti AXA Two Wheeler Insurance",
                        "Cashless Network Garages": "2,500+",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Available as an add-on cover for owner-driver and the co-passenger",
                        "Incurred Claim Ratio - Motor Insurance": "89.09%",
                        "Policy Term": "1-3 years",
                        "No Claim Bonus": "NCB of up to 50% and Up to 2.5% discount for installation of security devices",
                        "Bike Insurance Online Renewal": "Available"
                    },
                    {
                        "Two wheeler Insurance provider": "HDFC ERGO Two Wheeler Insurance",
                        "Cashless Network Garages": "4,800+",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Available for the owner-driver under comprehensive motor insurance",
                        "Incurred Claim Ratio - Motor Insurance": "89.43%",
                        "Policy Term": "1-3 years",
                        "No Claim Bonus": "Premium discount for long-term two-wheeler insurance plan",
                        "Bike Insurance Online Renewal": "Available"
                    },
                    {
                        "Two wheeler Insurance provider": "Reliance Two Wheeler Insurance",
                        "Cashless Network Garages": "430+",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Available as add-on coverage",
                        "Incurred Claim Ratio - Motor Insurance": "91.39%",
                        "Policy Term": "1 year",
                        "No Claim Bonus": "NCB benefits",
                        "Bike Insurance Online Renewal": "Available"
                    },
                    {
                        "Two wheeler Insurance provider": "Liberty Videocon Two Wheeler Insurance",
                        "Cashless Network Garages": "Available",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Available for the owner-driver",
                        "Incurred Claim Ratio - Motor Insurance": "77.29%",
                        "Policy Term": "1-3 years",
                        "No Claim Bonus": "Discounts at renewal                                 and NCB benefits",
                        "Bike Insurance Online Renewal": "Available"
                    },
                    {
                        "Two wheeler Insurance provider": "IFFCO Tokio Two Wheeler Insurance",
                        "Cashless Network Garages": "Available",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Available",
                        "Incurred Claim Ratio - Motor Insurance": "84.37%",
                        "Policy Term": "1-3 years",
                        "No Claim Bonus": "NCB benefits",
                        "Bike Insurance Online Renewal": "Available"
                    },
                    {
                        "Two wheeler Insurance provider": "ICICI LOMBARD Two Wheeler Insurance",
                        "Cashless Network Garages": "Available",
                        "Third Party Insurance Cover": "Available",
                        "Personal Accident Coverage": "Available",
                        "Incurred Claim Ratio - Motor Insurance": "78.91%",
                        "Policy Term": "1-3 years",
                        "No Claim Bonus": "NCB benefits",
                        "Bike Insurance Online Renewal": "Available"
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Two Wheeler Insurance');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('twowheeler').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .twowheeler {
        margin-top: 60px;
    }
    .position {
        position: fixed;
        right: 5%;
        bottom: 15%;
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