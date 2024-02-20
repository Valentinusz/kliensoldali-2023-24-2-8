const table = document.querySelector('table');

// table.addEventListener('click', event => {
//     if (!event.target.matches('th')) {
//         return;
//     }

//     sort(table, event.target.cellIndex)
// });

// /**
//  * @param {HTMLTableElement} table 
//  * @param {number} cellIndex 
//  */
// function sort(table, cellIndex) {
//     console.log(table.tBodies[0]);
//     const tableBody = table.tBodies[0];

//     const rows = [...tableBody.rows];

//     const firstRow = rows.shift();

//     const sortedRows = rows.sort((a, b) => a.children[cellIndex].innerText.localeCompare(b.children[cellIndex].innerText))

//     tableBody.innerHTML = "";

//     tableBody.append(firstRow, ...sortedRows)
// }


// function sortableTable(table) {
//     const tableBody = table.tBodies[0];

//     table.addEventListener('click', event => {
//         if (!event.target.matches('th')) {
//             return;
//         }
    
//         sort(event.target.cellIndex)
//     });

//     /**
//      * @param {number} cellIndex 
//      */
//     function sort(cellIndex) {
//         const rows = [...tableBody.rows];

//         const firstRow = rows.shift();

//         const sortedRows = rows.sort((a, b) => a.children[cellIndex].innerText.localeCompare(b.children[cellIndex].innerText))

//         tableBody.innerHTML = "";

//         tableBody.append(firstRow, ...sortedRows)
//     }
// }

// sortableTable(table)

// class SortableTable {
//     tableBody;

//     constructor(table) {
//         this.tableBody = table.tBodies[0];

//         table.addEventListener('click', event => {
//             if (!event.target.matches('th')) {
//                 return;
//             }
        
//             this.sort(event.target.cellIndex)
//         });
//     }

//     /**
//      * @param {number} cellIndex 
//      */
//     sort(cellIndex) {
//         const rows = [...this.tableBody.rows];

//         const firstRow = rows.shift();

//         const sortedRows = rows.sort((a, b) => a.children[cellIndex].innerText.localeCompare(b.children[cellIndex].innerText))

//         this.tableBody.innerHTML = "";

//         this.tableBody.append(firstRow, ...sortedRows)
//     }
// }

// new SortableTable(table);


// class SortableTable extends HTMLTableElement {
//     tableBody;

//     constructor() {
//         super();
//         this.tableBody = this.tBodies[0];
//     }

//     connectedCallback() {
//         this.addEventListener('click', event => {
//             if (!event.target.matches('th')) {
//                 return;
//             }
        
//             this.sort(event.target.cellIndex)
//         });
//     }

//     /**
//      * @param {number} cellIndex 
//      */
//     sort(cellIndex) {
//         const rows = [...this.tableBody.rows];

//         const firstRow = rows.shift();

//         const sortedRows = rows.sort((a, b) => a.children[cellIndex].innerText.localeCompare(b.children[cellIndex].innerText))

//         this.tableBody.innerHTML = "";

//         this.tableBody.append(firstRow, ...sortedRows)
//     }
// }

// customElements.define('sortable-table', SortableTable, {extends: 'table'});


class SortableTable extends HTMLTableElement {
    static observedAttributes = ["order"];

    tableBody;

    constructor() {
        super();
        this.tableBody = this.tBodies[0];
    }

    connectedCallback() {
        this.addEventListener('click', event => {
            if (!event.target.matches('th')) {
                return;
            }

            this.setAttribute('order', event.target.cellIndex)
        });
    }

    /**
     * @param {number} cellIndex 
     */
    sort(cellIndex) {
        const rows = [...this.tableBody.rows];

        const firstRow = rows.shift();

        const sortedRows = rows.sort((a, b) => a.children[cellIndex].innerText.localeCompare(b.children[cellIndex].innerText))

        this.tableBody.innerHTML = "";

        this.tableBody.append(firstRow, ...sortedRows)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.sort(newValue)
    }    
}

customElements.define('sortable-table', SortableTable, {extends: 'table'});