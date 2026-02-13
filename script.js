const eventForm =  document.getElementById("eventForm");
const eventTitle =  document.getElementById("eventTitle");
const eventDate=  document.getElementById("eventDate");
const eventCategory =  document.getElementById("eventCategory");
const eventDescription =  document.getElementById("eventDescription");
const clearAllBtn =  document.getElementById("clearAllBtn");
const addSampleBtn =  document.getElementById("addSampleBtn");
const eventContainer =  document.getElementById("eventContainer");
const demoContent =  document.getElementById("demoContent");

const sampleEvents=
[

    {
        title : "web dev",
        date : "4-5-26",
        category : "workshop",
        description : "uhsah hjdbsho jksjdjio"
    },

    {
        title : "web dev2",
        date : "4-7-26",
        category : "conference",
        description : "shhddh jsahij sjahj jhsa kl"
    }
]


addSampleBtn.addEventListener("click", () => {

    // Clear empty message
    eventContainer.innerHTML = "";

    sampleEvents.forEach(event => {

        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p>${event.description}</p>
            <button class="delete-btn">Delete</button>
        `;

        eventContainer.appendChild(eventCard);
    });

});


function createEventCard(eventData){
   const card=document.createElement("div");

   card.innerHTML=`
   <button class="delete-btn">X</button>
   <h3>${eventData.title}</h3>
   <div>${eventData.date}</div>
   <span>${eventData.category}</span>
   <p>${eventData.description}</p>
   `

   return card;
}

function addEvent(eventData){
    const emptyState = document.querySelector(".empty-state");
    emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));

}

eventForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    const eventData={
        title:eventTitle.value,
        date:eventDate.value,
        category:eventCategory.value,
        description:eventDescription.value,
    }

    addEvent(eventData);

})

function createEventCard(eventData){
   const card = document.createElement("div");
   card.classList.add("event-card");  

   card.innerHTML = `
       <button class="delete-btn">X</button>
       <h3>${eventData.title}</h3>
       <div>${eventData.date}</div>
       <span>${eventData.category}</span>
       <p>${eventData.description}</p>
   `;

   return card;
}


clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML = `
    <div class = "empty-state">No events yet.Add your first event!</div>`
})

addSampleBtn.addEventListener("click",()=>{
    sampleEvents.forEach(addEvent);
})

eventContainer.addEventListener("click",(event)=>{
    const card =  event.target.closest(".event-card");
    
    if(event.target.classList.contains("delete-btn")){
        card.remove()
    }

    if(!eventContainer.querySelector(".event-card")){
        eventContainer.innerHTML = `
    <div class = "empty-state">No events yet.Add your first event!</div>`
    }
    
})

