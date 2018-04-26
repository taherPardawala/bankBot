<template>
    <div class="create-account">
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-select :items="banks" v-model="bankName" label="Select Bank Name" single-line :rules="[v => !!v || 'Item is required']" required></v-select>
            <v-text-field label="First Name" v-model="firstname" :rules="nameRules" :counter="20" required></v-text-field>
            <v-text-field label="Last Name" v-model="lastname" :rules="nameRules" :counter="20" required></v-text-field>
            <v-text-field label="Middle Name" v-model="middlename" :rules="nameRules" :counter="20" required></v-text-field>
            <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
            <!-- Filer -->
            <v-text-field label="Adhar Number" v-model="adharNumber" type="number" :rules="adharRules" :counter="12" required></v-text-field>
            <h3>Upload Scan copy of Adhar</h3>
            <input type="file" @change="onAdharChange" accept="image/jpeg" name="adharImage" value="Adhar Image" required/>
            <!-- Filer -->
            <v-text-field label="Pan Number" v-model="panNumber" type="text" :rules="panRules" :counter="10" required></v-text-field>
            <h3>Upload Scaned Copy of Pan</h3>
            <input type="file" @change="onPanChange" accept="image/jpeg" name="panImage" value="Pan Image" required/>
            <br>
            <br>
            <v-btn @click="submit" :disabled="!valid">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
        <br>
    </div>
</template>

<script>
    import http from '../../../services/http'
    import axios from 'axios'
    export default {
        data() {
            return {
                valid: true,
                firstname: '',
                lastname: '',
                middlename: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 20) || 'Name must be less than 20 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                adharRules: [
                    v => !!v || 'Aadhar Number is required',
                    v => /^[0-9]{12}$/.test(v) || 'Aadhar number must must be valid'
                ],
                panRules: [
                    v => !!v || 'Pan Number is required',
                    v => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v) || 'Pan number must be valid'
                ],
                adharNumber: '',
                panNumber: '',
                adharImage: null,
                panImage: null,
                bankName: null,
                banks: []
            }
        },
        methods: {
            async init(){
                let result = await http.getBankNames();
                if (result.length > 0) {
                    this.banks = result.reduce((acc,next)=>{
                        acc.push(next.name);
                        return acc;
                    },[]);
                    console.log(this.banks);
                }
            },
            async submit() {
                if (this.adharImage != null && this.panImage != null) {
                    let result = await http.createSavingsAccount({
                        adharNumber: this.adharNumber,
                        panNumber: this.panNumber,
                        email: this.email,
                        bankName: this.bankName,
                        firstname: this.firstname,
                        lastname: this.lastname,
                        middlename: this.middlename
                    }, {
                        adharImage: this.adharImage,
                        panImage: this.panImage
                    })
                    if(result.ok) {
                        console.log(result);
                        alert('Your Referrence Number is '+result.refNo);
                        this.$refs.form.reset()
                        this.init();
                    } else {
                        alert('We could not complete your request at the moment');
                        this.$refs.form.reset()
                        this.init();
                    }
                } else {
                    alert('Upload image to submit');
                }
            },
            clear() {
                this.$refs.form.reset();
                this.init();
            },
            onAdharChange(e) {
                this.adharImage = e.target.files[0];;
                var file = e.target.files[0];
            },
            onPanChange(e) {
                this.panImage = e.target.files[0];
            },
        },
        async created() {
            this.init();
        }
    }
</script>

<style scoped>
    .create-account {
        padding-right: 5%;
        padding-left: 5%;
        padding-bottom: 5%;
    }
</style>