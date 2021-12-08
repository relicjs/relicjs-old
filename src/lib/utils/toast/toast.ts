import { toast } from '@zerodevx/svelte-toast';
import toastConfig from '$lib/config/plugins/toast';

const theme = toastConfig.theme;
const globalOptions = toastConfig.options;

export default (type:string, message:string, options:any = {}):void => {
    toast.push(message, {...globalOptions, ...options, ...{ theme: {
        '--toastBackground': theme[type].background,
        '--toastBarBackground': theme[type].barBackground,
        '--toastColor': theme[type].color
    }}});
}