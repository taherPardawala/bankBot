<template>
    <div id="home-loan" class="home">
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
                    <div class="col col-1" data-label="Bank">{{item['data-bank']}}</div>
                    <div class="col col-2" data-label="Interest Rate">{{ item['data-interest-rate-range'].split(',')[0]}}% - {{ item['data-interest-rate-range'].split(',')[1]}}%</div>
                    <div class="col col-3" data-label="Processing Fee">{{item['data-processing-fee-range'].split(',')[0]}} - {{item['data-processing-fee-range'].split(',')[1]}}</div>
                    <div class="col col-4" data-label="Loan Amount">1l min</div>
                    <div class="col col-5" data-label="Tenure">1-20 yrs</div>
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
                        "value": "2059",
                        "data-interest-rate-range": "8.35,10",
                        "data-popularity": "4.0",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "IndiaBulls",
                        "data-processing-fee-range": "0,150000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2525",
                        "data-interest-rate-range": "9,9.75",
                        "data-popularity": "3.5",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "DHFL",
                        "data-processing-fee-range": "5000,20000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2068",
                        "data-interest-rate-range": "0,0",
                        "data-popularity": "4.0",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "LIC Housing",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2050",
                        "data-interest-rate-range": "9.00,9.25",
                        "data-popularity": "4.0",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "Federal Bank",
                        "data-processing-fee-range": "3000,7500",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2096",
                        "data-interest-rate-range": "8.30,8.65",
                        "data-popularity": "4.0",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "SBI",
                        "data-processing-fee-range": "2000,10000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2010",
                        "data-interest-rate-range": "8.75,8.85",
                        "data-popularity": "4.5",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "Andhra Bank",
                        "data-processing-fee-range": "5000,10000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2047",
                        "data-interest-rate-range": "9.75,10.00",
                        "data-popularity": "3.0",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Dhanalakshmi Bank",
                        "data-processing-fee-range": "10000,10000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2016",
                        "data-interest-rate-range": "8.30,9.35",
                        "data-popularity": "4.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Bank Of Baroda",
                        "data-processing-fee-range": "7500,20000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2018",
                        "data-interest-rate-range": "8.45,8.6",
                        "data-popularity": "4.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Bank of India",
                        "data-processing-fee-range": "1000,20000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2020",
                        "data-interest-rate-range": "8.70,8.80",
                        "data-popularity": "4.0",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Bank of Maharashtra",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2032",
                        "data-interest-rate-range": "8.35,8.55",
                        "data-popularity": "4.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Canara Bank",
                        "data-processing-fee-range": "1500,10000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2044",
                        "data-interest-rate-range": "8.25,8.35",
                        "data-popularity": "4.0",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "Dena Bank",
                        "data-processing-fee-range": "10000,500000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2058",
                        "data-interest-rate-range": "8.35,8.65",
                        "data-popularity": "4.0",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "IDBI",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2061",
                        "data-interest-rate-range": "8.55,9.05",
                        "data-popularity": "4.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Indian Overseas Bank",
                        "data-processing-fee-range": "13350,13350",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2066",
                        "data-interest-rate-range": "9,9.05",
                        "data-popularity": "4.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Karur Vysya Bank",
                        "data-processing-fee-range": "3750,12500",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2091",
                        "data-interest-rate-range": "9.1,9.15",
                        "data-popularity": "3.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "South Indian Bank",
                        "data-processing-fee-range": "0,10000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2105",
                        "data-interest-rate-range": "10.10,10.60",
                        "data-popularity": "4.0",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "TamilNad Mercantile Bank",
                        "data-processing-fee-range": "0,250000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2034",
                        "data-interest-rate-range": "8.3,8.35",
                        "data-popularity": "4.5",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Central Bank of India",
                        "data-processing-fee-range": "10000,20000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "20711",
                        "data-interest-rate-range": "11.75,22",
                        "data-popularity": "3.5",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "India Shelter Finance Corporation",
                        "data-processing-fee-range": "6000,60000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2713",
                        "data-interest-rate-range": "10,19",
                        "data-popularity": "2.5",
                        "data-show-quotes": "No pre-closure fees",
                        "data-interest-rate-filter": "",
                        "data-bank": "Aavas Financiers Limited",
                        "data-processing-fee-range": "4000,200000",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "20715",
                        "data-interest-rate-range": "0,0",
                        "data-popularity": "3.0",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "Reliance Home Finance Limited",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2526",
                        "data-interest-rate-range": "8.75,8.85",
                        "data-popularity": "3.5",
                        "data-show-quotes": "No pre-payment fee",
                        "data-interest-rate-filter": "",
                        "data-bank": "Tata Capital",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2005",
                        "data-interest-rate-range": "8.40,8.45",
                        "data-popularity": "4.0",
                        "data-show-quotes": "",
                        "data-interest-rate-filter": "",
                        "data-bank": "Kotak Mahindra",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2114",
                        "data-interest-rate-range": "9.35,10.50",
                        "data-popularity": "4.0",
                        "data-show-quotes": "No pre-closure fees",
                        "data-interest-rate-filter": "",
                        "data-bank": "YES BANK",
                        "data-processing-fee-range": "0,11500",
                        "data-interest-rate-type": ""
                    },
                    {
                        "value": "2064",
                        "data-interest-rate-range": "8.9,9.25",
                        "data-popularity": "0.0",
                        "data-show-quotes": "No pre-closure fees",
                        "data-interest-rate-filter": "",
                        "data-bank": "Jammu and Kashmir Bank",
                        "data-processing-fee-range": "1250,10000",
                        "data-interest-rate-type": ""
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Home Loan');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('home-loan').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .home {
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