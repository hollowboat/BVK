function generateCard(){

const photo=document.getElementById("photo").files[0];

const name=document.getElementById("name").value;
const age=document.getElementById("age").value;
const dob=document.getElementById("dob").value;
const location=document.getElementById("location").value;

if(!photo || !name || !age || !dob || !location){
alert("Fill all fields");
return;
}

const reader=new FileReader();

reader.onload=function(e){

document.getElementById("userPhoto").src=e.target.result;

document.getElementById("cardName").innerText=name;

document.getElementById("cardAge").innerText=age;

document.getElementById("cardDob").innerText=dob;

document.getElementById("cardLocation").innerText=location;

document.getElementById("positionLocation").innerText=location.toUpperCase();

document.getElementById("cardJoinDate").innerText=
new Date().toLocaleDateString();

document.getElementById("memberId").innerText=
"BVK-"+Math.floor(Math.random()*999999);

document.getElementById("successBox").innerHTML=
`Successfully Joined BVK.<br>You Are Now MLA Of ${location}`;

document.getElementById("cardContainer").style.display="block";

};

reader.readAsDataURL(photo);

}

function downloadCard(){

html2canvas(document.querySelector("#memberCard"),{
scale:3,
useCORS:true
}).then(canvas=>{

const link=document.createElement("a");

link.download="BVK_Member_Card.png";

link.href=canvas.toDataURL("image/png");

link.click();

});

}
