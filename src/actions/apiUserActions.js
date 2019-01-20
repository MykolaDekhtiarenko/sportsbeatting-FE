import axios from "axios";

export function wagersRequest(authHeader){
    const url = "http://localhost:8080/api/users/me/wagers";

    return dispatch => {
        return axios.get(url, {
            headers: {
                "Authorization": authHeader
            }
        });
    }

}

export function deleteWagerRequest(authHeader, wagerId){
    const url = "http://localhost:8080/api/users/me/wagers/"+wagerId;

    return dispatch => {
        return axios.delete(url, {
            headers: {
                "Authorization": authHeader
            }
        });
    }

}

export function getUserRequest(authHeader) {
    const signInUrl = "http://localhost:8080/api/users/me/profile";

    return dispatch => {
        return axios.get(signInUrl, {
            headers: {
                "Authorization": authHeader
            }
        });
    }
}

export function updateUserInfo(authHeader, userData) {
    const signInUrl = "http://localhost:8080/api/users";

    return dispatch => {
        return axios.put(signInUrl, userData, {
            headers: {
                "Authorization": authHeader
            }
        });
    }
}

