<template>
    <div id="car-loan" class="car">
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
                    <div class="col col-4" data-label="Loan Amount">20k min</div>
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
                        "value": "6044",
                        "data-show-quotes": "No pre-closure fees",
                        "data-bank": "Dena Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.0",
                        "data-processing-fee-range": "575,575",
                        "data-interest-rate-range": "9.05,9.05"
                    },
                    {
                        "value": "6064",
                        "data-show-quotes": "No pre-payment fee",
                        "data-bank": "Jammu and Kashmir Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "575,575",
                        "data-interest-rate-range": "9.55,9.6"
                    },
                    {
                        "value": "60641",
                        "data-show-quotes": "",
                        "data-bank": "Jammu and Kashmir Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "12.05,12.25"
                    },
                    {
                        "value": "60642",
                        "data-show-quotes": "Special offer for women",
                        "data-bank": "Jammu and Kashmir Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "575,575",
                        "data-interest-rate-range": "9.3,9.35"
                    },
                    {
                        "value": "6050",
                        "data-show-quotes": "",
                        "data-bank": "Federal Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.0",
                        "data-processing-fee-range": "1500,2500",
                        "data-interest-rate-range": "9.75,9.80"
                    },
                    {
                        "value": "6008",
                        "data-show-quotes": "",
                        "data-bank": "Allahabad Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "9,9.05"
                    },
                    {
                        "value": "6018",
                        "data-show-quotes": "",
                        "data-bank": "Bank of India",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.5",
                        "data-processing-fee-range": "500,500",
                        "data-interest-rate-range": "9.25,9.3"
                    },
                    {
                        "value": "6020",
                        "data-show-quotes": "",
                        "data-bank": "Bank of Maharashtra",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "8.95,9"
                    },
                    {
                        "value": "6032",
                        "data-show-quotes": "",
                        "data-bank": "Canara Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "1000,5000",
                        "data-interest-rate-range": "8.60,9.25"
                    },
                    {
                        "value": "6034",
                        "data-show-quotes": "",
                        "data-bank": "Central Bank of India",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "8.70,8.75"
                    },
                    {
                        "value": "6058",
                        "data-show-quotes": "",
                        "data-bank": "IDBI",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.5",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "9.10,9.15"
                    },
                    {
                        "value": "6060",
                        "data-show-quotes": "",
                        "data-bank": "Indian Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.0",
                        "data-processing-fee-range": "10191,10191",
                        "data-interest-rate-range": "9.95,10"
                    },
                    {
                        "value": "6096",
                        "data-show-quotes": "",
                        "data-bank": "SBI",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.5",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "9.10,9.35"
                    },
                    {
                        "value": "6108",
                        "data-show-quotes": "",
                        "data-bank": "Union Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "5.0",
                        "data-processing-fee-range": "0,15000",
                        "data-interest-rate-range": "8.70,8.75"
                    },
                    {
                        "value": "6010",
                        "data-show-quotes": "No pre-payment fee",
                        "data-bank": "Andhra Bank",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.5",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "9.2,9.25"
                    },
                    {
                        "value": "60573",
                        "data-show-quotes": "",
                        "data-bank": "L&amp;T Finance Limited",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.0",
                        "data-processing-fee-range": "200,200",
                        "data-interest-rate-range": "16,17"
                    },
                    {
                        "value": "60831",
                        "data-show-quotes": "",
                        "data-bank": "Reliance Commercial Finance",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.0",
                        "data-processing-fee-range": "5175,18750",
                        "data-interest-rate-range": "16.00,16.05"
                    },
                    {
                        "value": "60961",
                        "data-show-quotes": "",
                        "data-bank": "SBI",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.5",
                        "data-processing-fee-range": "0,0",
                        "data-interest-rate-range": "9.25,9.30"
                    },
                    {
                        "value": "6114",
                        "data-show-quotes": "",
                        "data-bank": "YES BANK",
                        "data-interest-rate-filter": "",
                        "data-interest-rate-type": "",
                        "data-popularity": "4.5",
                        "data-processing-fee-range": "5000,10000",
                        "data-interest-rate-range": "10.25,12.25"
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Car Loan');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('car-loan').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .car {
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