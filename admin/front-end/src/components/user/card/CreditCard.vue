<template>
    <div>
        <div id="credit" class="credit">
            <div class="container">
                <ul class="responsive-table">
                    <li class="table-header">
                        <div class="col col-1">Insurance Provider</div>
                        <div class="col col-2">Grieviences Solved</div>
                        <div class="col col-3">Claim Settlement</div>
                        <div class="col col-4">Max Cover</div>
                        <div class="col col-5">New Buisness Premium</div>
                        <div class="col col-6">Max MaurityAge</div>
                    </li>
                    <li class="table-row" v-for="(item, key) in data" :key=key>
                        <div class="col col-1" data-label="Job Id">{{item.insuranceProvider}}</div>
                        <div class="col col-2" data-label="Customer Name">{{item.grieviencesSolved}}</div>
                        <div class="col col-3" data-label="Amount">{{item.claimSettlement}}</div>
                        <div class="col col-4" data-label="Payment Status">{{item.maxCover}}</div>
                        <div class="col col-5" data-label="Payment Status">{{item.newBuisnessPremium}}</div>
                        <div class="col col-6" data-label="Payment Status">{{item.maxMaurityAge}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div>
            <v-layout row justify-center>
                <v-tooltip left>
                    <v-btn class="position" color="primary" dark fab slot="activator" @click="redirect">
                        <v-icon>chat</v-icon>
                    </v-btn>
                    <span>Set an appointment!</span>
                </v-tooltip>
            </v-layout>
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                        "insuranceProvider": "ICICI Prudential Life Insurance  ",
                        "grieviencesSolved": "99.96% ",
                        "claimSettlement": "96.68% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "6765.75 Crs",
                        "maxMaurityAge": "75 Years"
                    },
                    {
                        "insuranceProvider": "PNB Metlife Insurance  ",
                        "grieviencesSolved": "98.41%",
                        "claimSettlement": "87.14% ",
                        "maxCover": "10 crores  ",
                        "newBuisnessPremium": "1003.71 Crs",
                        "maxMaurityAge": "75 Years"
                    },
                    {
                        "insuranceProvider": "Aegon Life Insurance  ",
                        "grieviencesSolved": "100.00%",
                        "claimSettlement": "97.11% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "136.33Crs",
                        "maxMaurityAge": "80 Years"
                    },
                    {
                        "insuranceProvider": "HDFC Life Insurance  ",
                        "grieviencesSolved": "99.89%",
                        "claimSettlement": "97.62% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "6487.22 Crs",
                        "maxMaurityAge": "75 Years"
                    },
                    {
                        "insuranceProvider": "Max Life Insurance  ",
                        "grieviencesSolved": "100.00%",
                        "claimSettlement": "97.81% ",
                        "maxCover": "100 crores ",
                        "newBuisnessPremium": "2881.71 Crs",
                        "maxMaurityAge": "75 Years"
                    },
                    {
                        "insuranceProvider": "Bajaj Allianz Life Insurance  ",
                        "grieviencesSolved": "100.00%",
                        "claimSettlement": "91.67% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "2884.52 Crs",
                        "maxMaurityAge": "75 Years"
                    },
                    {
                        "insuranceProvider": "Birla Sun Life Insurance  ",
                        "grieviencesSolved": "99.84% ",
                        "claimSettlement": "94.69% ",
                        "maxCover": "10 crores ",
                        "newBuisnessPremium": "2220.31 Crs",
                        "maxMaurityAge": "80Years"
                    },
                    {
                        "insuranceProvider": "Edelweiss Tokio Life Insurance  ",
                        "grieviencesSolved": "100.00% ",
                        "claimSettlement": "93.29% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "183.59 Crs",
                        "maxMaurityAge": "80Years"
                    },
                    {
                        "insuranceProvider": "Future Generali Life Insurance  ",
                        "grieviencesSolved": "99.70% ",
                        "claimSettlement": "89.53% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "255.59 Crs",
                        "maxMaurityAge": "75Years"
                    },
                    {
                        "insuranceProvider": "SBI Life Insurance  ",
                        "grieviencesSolved": "99.98%",
                        "claimSettlement": "96.69% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "7106.58 Crs",
                        "maxMaurityAge": "70 Years"
                    },
                    {
                        "insuranceProvider": "Aviva Life Insurance.  ",
                        "grieviencesSolved": "100.00%",
                        "claimSettlement": "90.60% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "320.80 Crs",
                        "maxMaurityAge": "70 Years"
                    },
                    {
                        "insuranceProvider": "Bharti AXA Life Insurance  ",
                        "grieviencesSolved": "99.82%",
                        "claimSettlement": "92.37% ",
                        "maxCover": "50 crores ",
                        "newBuisnessPremium": "539.49 Crs",
                        "maxMaurityAge": "75 Years"
                    },
                    {
                        "insuranceProvider": "IDBI Federal Life Insurance  ",
                        "grieviencesSolved": "100.00% ",
                        "claimSettlement": "90.33% ",
                        "maxCover": "30 crores  ",
                        "newBuisnessPremium": "588.40 Crs",
                        "maxMaurityAge": "80 Years"
                    },
                    {
                        "insuranceProvider": "Reliance Life Insurance ",
                        "grieviencesSolved": "99.98%",
                        "claimSettlement": "96.69% ",
                        "maxCover": "No upper limit ",
                        "newBuisnessPremium": "1558.33 Crs",
                        "maxMaurityAge": "75 Years"
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Credit Cards');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('credit').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
            // console.log(window.getComputedStyle(document.getElementById('hello')).marginTop);
        }
    }
</script>

<style scoped>
    .credit {
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