<template>
<v-app id="inspire">
        <v-content>
    <v-container fluid fill-height>
        <v-form v-model="valid">
            <h3 v-if="display!=null">Your Estimated Credit Score is: {{display}}</h3>
        <table width="100%">
            <tr class="grey lighten-1">
                <td width="75%" class="table_text">Age (years) </td>
                <td width="25%">
                    <input type="text" name="age1" class="fields" v-model="age" :rules="emptyValue" required>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Marital Status
                </td>
                <td>
                    <select name="Marital" v-model="maritalStatus" :rules="emptyValue" required>
                        <option disabled value="">Please select one</option>
                        <option value="5">Single</option>
                        <option value="30">Married</option>
                        <option value="15">Living with a partner</option>
                        <option value="16">Widowed</option>
                        <option value="10">Divorced / Separated</option>
                    </select>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Children</td>
                <td>
                    <select name="Children" v-model="children" :rules="emptyValue" required>
                        <option disabled value="">Please select one</option>
                        <option value="25">Yes</option>
                        <option value="0">No</option>

                    </select>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Residential Status </td>
                <td>
                    <select name="Residential" v-model="residentialStatus" :rules="emptyValue" required>
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
            <tr class="grey lighten-1">
                <td class="table_text">Time at address (years)</td>
                <td>
                    <input type="text" name="time1" class="fields" value="1" v-model="timeAtAddress" :rules="emptyValue" required>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Are you on the electoral register?</td>
                <td>
                    <select name="electoral" v-model="electoralRegister" :rules="emptyValue" required>
                        <option disabled value="">Please select one</option>
                        <option value="0" >Yes</option>
                        <option value="-120">No</option>
                    </select>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Home landline </td>
                <td>
                    <select name="landline" v-model="landline" :rules="emptyValue" required>
                        <option disabled value="">Please select one</option>
                        <option value="30">Yes</option>
                        <option value="0">No</option>
                    </select>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Annual Gross Income (Including benefits) </td>
                <td>
                    <input type="text" name="salary" class="fields" v-model="annualIncome" :rules="emptyValue" required>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Time with employer</td>
                <td>
                    <select name="employer" v-model="timeEmployed" :rules="emptyValue" required>
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
            <tr class="grey lighten-1">
                <td class="table_text">Time with your bank </td>
                <td>
                    <select name="banktime" v-model="timeBank" :rules="emptyValue" required>
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
            <tr class="grey lighten-1">
                <td class="table_text">How many Credit Cards ? </td>
                <td>
                    <input type="text" name="creditcards" class="fields" v-model="creditCards" :rules="emptyValue" required>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">What is your total estimated available credit limit
                    <span class="gensmall style9">(on all cards and loans - excluding mortgages</span>
                    <span class="style9">)</span>? </td>
                <td>
                    <input type="text" name="creditlimit" class="fields" v-model="creditLimit" :rules="emptyValue" required>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">What is your total estimated outstanding debt
                    <span class="postbody">(on your credit cards &amp; Loans - excluding mortgage)</span>
                </td>
                <td>
                    <input type="text" name="creditloans" class="fields" v-model="debt" :rules="emptyValue" required>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Current / cheque account</td>
                <td>
                    <select name="cheque" v-model="hasAccount" :rules="emptyValue" required>
                        <option disabled value="">Please select one</option>
                        <option value="50" >Yes</option>
                        <option value="0">No</option>
                    </select>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="grey lighten-1">Court Judgement (last 6 yrs)</td>
                <td>
                    <select name="court" v-model="court" :rules="emptyValue" required>
                        <option disabled value="">Please select one</option>
                        <option value="0" >Yes</option>
                        <option value="135">No</option>
                    </select>
                </td>
            </tr>
            <tr class="grey lighten-1">
                <td class="table_text">Credit Account(s) conduct</td>
                <td>
                    <select name="conduct" v-model="conduct">
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
        </v-content>
</v-app>
</template>

<script>
import http from "../services/http";
import router from "../router";
export default {
  name: "CreditScore",
  data() {
    return {
        emptyValue: [
            (v) => v == '' ? "Value req" : true
        ],
      display: null,
      valid: true,
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
  methods: {
    calculate() {

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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
