import { toast } from '@zerodevx/svelte-toast';
import toastConfig from '$lib/config/plugins/toast';

const globalOptions = toastConfig.options;

export default (type:string, message:string, options:any = {}):void => {
    console.log('vai carai')
    toast.push(message, {...globalOptions, ...options, ...{ theme: {
        '--toastBackground': '#F00',
        '--toastBarBackground': '#F00',
        '--toastColor': '#FFF'
    }}});
}