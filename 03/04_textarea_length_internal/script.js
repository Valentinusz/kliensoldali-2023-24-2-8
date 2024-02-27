class TextareaWithLength extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#textarea-length');
    static formAssociated = true;

    constructor() {
        super();

        const internals = this.attachInternals();

        console.log(internals);

        const shadow = this.attachShadow({mode: 'closed'});

        shadow.append(TextareaWithLength.#template.content.cloneNode(true));

        const textarea = shadow.querySelector('textarea');
        const infoSpan = shadow.querySelector('span');

        const countSpan = infoSpan.querySelector('span');

        textarea.addEventListener('input', () => {
            countSpan.innerText = textarea.value.length;

            infoSpan.classList.toggle('error', textarea.value.length > 32);

            internals.setFormValue(textarea.value)
        })
    }
}

customElements.define('textarea-length', TextareaWithLength);

/*

import css

logika
struktúra

<style>
</style>

<script>
</script>

<template>
</template>
*/