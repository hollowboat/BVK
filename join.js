// =========================
// FILE: join.js
// =========================

const photoInput = document.getElementById("photoInput");

const nameInput = document.getElementById("nameInput");

const ageInput = document.getElementById("ageInput");

const dobInput = document.getElementById("dobInput");

const talukInput = document.getElementById("talukInput");

const generateBtn = document.getElementById("generateBtn");

const downloadBtn = document.getElementById("downloadBtn");



const profileImage = document.getElementById("profileImage");

const cardName = document.getElementById("cardName");

const cardAge = document.getElementById("cardAge");

const cardDob = document.getElementById("cardDob");

const cardTaluk = document.getElementById("cardTaluk");

const positionTaluk = document.getElementById("positionTaluk");

const memberId = document.getElementById("memberId");



const successBox = document.getElementById("successBox");

const successText = document.getElementById("successText");





// ================= PHOTO =================

photoInput.addEventListener("change", function(){

  const file = this.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = function(e){

      profileImage.src = e.target.result;

    };

    reader.readAsDataURL(file);

  }

});






// ================= GENERATE =================

generateBtn.addEventListener("click", function(){



  const name = nameInput.value;

  const age = ageInput.value;

  const dob = dobInput.value;

  const taluk = talukInput.value;



  if(

    name === "" ||
    age === "" ||
    dob === "" ||
    taluk === ""

  ){

    alert("Please fill all details");

    return;

  }



  // DETAILS

  cardName.innerText = name.toUpperCase();

  cardAge.innerText = age;

  cardDob.innerText = dob;

  cardTaluk.innerText = taluk;

  positionTaluk.innerText = taluk.toUpperCase();



  // MEMBER ID

  const randomId = Math.floor(

    1000 + Math.random() * 9000

  );

  memberId.innerText = "BVK-" + randomId;



  // SUCCESS

  successBox.style.display = "block";

  successText.innerText =

  "You Are Now MLA Of " + taluk;



});







// ================= DOWNLOAD =================

downloadBtn.addEventListener("click", function(){



  html2canvas(document.getElementById("memberCard"))

  .then(function(canvas){



    const link = document.createElement("a");

    link.download = "BVK_MEMBER_CARD.png";

    link.href = canvas.toDataURL();

    link.click();



  });

});