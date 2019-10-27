const SELECTORS = Object.freeze({
    LIST: '.todo-list',
    ITEM: '.todo-list li'
})

class ToDoListPageObject {
    getList() {
        cy.get(SELECTORS.LIST)
    }

    getItem(rowNumber) {
        return cy.get(SELECTORS.ITEM).eq(rowNumber)
    }

    shouldBeCompleted(rowNumber) {
        this
            .getItem(rowNumber)
            .should('have.class','completed')
    }
}

export const ToDoListPo = new ToDoListPageObject();

