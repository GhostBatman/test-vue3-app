import {defineStore} from 'pinia';
import apiClient from '../api';
import {FormType} from '../components/features/Form/useFormFeature.ts';

export const useMainStore = defineStore('mainStore', () => {
    const sendTest = async(params: FormType): Promise<boolean> => {
        try {
            const res = await apiClient.post('test/post', params);
            return res?.data?.success || false;
        } catch (e) {
            return false;
        }
    };

    return {sendTest};
});
