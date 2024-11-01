import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { projects } from "@/app/work/page";
import { about, education, experience, skills } from "@/app/resume/page";
import { info } from "@/app/contact/page";

export async function generateCvPdf() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const page = pdfDoc.addPage([600, 850]);
  const { height } = page.getSize();
  const margin = 50;
  let yPos = height - margin;

  // Add profile image
  const imageUrl = "/assets/photo.png";
  const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());
  const image = await pdfDoc.embedPng(imageBytes);
  const imgDims = image.scale(0.3);
  page.drawImage(image, {
    x: margin,
    y: yPos - imgDims.height,
    width: imgDims.width,
    height: imgDims.height,
  });

  // Personal Details & Title
  page.drawText("Marvellous Adebayo", {
    x: 180,
    y: yPos - 10,
    size: 24,
    color: rgb(0.2, 0.5, 0.7),
  });
  page.drawText("Software Developer", {
    x: 180,
    y: yPos - 40,
    size: 18,
    color: rgb(0, 0, 0),
  });

  // Contact Information
  yPos -= 80;
  info.forEach((contact) => {
    page.drawText(`${contact.title}: ${contact.description}`, {
      x: margin,
      y: yPos,
      size: 12,
      color: rgb(0.1, 0.1, 0.1),
    });
    yPos -= 20;
  });

  // About Section
  yPos -= 40;
  page.drawText("About Me", {
    x: margin,
    y: yPos,
    size: 16,
    color: rgb(0.2, 0.5, 0.7),
  });
  page.drawText(about.description, {
    x: margin,
    y: yPos - 20,
    size: 12,
    maxWidth: 500,
    color: rgb(0.1, 0.1, 0.1),
  });

  // Education Section
  yPos -= 80;
  page.drawText("Education", {
    x: margin,
    y: yPos,
    size: 16,
    color: rgb(0.2, 0.5, 0.7),
  });
  education.items.forEach((edu) => {
    yPos -= 20;
    page.drawText(`- ${edu.degree} at ${edu.institution} (${edu.duration})`, {
      x: margin,
      y: yPos,
      size: 12,
      color: rgb(0.1, 0.1, 0.1),
    });
  });

  // Experience Section
  yPos -= 60;
  page.drawText("Experience", {
    x: margin,
    y: yPos,
    size: 16,
    color: rgb(0.2, 0.5, 0.7),
  });
  experience.items.forEach((exp) => {
    yPos -= 20;
    page.drawText(`- ${exp.position} at ${exp.company} (${exp.duration})`, {
      x: margin,
      y: yPos,
      size: 12,
    });
    yPos -= 15;
  });

  // Projects Section
  yPos -= 50;
  page.drawText("Projects", {
    x: margin,
    y: yPos,
    size: 16,
    color: rgb(0.2, 0.5, 0.7),
  });
  projects.forEach((project) => {
    yPos -= 20;
    page.drawText(`- ${project.title}`, { x: margin, y: yPos, size: 12 });
    page.drawText(project.description, {
      x: margin + 20,
      y: yPos - 15,
      size: 10,
      maxWidth: 480,
    });
    yPos -= 35;
  });

  // Skills Section
  yPos -= 60;
  page.drawText("Skills", {
    x: margin,
    y: yPos,
    size: 16,
    color: rgb(0.2, 0.5, 0.7),
  });
  skills.skillList.forEach((skill) => {
    yPos -= 20;
    page.drawText(`- ${skill.name}`, {
      x: margin,
      y: yPos,
      size: 12,
      color: rgb(0.1, 0.1, 0.1),
    });
  });

  // Hobbies Section
  const hobbies = [
    { name: "Reading" },
    { name: "Travelling" },
    { name: "Exploring" },
    { name: "Singing" },
    { name: "More Travelling" },
  ];

  yPos -= 60;
  page.drawText("Hobbies", {
    x: margin,
    y: yPos,
    size: 16,
    color: rgb(0.2, 0.5, 0.7),
  });
  hobbies.forEach((hobby) => {
    yPos -= 20;
    page.drawText(`- ${hobby.name}`, {
      x: margin,
      y: yPos,
      size: 12,
      color: rgb(0.1, 0.1, 0.1),
    });
  });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  showDownloadNotification(); // Custom function for download notification
  link.download = "Marvellous_Adebayo_CV.pdf";
  link.click();
}

// Custom notification function
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

  // Remove notification after 10 seconds
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 5000);
}
