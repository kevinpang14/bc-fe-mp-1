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
              document.getElementById("nameForm").value = "";
              document.getElementById("subjectForm").value = "";
              document.getElementById("messageForm").value = "";
              alert("Process Completed Successfully!");
            })
            .catch((error) => {
              console.error("Error:", error);
              //if error, show error message
            });
        });