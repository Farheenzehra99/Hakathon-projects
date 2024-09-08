"use strict";
const form = document.getElementById('resume-form');
const resumeOutput = document.getElementById('generated-resume');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the form values
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('father-name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Generate the resume
    resumeOutput.innerHTML = `
    <div class="box">
      <h2 class="section-title personal-info">Personal Information</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Father's Name:</strong> ${fatherName}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
    </div>
    <div class="box">
      <h2 class="section-title education">Education</h2>
      <p>${education}</p>
    </div>
    <div class="box">
      <h2 class="section-title experience">Work Experience</h2>
      <p>${experience}</p>
    </div>
    <div class="box">
      <h2 class="section-title skills">Skills</h2>
      <p>${skills}</p>
    </div>
  `;
});
