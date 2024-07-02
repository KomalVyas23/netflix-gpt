export const checkValidData = (email, password) => {
    const isEmailValid   = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);
  //  const isNameValid = /^[\\p{L} .'-]+$/.test(name);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
   // if(!isNameValid) return "Please enter a valid name";

    return null;
};