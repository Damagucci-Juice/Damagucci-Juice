// update-readme.js
const fs = require('fs');
const date = new Date();
const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const formattedDate = `오늘은 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}입니다.⭐️`;

// README.md 원본 내용
const originalReadme = `
### Hi there 👋
${formattedDate}

![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=Damagucci-Juice&show_icons=true&theme=tokyonight)

<!--
**Damagucci-Juice/Damagucci-Juice** is a ✨ _special_ ✨ repository because its \`README.md\` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
`;

fs.writeFileSync('README.md', originalReadme);
