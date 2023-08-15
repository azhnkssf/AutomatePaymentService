import exportValue from '../../fixtures/function/randomvariable.js';

const randomPayeeCode = exportValue.getRandomPayeeCode();
const randomGroup = exportValue.getRandomGroup();
const randomBusinessEntity = exportValue.getRandomBusinessEntity();
const randomSaleChannel = exportValue.getRandomSaleChannel();
const randomPurpose = exportValue.getRandomPurpose();
const randomReferenceNumber = exportValue.generateRandomReferenceNumber();

const requestBody = {
    "type": "CHARGE",
    "capture": true,
    "payee": randomPayeeCode, 
    "group": randomGroup,
    "businessEntity": randomBusinessEntity,
    "salesChannel": randomSaleChannel,
    "purpose": randomPurpose,
    "channels": [
        "CC_FULL_AMOUNT",
        "CC_INSTALLMENT",
        "QR_OMISE",
        "DEEPLINK_SCB",
        "WAIVE",
        "TRUEWALLET",
        "SHOPEEPAY"
    ],
    "amount": 2800.00,
    "currency": "THB",
    "desc": {
        "th": "ประกันสุขภาพ IPD เหมาจ่าย - แผน 3",
        "en": "Sunday Lumpsum IPD only - Plan 3"
    },
    "additionalDetails": {
        "th": {
            "บริษัทประกัน": "ซันเดย์ ประกันภัย",
            "หมวดหมู่สินค้า": "ประกันสุขภาพ เหมาจ่าย"
        },
        "en": {
            "Insurer": "Sunday Insurance",
            "Product Category": "Health Insurance"
        }
    },
    "isVoucherRemovable": true,
    "hideVoucher": false,
    "campaignCodes": [
        "HELLOSUNDAY02",
        "AAOFTEST201",
        "THANKYOU",
        "RETAILLZ22",
        "RETAILSP22",
        "SUNDAYUPSALE23",
        "SUNDAYNOW15",
        "SUNDAYTMR5",
        "SUNDAYOB15",
        "SUNDAYOB5",
        "FLASHSALE23_300",
        "FLASHSALE23_900",
        "FLASHSALE23_3000",
        "JOLLY_ONBOARD",
        "SUNDAYOB10",
        "SUNDAYNOW10",
        "AAOFTEST169",
        "SUNDAYXAAOF"
    ],
    "ref": randomReferenceNumber,
    "buyerInfo": {
        "email": "wisaruth.lu@easysunday.com",
        "phoneNumber": "+66953292951",
        "language": "TH"
    }
};

const exportValueBill = {
    requestBody
};

export default exportValueBill;
