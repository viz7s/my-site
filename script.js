const form =
 document.getElementById("registrationForm");
const phoneInput =
 document.getElementById("phone");
const message =
 document.getElementById("message");
const telegramSection =
 document.getElementById("telegramSection");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const phone = phoneInput.value.trim();

    if (phone.length < 5) {

        message.textContent = "Введите корректный номер телефона.";
        message.className = "error";

        return;
    }

    // Регистрация выполнена
    message.textContent = "✅ Регистрация выполнена!";
    message.className = "success";

    // Показываем Telegram
    telegramSection.style.display = "block";
});