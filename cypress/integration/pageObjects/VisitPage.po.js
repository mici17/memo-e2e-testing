class visitPagePageObject  {
    visitPage() {
        cy.visit('http://todomvc.com/examples/react/#/')
    }
}

export const visitPagePo = new visitPagePageObject() 