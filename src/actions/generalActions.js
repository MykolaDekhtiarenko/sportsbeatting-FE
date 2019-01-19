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