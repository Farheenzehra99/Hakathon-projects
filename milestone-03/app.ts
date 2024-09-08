
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('generated-resume') as HTMLElement;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const fatherName = (document.getElementById('father-name') as HTMLInputElement).value;
  const age = (document.getElementById('age') as HTMLInputElement).value;
  const gender = (document.getElementById('gender') as HTMLSelectElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

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
