function openLink(link) { window.open(link, '_blank') }

function toggleSection(section) {
    allButton.classList.remove('button-selected');
    experienceButton.classList.remove('button-selected');
    educationButton.classList.remove('button-selected');
    skillsButton.classList.remove('button-selected');
    projectsButton.classList.remove('button-selected');
    certificationsButton.classList.remove('button-selected');

    experience.classList.remove('show');
    education.classList.remove('show');
    skills.classList.remove('show');
    projects.classList.remove('show');
    certifications.classList.remove('show');

    experience.classList.add('hide');
    education.classList.add('hide');
    skills.classList.add('hide')
    projects.classList.add('hide');
    certifications.classList.add('hide');

    switch(section) {

        case 'all':
            allButton.classList.add('button-selected');
            experience.classList.remove('hide');
            education.classList.remove('hide');
            skills.classList.remove('hide');
            projects.classList.remove('hide');
            certifications.classList.remove('hide');
            break;

        case 'experience':
            experienceButton.classList.add('button-selected');
            experience.classList.remove('hide');
            experience.classList.add('show');
            break;

        case 'education':
            educationButton.classList.add('button-selected');
            education.classList.remove('hide');
            education.classList.add('show');
            break;

        case 'skills':
            skillsButton.classList.add('button-selected');
            skills.classList.remove('hide');
            skills.classList.add('show');
            break;

        case 'projects':
            projectsButton.classList.add('button-selected');
            projects.classList.remove('hide');
            projects.classList.add('show');
            break;

        case 'certifications':
            certificationsButton.classList.add('button-selected');
            certifications.classList.remove('hide');
            certifications.classList.add('show');
            
            break;
    }

    document.getElementById('nav').scrollIntoView({
        behavior: 'smooth' // adds smooth scrolling
    });
}

document.addEventListener("click", (e) => {

    // Contacts
        if (e.target.id === 'cv') {
            fetch('resume/CV_Arnav_Das.pdf')
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'CV_Arnav_Das.pdf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                })
                .catch(error => console.error('Error downloading file:', error));
        }

    // Sections
        if (e.target.id === 'allButton')            { toggleSection('all'           ) }
        if (e.target.id === 'experienceButton')     { toggleSection('experience'    ) }
        if (e.target.id === 'educationButton')      { toggleSection('education'     ) }
        if (e.target.id === 'skillsButton')         { toggleSection('skills'        ) }
        if (e.target.id === 'projectsButton')       { toggleSection('projects'      ) }
        if (e.target.id === 'certificationsButton') { toggleSection('certifications') }

    // Projects
        if (e.target.id === 'linkedin') { window.open('https://www.github.com/Arnav-R-Das/', '_blank') }
})