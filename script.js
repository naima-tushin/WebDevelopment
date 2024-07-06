// Problem Statement 1 Navigation Starts
document.getElementById('html5-link').addEventListener('click', function() {
    updateContent('HTML5', 'HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.', 'https://en.wikipedia.org/wiki/HTML5');
});

document.getElementById('css3-link').addEventListener('click', function() {
    updateContent('CSS3', 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.', 'https://en.wikipedia.org/wiki/CSS');
});

document.getElementById('javascript-link').addEventListener('click', function() {
    updateContent('JavaScript (ES6+)', 'JavaScript, often abbreviated JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.', 'https://en.wikipedia.org/wiki/JavaScript');
});

document.getElementById('bootstrap-link').addEventListener('click', function() {
    updateContent('Bootstrap', 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)');
});

document.getElementById('angular-link').addEventListener('click', function() {
    updateContent('Angular', 'Angular is a platform for building mobile and desktop web applications. It provides a way to structure and simplify the creation of single-page applications by combining declarative templates, dependency injection, end-to-end tooling, and integrated best practices.', 'https://en.wikipedia.org/wiki/Angular_(web_framework)');
});

function updateContent(title, description, link) {
    const contentBox = document.getElementById('content-box');
    contentBox.innerHTML = `
        <div class="section">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">File</a>
        </div>
    `;
}
// Problem Statement 1 Navigation Ends