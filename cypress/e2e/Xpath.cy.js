
describe('XpathExamples', () => {
    it('Enter Username and Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
      cy.xpath("//input[@name='username']").type('Admin')
      cy.xpath("//input[@placeholder='Password']").type('admin123')
      cy.xpath("//*[@type='submit']").click({ force: true });
    })
  })