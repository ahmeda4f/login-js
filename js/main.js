 var registerName = document.getElementById("signName")
 var registerEmail = document.getElementById("signEmail")
 var registerPass = document.getElementById("signPassword")
 var registerList=[]



 var loginEmail = document.getElementById("loginEmail")
 var loginPassword = document.getElementById("loginPassword")



function registerUser() {
    document.getElementById("signup").classList.replace("d-none","d-block")
    document.getElementById("login").classList.add("d-none")

}


function addUser() {
    registerList = JSON.parse(localStorage.getItem("registerList")) || [];

    var user = {
        name: registerName.value,
        email: registerEmail.value,
        pass: registerPass.value,
    };

    if (user.name === "" || user.pass === "" || user.email === "") {
        sweetAlert("", "Please enter both User (Name, Email) and Password", "error");
        return;
    }
    for (let index = 0; index < registerList.length; index++) {
        if (registerEmail.value === registerList[index].email) {
            sweetAlert("", " Email already exists", "error");

            return;

        }

         if(registerName.value===registerList[index].name){
            sweetAlert("", " Name already exists", "error");
            return
        }
        
    }
            var x = validateEmail();
            if (x) {
                registerList.push(user);
                console.log(user);
                localStorage.setItem("registerList", JSON.stringify(registerList));
                sweetAlert("", " User registered successfully", "success");
                clear()
                
            }
            
        
    }

   



function userLogin() {
    registerList = JSON.parse(localStorage.getItem("registerList")) || [];



    
    if (loginEmail.value==="" || loginPassword.value==="") {
        sweetAlert("", "Please enter both User (Email , Password)", "error");
        
    }

    for (let index = 0; index < registerList.length; index++) {
        if (loginEmail.value === registerList[index].email && loginPassword.value===registerList[index].pass) {
            document.getElementById("loginBtn").href="home.html"; 
            return;
        }
        else {        sweetAlert(" " , "  User not found! Please enter your email and password.", "error");
    }

            if(loginEmail.value=="" && loginPassword.value!='')
            {
                sweetAlert(" " , "Please enter your email", "error");

            }
            if (loginEmail.value !== registerList[index].email && loginEmail.value!=='' && loginPassword.value==registerList[index].pass){
                sweetAlert(" " , " Email not found ", "error");

            }
          
         if (loginEmail.value !== registerList[index].email && loginPassword.value!==registerList[index].pass &&loginPassword.value!="" &&loginEmail.value!=="" ) {

            sweetAlert(" " , "  User not found! wrong data", "error");
         }


        if (loginEmail.value!==registerList[index].email && loginEmail.value!="" &&loginPassword.value!="" && loginPassword==registerList[index].pass) {
            


            sweetAlert(" " , "  User not found! Please register or check your email.", "error");


            
        }
        if (loginPassword.value!==registerList[index].pass &&loginPassword.value!="") {

            sweetAlert(" " , "  Wrong password ", "error");

            
        }



    }
    

}

   

             
function clear() {
    registerName.value=""
    registerEmail.value=""
    registerPass.value=""  
  }
             
  



 
function validateEmail() {
    const regex =/^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gmi;
    if (!regex.test(registerEmail.value)) {
        sweetAlert("", "    Please enter valid UserEmail)    ", "error");
        return false; 
    }
   

    return true; 
    
}