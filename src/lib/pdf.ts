export const downloadPDF = async () => {
  if (typeof window === "undefined") return;

  const element = document.getElementById("invoice-preview");
  if (!element) return;

  const html2canvas = (await import("html2canvas")).default;
  const jsPDF = (await import("jspdf")).default;

  // CLONE NODE
  const cloned = element.cloneNode(true) as HTMLElement;

  //  FORCE SAFE COLORS (VERY IMPORTANT)
  const allElements = cloned.querySelectorAll("*");

  allElements.forEach((el) => {
    const element = el as HTMLElement;

    // override problematic styles
    element.style.color = "#000";
    element.style.backgroundColor = "#fff";
    element.style.borderColor = "#e5e7eb";
  });

  const canvas = await html2canvas(cloned, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  pdf.save(`invoice-${Date.now()}.pdf`);
};