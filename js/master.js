//check If There s  Local Storage Colors Option 
let minColors = localStorage.getItem("color_option");
if(minColors !== null){
  document.documentElement.style.setProperty("--main--color" , minColors );

      //Remove Active Class From colors List Item 
      document.querySelectorAll(".colors-list li").forEach(elment =>{
        elment.classList.remove("active");
        if(elment.dataset.color === minColors){
          elment.classList.add("active")
        }
      });
}
//Randome Bacground Opstion
let bacgroundOPtion = true;

// Variabel To Control  The Interval
let bacgroundIntervel;

// Check If There s Local Storage Random Bacground  Item
let bacgroundLocalItem = localStorage.getItem("bacground_option");
// Check If Random Bacground Local Storage  IS Not EMpty
if(bacgroundLocalItem !== null){

  if(bacgroundLocalItem === "true"){
    bacgroundOPtion = true;
  }
  else{
    bacgroundOPtion = false;
  }

}
// Remove Active Class From Allx Span 
document.querySelectorAll(".random-bacground span").forEach(element =>{
  element.classList.remove("active");
});
if(bacgroundLocalItem === 'true'){
  document.querySelector(".random-bacground .yes").classList.add("active");
}
else{
  document.querySelector(".random-bacground .no").classList.add("active");
}

// Toggel-Spin-Class-On-Icon
let box = document.querySelector(".toggel-satting .satting");
box.onclick = function(){
  //toggel class Fa spin fot Icon 
  this.classList.toggle("fa-spin");
  // Toggel class Oppen On Main
  document.querySelector(".Sattings-Box").classList.toggle("open");
}

// Switch Colors 
const colorList = document.querySelectorAll(".colors-list li");
//Loop on All list items 
colorList.forEach(li=> {
  //click on Event List Items
  li.addEventListener("click" , (e) =>{
    //set color On Root 
    document.documentElement.style.setProperty("--main--color" , e.target.dataset.color);
    // Set color On Local  Storage
    localStorage.setItem("color_option" ,  e.target.dataset.color);

    handelActive(e);

  });
});

// Switch Random  Bacground option
const randomeBacEl = document.querySelectorAll(".random-bacground span");
//Loop on All span
randomeBacEl.forEach(span=> {
  //click on Event span
  span.addEventListener("click" , (e) =>{
  
    //Remove Active Class From All Childerens
    handelActive(e);
    if(e.target.dataset.bacground === "yes"){
      bacgroundOPtion = true;
      randomizeImgs ();
      localStorage.setItem("bacground_option" , true);
    }else{
      bacgroundOPtion = false;
      clearInterval(bacgroundIntervel);
      localStorage.setItem("bacground_option" , false);
    }
  });
});


// Select Landing Page Elemant
let landingPage =document.querySelector(".landing-page");
// Get Array Of Imgs
let imgsArray =
[
  "slider-1-.jpg",
  "slider-2-.jpg",
  "slider-3-.jpg",
  "slider-4-.jpg",
  "slider-5-.jpg"
]

//function To Randomize Imge
function randomizeImgs (){
  if( bacgroundOPtion === true){
      
    // Get Random Nomber
    bacgroundIntervel = setInterval(() =>{
      let randomNomber = Math.floor(Math.random()*imgsArray.length);
    // Change Bacground Images Url
    landingPage.style.backgroundImage = 'url("../images/'+imgsArray[randomNomber]+'")';
    } ,1000)
  };

}

//  Select Skills Selector
let ourSkills = document.querySelector(".Skils");

window.onscroll =function ()
{
  //skills offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  //Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = pageYOffset;


  if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    let allSkills = document.querySelectorAll(".skil-Box .skill-progress span");

    allSkills.forEach(skill =>{

      skill.style.width = skill.dataset.progress;
    });
  }
};



//  Create Popup With THe Image
let ourGellery = document.querySelectorAll(".gallery img");

ourGellery.forEach(img => {

  img.addEventListener("click" , (e) =>{

    // Create Overlay Element
    let overlay = document.createElement("div");

    //  add class To Overlay
    overlay.classList = "popup-overlay";

    // Append Overlay To The Body 
    document.body.appendChild(overlay);
    
    //  --- Create The Popup Imges
    let popupBox = document.createElement("div");
  
        //  add class TO The Popup Box 
        popupBox.classList = "popup-box";


        if(img.alt !== null){

          // Create Heading 
          let imgHeading = document.createElement("h3");

          //  Create Text  For Heading 
          let imgText = document.createTextNode("The Images");

          // Append  The Text To The Heading 
          imgHeading.appendChild(imgText);

          // Append The Heading  To The Popup Box
          popupBox.appendChild(imgHeading);

        }
        //  Create The Image 
        let popupImage = document.createElement("img");

        //  Set Image Surce 
        popupImage.src = img.src;
        
        //Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The poupp Box To Body 
        document.body.appendChild(popupBox);


        // create The Close Span 
        let closeBotton = document.createElement("span");

        // create The Close Button Text 
        let closeButtonText = document.createTextNode("x");

        // Append Text To  Close Button 
        closeBotton.appendChild(closeButtonText);

        // Add Class  To Close Button 
        closeBotton.className = 'close-button';

        // Add The Close Button  To The Popup Box
        popupBox.appendChild(closeBotton);
  });
});


//  Clase Popup
document.addEventListener("click" , function (e){

  if(e.target.className == 'close-button'){

    // Remove  The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay 
    document.querySelector(".popup-overlay").remove();
  }
});

//  Select All  Bulets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
//  Select All  Links Nav bar
const allLinks = document.querySelectorAll(".links a");

function srollToSomewhere (elements){

  elements.forEach(ele => {

    ele.addEventListener("click" , (e) => {

      e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'
    });

    });
});
}
srollToSomewhere(allBullets);
srollToSomewhere(allLinks);

//  Handel Active State
function handelActive (ev){

   //Remove Active Class From All Childerens
    ev.target.parentElement.querySelectorAll(".active").forEach(elment =>{

    elment.classList.remove("active");

  });

  //Add Active Class On Self
  ev.target.classList.add("active") 
}



let bulletSpan = document.querySelectorAll(".bullets-option span");
let bulletContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_optio");

//  Remove Class Active To bullet
if( bulletLocalItem !== null){

  bulletSpan.forEach(span => {

  span.classList.remove("active");

  });

    if(bulletLocalItem === 'block'){

      bulletContainer.style.display = 'block';

      document.querySelector(".bullets-option .yes").classList.add("active");
    }
    else{

      bulletContainer.style.display = 'none';

      document.querySelector(".bullets-option .no").classList.add("active");
    }

}

// bullets ITem To Right
bulletSpan.forEach(span => {

  span.addEventListener("click" , (e) =>{


  if(span.dataset.display === 'show'){


    bulletContainer.style.display = 'block';
    localStorage.setItem("bullets_optio" , "block");

  }
  else{

    bulletContainer.style.display = 'none';

    localStorage.setItem("bullets_optio" , "none");

  }
    handelActive(e);
  });
});


//  Reaset Button in The site

document.querySelector(".reaset-option").onclick = function (){

  // localStorage.clear(); ده فى حاله انى مافيش غير اعدادات الالوان وخلفيه

  localStorage.removeItem("bacground_option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("bullets_optio");



  // reload Window

  window.location.reload();

}


// Toggol Menu 

let toggelBtn =document.querySelector(".toggel-menu");
let tLinks = document.querySelector(".links");


toggelBtn.onclick = function(e){

 // Stop Propagation
  e.stopPropagation();

  // Toggel Class  "Menu-active" on Active
  this.classList.toggle("menu-active");
    // Toggel Class  "open" on links
  tLinks.classList.toggle("open");
}


// Click  Anywhear Outsiede Menu And Toggle Button

document.addEventListener("click" , (e) =>{

  if(e.target !== toggelBtn && e.target !== tLinks){

    if(tLinks.classList.contains("open")){


    // Toggel Class  "Menu-active" on Active
    toggelBtn.classList.toggle("menu-active");
    // Toggel Class  "open" on links
    tLinks.classList.toggle("open");


    }

  }

});


 // Stop Propagation on Menu


tLinks.onclick = function (e){

  e.stopPropagation();

}



