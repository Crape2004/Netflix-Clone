/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // สำหรับ Next.js, ไฟล์ในโฟลเดอร์ pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // ถ้ามี components
    // เพิ่ม path อื่นๆ ที่คุณใช้คลาส Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};