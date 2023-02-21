let myJokes = [
    {
       
        "setup": "I was walking down the street and saw some black guy on a bike and it looked just like mine so I ran home to check.",
        "delivery": "Thankfully he was still chained up in my basement.",
       
    },
    {
        
        "setup": "Has COVID-19 forced you to wear glasses and a mask at the same time?",
        "delivery": "If so, you may be entitled to condensation.",
       
    },
    {
        
        "setup": "What do you get a hunter for his birthday?",
        "delivery": "A birthday pheasant",
       
    },
    {
       
        "setup": "My neighbor is a 90 year old with Alzheimer's, I see him every morning and he asks me If I've seen his wife. Every day I have to tell this poor man that his wife died 20 years ago. I could have moved to another house or even ignore his question.",
        "delivery": "But the look of joy in his eyes whenever I answer him is worth the world.",
        
    },
    {
       
        "setup": "What's the difference between a feminist and a grenade?",
        "delivery": "The grenade actually accomplishes something when it triggers.",
        
    },
    {
        "setup": "How do construction workers party?",
        "delivery": "They raise the roof.",
       
    },
]


const initApp = () => {

let index = Math.floor(Math.random() * 8 ); 

const jokeSetupDisplay = document.querySelector('#joke-s'); 
const jokeDeliveryDisplay = document.querySelector('#joke-d'); 


jokeSetup = JSON.stringify(myJokes[index]['setup']); 
jokeDelivery = JSON.stringify(myJokes[index]['delivery']); 

jokeSetupDisplay.innerHTML = jokeSetup; 
jokeDeliveryDisplay.innerHTML = jokeDelivery;
};


const button = document.querySelector('button'); 

button.addEventListener('click', (event) => {
    initApp();
})