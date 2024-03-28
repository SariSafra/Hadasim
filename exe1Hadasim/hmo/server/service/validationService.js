export const lettersOnly = (inputString) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(inputString);
};
export const numbersOnly = (inputString) => {
    const regex = /^\d{9}$/;
    return regex.test(inputString);
};