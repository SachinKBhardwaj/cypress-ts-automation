describe('YouTube Sidebar Navigation', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('should click sidebar menu items and wait 3 seconds', () => {
    cy.visit('https://www.youtube.com');

    const navItems = [
      { name: 'Shorts', urlPattern: '/shorts' },
      { name: 'Home', urlPattern: 'youtube.com' }
    ];

    navItems.forEach((item) => {
      // 1. Locate and click menu item
      cy.get('ytd-mini-guide-entry-renderer, ytd-guide-entry-renderer')
        .contains(item.name)
        .should('be.visible')
        .click();

      // 2. Pause execution for 3 seconds
      cy.wait(3000);

      // 3. Verify URL route updated
      cy.url().should('include', item.urlPattern);
    });
  });
});