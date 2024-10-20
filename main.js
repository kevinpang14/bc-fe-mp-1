document
        .getElementById("postForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); //prevent form from submitting and refreshing the page

          //get form data
          const partnerName = document.getElementById("nameForm").value;
          const subject = document.getElementById("subjectForm").value;
          const message = document.getElementById("messageForm").value;
          //create form data object
          const formData = {
            to: "kevin.pangestu14@gmail.com",
            name: partnerName,
            subject: subject,
            text: message,
          };

          if (!partnerName || !subject || !message) {
            // Trigger warning if any field is empty
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "All fields are required!",
              footer: "<p>Please fill out all fields before submitting.</p>",
            });
          } else{
          //send form data to server
          fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
            method: "POST",
            headers: {
              "x-api-key": "RJS1-202412", //set api key by campID
              "Content-Type": "application/json", //set content type to json
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(formData), //convert form data to json
          })
            .then((response) => response.json()) //parse response to json
            .then((data) => {
              //if success
              // document.getElementById("nameForm").value = "";
              // document.getElementById("subjectForm").value = "";
              // document.getElementById("messageForm").value = "";
              // alert("Process Completed Successfully!");
              Document.getElementById("postForm").reset();
              Swal.fire("Process Completed Successfully!");
            })
            .catch((error) => {
            //   console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              //if error, show error message
            });
            }
        });

        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");
        const blurLayer = document.getElementsByClassName("blur-layer")[0]; // Get the blur layer element, choose the first element

        // Add event listener to toggle the menu
        hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active"); // Add this line to toggle the menu
        blurLayer.classList.toggle("active"); // Add this line to toggle the blur layer
        });    

        