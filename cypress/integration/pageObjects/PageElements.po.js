const SELECTORS = Object.freeze({
  HEADING: 'h1',
  MAIN: '.main',
  FOOTER: '.footer',
  CHECKBOXINPUT: '.toggle'
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
}

export const PageElementsPo = new PageElementsPageObject();