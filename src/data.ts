/**
 * Public portfolio content / 公開履歷資料集中編輯處。
 * Source: Resume_2.pdf (2 pages) supplied by the owner, plus user-confirmed
 * employment context. Review before publishing, especially contact data.
 * PDF's 2026 IEEE review status is intentionally not asserted as current.
 */
export type Language = 'zh' | 'en';
export type Bilingual = Record<Language, string>;

export const profile = {
  name: { zh: '胡詠琪', en: 'Melody Hu' } as Bilingual,
  eyebrow: { zh: 'SOFTWARE ENGINEERING · AI · CLOUD', en: 'SOFTWARE ENGINEERING · AI · CLOUD' } as Bilingual,
  headline: {
    zh: '從人工智慧研究到軟體工程，讓跨域想法成為可用的系統。',
    en: 'Turning interdisciplinary ideas into software and AI solutions.'
  } as Bilingual,
  subtitle: {
    zh: '台積電智慧製造系統工程師，國立陽明交通大學資訊管理碩士背景。具備 AI／電腦視覺、React 全端開發、AWS 雲端應用及 DevOps 專案經驗。',
    en: 'Smart Manufacturing System Engineer at TSMC with a master’s background in Information Management at NYCU. Experienced in AI/computer vision, React applications, AWS cloud projects, and DevOps.'
  } as Bilingual,
  location: { zh: '台灣', en: 'Taiwan' } as Bilingual,
  // This email appears on your uploaded resume. Remove it if you do not want it publicly visible.
  email: 'melody016861@gmail.com',
  github: 'https://github.com/melody016861',
  linkedin: '', // TODO: If desired, add your public LinkedIn profile URL.
  photo: '', // Optional; currently the UI uses a code-themed illustration.
};

export type Experience = {
  period: Bilingual; role: Bilingual; organization: Bilingual; description: Bilingual; tags: string[];
};
export const experiences: Experience[] = [
  {
    period: { zh: '2026.10 — 至今', en: 'Oct 2026 — Present' },
    role: { zh: '智慧製造系統工程師', en: 'Smart Manufacturing System Engineer' },
    organization: { zh: '台灣積體電路製造股份有限公司（TSMC）· DWTD', en: 'TSMC · DWTD' },
    description: {
      zh: '任職智慧製造系統工程師。基於企業資訊安全與保密原則，此處僅公開職稱及背景，不揭露內部系統、程式碼或未公開專案成果。',
      en: 'Working as a Smart Manufacturing System Engineer. Internal systems, source code, and non-public achievements are intentionally excluded for confidentiality.'
    },
    tags: ['Smart Manufacturing', 'Software Engineering']
  },
  {
    period: { zh: '2025', en: '2025' },
    role: { zh: '數位內容與機器學習課程助教', en: 'Teaching Assistant — Digital Content & Machine Learning' },
    organization: { zh: '國立陽明交通大學', en: 'National Yang Ming Chiao Tung University' },
    description: {
      zh: '協助 MATLAB、資料處理與機器學習課程教學；撰寫教學講義及操作指南，協助學生安裝環境、實作及程式除錯。',
      en: 'Supported coursework in MATLAB, data processing, and machine learning; authored guides, helped students set up environments, and assisted with programming/debugging.'
    },
    tags: ['MATLAB', 'Machine Learning', 'Teaching']
  },
  {
    period: { zh: '2021', en: '2021' },
    role: { zh: '財務實習生', en: 'Finance Intern' },
    organization: { zh: '艾笛森光電股份有限公司（TWSE：3591）', en: 'Edison Opto Corporation (TWSE: 3591)' },
    description: {
      zh: '負責資料處理、文件歸檔與基礎數據分析，熟悉財會部門運作與跨部門溝通。',
      en: 'Assisted with data processing, document management, and basic analysis while learning finance-team operations and professional communication.'
    },
    tags: ['Data Processing', 'Analysis', 'Communication']
  }
];

export const education = [
  {
    degree: { zh: '資訊管理研究所 · 碩士', en: 'M.S. in Information Management' },
    school: { zh: '國立陽明交通大學', en: 'National Yang Ming Chiao Tung University' },
    period: '2024 — 2026',
    detail: {
      zh: '碩一上下學期 GPA：4.24／4.28（A+）；研究方向：雙重物件遮罩、美學化 QR Code、深度學習與影像處理。',
      en: 'First-year semester GPAs: 4.24 / 4.28 (A+); research in dual-object-mask aesthetic QR codes, deep learning, and image processing.'
    }
  },
  {
    degree: { zh: '地政學系 · 土地測量與資訊組 · 學士', en: 'B.A. in Land Economics — Surveying & Geomatics Track' },
    school: { zh: '國立政治大學', en: 'National Chengchi University' },
    period: '2020 — 2024',
    detail: {
      zh: '畢業總平均 84.98（系排前 39%）；學習 GIS、遙測、空間資料分析、SQL 與 Python。',
      en: 'Graduation average: 84.98 (top 39% of department); studied GIS, remote sensing, spatial analysis, SQL, and Python.'
    }
  }
];

export const skillGroups = [
  { name: { zh: '程式語言', en: 'Programming Languages' }, skills: ['Python', 'Java', 'C++', 'SQL', 'MATLAB', 'HTML', 'CSS', 'JavaScript'] },
  { name: { zh: 'AI、電腦視覺與資料', en: 'AI, Computer Vision & Data' }, skills: ['Deep Learning', 'NLP', 'PyTorch', 'TensorFlow', 'OpenCV', 'YOLOv8', 'Scikit-learn'] },
  { name: { zh: '全端開發與資料庫', en: 'Full Stack & Databases' }, skills: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'JavaFX'] },
  { name: { zh: '雲端、DevOps 與工具', en: 'Cloud, DevOps & Tools' }, skills: ['Linux', 'Docker', 'Kubernetes (Kind)', 'AWS EC2', 'AWS RDS', 'AWS Lambda', 'SNS', 'EventBridge', 'Amplify', 'GitHub Actions', 'Figma', 'Tableau', 'ArcGIS'] }
];

export type Project = {
  id: string; category: Bilingual; title: Bilingual; summary: Bilingual; details: Bilingual;
  tags: string[]; accent: 'blue' | 'violet' | 'cyan' | 'indigo'; year: string;
  repo?: string; demo?: string;
};
export const projects: Project[] = [
  {
    id: 'qr', category: { zh: '碩士論文 · 電腦視覺', en: 'Master’s Research · Computer Vision' },
    title: { zh: '基於雙重物件遮罩之美學化 QR Code 生成', en: 'Aesthetic Stylish QR Code Generation Based on the Dual Object Mask' },
    summary: { zh: '兼顧風格化影像的視覺效果、物件保留及 QR Code 的可解碼性。', en: 'Balancing stylized visual quality, object preservation, and QR code decodability.' },
    details: {
      zh: '以 YOLOv8 Segmentation 建立雙層 ROI 語意保護；結合 VGG 神經風格轉換、解碼導向損失及影像調整，並使用 QR 解碼測試與 PSNR／SSIM／FSIM 等指標評估。PDF 記載為 2026 IEEE 投稿，現階段不公開宣稱審查結果。',
      en: 'Uses YOLOv8 segmentation for dual ROI protection, VGG-based neural style transfer, decoding-aware optimization, and evaluation with QR decoding tests and PSNR/SSIM/FSIM. The resume records a 2026 IEEE submission; no current review outcome is asserted.'
    },
    tags: ['Python', 'YOLOv8', 'VGG', 'PyTorch', 'Computer Vision', 'PSNR / SSIM'], accent: 'blue', year: '2026'
  },
  {
    id: 'trash', category: { zh: '競賽作品 · 團隊負責人', en: 'Competition Project · Team Lead' },
    title: { zh: 'TrashNCCU 智慧回收分類系統', en: 'TrashNCCU — Smart Waste Sorting' },
    summary: { zh: '打造整合 CNN、Gemini API、Arduino 與網頁平台的半自動分類裝置。', en: 'A semi-automated waste sorting system integrating CNN, Gemini API, Arduino, and a web platform.' },
    details: {
      zh: '帶領團隊製作回收分類原型，負責 MongoDB 資料庫建置、React 前端整合與回收數據蒐集／教育平台；榮獲 2024 政大 AI 跨域永續創新競賽第一名。',
      en: 'Led the team developing a recycling prototype, with responsibility for MongoDB, React integration, and data collection/educational platform; won 1st place in the 2024 NCCU AI interdisciplinary sustainability competition.'
    },
    tags: ['React', 'MongoDB', 'CNN', 'Gemini API', 'Arduino'], accent: 'indigo', year: '2024',
    repo: 'https://github.com/melody016861/AIDcard.github.io'
  },
  {
    id: 'seat', category: { zh: '社會創新 · 團隊專案', en: 'Social Innovation · Team Project' },
    title: { zh: '溫情座位 · 智慧座位配對系統', en: 'Warm Seat — Smart Seat Matching' },
    summary: { zh: '為隱性需求乘客設計更友善的讓座互動機制。', en: 'A considerate seating-matching concept for passengers with less visible needs.' },
    details: {
      zh: '以降低主動請求讓座的心理壓力為目標，參與模型設計、UI/UX 介面與 Arduino 硬體原型製作。',
      en: 'Designed to reduce the discomfort of asking for a seat; contributed to model design, UI/UX, and an Arduino-based prototype.'
    },
    tags: ['UI/UX', 'Arduino', 'Human–Computer Interaction'], accent: 'violet', year: '2024',
    demo: 'https://drive.google.com/file/d/12oQhgMJGtTydTOMkMii2FF6iTMpJwzoM/view?usp=sharing'
  },
  {
    id: 'food', category: { zh: '校園應用 · 團隊專案', en: 'Campus App · Team Project' },
    title: { zh: '餐餐不剩 · 校園餐飲剩食管理平台', en: 'Zero Leftovers — Campus Food Waste Platform' },
    summary: { zh: '結合餐點預約、剩食共享與餐飲資料管理。', en: 'Meal reservations, leftover sharing, and campus food data management.' },
    details: {
      zh: '使用 Java OOP、JavaFX 與 MySQL 實作智慧訂餐平台，整合剩食管理與數據分析。',
      en: 'Built a smart meal-ordering application with Java OOP, JavaFX, and MySQL, including food surplus management and analysis.'
    },
    tags: ['Java', 'JavaFX', 'MySQL', 'OOP'], accent: 'cyan', year: '2024',
    demo: 'https://drive.google.com/file/d/1IZAIh4Kwr-tEBNt6aSTR7TjAjpYXAcph/view?usp=drive_link'
  },
  {
    id: 'devops', category: { zh: 'Side Project · DevOps', en: 'Side Project · DevOps' },
    title: { zh: 'Flask CI/CD 自動化部署專案', en: 'Flask CI/CD Deployment Automation' },
    summary: { zh: '從容器化到 Kubernetes（Kind）與 GitHub Actions 的部署流程。', en: 'Containerization and deployment workflows using Kubernetes (Kind) and GitHub Actions.' },
    details: {
      zh: '以 Flask 建立後端服務，使用 Dockerfile 封裝，於 Kind 叢集設定 Deployment／Service，並以 GitHub Actions 建立自動建置、測試與部署流程。',
      en: 'Implemented a Flask service, Dockerfile packaging, Kubernetes Deployment/Service on Kind, and GitHub Actions automation for build, test, and deployment.'
    },
    tags: ['Flask', 'Docker', 'Kubernetes', 'Kind', 'GitHub Actions'], accent: 'blue', year: '2025'
  },
  {
    id: 'aws', category: { zh: '雲端運算 · 團隊專案', en: 'Cloud Computing · Team Project' },
    title: { zh: '機器定期維修自動通知系統', en: 'AWS Automated Maintenance Reminder System' },
    summary: { zh: '依設備保養週期，自動檢查資料庫並推播維修提醒。', en: 'Scheduled equipment maintenance checks and automated reminder notifications.' },
    details: {
      zh: '採用 AWS Lambda、EventBridge、SNS 及 RDS 建置 Serverless 通知流程；透過定期事件觸發讀取維修週期資料，判斷即將到期設備並發送通知，同時規劃 IAM 權限。',
      en: 'Designed a serverless workflow with AWS Lambda, EventBridge, SNS, and RDS to check equipment maintenance cycles and send notifications, with IAM permissions planning.'
    },
    tags: ['AWS', 'Lambda', 'EventBridge', 'SNS', 'RDS', 'IAM'], accent: 'violet', year: '2025'
  }
];

export const recognitions = [
  {
    title: { zh: '2024 政大 AI 跨域永續創新競賽 · 第一名', en: '2024 NCCU AI Interdisciplinary Sustainability Competition · 1st Place' },
    issuer: { zh: '國立政治大學', en: 'National Chengchi University' },
    url: 'https://drive.google.com/file/d/1Gu_CWCOH9wjb2Xom7Cr3f-5YqjPhFi92/view?usp=drive_link'
  },
  {
    title: { zh: '2024 桃園社會企業創業競賽暨第十屆尤努斯獎 · 第二名', en: '2024 Taoyuan Social Enterprise Entrepreneurship & 10th Yunus Award · 2nd Place' },
    issuer: { zh: '桃園市 · 2024', en: 'Taoyuan · 2024' },
    url: 'https://youth.tycg.gov.tw/News_Photo_Content.aspx?n=18013&s=1403285'
  },
  {
    title: { zh: 'TOEIC 英語測驗 · 665 分', en: 'TOEIC English Test · 665' },
    issuer: { zh: '語言能力（依履歷 PDF）', en: 'Language proficiency (as listed in résumé)' }
  }
];
