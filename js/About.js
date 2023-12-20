window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  document.getElementById("showModal1").onclick = function() {
    document.getElementById("modal1").style.display = "block";
    document.getElementById("modalBackground").style.display = "block";
  };
  
  document.getElementById("showModal2").onclick = function() {
    document.getElementById("modal2").style.display = "block";
    document.getElementById("modalBackground").style.display = "block";
  };
  
  document.getElementById("showModal3").onclick = function() {
    document.getElementById("modal3").style.display = "block";
    document.getElementById("modalBackground").style.display = "block";
  };
  
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      this.parentElement.parentElement.style.display = "none";
      document.getElementById("modalBackground").style.display = "none";
    };
  }
  
  document.getElementById("modalBackground").onclick = function() {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
    this.style.display = "none";
  };
  