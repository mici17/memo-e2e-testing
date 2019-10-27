import { PageElementsPo } from '../pageObjects/PageElements.po';
import { ToDoInputPo } from '../pageObjects/ToDoInput.po';


describe('Check if elements on page exist', () => {
    before(() => {
        cy.visit('http://todomvc.com/examples/react/#/')
    })

    it('Should contain heading on page', () => {
        PageElementsPo.getHeading().contains('todos')
    })

    it('Should contain input on page', () => {
        ToDoInputPo.getToDo()
    })

    it('Should not contain #main and #footer on page', () => {
        PageElementsPo.getMain().should('not.exist')
        PageElementsPo.getFooter().should('not.exist')
    })
})

