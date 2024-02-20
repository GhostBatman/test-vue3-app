import {reactive} from 'vue';
import type {Rules} from 'async-validator';
import {useMainStore} from '../../../store/mainStore.ts';
import {useRouter} from 'vue-router';


export type FormType = {
    email: string,
    name: string,
    phone: string,
};
export const useFormFeature = () => {
    const {sendTest} = useMainStore();
    const router = useRouter();
    const form = reactive<FormType>({
        email: '',
        name: '',
        phone: '',
    });

    const rules: Rules = {
        name: {
            type: 'string',
            min: 5,
            required: true,
        },
        email: {
            type: 'email',
            required: true,
        },
        phone: {
            type: 'string',
            required: true,
        },
    };

    const submitForm = async() => {
        const {email, name, phone} = form;
        const params = {email, name, phone: phone.replace(/\D/g, '')};
        const result = await sendTest(params);
        const routeName = result ? 'SuccessView' : 'FailView'
        await router.push({name: routeName});
    };

    return {form, rules, submitForm};
};
