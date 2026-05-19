// Замените URL-плейсхолдеры на свои ссылки
const links = {
  GITHUB_URL: "https://github.com/SergeyFrozenZS",
  KWORK_URL: "https://kwork.ru/user/akutinserega8",
  TELEGRAM_URL: "https://t.me/Akraneee",
  TELEGRAM_CHANNEL_URL: "https://t.me/Akranee",
  INSTAGRAM_URL: "https://www.instagram.com/akutinsergey1?igsh=MXV5YmY0dWJ2dDBlaA%3D%3D&utm_source=qr"
};

// Здесь можно быстро прописать свои рабочие ссылки
document.getElementById('github-link').href = links.GITHUB_URL;
document.getElementById('kwork-link').href = links.KWORK_URL;
document.getElementById('telegram-link').href = links.TELEGRAM_URL;
document.getElementById('telegram-channel-link').href = links.TELEGRAM_CHANNEL_URL;
document.getElementById('instagram-link').href = links.INSTAGRAM_URL;
