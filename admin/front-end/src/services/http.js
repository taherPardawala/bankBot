import axios from 'axios';
import store from '@/vuex';

// const baseUri = window.location.protocol+"//"+window.location.host; //production url
const baseUri = 'http://localhost:3000';

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
    getEmbededImage: () => {
        return axios.get(baseUri + '/embeddedImage/v0.1/generatedImage', {
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
    getImageGrid: () => {
        return axios.get(baseUri + '/imageGridAuth/v0.1/grid', {
            headers: {
                sessionid: store.getters.sessionId,
                userid: store.getters.sessionEmail
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
    signupAdmin: (userdata) => {
        return axios.post(baseUri + '/auth/v0.1/createDev', { user: userdata })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    apiKeyVerification: (key) => {
        return axios.post(baseUri + '/auth/v0.1/verifyApiKey', { key: key })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    verifyEmbededImage: (embededImage) => {
        return axios.post(baseUri + '/embeddedImageAuth/v0.1/authenticateEmbeddedImage', { image: embededImage, userId: store.getters.sessionEmail }, {
            headers: {
                sessionId: store.getters.sessionId
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
    verifyOTP: (otp) => {
        return axios.post(baseUri + '/authenticateTotp/v0.1/verifyOtp', { token: otp, userId: store.getters.sessionEmail }, {
            headers: {
                sessionId: store.getters.sessionId
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
    getAdminProfile: () => {
        return axios.get(baseUri + '/sudoAdmin/v0.1/getProfile', {
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
    updateAdminProfile: (update) => {
        return axios.post(baseUri + '/sudoAdmin/v0.1/updateProfile', { update: update }, {
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
    updateorUploadImage: (data)=> {
        return axios.post(baseUri + '/user/v0.1/uploadOrUpdateImage', { image: data }, {
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
    getImageGridSettings: () => {
        return axios.get(baseUri + '/user/v0.1/getImageGridSettings', {
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
    generateNewApiKey: () => {
        return axios.get(baseUri + '/sudoAdmin/v0.1/generateNewApiKey', {
            headers: {
                auth: store.getters.auth
            }
        }).then(function (response) {
            console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error)
        })
    }
}
