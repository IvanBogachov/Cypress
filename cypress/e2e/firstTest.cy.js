describe('Наш перший блок тестів', () => {
  it('Тест відвідування сайту LMS', () => {
    // Тест відвідування сайту LMS
    cy.visit('https://www.edu.goit.global/account/login');
    //Знаходимо інпут з поштою та вводимо email
    cy.get('#user_email').type('user888@gmail.com');
    //Знаходимо інпут з gfhjktv та вводимо pas
    cy.get('#user_password').type('1234567890');
    //знайде кнопку Log in та запустить подію click
    cy.get('button[type="submit"]').click();
  });
});
