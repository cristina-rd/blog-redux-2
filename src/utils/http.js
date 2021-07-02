import axios from "axios"

export const getRequest = async (url) => {
    try {
        return await axios.get(url);
    } catch (error) {
        throw error.response?.data;
    }
}