describe('Postgres demo', () => {
  it('Connection test', () => {
    cy.task('READFROMDB', {
      dbConfig: Cypress.env('DB'),
      sql: 'SELECT * FROM "public"."bill" ORDER BY "id" DESC'
    }).then((result) => {
      console.log(result.rows);
      console.log(result.rows[0].bill_code);
    });
  });
});