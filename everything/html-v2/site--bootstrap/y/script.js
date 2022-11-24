(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('keyup', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

let users = [
    {
        nr:1,
        user:"Veaceslav",   
        email:"a@gmail.com",
        date:"2005-04-09",
        pass:"123123123",
        description: "he is incredibly handsome"
    },
    {
        nr:2,
        user:"Jhon",
        email:"b@gmail.com",
        date:"2004-03-10",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:3,
        user:"Wallace",   
        email:"hboots@gmail.com",
        date:"2000-09-29",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:4,
        user:"Asha",   
        email:"a@gmail.com",
        date:"2002-03-03",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:5,
        user:"Mylo",   
        email:"hboots@gmail.com",
        date:"2003-01-01",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:6,
        user:"Raymond",   
        email:"a@gmail.com",
        date:"2005-02-04",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:7,
        user:"Erwin",   
        email:"something@gmail.com",
        date:"2000-10-15",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:8,
        user:"Griff",   
        email:"something@gmail.com",
        date:"2006-08-09",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:9,
        user:"Kean",   
        email:"b@gmail.com",
        date:"2005-12-12",
        pass:"123123123",
        description:"random dude"
    },
    {
        nr:10,
        user:"Zack",   
        email:"something@gmail.com",
        date:"2004-12-02",
        pass:"123123123",
        description:"random dude"
    }

]

function save(){

    let userInfo ={     
        nr: users.length+1,
        user: document.getElementById("inputUsername").value,
        email: document.getElementById("inputEmail").value,
        date: document.getElementById("inputDate").value,
        pass: document.getElementById("inputPassword").value,
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
        var row , contor , user , email , date , pass , infoBtn ;

        for(let i=1;i<=len;i++){

            row= table.insertRow(i);
            contor = row.insertCell(0);
            user = row.insertCell(1);
            email = row.insertCell(2);
            date = row.insertCell(3);
            pass = row.insertCell(4);
            infoBtn = row.insertCell(5);
            
            var btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn btn-md btn-primary";
            btn.setAttribute("onclick" , "gotoPage("+i+")");
            btn.id = i;
            btn.value = "About";


            row.setAttribute("id" , i);
            const currentUser = info[i-1];

            contor.innerHTML = currentUser.nr;
            user.innerHTML = currentUser.user;
            email.innerHTML = currentUser.email;
            date.innerHTML = currentUser.date;
            pass.innerHTML = currentUser.pass;   
            infoBtn.appendChild(btn);
            
        }
    
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

        idSort = document.getElementById("searchId").value;
        emailSort = document.getElementById("searchEmail").value;

        if(emailSort===""){emailSort=currentUser.email;}
        if(idSort==""){idSort=currentUser.nr;}
        
        if(currentUser.email.includes(emailSort) && currentUser.nr==idSort){ 
            users[i-1];
            sortedInfo.push(users[i-1]);
        }
    }

    drawTable(sortedInfo);
}

function functionValidation(){
    var check1 = document.getElementById("inputUsername").value;
    var check2 = document.getElementById("inputEmail").value;
    var check3 = document.getElementById("inputPassword").value;
    var check4 = document.getElementById("inputConfirmPass").value;
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

}

var cardUser=JSON.parse(new URLSearchParams(window.location.search).get('usersArray')).nr;

users = JSON.parse(localStorage.getItem("array"));

function card(param){
    if(param==="next"){
        if(cardUser>=users.length-1){
            cardUser=0;
            param=users[cardUser];
        }else{
            cardUser++;
            param=users[cardUser];
        }
    }else if(param="last"){
        if(cardUser==0){
            cardUser=users.length-1;
            param=users[cardUser];
        }else{
            cardUser--;
            param=users[cardUser];
        }
    }

    document.getElementById("name").innerHTML = param.user;   
    document.getElementById("email").innerHTML = param.email;
    document.getElementById("description").innerHTML = param.description;
    document.getElementById("date").innerHTML = param.date;   
}

function gotoPage(nr){
    localStorage.setItem("array", JSON.stringify(users));
    var url = new URL("index1.html", window.location.href); 
    var param = JSON.stringify(users[nr-1]);
    url.searchParams.append('usersArray', param);
    window.location.href = url;
}

function goBack(){
    //localStorage.setItem("array", JSON.stringify(users));
    var url = new URL("index.html", location.protocol + '//' + location.host + location.pathname).href ;
    window.location.href = url ;
}



