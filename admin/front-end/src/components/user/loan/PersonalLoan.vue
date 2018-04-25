<template>
    <div id="personal" class="personal">
        <!--v-layout row justify-center>
                <v-tooltip left>
                <v-btn class="position" color="primary" dark fab slot="activator" @click="redirect">
                    <v-icon>chat</v-icon>
                </v-btn>
                <span>Set an appointment!</span>            
                </v-tooltip>
        </v-layout-->
        <div class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Bank Name</div>
                    <div class="col col-2">Interest Rate</div>
                    <div class="col col-3">Processing Fee</div>
                    <div class="col col-4">Loan Amount</div>
                    <div class="col col-5">Tenure</div>
                </li>
                <li class="table-row" v-for="(item, key) in data" :key=key>
                    <div class="col col-1" data-label="Bank">{{item['data-bank-website']}}</div>
                    <div class="col col-2" data-label="Interest Rate">{{ item['data-interest-rate-range'].split(',')[0]}}% - {{ item['data-interest-rate-range'].split(',')[1]}}%</div>
                    <div class="col col-3" data-label="Processing Fee">{{item['data-processing-fee-range'].split(',')[0]}} - {{item['data-processing-fee-range'].split(',')[1]}}</div>
                    <div class="col col-4" data-label="Loan Amount">20l max</div>
                    <div class="col col-5" data-label="Tenure">1-7 yrs</div>
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
                        "value": "1568",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "12,18",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Capital First",
                        "data-processing-fee-range": "0,15000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "10710",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "15.95,18.95",
                        "data-interest-rate-type": "",
                        "data-bank-website": "HDB FINANCIAL SERVICES",
                        "data-processing-fee-range": "40000,40000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1008",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "13,13.05",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Allahabad Bank",
                        "data-processing-fee-range": "1228,9150",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1016",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "11.35,16.35",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Bank Of Baroda",
                        "data-processing-fee-range": "1000,10000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1020",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "12.70,12.75",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Bank of Maharashtra",
                        "data-processing-fee-range": "1000,10000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1018",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "12.90,13.90",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Bank of India",
                        "data-processing-fee-range": "1000,10000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1032",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "12.7,12.75",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Canara Bank",
                        "data-processing-fee-range": "1000,5000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1034",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "11.3,11.35",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Central Bank of India",
                        "data-processing-fee-range": "500,500",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1044",
                        "data-popularity": "3.0",
                        "data-interest-rate-range": "13.00,14.00",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Dena Bank",
                        "data-processing-fee-range": "150,1000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1058",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "12.55,12.6",
                        "data-interest-rate-type": "",
                        "data-bank-website": "IDBI",
                        "data-processing-fee-range": "500,1000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1060",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Indian Bank",
                        "data-processing-fee-range": "255,510",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1061",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "13.55,13.60",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Indian Overseas Bank",
                        "data-processing-fee-range": "1010,16500",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1066",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "12.95,15.45",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Karur Vysya Bank",
                        "data-processing-fee-range": "40000,40000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1091",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "13,13.05",
                        "data-interest-rate-type": "",
                        "data-bank-website": "South Indian Bank",
                        "data-processing-fee-range": "1500,1500",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1096",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "12.75,14.75",
                        "data-interest-rate-type": "",
                        "data-bank-website": "SBI",
                        "data-processing-fee-range": "2500,15000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1105",
                        "data-popularity": "4.0",
                        "data-interest-rate-range": "13.75,15.75",
                        "data-interest-rate-type": "",
                        "data-bank-website": "TamilNad Mercantile Bank",
                        "data-processing-fee-range": "1000,10000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1107",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "11.20,11.45",
                        "data-interest-rate-type": "",
                        "data-bank-website": "UCO Bank",
                        "data-processing-fee-range": "750,10000",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1108",
                        "data-popularity": "5.0",
                        "data-interest-rate-range": "14.4,14.45",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Union Bank",
                        "data-processing-fee-range": "500,2500",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1112",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "13.50,13.55",
                        "data-interest-rate-type": "",
                        "data-bank-website": "Vijaya Bank",
                        "data-processing-fee-range": "0,7500",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    },
                    {
                        "value": "1114",
                        "data-popularity": "4.5",
                        "data-interest-rate-range": "14,14.5",
                        "data-interest-rate-type": "",
                        "data-bank-website": "YES BANK",
                        "data-processing-fee-range": "",
                        "data-interest-rate-filter": "",
                        "data-show-quotes": ""
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Personal Loan');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('personal').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .personal {
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