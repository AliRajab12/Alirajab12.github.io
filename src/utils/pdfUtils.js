import html2pdf from 'html2pdf.js';

export const PDFOptions = {
    margin: 10,
    filename: 'portfolio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

export const downloadProfileAsPDF = (elementId) => {
    const element = document.getElementById(elementId).cloneNode(true);

    element.querySelector('.profile-pic')?.remove();
    element.querySelector('.download-button')?.remove();
    element.querySelectorAll('.profile-section').forEach(section => section.classList.add('visible'));

    return html2pdf().from(element).set(PDFOptions).save();
};
