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

  it('Перевірка вмісту і кольору кнопки Log in', () => {
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

  it('scrollIntoView test кнопки Go to the course', () => {
    // Тест відвідування сайту LMS
    cy.visit('https://www.edu.goit.global/account/login');
    cy.login('user888@gmail.com', '1234567890');
    //скролимо до кнопки і перевіряємо чи вона відображається
    cy.get('#go-to-the-course-homepage-widget')
      .scrollIntoView()
      .should('be.visible');
  });
});
