// fonctions globales pouvant être utilisée depuis tout le site


/**
 * method to debounce an other method depending a delay param
 * @param method
 * @param delay
 */
let debounceTimeout = null;
function debounce(func, delay){
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
};