<template>
    <div class="create-account">
        <v-tabs color="grey lighten-5" fixed-tabs>
            <v-tab href="#tab-1">
                New Account Form
            </v-tab>
            <v-tab-item id="tab-1">
                <new-account></new-account>
            </v-tab-item>
            <v-tab href="#tab-2">
                Account Status
            </v-tab>
            <v-tab-item id="tab-2">
                <check-status></check-status>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
    import NewAccount from './NewAccount';
    import AccountStatus from './AccountStatus';
    export default {
        data() {
            return {}
        },
        methods: {},
        created() {
            this.$emit('title', 'Create Bank Account');
        },
        components: {
            'new-account': NewAccount,
            'check-status': AccountStatus
        }
    }
</script>

<style scoped>
    .create-account {
        margin-top: 60px;
    }
</style>