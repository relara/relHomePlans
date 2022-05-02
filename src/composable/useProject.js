import { ref } from 'vue';
import axios from "axios";

const projects = ref([]);

const api = axios.create({
    baseURL: "https://api.adviceslip.com/advice",
});

const getRamdonProject = async () => {
    const response = await api.get();
    if (response.status === 200) {
        projects.value.push(response.data.slip);
    }
};
export const useProject = () => {
    getRamdonProject();
    return { projects };
};
