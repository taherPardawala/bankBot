<template>
    <div id="used-car" class="usedcar">
        <!-- v-layout row justify-center>
                <v-tooltip left>
                <v-btn class="position" color="primary" dark fab slot="activator" @click="redirect">
                    <v-icon>chat</v-icon>
                </v-btn>
                <span>Set an appointment!</span>            
                </v-tooltip>
        </v-layout -->
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
                    <div class="col col-1" data-label="Bank">{{item.bankname}}</div>
                    <div class="col col-2" data-label="Interest Rate">{{item.interestrate}}</div>
                    <div class="col col-3" data-label="Processing Fee">{{item.processingfee}}</div>
                    <div class="col col-4" data-label="Loan Amount">{{item.loanAmountRange}}</div>
                    <div class="col col-5" data-label="Tenure">{{item.tenure}}</div>
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
                        "bankname": "SUNDARAM FINANCE",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "DENA BANK ",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "HDFC BANK",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "MAHAVEER FINANCE INDIA LIMITED",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "TVS CREDIT SERVICES",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "AU SMALL FINANCE BANK",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "CAPITAL FIRST ",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    },
                    {
                        "bankname": "ORIENTAL BANK OF COMMERCE",
                        "interestrate": "12% - 14%",
                        "loanAmountRange": "1L Min",
                        "tenure": "1-3 Years",
                        "processingfee": "2,500"
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Used Car Loan');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('used-car').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .usedcar {
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