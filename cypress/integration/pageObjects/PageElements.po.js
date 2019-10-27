const SELECTORS = Object.freeze({
  HEADING: 'h1',
  MAIN: '.main',
  FOOTER: '.footer',
  CHECKBOXINPUT: '.toggle',
  ARROWINPUT: '.toggle-all',
  XBUTTON: '.destroy',
  COUNTER: '.todo-count',
  CLEARCOMPLETEDBUTTON: '.clear-completed',
  FILTERS: '.filters'
})

class PageElementsPageObject {
  getHeading() {
    return cy.get(SELECTORS.HEADING)
  }

  getMain() {
    return cy.get(SELECTORS.MAIN)
  }

  getFooter() {
    return cy.get(SELECTORS.FOOTER)
  }

  getCheckboxInput() {
    return cy.get(SELECTORS.CHECKBOXINPUT)
  }

  getarrowInput() {
    return cy.get(SELECTORS.ARROWINPUT)
  }

  getXButton(rownumber) {
    return cy.get(SELECTORS.XBUTTON).eq(rownumber)
  }

  getCounter() {
    return cy.get(SELECTORS.COUNTER)
  }

  getButtonClearCompleted() {
    return cy.get(SELECTORS.CLEARCOMPLETEDBUTTON)
  }

  getFilters() {
    return cy.get(SELECTORS.FILTERS)
  }
}

export const PageElementsPo = new PageElementsPageObject();