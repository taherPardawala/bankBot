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
    getBankNames: () => {
        return axios.get(baseUri + '/user/v0.1/bankNames', {
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
    createSavingsAccount: (data, imageData) => {

        let formData = new FormData();
        formData.append('file', imageData.adharImage);
        let formData1 = new FormData();
        formData1.append('file', imageData.panImage);

        return axios.post(baseUri + '/fileop/v0.1/adhar', formData, {
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            }
        })
            .then(function (response) {
                if (response.data.ok) {
                    data.adharImageFileName = response.data.fileName;

                    axios.post(baseUri + '/fileop/v0.1/pan', formData1, {
                        headers: {
                            'Cache-Control': 'no-cache',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                        }
                    })
                        .then(function (response) {
                            if (response.data.ok) {
                                data.panImageFileName = response.data.fileName;
                                
                                axios.post(baseUri + '/user/v0.1/createSavingsAccount', { data: data }, {
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
                            } else {
                                return { ok: false }
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                } else {
                    return { ok: false }
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    },
    getSavingsApplications: () => {
        return axios.get(baseUri + '/bank/v0.1/savingsApplications', {
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
    getAppointments: () => {
        return axios.get(baseUri + '/bank/v0.1/appointments', {
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
    updateSavingsAccountStatus: (refNo,update) => {
        return axios.post(baseUri + '/bank/v0.1/savingsApplications', { refNo:refNo,update: update }, {
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
    deleteSavingsAccountApplication: (update) => {
        return axios.delete(baseUri + '/bank/v0.1/savingsApplications', { refNo: update }, {
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
    deleteAppointment: (userId) => {
        return axios.delete(baseUri + '/bank/v0.1/appointments', { userId: userId }, {
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
    postFile: (id) => {
        
        return axios.post(baseUri + '/fileop/v0.1/getFile', { id: id },{responseType:'stream'})
    },

}
