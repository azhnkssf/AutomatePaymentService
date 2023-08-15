const envConfig = Cypress.env();
import exportValueBill from '../../fixtures/function/createBill.js';

describe('Payment API', () => {
  it('should successfully create a bill with valid data', () => {
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

      const { billCode, paymentUrl, payee, channels, group, businessEntity, salesChannel, purpose, type, desc, additionalDetails, 
        amount, askingAmount, currency, capture, ref, successUrl, failedUrl, buyerInfo, status, statusCode, isPaid, expiredAt, 
        campaignCodes, campaignSettingCode, voucherCode, isVoucherRemovable, hideVoucher, createdAt, updatedAt } = response.body;

      cy.wrap(billCode)
        .should('be.a', 'string')
        .and('match', /^BLL[0-9a-fA-F]{32}$/);

      const expectedPaymentUrl = `https://payment.staging.easysunday.com/en/payment?bill=${billCode}`;
      cy.wrap(paymentUrl)
        .should('be.a', 'string')
        .and('eq', expectedPaymentUrl);

      cy.wrap(payee)
        .should('be.a', 'string')
        .and('eq', billPayload.payee);

      const paymentChannels = ['CC_FULL_AMOUNT', 'CC_INSTALLMENT'];
      cy.wrap(channels)
        .should('be.a', 'array')
        .and('include.members', paymentChannels);

      cy.wrap(group)
        .should('be.a', 'string')
        .and('eq', billPayload.group);

      cy.wrap(businessEntity)
        .should('be.a', 'string')
        .and('eq', billPayload.businessEntity);

      cy.wrap(salesChannel)
        .should('be.a', 'string')
        .and('eq', billPayload.salesChannel);

      cy.wrap(purpose)
        .should('be.a', 'string')
        .and('eq', billPayload.purpose);

      cy.wrap(type)
        .should('be.a', 'string')
        .and('eq', billPayload.type);

      cy.wrap(desc)
        .should('be.a', 'string');

      cy.wrap(additionalDetails)
        .should('be.an', 'object')

      cy.wrap(amount)
        .should('be.a', 'string')
        .and('match', /\.00$/);

      cy.wrap(askingAmount)
        .should('be.a', 'string')
        .and('match', /^\d+\.\d{2}$/);

      cy.wrap(currency)
        .should('be.a', 'string')
        .and('eq', billPayload.currency);

      cy.wrap(capture)
        .should('be.a', 'boolean')
        .and('eq', billPayload.capture);

      cy.wrap(ref)
        .should('be.a', 'string')
        .and('eq', billPayload.ref);

      if (successUrl !== null) {
        cy.wrap(successUrl)
          .should('be.a', 'string')
          .and('match', /^https?:\/\/[^\s/$.?#].[^\s]*$/);
      } else {
        cy.wrap(successUrl)
          .should('be.null');
      }

      if (failedUrl !== null) {
        cy.wrap(failedUrl)
          .should('be.a', 'string')
          .and('match', /^https?:\/\/[^\s/$.?#].[^\s]*$/);
      } else {
        cy.wrap(failedUrl)
          .should('be.null');
      }

      cy.wrap(buyerInfo)
        .should('be.an', 'object');

      cy.wrap(status)
        .should('be.a', 'string')
        .and('eq', 'Created');

      cy.wrap(statusCode)
        .should('be.a', 'string')
        .and('eq', 'xP');

      cy.wrap(isPaid)
        .should('be.a', 'boolean');

      if (expiredAt !== null) {
        cy.wrap(expiredAt)
          .should('be.a', 'string')
          .and('match', /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
          .then((responseExpiredAt) => {
            expect(responseExpiredAt).to.equal(billPayload.expiredAt);
          });
      } else {
        cy.wrap(expiredAt)
          .should('be.null');
      }

      if (campaignCodes !== null) {
        cy.wrap(campaignCodes)
          .should('be.a', 'array');
      } else {
        cy.wrap(campaignCodes)
          .should('be.null');
      }

      if (campaignSettingCode !== null) {
        cy.wrap(campaignSettingCode)
          .should('be.a', 'string');
      } else {
        cy.wrap(campaignSettingCode)
          .should('be.null');
      }

      if (voucherCode !== null) {
        cy.wrap(voucherCode)
          .should('be.a', 'string')
          .and('eq', billPayload.voucherCode)
      } else {
        cy.wrap(voucherCode)
          .should('be.null');
      }

      cy.wrap(isVoucherRemovable)
        .should('be.a', 'boolean')
        .and('eq', billPayload.isVoucherRemovable);

      cy.wrap(hideVoucher)
        .should('be.a', 'boolean')
        .and('eq', billPayload.hideVoucher);

      cy.wrap(createdAt)
        .should('be.a', 'string')
        .then((createdAt) => {
          expect(createdAt).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
        });

      cy.wrap(updatedAt)
        .should('be.a', 'string')
        .then((updatedAt) => {
          expect(updatedAt).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
        });
    });
  });
});
