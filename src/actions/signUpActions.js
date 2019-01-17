import axios from "axios";

export function userSignUpRequest(data) {
    const signUpUrl = "http://localhost:8080/api/users";

    return dispatch => {
        return axios.post(signUpUrl, data);
    }
}
