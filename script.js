document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const phoneParagraph = button.previousElementSibling;
      const phoneNumber = phoneParagraph.textContent.trim();

      navigator.clipboard.writeText(phoneNumber).then(() => {
        button.textContent = "✔ Copied!";
        setTimeout(() => {
          button.textContent = "📋 Copy";
        }, 2000);
      });
    });
  });
})
;document.querySelectorAll(".doctor-img img").forEach(img => {
img.addEventListener("click", () => {
img.classList.toggle("zoomed");
});
});
 

