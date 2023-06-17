describe('Client blog', () => {
  it('should display home page', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Modsen client blog');
  });

  it('should go back', () => {
    cy.visit('/blog');

    cy.go('back');
    cy.location('pathname').should('not.include', 'blog');

    cy.go('forward');
    cy.location('pathname').should('include', 'blog');
  });

  it('should render blog page correctly', () => {
    cy.visit('/blog/17');
    cy.contains('Robert Fox');
  });

  it('should render authors page correctly', () => {
    cy.visit('/about/floyd-miles');
    cy.contains('Floyd Miles').should(
      'have.text',
      'Hey there, I’m Floyd Miles and welcome to my Blog'
    );
  });

  it('should render page in russian language', () => {
    cy.visit('/ru');
    cy.contains('Пошаговое руководство по выбору отличных пар шрифтов');
  });

  it('should change page between languages', () => {
    cy.visit('/');
    cy.contains('Step-by-step guide to choosing great font pairs');

    cy.contains('Change locale to "ru"').click();
    cy.contains('Пошаговое руководство по выбору отличных пар шрифтов');

    cy.go('back');
    cy.contains('Step-by-step guide to choosing great font pairs');
  });
});
