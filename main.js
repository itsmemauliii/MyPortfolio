import portfolio from './portfolio.js';

const root = document.getElementById('root');

// Function to create a heading
function createHeading(text, level = 1) {
    const heading = document.createElement(`h${level}`);
    heading.textContent = text;
    return heading;
}

// Function to create a paragraph
function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

// Function to create a link
function createLink(text, href) {
    const link = document.createElement('a');
    link.textContent = text;
    link.href = href;
    link.target = '_blank'; // Open in a new tab
    return link;
}

// --- Render Greeting Section ---
const greetingSection = document.createElement('div');
greetingSection.appendChild(createHeading(portfolio.greeting.title));
greetingSection.appendChild(createParagraph(portfolio.greeting.subtitle));
greetingSection.appendChild(createLink('View Resume', portfolio.greeting.resumeLink));
greetingSection.appendChild(createLink('GitHub Profile', portfolio.greeting.githubProfile));
root.appendChild(greetingSection);

// --- Render Social Links ---
const socialLinksSection = document.createElement('div');
socialLinksSection.appendChild(createHeading('Connect With Me', 2));
for (const platform in portfolio.socialLinks) {
    const link = createLink(platform, portfolio.socialLinks[platform]);
    socialLinksSection.appendChild(link);
    socialLinksSection.appendChild(document.createTextNode(' | ')); // Add separator
}
root.appendChild(socialLinksSection);

// --- Render Skills Section ---
const skillsSection = document.createElement('div');
skillsSection.appendChild(createHeading(portfolio.skillsSection.title, 2));
skillsSection.appendChild(createParagraph(portfolio.skillsSection.subTitle));
const skillsList = document.createElement('ul');
portfolio.skillsSection.skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});
skillsSection.appendChild(skillsList);
root.appendChild(skillsSection);

// You'll need to add similar sections for education, experience, projects, and contact
// using the data from your portfolio object.

console.log("Portfolio data loaded and used!");
