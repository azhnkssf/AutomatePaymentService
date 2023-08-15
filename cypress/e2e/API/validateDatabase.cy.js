const envConfig = Cypress.env();
import exportValueBill from '../../fixtures/function/createBill.js';

describe('Payment API', () => {
    let getBillCode;
    it('Send Request Create Bill Success', () => {
        const billPayload = exportValueBill.requestBody;

        cy.request({
            method: 'PUT',
            url: envConfig.paymentUrlCreate,
            headers: { 
                'x-payment-api-key': envConfig.apiKey,
            },
            body: billPayload,
        }).then((response) => {
            expect(response.status).to.equal(200);
            getBillCode = response.body.billCode;
        });
    });

    //it('Validate The Database Status', () => {

    //});
});
