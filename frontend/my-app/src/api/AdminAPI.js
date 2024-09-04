import axios from 'axios';
import requestConfigJson from './requestConfigJson';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

class AdminAPI {
    static adminLogin(values) {
        return axios.post(`${BASE_URL}/api/admin/login`, values, requestConfigJson);
    }

    static adminSignup(values) {
        return axios.post(
            `${BASE_URL}/api/admin/singup`,
            values,
            requestConfigJson
        );
    }
}

export default AdminAPI;