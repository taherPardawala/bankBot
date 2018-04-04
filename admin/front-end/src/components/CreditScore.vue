<template>
<v-app id="inspire">
    <v-container fluid fill-height class="myCSS">
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-card tile style="padding:50px;">
            <v-card-text>
                <h3 v-if="display!=null">Your Estimated Credit Score is: {{display}}</h3>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
            <v-btn id="close" color="light-blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
        <v-form>
        <table width="100%">
            <tr class="light-blue darken-1">
                <th style="color:white;">Questions</th>
                <th style="color:white;">Choices</th>
            </tr>
            <tr class="light-blue lighten-4">
                <td width="75%" class="table_text">Age (years) </td>
                <td width="25%" style="text-align: center;" >
                    <input size=40 type="text" name="age1" class="fields" v-model="age" required>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Marital Status
                </td>
                <td style="text-align: center;">
                    <select name="Marital" v-model="maritalStatus"  required>
                        <option disabled value="">Please select one</option>
                        <option value="5">Single</option>
                        <option value="30">Married</option>
                        <option value="15">Living with a partner</option>
                        <option value="16">Widowed</option>
                        <option value="10">Divorced / Separated</option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Children</td>
                <td>
                    <select name="Children" v-model="children"  required>
                        <option disabled value="">Please select one</option>
                        <option value="25">Yes</option>
                        <option value="0">No</option>

                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Residential Status </td>
                <td>
                    <select name="Residential" v-model="residentialStatus"  required>
                        <option disabled value="">Please select one</option>
                        <option value="95" >House Owner </option>
                        <option value="60">Flat Owner </option>
                        <option value="20">Living with Parents </option>
                        <option value="25">Council Tenant </option>
                        <option value="28">Tenant Unfurnished </option>
                        <option value="5">Other </option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Time at address (years)</td>
                <td style="text-align: center;"> 
                    <input size=40 type="text" name="time1" class="fields" value="1" v-model="timeAtAddress"  required>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Are you on the electoral register?</td>
                <td>
                    <select name="electoral" v-model="electoralRegister"  required>
                        <option disabled value="">Please select one</option>
                        <option value="0" >Yes</option>
                        <option value="-120">No</option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Home landline </td>
                <td>
                    <select name="landline" v-model="landline"  required>
                        <option disabled value="">Please select one</option>
                        <option value="30">Yes</option>
                        <option value="0">No</option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Annual Gross Income (Including benefits) </td>
                <td style="text-align: center;">
                    <input size=40 type="text" name="salary" class="fields" v-model="annualIncome"  required>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Time with employer</td>
                <td>
                    <select name="employer" v-model="timeEmployed"  required>
                        <option disabled value="">Please select one</option>
                        <option value="-50" >Unemployed </option>
                        <option value="30">Less than 6 months </option>
                        <option value="50">7 months to 1 year </option>
                        <option value="70">1 to 2 years </option>
                        <option value="85">2 to 5 years </option>
                        <option value="100">Over 5 years </option>
                        <option value="48">Retired </option>
                        <option value="0">Other </option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Time with your bank </td>
                <td>
                    <select name="banktime" v-model="timeBank"  required>
                        <option disabled value="">Please select one</option>
                        <option value="10" >Less than 6 months </option>
                        <option value="15">7 months to 1 year </option>
                        <option value="30">1 to 2 years </option>
                        <option value="45">2 to 5 years </option>
                        <option value="60">5 to 10 years </option>
                        <option value="75">Over 10 years </option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">How many Credit Cards ? </td>
                <td style="text-align: center;">
                    <input size=40 type="text" name="creditcards" class="fields" v-model="creditCards"  required>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">What is your total estimated available credit limit
                    <span class="gensmall style9">(on all cards and loans - excluding mortgages</span>
                    <span class="style9">)</span>? </td>
                <td style="text-align: center;">
                    <input size=40 type="text" name="creditlimit" class="fields" v-model="creditLimit"  required>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">What is your total estimated outstanding debt
                    <span class="postbody">(on your credit cards &amp; Loans - excluding mortgage)</span>
                </td>
                <td style="text-align: center;"> 
                    <input size=40 type="text" name="creditloans" class="fields" v-model="debt"  required>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Current / cheque account</td>
                <td>
                    <select name="cheque" v-model="hasAccount"  required>
                        <option disabled value="">Please select one</option>
                        <option value="50" >Yes</option>
                        <option value="0">No</option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td>Court Judgement (last 6 yrs)</td>
                <td>
                    <select name="court" v-model="court"  required>
                        <option disabled value="">Please select one</option>
                        <option value="0" >Yes</option>
                        <option value="135">No</option>
                    </select>
                </td>
            </tr>
            <tr class="light-blue lighten-4">
                <td class="table_text">Credit Account(s) conduct</td>
                <td>
                    <select name="conduct" v-model="conduct" required>
                        <option disabled value="">Please select one</option>
                        <option value="150">I never miss a payment</option>
                        <option value="110">I sometimes pay late but never miss a payment</option>
                        <option value="40">I miss the occasional payment</option>
                        <option value="-25">I am or have been in arrears with at least 1 lender</option>
                        <option value="-75">I regularly miss payments on several accounts</option>
                        <option value="0">I don't have any credit accounts</option>
                    </select>
                </td>
            </tr>
        </table>
        <div align="center">
            <v-btn class="blue" @click="calculate">Calculate</v-btn>
        </div>
        </v-form>
    </v-container>
</v-app>
</template>

<script>
import http from "../services/http";
import router from "../router";
export default {
  name: "CreditScore",
  data() {
    return {
        dialog:false,
      display: null,
      age: "",
      maritalStatus: "",
      children: "",
      residentialStatus: "",
      timeAtAddress: "",
      electoralRegister: "",
      landline: "",
      annualIncome: "",
      timeEmployed: "",
      timeBank: "",
      creditCards: "",
      creditLimit: "",
      debt: "",
      hasAccount: "",
      court: "",
      conduct: ""
    };
  },
  created() {
        this.$emit('title', 'Credit Score');
    },
  methods: {
    calculate() {
        if(this.isEmpty(this.age) && this.isEmpty(this.maritalStatus) && this.isEmpty(this.children) && this.isEmpty(this.residentialStatus) && this.isEmpty(this.timeAtAddress) && this.isEmpty(this.electoralRegister) && this.isEmpty(this.landline) && this.isEmpty(this.annualIncome) && this.isEmpty(this.timeEmployed) && this.isEmpty(this.timeBank) && this.isEmpty(this.creditCards) && this.isEmpty(this.creditLimit) && this.isEmpty(this.debt) && this.isEmpty(this.hasAccount) && this.isEmpty(this.court) && this.isEmpty(this.conduct)){
            let score =
                Number(this.maritalStatus) +
                Number(this.children) +
                Number(this.residentialStatus) +
                Number(this.electoralRegister) +
                Number(this.landline) +
                Number(this.timeEmployed) +
                Number(this.timeBank) +
                Number(this.court) +
                Number(this.hasAccount);
            this.display = score;
            this.dialog = true;
        } else {
            alert("Please fill all the required fields");
        }
      
    },
    isEmpty(v){
        if(v == '') return false;
        else return true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    th, td {
    padding: 10px;
    text-align: left;
    }
    td select {
        display:block;
        width:100%;
    }
    .myCSS {
        margin-top: 60px;
        margin-bottom: 40px;
    }
</style>
