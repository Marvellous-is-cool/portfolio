import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { projects } from "@/app/work/page";
import { about, education, experience, skills } from "@/app/resume/page";
import { info } from "@/app/contact/page";

export async function generateCvPdf() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  // Load standard fonts
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([600, 850]);
  const { height, width } = page.getSize();
  const margin = 40;

  // Header Section with Background
  page.drawRectangle({
    x: 0,
    y: height - 150,
    width: width,
    height: 150,
    color: rgb(1, 1, 1),
  });

  // Name and Job Title
  page.drawText("Marvellous Adebayo", {
    x: margin,
    y: height - 60,
    size: 26,
    color: rgb(0, 0, 0),
    font: helveticaBoldFont,
  });
  page.drawText("Software Developer", {
    x: margin,
    y: height - 90,
    size: 14,
    color: rgb(0, 0, 0),
    font: helveticaFont,
  });

  // Contact Information with Improved Spacing
  const contactY = height - 130;
  let contactSpacing = 15; // Adjusted spacing
  info.forEach((contact, index) => {
    page.drawText(`+ ${contact.title}: ${contact.description}`, {
      x: margin,
      y: contactY - index * contactSpacing,
      size: 12,
      color: rgb(0, 0, 0),
      font: helveticaFont,
    });
  });

  // Profile Image Fitted from Name to Contact
  const imageUrl = "/assets/photo.png";
  const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());
  const image = await pdfDoc.embedPng(imageBytes);
  page.drawImage(image, {
    x: width - 160, // Wider image
    y: height - 140,
    width: 120,
    height: 120,
  });

  // Content Section with Dark Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: height - 150,
    color: rgb(0.1, 0.1, 0.1),
  });

  // Define initial positions
  let contentY = height - 180;
  const leftColumnX = margin;
  const rightColumnX = width / 2 + 20; // Adjusted right column position
  const sectionSpacing = 180; // Increased section spacing to prevent overlap

  // Render Sections with Proper Spacing and Larger Font Size
  const sections = [
    {
      title: "Profile",
      content: about.description,
      x: leftColumnX,
      y: contentY,
      fontSize: 12,
    },
    {
      title: "Work Experience",
      content: experience.items
        .map((exp) => `- ${exp.position} at ${exp.company} (${exp.duration})`)
        .join("\n"),
      x: rightColumnX,
      y: contentY,
      fontSize: 12,
    },
    {
      title: "Education",
      content: education.items
        .map((edu) => `- ${edu.degree} at ${edu.institution} (${edu.duration})`)
        .join("\n"),
      x: leftColumnX,
      y: contentY - sectionSpacing,
      fontSize: 12,
    },
    {
      title: "Projects",
      content: projects
        .map((proj) => `- ${proj.title}: ${proj.description}`)
        .join("\n\n"),
      x: rightColumnX,
      y: contentY - sectionSpacing,
      fontSize: 12,
    },
    {
      title: "Skills",
      content: skills.skillList.map((skill) => `- ${skill.name}`).join("\n"),
      x: leftColumnX,
      y: contentY - 2.5 * sectionSpacing,
      fontSize: 12,
    },
    {
      title: "Hobbies",
      content: "Reading, Travelling, Exploring, Singing",
      x: rightColumnX,
      y: contentY - 2.5 * sectionSpacing,
      fontSize: 12,
    },
  ];

  // Draw each section title and content with calculated spacing
  sections.forEach(({ title, content, x, y, fontSize }) => {
    page.drawText(title, {
      x,
      y,
      size: 14,
      color: rgb(0.2, 0.6, 0.9),
      font: helveticaBoldFont,
    });
    page.drawText(content, {
      x,
      y: y - 20, // Adjusted lower position for content text
      size: fontSize,
      color: rgb(1, 1, 1),
      maxWidth: 260,
      lineHeight: 15,
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

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 4000);
}
