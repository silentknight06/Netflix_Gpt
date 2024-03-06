export const checkvalidData = (email, password)=>{
       const validemal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
       const validpswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
       if(!validemal) return "Email is not Valid";
       if(!validpswd) return "password is not valid";
       return null;
}