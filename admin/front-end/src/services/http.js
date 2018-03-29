import axios from 'axios';
import store from '@/vuex';

// const baseUri = window.location.protocol+"//"+window.location.host; //production url
const baseUri = 'http://localhost:5000';

export default {
    login: (userdata) => {
        // NOTE => userdata :{id:<user_id>,password:<user_password>}
        return axios.post(baseUri + '/auth/v0.1/user/login', { user: userdata })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    signupUser: (userdata) => {
        return axios.post(baseUri + '/auth/v0.1/createUser', { user: userdata })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getProfile: () => {
        return axios.get(baseUri + '/user/v0.1/getProfile', {
            headers: {
                auth: store.getters.auth
            }
        }).then(function (response) {
            console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error)
        })
    },
    updateProfile: (update) => {
        return axios.post(baseUri + '/user/v0.1/updateProfile', { update: update }, {
            headers: {
                auth: store.getters.auth
            }
        })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
}
