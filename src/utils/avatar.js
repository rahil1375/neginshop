// src/utils/avatar.js
export function buildAvatarUrl(avatarPath) {
  if (!avatarPath) return "/avatars/default.png";
  // اگر مسیر نسبی و با /avatars شروع شده، به سرور اضافه می‌کنیم
  if (avatarPath.startsWith("/avatars")) {
    // فرض URL سرور localhost:5000 — اگر در محیط deploy متفاوت بود این را تغییر بده
    return `http://localhost:5000${avatarPath}`;
  }
  return avatarPath;
}