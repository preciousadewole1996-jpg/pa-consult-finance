document.addEventListener("DOMContentLoaded", () => {
  // 1. Pre-select plan from URL query string (e.g., signup.html?plan=Household%20Growth)
  const params = new URLSearchParams(window.location.search);
  const selectedPlan = params.get("plan");
  const planDropdown = document.getElementById("planSelect");

  if (selectedPlan && planDropdown) {
    for (const option of planDropdown.options) {
      if (option.value.toLowerCase() === selectedPlan.toLowerCase()) {
        option.selected = true;
        break;
      }
    }
  }

  // 2. Handle form submission and show confirmation state
  const form = document.getElementById("consultation-form");
  const formCard = document.getElementById("form-card");
  const confirmationCard = document.getElementById("confirmation-card");
  const confirmationMessage = document.getElementById("confirmation-message");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const chosenPlan = document.getElementById("planSelect").value;

      confirmationMessage.textContent =
        `Thank you, ${fullName}. We have received your consultation request for the ${chosenPlan} plan and will contact you within 24 hours.`;

      formCard.classList.add("hidden");
      confirmationCard.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});