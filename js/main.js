function Menu(el, isOpen = false) {
  this.el = el;
  this.isOpen = isOpen;
  this.isOpen ? this.isOpen() : this.close();
}

Menu.prototype.open = function () {
  this.isOpen = true;
  this.el.classList.remove("slide");
  this.el.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
};

Menu.prototype.close = function () {
  this.isOpen = false;
  this.el.classList.add("slide");
  this.el.style.boxShadow = "";
};

const toggleMenu = new Menu(document.querySelector('nav'));

const menuBtn = document.getElementById("btnMenu");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!toggleMenu.isOpen) {
    menuBtn.classList.add("on");
    toggleMenu.open();
  } else {
    menuBtn.classList.remove("on");
    toggleMenu.close();
  }
});
