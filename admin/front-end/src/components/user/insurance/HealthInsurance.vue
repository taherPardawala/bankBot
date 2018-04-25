<template>
    <div id="health" class="health">
        <!-- <v-layout row justify-center>
                <v-tooltip left>
                <v-btn class="position" color="primary" dark fab slot="activator" @click="redirect">
                    <v-icon>chat</v-icon>
                </v-btn>
                <span>Set an appointment!</span>            
                </v-tooltip>
        </v-layout> -->
        <div class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Health Insurance Companies</div>
                    <div class="col col-2">Incurred Claim Ratio</div>
                    <div class="col col-3">Grievances Solved</div>
                    <div class="col col-4">Network Hospitals</div>
                    <div class="col col-5">Number of Policies Issued</div>
                    <div class="col col-6">Number of Persons Covered</div>
                </li>
                <li class="table-row" v-for="(item, key) in data" :key=key>
                    <div class="col col-1" data-label="Health Insurance Companies">{{item['Health Insurance Companies']}}</div>
                    <div class="col col-2" data-label="Incurred Claim Ratio">{{item['Incurred Claim Ratio']}}</div>
                    <div class="col col-3" data-label="Grievances Solved">{{item['Grievances Solved']}}</div>
                    <div class="col col-4" data-label="Network Hospitals">{{item['Network Hospitals']}}</div>
                    <div class="col col-5" data-label="Number of Policies Issued">{{item['Number of Policies Issued']}}</div>
                    <div class="col col-6" data-label="Number of Persons Covered">{{item['Number of Persons Covered']}}</div>
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
                        "Health Insurance Companies": "Apollo Munich Health Insurance",
                        "Incurred Claim Ratio": "54.99%",
                        "Grievances Solved": "98.18%",
                        "Network Hospitals": "4500+",
                        "Number of Policies Issued": 681314,
                        "Number of Persons Covered": 2907000
                    },
                    {
                        "Health Insurance Companies": "Bajaj Allianz General Insurance",
                        "Incurred Claim Ratio": "70.41%",
                        "Grievances Solved": "99.28%",
                        "Network Hospitals": "5700+",
                        "Number of Policies Issued": 473346,
                        "Number of Persons Covered": 9469000
                    },
                    {
                        "Health Insurance Companies": "Bharati Axa General Insurance",
                        "Incurred Claim Ratio": "86.84%",
                        "Grievances Solved": "99.81%",
                        "Network Hospitals": "4500+",
                        "Number of Policies Issued": 21692,
                        "Number of Persons Covered": 323000
                    },
                    {
                        "Health Insurance Companies": "Cholamandalam MS General Insurance",
                        "Incurred Claim Ratio": "72.91%",
                        "Grievances Solved": "99.82%",
                        "Network Hospitals": "2600+",
                        "Number of Policies Issued": 75189,
                        "Number of Persons Covered": 1531000
                    },
                    {
                        "Health Insurance Companies": "Cigna TTK Health Insurance",
                        "Incurred Claim Ratio": "48.14%",
                        "Grievances Solved": "99.22%",
                        "Network Hospitals": "4000+",
                        "Number of Policies Issued": 123921,
                        "Number of Persons Covered": 365000
                    },
                    {
                        "Health Insurance Companies": "Future Generali Health Insurance",
                        "Incurred Claim Ratio": "77.31%",
                        "Grievances Solved": "99.86%",
                        "Network Hospitals": "4300+",
                        "Number of Policies Issued": 41310,
                        "Number of Persons Covered": 5569000
                    },
                    {
                        "Health Insurance Companies": "HDFC ERGO General Insurance",
                        "Incurred Claim Ratio": "76.90%",
                        "Grievances Solved": "100.00%",
                        "Network Hospitals": "4800+",
                        "Number of Policies Issued": 472566,
                        "Number of Persons Covered": 1950000
                    },
                    {
                        "Health Insurance Companies": "ICICI Lombard General Insurance",
                        "Incurred Claim Ratio": "80.38%",
                        "Grievances Solved": "97.61%",
                        "Network Hospitals": "4500+",
                        "Number of Policies Issued": 890383,
                        "Number of Persons Covered": 20805000
                    },
                    {
                        "Health Insurance Companies": "IFFCO Tokio General Insurance",
                        "Incurred Claim Ratio": "81.96%",
                        "Grievances Solved": "99.94%",
                        "Network Hospitals": "3000+",
                        "Number of Policies Issued": 156118,
                        "Number of Persons Covered": 18985000
                    },
                    {
                        "Health Insurance Companies": "L&T General Insurance",
                        "Incurred Claim Ratio": "77.83%",
                        "Grievances Solved": "100.00%",
                        "Network Hospitals": "2800+",
                        "Number of Policies Issued": 71931,
                        "Number of Persons Covered": 339000
                    },
                    {
                        "Health Insurance Companies": "Liberty Videocon Genral Insurance",
                        "Incurred Claim Ratio": "79.14%",
                        "Grievances Solved": "99.06%",
                        "Network Hospitals": "3000+",
                        "Number of Policies Issued": 10918,
                        "Number of Persons Covered": 669000
                    },
                    {
                        "Health Insurance Companies": "Max Bupa Health Insurance",
                        "Incurred Claim Ratio": "51.96%",
                        "Grievances Solved": "100.00%",
                        "Network Hospitals": "3500+",
                        "Number of Policies Issued": 307007,
                        "Number of Persons Covered": 2281000
                    },
                    {
                        "Health Insurance Companies": "National Health Insurance",
                        "Incurred Claim Ratio": "97.25%",
                        "Grievances Solved": "96.11%",
                        "Network Hospitals": "6000+",
                        "Number of Policies Issued": 1780030,
                        "Number of Persons Covered": 103537000
                    },
                    {
                        "Health Insurance Companies": "Reliance General Insurance",
                        "Incurred Claim Ratio": "92.23%",
                        "Grievances Solved": "99.32%",
                        "Network Hospitals": "4000+",
                        "Number of Policies Issued": 80625,
                        "Number of Persons Covered": 8864000
                    },
                    {
                        "Health Insurance Companies": "Religare Health Insurance",
                        "Incurred Claim Ratio": "50.52%",
                        "Grievances Solved": "100.00%",
                        "Network Hospitals": "4500+",
                        "Number of Policies Issued": 320316,
                        "Number of Persons Covered": 1384000
                    },
                    {
                        "Health Insurance Companies": "Royal Sundaram General Insurance",
                        "Incurred Claim Ratio": "78.13%",
                        "Grievances Solved": "99.28%",
                        "Network Hospitals": "3000+",
                        "Number of Policies Issued": 188662,
                        "Number of Persons Covered": 849000
                    },
                    {
                        "Health Insurance Companies": "SBI General Insurance",
                        "Incurred Claim Ratio": "75.01%",
                        "Grievances Solved": "95.33%",
                        "Network Hospitals": "4400+",
                        "Number of Policies Issued": 198876,
                        "Number of Persons Covered": 4123000
                    },
                    {
                        "Health Insurance Companies": "Star Health and Allied Insurance",
                        "Incurred Claim Ratio": "60.51%",
                        "Grievances Solved": "99.43%",
                        "Network Hospitals": "6000+",
                        "Number of Policies Issued": 2579591,
                        "Number of Persons Covered": 7651000
                    },
                    {
                        "Health Insurance Companies": "Tata- AIG General Insurance",
                        "Incurred Claim Ratio": "72.32%",
                        "Grievances Solved": "99.93%",
                        "Network Hospitals": "3000+",
                        "Number of Policies Issued": 160790,
                        "Number of Persons Covered": 942000
                    },
                    {
                        "Health Insurance Companies": "New India Assurance Health Insurance",
                        "Incurred Claim Ratio": "91.26%",
                        "Grievances Solved": "99.19%",
                        "Network Hospitals": "1200+",
                        "Number of Policies Issued": 1785302,
                        "Number of Persons Covered": 95586000
                    },
                    {
                        "Health Insurance Companies": "Oriental Health Insurance",
                        "Incurred Claim Ratio": "112.11%",
                        "Grievances Solved": "95.36%",
                        "Network Hospitals": "4300+",
                        "Number of Policies Issued": 1378773,
                        "Number of Persons Covered": 18602000
                    },
                    {
                        "Health Insurance Companies": "United India Insurance",
                        "Incurred Claim Ratio": "107.06%",
                        "Grievances Solved": "98.51%",
                        "Network Hospitals": "7000+",
                        "Number of Policies Issued": 1160432,
                        "Number of Persons Covered": 129598000
                    },
                    {
                        "Health Insurance Companies": "Universal Sompo General Insurance",
                        "Incurred Claim Ratio": "70.91%",
                        "Grievances Solved": "100.00%",
                        "Network Hospitals": "5000+",
                        "Number of Policies Issued": 162577,
                        "Number of Persons Covered": 913000
                    },
                    {
                        "Health Insurance Companies": "Aditya Birla Health Insurance",
                        "Incurred Claim Ratio": "110.68%",
                        "Grievances Solved": "80.00%",
                        "Network Hospitals": "4500+",
                        "Number of Policies Issued": 2422,
                        "Number of Persons Covered": 190000
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Health Insurance');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('health').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .health {
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