let upload = document.getElementById('upload');
upload.addEventListener('change',()=>
{
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function() {
        let Arr = fr.result.split(/\r?\n|n\n/).map(e => {
            return e.split(' , ');
        });
        Window.valno = 0;
        let invalno = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m=e.map(e => {
                return  `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if(em != "")
            {
                if(em.charAt(em.length - 4) == '.')
                {
                    document.querySelector("table#valid").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valno = Window.valno + 1;
                    return false; 
                }
                else if(em.charAt(em.length - 3) == '.')
                {
                    document.querySelector("table#valid").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valno = Window.valno + 1;
                    return false;

            }
            else{
                document.querySelector("table#invalid").appendChild(creEle);
                invalno = invalno + 1;
                return false;

            }
         }    
        });
        document.querySelector('#validcount').innerHTML = Window.valno;
        document.querySelector("#invalidcount").innerHTML = invalno ;


    };
});
function sendEmail() {
    Email.send({
        host: "smtp.elasticemail.com",
        User: "akashn8088@gmail.com",
        password: "B57194FFAECCE8D7BF194B0661AB30058EDB",
        to: "nakashkumar8088@gmial.com",
        from: "akashn8088@gmail.com",
        subject: document.querySelector('#subject').value,
        body: document.getElementById('message').value
    }).then(
        message => alert(Window.valno + "Mail sent successfully. press"+ message +"to continue."), //Success Message
    );
    console.log(document.getElementById('message').value);
    console.log(document.getElementById('message').innerText);
    console.log(document.getElementById('message').innerHTML);

}
