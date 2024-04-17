export const lettersOnly = (inputString) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(inputString);
};
export const numbersOnly = (inputString) => {
    const regex = /^\d{9}$/;
    return regex.test(inputString);
};
export const dateValidation=(date1,date2) =>{
    console.log("in date validation "+date1+" "+date2+" "+ date1 < date2)
    return date1 < date2;
}