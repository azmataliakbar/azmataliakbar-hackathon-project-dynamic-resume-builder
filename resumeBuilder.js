var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission and page reload
    // Get values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('workExperience').value;
    // Generate the resume content
    var resumeContent = "\n    <h2>Generated Resume</h2>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n    <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n  ");
    // Insert the resume content into the #resume div
    var resumeDiv = document.getElementById('resume');
    if (resumeDiv) {
        resumeDiv.innerHTML = resumeContent; // Display the generated resume
    }
    // Show the "Download as PDF" button
    var downloadButton = document.getElementById('download-btn');
    if (downloadButton) {
        downloadButton.style.display = 'inline-block';
        downloadButton.onclick = function () {
            // Use html2pdf to generate the PDF
            var element = document.getElementById('resume');
            if (element) {
                html2pdf(element);
            }
        };
    }
});
