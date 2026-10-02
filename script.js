const form = document.getElementById("registerForm");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");

// Вставь сюда ссылку на свой Telegram-канал
const TELEGRAM_CHANNEL = "https://t.me/+usf3cfHXiYc1YzJi";

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const phone = phoneInput.value.trim();

    // Проверяем, что номер похож на телефон
    const phoneRegex = /^\+?[0-9\s()\-]{7,20}$/;

    if (!phoneRegex.test(phone)) {
        message.textContent = "Введите корректный номер телефона.";
        message.style.color = "#e74c3c";
        return;
    }

    message.textContent = "Регистрация прошла успешно!";
    message.style.color = "#27ae60";

    // Небольшая задержка перед переходом
    setTimeout(() => {
        window.location.href = TELEGRAM_CHANNEL;
    }, 700);
});