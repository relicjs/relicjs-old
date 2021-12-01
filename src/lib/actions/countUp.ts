import { CountUp } from 'countup.js';

/**
 * # Usage
 * Code blocks are great for examples
 * 
 * <button class="btn">Hello world</button>
 *
 * # Example
 * ```typescript
 * // run typedoc --help for a list of supported languages
 * const instance = new MyClass();
 * ```
 */
function countUp(node, config) {
    const countUp = new CountUp(node, config.endVal, config.options ?? {});
    
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}

export { countUp };