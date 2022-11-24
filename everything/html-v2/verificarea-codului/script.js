function functionValidation(){
    var check1 = document.getElementById("user").value;
    var check2 = document.getElementById("email").value;
    var check3 = document.getElementById("pass").value;
    var check4 = document.getElementById("passcheck").value;
    if(check1==="" || check2==="" || check3==="" || check4==="")
    {
        document.getElementById("demo").innerHTML="Completati toate campurile";
    }
    else if(check3!=check4)
    {
        document.getElementById("demo3").innerHTML="Parolele nu coincid"
    }
    else
    {
        save();
    }

var usersNr=0;

}


let users = [
    {
        nr:1,
        user:"Veaceslav",   
        email:"a@gmail.com",
        pass:"123123123"
    },
    {
        nr:2,
        user:"Jhon",
        email:"b@gmail.com",
        pass:"123123123"
    },
    {
        nr:3,
        user:"Wallace",   
        email:"hboots@gmail.com",
        pass:"123123123"
    },
    {
        nr:4,
        user:"Asha",   
        email:"a@gmail.com",
        pass:"123123123"
    },
    {
        nr:5,
        user:"Mylo",   
        email:"hboots@gmail.com",
        pass:"123123123"
    },
    {
        nr:6,
        user:"Raymond",   
        email:"a@gmail.com",
        pass:"123123123"
    },
    {
        nr:7,
        user:"Erwin",   
        email:"something@gmail.com",
        pass:"123123123"
    },
    {
        nr:8,
        user:"Griff",   
        email:"something@gmail.com",
        pass:"123123123"
    },
    {
        nr:9,
        user:"Kean",   
        email:"b@gmail.com",
        pass:"123123123"
    },
    {
        nr:10,
        user:"Zack",   
        email:"something@gmail.com",
        pass:"123123123"
    }

]

var usersNr=0;

function save(){

    let userInfo ={     
        nr: users.length+1,
        user: document.getElementById("user").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value
    }
    users.push(userInfo);

    drawTable(users);
 
}

function drawTable(info){

        if (info === undefined) {
            info = users;
        }

        var table = document.getElementById("dataStorage");
        removeAllRows();
        var len = info.length;
        var row;
        var contor;
        var user;
        var email;
        var pass;   

        for(let i=1;i<=len;i++){

            row= table.insertRow(i);
            contor = row.insertCell(0);
            user = row.insertCell(1);
            email = row.insertCell(2);
            pass = row.insertCell(3);
            

            row.setAttribute("id" , i);
            const currentUser = info[i-1];

            
            contor.innerHTML = currentUser.nr;
            user.innerHTML = currentUser.user;
            email.innerHTML = currentUser.email;
            pass.innerHTML = currentUser.pass;   
        }

    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";
    
}

function removeAllRows(){
    if(document.getElementById("dataStorage").rows.length>1){
        const totalRows = document.getElementById("dataStorage").rows.length ;
        for(let i=1 ; i< totalRows ; i++){
            var tag= document.getElementById(i);
            tag.remove();
        }
    }
}




function search(){
    removeAllRows();

    var len = users.length;

    var idSort ;
    var emailSort ;

    let sortedInfo = [

    ]

    for(let i=1;i<=len;i++){
        const currentUser = users[i-1];

        idSort = document.getElementById("leftDiv").value;
        emailSort = document.getElementById("centerDiv").value;

        if(emailSort===""){emailSort=currentUser.email;}
        if(idSort==""){idSort=currentUser.nr;}
        
        if(currentUser.email.includes(emailSort) && currentUser.nr==idSort){ 
            users[i-1];
            sortedInfo.push(users[i-1]);
        }
    }


    drawTable(sortedInfo);
}