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
const testimonialistList =document.getElementById("testimonial-list");

// Loop through the object and build a card for each testimonial
for (const id in testimonials) {
    const t = testimonials[id];
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
    <p>${t.text}</p>
    <h3>${t.name} , ${t.role}</h3>
    `;
    testimonialistList.appendChild(card);
}

//Projects stored in an array of objects
const projects = [
    {
        title: "Project one" ,
        description: "Describe what you built here." ,
        tech: ["HTML", "CSS", "JavaScript"] ,
        image: "project1.jpg"
    }
];
