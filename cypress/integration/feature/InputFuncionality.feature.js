import { ToDoInputPo } from '../pageObjects/ToDoInput.po';
import {ToDoListPo} from '../pageObjects/ToDoListPageObject.po';
import { PageElementsPo } from '../pageObjects/PageElements.po';

describe('Checking input funcionality', () => {
    const walkDog = 'Walk dog';
    const label = 'label';
    const edit = '.edit';
    const toggle = '.toggle';

    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react/#/')
    })

    it('Value can be entered', () => {
        ToDoInputPo.getToDo().type(`${walkDog}`)
    })

    it('Todo can be added', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)
    })

    it('Should show #main and #footer when items are added', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)
        PageElementsPo.getMain().should('be.visible')
        PageElementsPo.getFooter().should('be.visible')
    })

    it('Input field should be cleared when item is added', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)
        ToDoInputPo.getToDo().should('have.text', '')
    })

    it('Should be able to edit items', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)

        ToDoListPo.getItem(0).as('firstTodo').find(`${label}`).dblclick()
        cy.get('@firstTodo').find(`${edit}`).clear().type('buyGroceries {enter}')
        cy.get('@firstTodo').should('contain','buyGroceries')
    })

    it('Should cancel edits on escape', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)

        ToDoListPo.getItem(0).as('firstTodo').find(`${label}`).dblclick()
        cy.get('@firstTodo').find(`${edit}`).clear().type('go to {esc}')
    })

    it('When empty string is entered item should be removed', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)

        ToDoListPo.getItem(0).as('firstTodo').find(`${label}`).dblclick()
        cy.get('@firstTodo').find(`${edit}`).clear().type('{enter}')
    })

    it('When x button is clicked item should be removed ', () => {
        ToDoInputPo.addtoDo(`${walkDog}`)
        ToDoListPo.getItem(0).find(`${toggle}`).check()

        PageElementsPo.getXButton(0).click({force:true})
    })

})