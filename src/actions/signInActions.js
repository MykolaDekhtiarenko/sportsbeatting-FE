import axios from "axios";


export function userSignInRequest(authHeader) {
    const signInUrl = "http://localhost:8080/api/users/me/profile";

    return dispatch => {
        return axios.get(signInUrl, {
            headers: {
                "Authorization": authHeader
            }
        });
    }
}