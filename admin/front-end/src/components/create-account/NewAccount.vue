<template>
    <div class="create-account">
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="First Name" v-model="firstname" :rules="nameRules" :counter="20" required></v-text-field>
            <v-text-field label="Last Name" v-model="lastname" :rules="nameRules" :counter="20" required></v-text-field>
            <v-text-field label="Middle Name" v-model="middlename" :rules="nameRules" :counter="20" required></v-text-field>
            <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
            <!-- Filer -->
            <v-text-field label="Adhar Number" v-model="adharNumber" type="number" :counter="16" required></v-text-field>
            <h3>Upload Scan copy of Adhar</h3>
            <input type="file" @change="onFileChange()" accept="image/jpeg" name="adharImage" value="Adhar Image" />
            <!-- Filer -->
            <v-text-field label="Pan Number" v-model="panNumber" type="number" :counter="16" required></v-text-field>
            <h3>Upload Scaned Copy of Pan</h3>
            <input type="file" @change="onFileChange" accept="image/jpeg" name="panImage" value="Pan Image" />
            <br>
            <br>
            <v-btn @click="submit" :disabled="!valid">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
        <br>
    </div>
</template>

<script>
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
                adharNumber: '',
                panNumber: '',
                adharImage: null,
                panImage: null
            }
        },
        methods: {
            submit() {},
            clear() {
                this.$refs.form.reset()
            },
            onFileChange(e) {
                var files = e.target.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    console.log(e.target.result)
                    this.embedImage = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        created() {
            this.$emit('title', 'Create Bank Account');
        }
    }
</script>

<style scoped>
    .create-account {
        margin-top: 60px;
        padding-right: 5%;
        padding-left: 5%;
        padding-bottom: 5%;
    }
</style>