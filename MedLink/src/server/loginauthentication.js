const username = "Admin"
const password = "Admin"

export function Loogin(inputUsername, inputPassword){
    if(inputUsername === username && inputPassword === password){
        return("Success")
    }else{
        return("Failed")
    }
};
