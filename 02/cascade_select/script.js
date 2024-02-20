class CascadeSelect extends HTMLElement {
    currentCategory;

    constructor() {
        super();
    }

    connectedCallback() {
        const select = this.querySelector('select');

        const optionGroups = select.children;

        const categorySelect = this.makeCategorySelect(optionGroups);

        this.append(categorySelect);
        this.append(...this.makePetSelects(optionGroups))

        this.onCategoryChange(categorySelect.children[0].innerText)

        select.remove();
    }

    makeCategorySelect(optionGroups) {
        const categorySelect = document.createElement('select');

        for (const group of optionGroups) {
            const option = document.createElement('option');
            option.innerText = group.label;

            categorySelect.append(option)
        }

        categorySelect.addEventListener('change', event => {
            this.onCategoryChange(event.target.value)
        });

        return categorySelect;
    }

    makePetSelects(optionGroups) {
        const petSelects = [];

        for (const group of optionGroups) {
            const petSelect = document.createElement('select');
            petSelect.dataset.group = group.label;

            for (const option of [...group.children]) {
                const petOption = document.createElement('option');
                petOption.innerText = option.value;
    
                petSelect.append(option)
                petSelect.hidden = true;
            }
            petSelects.push(petSelect)
        }

        return petSelects;
    }

    onCategoryChange(category) {
        if (this.currentCategory) {
            this.currentCategory.hidden = true;
            this.currentCategory.name = "";
        }


        this.currentCategory = this.querySelector(`select[data-group="${category}"]`);
        this.currentCategory.name = "pets";

        this.currentCategory.hidden = false;
    }
}

customElements.define("cascade-select", CascadeSelect);

console.log(customElements.get('cascade-select'));