document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs button");
    const clinicDetails = document.querySelector(".clinic-details");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        const selectedClinic = this.textContent.trim();
        clinicDetails.innerHTML = `
          <p>${selectedClinic}: Information about ${selectedClinic.toLowerCase()}</p>
          <p>Book now to receive the clinic's address details and phone number</p>
        `;
      });
    });

    const buttons = document.querySelectorAll(".book-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        if (btn.classList.contains("disabled")) {
          alert("No appointments available for this day.");
        } else {
          alert("Appointment booked successfully!")
        }
      });
    });
  });

  function goToCategory() {
    window.location.href = "confirmation.html"; 
  }
 