import { ToDoInputPo } from '../pageObjects/ToDoInput.po';
import { ToDoListPo } from '../pageObjects/ToDoListPageObject.po';
import { PageElementsPo } from '../pageObjects/PageElements.po';

describe('Testing funcionality when todoitems are added', () => {
    const walkDog = 'Walk dog';
    const buyGroceries = 'Buy groceries';
    const goToDentist = 'Go to dentist';
    const toggle = '.toggle'

    before(() => {
        cy.visit('http://todomvc.com/examples/react/#/')
        ToDoInputPo.addtoDo(`${walkDog}`)
        ToDoInputPo.addtoDo(`${buyGroceries}`)
        ToDoInputPo.addtoDo(`${goToDentist}`)
    })

    it('Should add todo items', () => {
        ToDoListPo.getListItem().should('have.length', 3)
    })

    it('Todo items should all be checked and marked as completed', () => {
        PageElementsPo.getCheckboxInput().check()

        ToDoListPo.shouldBeCompleted(0)
        ToDoListPo.shouldBeCompleted(1)
        ToDoListPo.shouldBeCompleted(2)
    })

    it('Todo items should all be unchecked and unmarked from completed state', () => {
        PageElementsPo.getCheckboxInput().uncheck()

        ToDoListPo.shouldNotBeCompleted(0)
        ToDoListPo.shouldNotBeCompleted(1)
        ToDoListPo.shouldNotBeCompleted(2)
    })

    it('Todo items should all be checked when arrow is clicked', () => {
        PageElementsPo.getarrowInput().click({ force: true })

        ToDoListPo.shouldBeCompleted(0)
        ToDoListPo.shouldBeCompleted(1)
        ToDoListPo.shouldBeCompleted(2)
    })

    it('Items can be checked and unchecked', () => {
        PageElementsPo.getCheckboxInput().uncheck()

        ToDoListPo.getItem(0)
            .as('firstTodo')
            .find(`${toggle}`)
            .check()
            .should('be.checked')
        cy.get('@firstTodo').should('have.class', 'completed')

        ToDoListPo.getItem(2)
            .as('thirdTodo')
            .find(`${toggle}`)
            .check()
            .should('be.checked')
        cy.get('@thirdTodo').should('have.class', 'completed')

        ToDoListPo.getItem(2)
            .as('secondTodo')
            .find(`${toggle}`)
            .check()
            .should('be.checked')
        cy.get('@secondTodo').should('have.class', 'completed')

    })

    it('Should display the current number of todo items', () => {
        PageElementsPo.getCheckboxInput().uncheck()
        PageElementsPo.getCounter().contains('3 items left')
    })

    it('Should not contain button clear completed when there are no completed todos', () => {
        PageElementsPo.getButtonClearCompleted().should('not.exist')
    })

    it('Should contain button clear completed when there are completed todos', () => {
        PageElementsPo.getCheckboxInput().check()
        PageElementsPo.getButtonClearCompleted().should('exist')
    })

    it('All items should be seen when all button is clicked', () => {
        PageElementsPo.getFilters().contains('All').click()
        ToDoListPo.getListItem().should('have.length',3)
    })

    it('Completed items should be seen when completed button is clicked', () => {
        PageElementsPo.getFilters().contains('Completed').click()
        ToDoListPo.getListItem().should('have.length',3)
    })

    it('Active items should be seen when active button is clicked', () => {
        PageElementsPo.getCheckboxInput().uncheck()
        PageElementsPo.getFilters().contains('Active').click()
        ToDoListPo.getListItem().should('have.length',3)
    })

    it('Todo items should be cleared when clear completed button is clicked', () => {
        PageElementsPo.getCheckboxInput().check()
        PageElementsPo.getButtonClearCompleted().click()
    })


})