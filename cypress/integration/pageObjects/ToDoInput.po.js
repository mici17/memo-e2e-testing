const SELECTORS = Object.freeze ({
    INPUT: '.new-todo'
})

class ToDoInputPageObject {
    getToDo () {
        return cy.get(SELECTORS.INPUT)
    }
    
    addtoDo (text) {
        this
            .getToDo()
            .type(`${text} {enter}`)
    }
}

export const ToDoInputPo = new ToDoInputPageObject();