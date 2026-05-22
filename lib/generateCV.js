import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { projects } from "@/app/projects/page";
import { about, education, experience, skills } from "@/app/resume/page";
import { info } from "@/app/contact/page";

export async function generateCvPdf() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([595, 842]);
  const { height, width } = page.getSize();
  const margin = 45;

  const darkBg = rgb(0.08, 0.08, 0.1);
  const accent = rgb(0.42, 0.7, 0.93);
  const white = rgb(1, 1, 1);
  const lightGray = rgb(0.7, 0.7, 0.7);

  page.drawRectangle({
    x: 0, y: 0, width: width, height: height, color: darkBg,
  });

  page.drawText("INIOLUWA ADEBAYO", {
    x: margin, y: height - 50, size: 22, color: white, font: helveticaBoldFont,
  });
  page.drawText("Backend Software Engineer", {
    x: margin, y: height - 72, size: 12, color: accent, font: helveticaFont,
  });

  let contactLine = height - 96;
  const contactInfo = [
    info[1]?.description || "adebayoinioluwam@gmail.com",
    info[0]?.description || "+234 813 373 0145",
    "github.com/marvellous-is-cool",
    "linkedin.com/in/adebayo-inioluwa-m",
  ];
  contactInfo.forEach((text) => {
    page.drawText(text, {
      x: margin, y: contactLine, size: 8, color: lightGray, font: helveticaFont,
    });
    contactLine -= 13;
  });

  page.drawRectangle({
    x: margin, y: height - 160, width: width - 2 * margin, height: 1, color: accent,
  });

  let yPos = height - 180;
  const leftX = margin;
  const rightX = width / 2 + 10;
  const colWidth = 230;
  const lineH = 12;

  function drawSection(title, content, x, y) {
    page.drawText(title, {
      x, y, size: 11, color: accent, font: helveticaBoldFont,
    });
    page.drawText(content, {
      x, y: y - 18, size: 8.5, color: white, font: helveticaFont,
      maxWidth: colWidth, lineHeight: lineH,
    });
  }

  function wrapText(text, maxWidth_px, fontSize) {
    const avgCharWidth = fontSize * 0.55;
    const charsPerLine = Math.floor(maxWidth_px / avgCharWidth);
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    for (const word of words) {
      if ((currentLine + " " + word).trim().length <= charsPerLine) {
        currentLine = (currentLine + " " + word).trim();
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines.join("\n");
  }

  const profileText = wrapText(about.description, colWidth, 8.5);
  drawSection("PROFILE", profileText, leftX, yPos);

  const expText = experience.items
    .map((e) => `${e.position} | ${e.company} (${e.duration})`)
    .join("\n");
  drawSection("EXPERIENCE", expText, rightX, yPos);

  yPos -= 120;

  const eduText = education.items
    .slice(0, 2)
    .map((e) => `${e.degree} — ${e.institution} (${e.duration})`)
    .join("\n");
  drawSection("EDUCATION", eduText, leftX, yPos);

  const projectText = projects
    .slice(0, 5)
    .map((p) => `${p.title}: ${p.description.substring(0, 80)}...`)
    .join("\n\n");
  drawSection("PROJECTS", projectText, rightX, yPos);

  yPos -= 140;

  const skillCategories = {
    "Languages": "Python, JavaScript, TypeScript, R, Rust",
    "Frameworks": "FastAPI, Django, Express.js, Node.js",
    "Databases": "PostgreSQL, MySQL, MongoDB, Redis, Firebase",
    "Cloud": "AWS, Docker, CI/CD (GitHub Actions), Linux",
    "Payments": "Stripe, Paystack, PayPal, Webhooks",
    "AI/NLP": "Claude, ChatGPT, Gemini, NLP pipelines",
  };
  const skillsText = Object.entries(skillCategories)
    .map(([cat, items]) => `${cat}: ${items}`)
    .join("\n");
  drawSection("SKILLS", skillsText, leftX, yPos);

  const achievementsText = [
    "yoobaai — Yoruba NLP toolkit for low-resource language AI",
    "lodgeinternet — Live platform with 55+ users across 3 hostels",
    "A-grade ML final year project with FastAPI + Scikit-learn",
    "AWS Cloud Practitioner certified",
  ].join("\n");
  drawSection("ACHIEVEMENTS", achievementsText, rightX, yPos);

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  showDownloadNotification();
  link.download = "Marvellous_Adebayo_CV.pdf";
  link.click();
}

function showDownloadNotification() {
  const notification = document.createElement("div");
  notification.innerText = "Download starting...";
  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.padding = "10px 20px";
  notification.style.backgroundColor = "#333";
  notification.style.color = "#fff";
  notification.style.borderRadius = "8px";
  notification.style.zIndex = "1000";
  document.body.appendChild(notification);
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 4000);
}
