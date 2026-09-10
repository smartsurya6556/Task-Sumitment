   

   
   const btn = document.getElementById("btn");
   const text = document.getElementById("text");

        btn.addEventListener("click", function () {

            text.classList.toggle("show");

            if (text.classList.contains("show")) {
                btn.textContent = "Hide Content";
            } else {
                btn.textContent = "Show Content";
            }

        });

        const box = document.getElementById("box");
        const colorBtn = document.getElementById("colorBtn");

        colorBtn.addEventListener("click", function () {

            box.classList.toggle("green");

        });



   
        const details = document.getElementById("details");
        const detailsBtn = document.getElementById("detailsBtn");

        detailsBtn.addEventListener("click", function () {

            details.classList.toggle("show");

            if (details.classList.contains("show")) {
                detailsBtn.textContent = "Hide Details";
            } else {
                detailsBtn.textContent = "Show Details";
            }

        });