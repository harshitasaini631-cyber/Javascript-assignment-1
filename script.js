const eventForm =  document.getElementById("evenForm");
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