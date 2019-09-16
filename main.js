function openExperience() {
    var x = document.getElementById("exp-container");
    var y = document.getElementById("image-container");
    if (x.style.display === "none") {
     y.style.display ="none";
      x.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display ="block";
    
    }
}