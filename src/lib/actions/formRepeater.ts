export default (node, target) => {
    function repeatNode() {
        const clone = node.cloneNode(true);
        node.parentNode.insertBefore(clone, node.nextSibling);
    }

    const button = document.querySelector(target);
    button.addEventListener('click', repeatNode);

    return {
		destroy() {
			button.removeEventListener('click', repeatNode);
		}
	};
}