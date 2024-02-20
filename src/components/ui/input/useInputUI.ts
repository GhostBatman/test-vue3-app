import {ref, computed, Ref} from 'vue';
import {ValidateError} from 'async-validator';
type Props = {
    errors: Array<ValidateError>
}

export const useInputUI = (props: Props) => {
    const touched = ref(false);

    const onKeyup = () => {
        touched.value = true;
    };

    const showError = computed((): boolean => {
        return Boolean(touched.value && props.errors?.length);
    });

    const errorText = computed(() => {
        return showError.value ? props.errors[0].message : '';
    });

    return { touched, showError, errorText, onKeyup, newErrors: props.errors };
};
