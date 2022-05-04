import { ref } from "vue";
import axios from "axios";

const advices = ref([]);

const api = axios.create({
    baseURL: "https://api.adviceslip.com/advice",
});

const getRandomProject = async () => {
    const response = await api.get();
    if (response.status === 200) {
        advices.value = [response.data.slip];
    }
};

export const useAdvice = () => {
    getRandomProject();
    const search = async (searchItem) => {
        const response = await api.get('search/$(searchItem)');

        if (response.status === 200) {
            advices.value = response.data.slip;
        }
    };
    return { advices, search };
};
//export default useProject;