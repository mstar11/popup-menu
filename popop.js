let btns = document.querySelectorAll(".btn");

btns.forEach(btn =>{
    if (btn) {
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        document.body.prepend(wrapper);
      }
      btn.addEventListener("click", (e) => {
        let popup = btn.nextElementSibling;
        popup.classList.add("show");
        wrapper.classList.add("show");
      
        let closes = document.querySelectorAll(".close-btn");
      
        let popopcloses= e =>{
          popup.classList.remove("show");
          wrapper.classList.remove("show");
        }
        closes.forEach((close) => {
          close.addEventListener("click",popopcloses)
              // popup.classList.remove("show");
              // wrapper.classList.remove("show"); 
        });
        wrapper.addEventListener("click",popopcloses)
          // popup.classList.remove("show");
          // wrapper.classList.remove("show");
      });
})
