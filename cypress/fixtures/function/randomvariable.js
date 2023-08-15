const getRandomPayeeCode = () => {
    const payeeCode = ["TH-SDI", "TH-SDB", "TH-SDC"];
    const randomIndex = Math.floor(Math.random() * payeeCode.length);
    const randomPayeeCode = payeeCode[randomIndex];
    return randomPayeeCode;
};

const getRandomGroup = () => {
    const group = ["RET", "PTN", "GRP", "MOB"];
    const randomIndex = Math.floor(Math.random() * group.length);
    return group[randomIndex];
}; 

const getRandomBusinessEntity = () => {
    const businessEntity = ["SDI", "SDB", "SDC", "THG", "BA", "BAY1", "BAY2", "PI", "DTAC", "SIW", "WTH", "FPD", "LGI", "NTL", "SCB", "AAA", "AAX", "AAS", "AAC", "AAT", "AAE", "KSC"];
    const randomIndex = Math.floor(Math.random() * businessEntity.length);
    return businessEntity[randomIndex];
};

const getRandomSaleChannel = () => {
    const saleChannel = ["WEB"];
    const randomIndex = Math.floor(Math.random() * saleChannel.length);
    return saleChannel[randomIndex];
};

const getRandomPurpose = () => {
    const purposes = ["HLTH", "PEAC", "TRAV", "MVOL", "MCOM", "CUST", "GHTP", "GHVL", "SUNC", "MOBC", "GADW", "TELM", "DUGD", "OTHR"];
    const randomIndex = Math.floor(Math.random() * purposes.length);
    return purposes[randomIndex];
};

const generateRandomReferenceNumber = () => {
    const prefix = "TESTPAYMENT";
    const randomNumber = Math.floor(Math.random() * 10000) + 1;
    const formattedNumber = randomNumber.toString().padStart(4, "0");
    return `${prefix}${formattedNumber}`;
}

const exportValue = {
    getRandomPayeeCode,
    getRandomGroup,
    getRandomBusinessEntity,
    getRandomSaleChannel,
    getRandomPurpose,
    generateRandomReferenceNumber
};

export default exportValue;