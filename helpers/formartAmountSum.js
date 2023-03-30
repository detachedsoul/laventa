const formartAmountSum = (amount) => {
    const hasFractions = amount.toString().split(".").length < 2 ? false : true;

    const wholeNumber = hasFractions ? amount.toString().split(".")[0] : amount;
    const fractions = hasFractions && Number(amount.toString().split(".")[1]).toFixed();

    return {
        wholeNumber,
        fractions,
        hasFractions
    };
};

export default formartAmountSum;
