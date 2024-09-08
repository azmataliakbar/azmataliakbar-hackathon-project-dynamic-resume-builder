document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Get values from the form fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;

  // Generate the resume content
  const resumeContent = `
    <h2>Generated Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Work Experience:</strong> ${workExperience}</p>
  `;

  // Insert the resume content into the #resume div
  const resumeDiv = document.getElementById('resume');
  if (resumeDiv) {
    resumeDiv.innerHTML = resumeContent; // Display the generated resume
  }

  // Show the "Download as PDF" button
  const downloadButton = document.getElementById('download-btn');
if (downloadButton) {
    downloadButton.style.display = 'inline-block';

    downloadButton.onclick = function () {
      // Use html2pdf to generate the PDF
      const element = document.getElementById('resume');
      if (element) {
        html2pdf(element);
      }
    };
  }


});