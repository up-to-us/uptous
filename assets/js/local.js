window.addEventListener("load", function () {
  const url = new URL(window.location);
  const path = url.pathname.replace(/\//g, "");
  var element = document.querySelector('[data-page="' + path + '"]');
  element.classList.add("active");
  
  //set height
  var containerDiv = document.querySelector('.container');
  containerDiv.style.minHeight = window.innerHeight - 230 + 'px';

  if (path === "contact-us") {
    var form = document.getElementById("contact-us-form");
    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
      e.preventDefault();

      const formData = new FormData();
      formData.append(
        "name",
        document.querySelector('input[name="name"]').value
      );
      formData.append(
        "email",
        document.querySelector('input[name="email"]').value
      );

      formData.append(
        "message",
        document.querySelector('textarea[name="message"]').value
      );

      fetch("https://getform.io/f/2346a297-cb1c-4544-8730-869628cdcabe", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          form.classList.add("hide");
          var success = document.getElementById("contact-us-success");
          success.classList.remove("hide");
          console.log(response);
        })
        .catch((error) => {
          form.classList.add("hide");
          var failure = document.getElementById("contact-us-failure");
          failure.classList.remove("hide");
          console.log(response);
        });
    }
  }
});
