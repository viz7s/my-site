const form = document.getElementById("registrationForm");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const phone = phoneInput.value.trim();

    if (phone.length < 5) {
        message.textContent = "Введите корректный номер телефона.";
        message.className = "error";
        return;
    }

    message.textContent = "✅ Регистрация выполнена!";
    message.className = "success";

    // Переход в Telegram после регистрации
    setTimeout(function() {
        window.location.href = "https://t.me/+usf3cfHXiYc1YzJi";
    }, 500);
});