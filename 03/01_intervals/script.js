// const template = document.createElement('template');

// template.innerHTML = `
//     <style>
//         .error {
//             border-color: darkred;
//         }
//     </style>

//     <input type="date" name="datum[]">
//     <input type="time" name="tol[]">
//     <input type="time" name="ig[]">
//     </template>
// `

class IntervalInput extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#interval-template');

    constructor() {
        super();

        // const dateInput = document.createElement('input');
        // dateInput.type = 'date';
        // data
        this.append(IntervalInput.#template.content.cloneNode(true))

        const from = this.querySelector('input[name="tol[]"]');
        const to = this.querySelector('input[name="ig[]"]');


        this.addEventListener('input', () => {
            const error = to.value !== "" && from.value !== "" && to.value <= from.value;

            from.classList.toggle('error', error);
            to.classList.toggle('error', error);
        })
    }
}

customElements.define('interval-input', IntervalInput);

class IntervalInputGroup extends HTMLElement {
    /**
     * @type {HTMLTemplateElement}
     */
    static #template = document.querySelector('template#interval-group-template');

    constructor() {
        super();

        // const dateInput = document.createElement('input');
        // dateInput.type = 'date';
        // data
        this.append(IntervalInputGroup.#template.content.cloneNode(true));

        this.querySelector('button').addEventListener('click', this.add);
    }

    add = () => {
        this.prepend(new IntervalInput())
    }
}


customElements.define('interval-input-group', IntervalInputGroup);