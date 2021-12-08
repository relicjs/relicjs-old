import { daisyui } from '$lib/config';

export default {
    options: {
        // Default options for Svelte Toast: zerodevx.github.io/svelte-toast/
        reversed: true,
        intro: { y: 192 },
        pausable: true
    },
    theme: {
        success: {
            background: '#F00',
            barBackground: daisyui.success,
            color: '#FFF'
        },
        warning: {
            background: daisyui.warning,
            barBackground: daisyui.warning,
            color: '#FFF'
        },
        error: {
            background: daisyui.error,
            barBackground: daisyui.error,
            color: '#FFF'
        },
        info: {
            background: daisyui.info,
            barBackground: daisyui.info,
            color: '#FFF'
        }
    }
}