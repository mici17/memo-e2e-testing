const SELECTORS = Object.freeze({
    LIST: '.todo-list',
    ITEM: '.todo-list li',
})

class ToDoListPageObject {
    getList() {
        cy.get(SELECTORS.LIST)
    }

    getListItem() {
        return cy.get(SELECTORS.ITEM)
    }

    getItem(rowNumber) {
        return cy.get(SELECTORS.ITEM).eq(rowNumber)
    }

    shouldBeCompleted(rowNumber) {
        this
            .getItem(rowNumber)
            .should('have.class','completed')
    }

    shouldNotBeCompleted(rowNumber) {
        this
            .getItem(rowNumber)
            .should('not.have.class','completed')
    }
}

export const ToDoListPo = new ToDoListPageObject();

