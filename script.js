// Testimonials stored in an object
const testimonials = {
    t1: {
        name: "Sarah Johnson" ,
        role: "Recipe Finder User" ,
        text: "Beautifully designed and incredibly intuitive to use."

    },
    t2: {
    name: "Michael Lee" ,
    role: "Weather Dashboard User" ,
    text: "Clean interface with an excellent user experience."
    }
 };


// Find the empty container in index.html
const testimonialList =document.getElementById("testimonial-list");

// Loop through the object and build a card for each testimonial
for (const id in testimonials) {
    const t = testimonials[id];
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
    <p>${t.text}</p>
    <h3>${t.name} , ${t.role}</h3>
    `;
    testimonialList.appendChild(card);
}

//Projects stored in an array of objects
const projects = [
    {
        title: "Recipe Finder" ,
        description: "A recipe discovery platform with search and save features." ,
        tech: ["HTML", "CSS", "JavaScript"] ,
        image: "project1.jpg"
    },

    {
         title : "Weather Dashboard" ,
         description : "A weather application displaying real-time conditions and forecasts." ,
         tech : ["HTML", "CSS", "JavaScript"],
         image : "project2.jpg"

    }
];

const projectList = document.getElementById("project-list") ;

//Loop through array and build a card for each project
for (const project of projects) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
    <img class="project-image" src="${project.image}" alt="${project.title}">
    <div class="project-content">
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <p class="project-tech">Tech used: ${project.tech.join(", ")}</p>
    </div>

    `;
    projectList.appendChild(card);
}

          

