describe('Наш перший блок тестів', () => {
  it('Тест відвідування сайту LMS', () => {
    // Тест відвідування сайту LMS
    cy.visit('https://www.edu.goit.global/account/login');
    //Знайти на ній кнопку логінізації Перевірити чи кнопка містить всередині себе текст Log in
    cy.get('[type="submit"]').should('have.text', 'Log in');
    //чи має кнопка колір фону rgb(255, 107, 10)
    cy.get('[type="submit"]').should(
      'have.css',
      'background-color',
      'rgb(255, 107, 10)'
    );
  });
});
