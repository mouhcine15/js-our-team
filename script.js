// creo array di oggetti
const oggetti = 
[
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief editor",
        "foto" :  "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" :  "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" :  "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" :  "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" :  "img/barbara-ramos-graphic-designer.jpg"
    }

];
// variabile del contenitore
 let container = document.querySelector(".team-container");
 
//  ciclo per stampare le card 
 for (let i = 0; i < oggetti.length; i ++) {
    let elementi = oggetti[i];

    // creo gli elementi html 
    const card = document.createElement("div");
    card.classList.add("team-card");
    
    const immagine = document.createElement("div");
    immagine.classList.add("card-image");
    
    const profilo = document.createElement("img");
    profilo.src = elementi.foto;
    
    const text = document.createElement("div");
    text.classList.add("card-text");
    
    const nome = document.createElement("h3");
    
    const ruolo = document.createElement("p");
   
    // append
    text.append(nome);
    text.append(ruolo);

    immagine.append(profilo);

    card.append(immagine);
    card.append(text);
    

    container.append(card);


    nome.innerText = elementi.nome; 
    ruolo.innerText = elementi.ruolo;

    console.log(card);
 }
