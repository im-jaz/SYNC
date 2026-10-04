// Testimonials stored in an object
const testimonials = {
    t1: {
        name: "Client Name One" ,
        role: " Role or Company" ,
        text: "Testimonial text here."
    },
    t2: {
    name: "Client Name Two" ,
    role: "Role or Company" ,
    text: "Testimonial text here. "
    },
    t3: {
    name: "Client Name Three" ,
    role: "Role or Company" ,
    text: "Testimonial text here. "
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
        title: "Project one" ,
        description: "Describe what you built here." ,
        tech: ["HTML", "CSS", "JavaScript"] ,
        image: "project1.jpg"
    },
    {
         title : "Project two" ,
         description : "Describe what you built here." ,
         tech : ["HTML", "CSS"] ,
         image : "project2.jpg"

    }
];

const projectList = document.getElementById("project-list") ;

//Loop through array and build a card for each project
for (const project of projects) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
    <img class="project-image" src="${project.image}">
    <div class="project-content">
    <h3> class="project-title">${project.title}</h3>
    <p> class="project-description">${project.description}</p>
    <p> class="project-tech">Tech used: $[project.tech.join(", ")}</p>
    </div>

    `;
    projectList.appendChild(card);
}

          

