// Замените URL-плейсхолдеры на свои ссылки
const links = {
  GITHUB_URL: "#",
  KWORK_URL: "#",
  TELEGRAM_URL: "#",
  TELEGRAM_CHANNEL_URL: "#",
  INSTAGRAM_URL: "#"
};

// Здесь можно быстро прописать свои рабочие ссылки
document.getElementById('github-link').href = links.GITHUB_URL;
document.getElementById('kwork-link').href = links.KWORK_URL;
document.getElementById('telegram-link').href = links.TELEGRAM_URL;
document.getElementById('telegram-channel-link').href = links.TELEGRAM_CHANNEL_URL;
document.getElementById('instagram-link').href = links.INSTAGRAM_URL;
