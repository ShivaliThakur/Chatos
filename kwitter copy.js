function Generate(){
    if("UserFirstName" & "UserLastName" == null){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else if("UserFirstName" == null){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else if("UserLastName" == null){
        document.getElementById("check").innerHTML="Please put your First and Last name";
    }
    else{
        fName= document.getElementById("UserFirstName").value;
        lName= document.getElementById("UserLastName").value;
        localStorage.setItem("LastName", lName);
        localStorage.setItem("FirstName", fName);
        randomNo= Number(1-100);
        un1= fName+lName+randomNo;
        un2= fName+"*"+lName;
        un3= fName+lName+"@"+Number(2-30);
        Username=[un1, un2, un3];
        img="<img src='man.png' class='logo'><br>"
        label1="<label> Suggested User names </label><br>";
        label2="<label class= txt-primary> Username </label><br>";
        label3="<h4> User Name : </h4><br>";
        input="<input type='text' id='userName' placeholder= 'User Name'><br><br>";
        button= "<button id='login' class='btn btn-success' onclick='addUser()'> Login</button>";
        combine= img+label1+ label2+ label3+ input+button;
        document.getElementById("output").innerHTML= combine;
    }
}


function addUser(){
    add_user= document.getElementById("userName").value;
    localStorage.setItem("UserName", add_user);
    window.location= "kwitter_room.html";
}


