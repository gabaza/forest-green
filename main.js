function openExperience() {
    var w = document.getElementById("social-container");
    var x = document.getElementById("exp-container");
    var y = document.getElementById("image-container");
    var z = document.getElementById("skills-container");
    if (x.style.display === "none") {
     y.style.display ="none";
      x.style.display = "block";
      z.style.display ="none";
      w.style.display ="none";
    } else {
      x.style.display = "none";
      y.style.display ="block";
    
    }
}
function openSkills() {
    var w = document.getElementById("social-container");
    var x = document.getElementById("skills-container");
    var y = document.getElementById("image-container");
    var z = document.getElementById("exp-container");
    if (x.style.display === "none") {
     y.style.display ="none";
     z.style.display ="none";
     w.style.display ="none";
      x.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display ="block";
    
    }
}

function openSocial() {
  var w = document.getElementById("social-container");
  var x = document.getElementById("skills-container");
  var y = document.getElementById("image-container");
  var z = document.getElementById("exp-container");
  if (w.style.display === "none") {
   y.style.display ="none";
   z.style.display ="none";
   x.style.display ="none";
    w.style.display = "block";
  } else {
    w.style.display = "none";
    y.style.display ="block";
  
  }
}
