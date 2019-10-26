const SELECTORS = Object.freeze ({
    INPUT: '.new-todo'
})

class ToDoInputPageObject {
    addtoDo (text) {
        cy.get(SELECTORS.INPUT).type(`${text} {enter}`)
    }
}

export const ToDoInputPo = new ToDoInputPageObject();