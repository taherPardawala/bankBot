<template>
    <div id="car" class="car">
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
                    <div class="col col-1">Insurance Provider</div>
                    <div class="col col-2">Third Party Cover</div>
                    <div class="col col-3">Cashless Network Garages</div>
                    <div class="col col-4">Claim Ratio</div>
                    <div class="col col-5">Special Features</div>
                    <div class="col col-6">Exclusions</div>
                </li>
                <li class="table-row" v-for="(item, key) in data" :key=key>
                    <div class="col col-1" data-label="Insurance Provider">{{item.insuranceProvider}}</div>
                    <div class="col col-2" data-label="Third Party Cover">{{item.thirdPartyCover}}</div>
                    <div class="col col-3" data-label="Cashless Network Garages">{{item.cashlessNetworkGarages}}</div>
                    <div class="col col-4" data-label="Claim Ratio">{{item.claimRatio}}</div>
                    <div class="col col-5" data-label="Special Features">{{item.specialFeatures}}</div>
                    <div class="col col-6" data-label="Exclusions">{{item.Exclusions}}</div>
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
                        "insuranceProvider": "Bajaj Allianz Car Insurance",
                        "thirdPartyCover": "Upto 7.25L for third party damage",
                        "cashlessNetworkGarages": "4000+",
                        "claimRatio": "69.19%",
                        "specialFeatures": "Quick, transparent and comprehensive claim settlement.Robust 24x7 expert customer support.",
                        "Exclusions": "Depreciation and any consequential loss.Damage/loss endured by vehicle when driven without a valid license."
                    },
                    {
                        "insuranceProvider": "Bharti Axa Car Insurance",
                        "thirdPartyCover": "Upto 7.25L for third party damage",
                        "cashlessNetworkGarages": "2,000+",
                        "claimRatio": "89.09%",
                        "specialFeatures": "24x7 Claim assistance.Two cover levels for specialised protection.",
                        "Exclusions": "Electrical and mechanical breakdown.Damage/loss when driving without valid license or when intoxicated."
                    },
                    {
                        "insuranceProvider": "Cholamandalam Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "3750+",
                        "claimRatio": "79.82%",
                        "specialFeatures": "24/7 help and assistance in case of an accident or a sudden breakdown.Seamless and hassle-free claims process.",
                        "Exclusions": "Loss due to war and related activities.Accidental damage or loss due to wilful negligence."
                    },
                    {
                        "insuranceProvider": "Future Generali Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "900+",
                        "claimRatio": "81.77%",
                        "specialFeatures": "Claim finalization in just 7 working days.Claims are acted upon quickly with instant surveys and claim settlement.",
                        "Exclusions": "Depreciation, consequential loss, mechanical or electrical breakdown.Vehicle being used against the guidelines laid down in the 'limitation as to use' agreement."
                    },
                    {
                        "insuranceProvider": "HDFC Ergo Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "3400+",
                        "claimRatio": "89.43%",
                        "specialFeatures": "Enjoy instant online policy issue.Quick and transparent policy application and approval procedures.",
                        "Exclusions": "Damage or loss encountered by the vehicle outside India.Damage to vehicle when driven under the influence of alcohol, drugs or other mood altering substances."
                    },
                    {
                        "insuranceProvider": "IFFCO Tokio Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "1200+",
                        "claimRatio": "84.37%",
                        "specialFeatures": "Quick digitally signed policy documents when purchased online, at POS units or IFFCO Tokio offices.Expert team of on-board surveyors for immediate response in case of claims.",
                        "Exclusions": "Consequential loss or loss/damage due to contractual liability.Damage and/or loss of car due to wars and other nuclear risks."
                    },
                    {
                        "insuranceProvider": "Liberty Videocon Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "900+",
                        "claimRatio": "77.29%",
                        "specialFeatures": "615+ network garages offer quick, hassle free and cashless service.Rapid claim settlement in just 7 working days.",
                        "Exclusions": "Mechanical and/or electrical malfunction and breakdown.Damage/loss caused when vehicle is driven by someone who isn't the designated owner or driver of the vehicle."
                    },
                    {
                        "insuranceProvider": "National Insurance",
                        "thirdPartyCover": "Upto 7.5 LAKHS for third property damage.",
                        "cashlessNetworkGarages": "NA",
                        "claimRatio": "84.16%",
                        "specialFeatures": "Third party coverage and damages/loss to one's own vehicle, co-passengers or self.Discount for approved anti-theft devices installed in the vehicle.",
                        "Exclusions": "Insurer is limited to 50% of the cost of replacement.Consequential loss,wear and tear,mechanical or electrical breakdown, failures or breakages."
                    },
                    {
                        "insuranceProvider": "New India Assurance Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "NA",
                        "claimRatio": "86.95%",
                        "specialFeatures": "Offered in two forms- Liability only policy and Package policy.Fast, hassle free and transparent claim process.",
                        "Exclusions": "Loss/damage to vehicle due to war, nuclear risks, civil war, etc.Use of the vehicle against the terms set in the 'Limitation as to Use' document."
                    },
                    {
                        "insuranceProvider": "Reliance Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "2300+",
                        "claimRatio": "91.39%",
                        "specialFeatures": "Unique option to maintain NCB even after a claim.24x7 Anywhere Assist, a complimentary roadside service, helps you through tricky roadside situations involving your vehicle.",
                        "Exclusions": "Damage to the car when driven without a valid license/ under influence of drugs, alcohol or other intoxicating substances.Damage/loss due to the depreciation of the vehicle's market value."
                    },
                    {
                        "insuranceProvider": "Royal Sundaram Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "3300+",
                        "claimRatio": "82.15%",
                        "specialFeatures": "Protect your car against damage and loss due to accident and theft.Get up to 50% No Claim Bonus / Transfer No Claim Bonus from other insurer.",
                        "Exclusions": "Damage caused by a person driving the car without a valid license.Mechanical/ electrical breakdown, Wear and tear, Depreciation or any consequential loss."
                    },
                    {
                        "insuranceProvider": "Tata Aig Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "2000+",
                        "claimRatio": "79.31%",
                        "specialFeatures": "Claim settlement will be done in less than 7 days.Warranty upto 6 months for accident-repairs.",
                        "Exclusions": "Depreciation, consequential loss, mechanical or electrical breakdown.Damage/loss when driving without valid license or when intoxicated."
                    },
                    {
                        "insuranceProvider": "Universal Sompo Car Insurance",
                        "thirdPartyCover": "Upto 7.5L for third party damage",
                        "cashlessNetworkGarages": "NA",
                        "claimRatio": "78.89%",
                        "specialFeatures": "Provision for No Claim Bonus (NCB) when no claim is raised through a specified duration.Special discounts on modified vehicles for the blind, handicapped and mentally challenged persons.",
                        "Exclusions": "Depreciation and consequential loss.Usage of the vehicle in sharp opposition to the terms laid out in the 'limitation as to use' document."
                    }
                ]
            }
        },
        created() {
            this.$emit('title', 'Car Insurance');
        },
        methods: {
            redirect() {
                window.location.href = 'https://www.facebook.com/BankBot-566352947071318/';
            }
        },
        mounted() {
            document.getElementById('car').style.marginTop = '' + document.getElementById('toolbar').offsetHeight + 'px';
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