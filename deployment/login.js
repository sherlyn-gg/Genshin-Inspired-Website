function togglePasswordVisibility() {

    var passwordInput = document.getElementById("password");
    
    if (passwordInput.type === "password") {
    
      passwordInput.type = "text";
    
    } else {
    
      passwordInput.type = "password";
    
    }
    
    }
    
    function sendmail(){
        alert("form submitted successfully");
    }
            var navLinks= document.getElementById("navLinks");
        
        function showmenu(){
            navLinks.style.right="0";
        }   
        function hidemenu(){
            navLinks.style.right="-200px";
        }
    