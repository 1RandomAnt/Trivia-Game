let question;
let lives;
let answers = [["What element has the atomic symbol Fe?", "Fluorine", "Tungsten", "Fermium", "Iron", 4], ["Which of these countries is located in South America?", "Croatia", "Paraguay", "Trindad and Tobago", "El Salvador", 2], ["Who was the first president of South Africa after the end of apartheid?", "Kwame Nkrumah", "Nelson Mandela", "Jomo Kenyatta", "Jacob Zuma", 2], ["Who formulated the law of universal gravitation?", "Issac Newton", "Albert Einstein", "Niels Bohr", "Francis Bacon", 1], ["Who wrote the Iliad?", "William Shakespeare", "Plato", "Homer", "Sappho", 3], ["The sum of a ___'s interior angles has a sum of 720 degrees", "Hexagon", "Quadrilateral", "Heptadekatrigon", "Triangle", 1], ["Who played Ant-Man in the 2015 film Ant-Man?", "Christian Bale", "Robert Downey Jr.", "Paul Rudd", "Keanu Reeves", 3], ["How many bones does an adult human skeleton have?", "206", "199", "221", "203", 1], ["Which of these songs was written by John Denver?", "The West Virginia Hills", "West Virginia, My Home Sweet Home", "This Is My West Virginia", "Take Me Home, Country Roads", 4], ["How fast do tectonic plates move?", "2.5 meters per year", "3 milimeters per year", "1.5 centimeters per year", "3.5 meters per year", 3], ["Where was the first FIFA World Cup held?", "Uruguay", "Italy", "France", "Brazil", 1], ["Who was NOT one of FDR's vice presidents?", "John Nance Garner", "Calvin Coolidge", "Harry S. Truman", "Henry A. Wallace", 2], ["What is the degree of a quadractic function?", "Depends on the function", "First", "Second", "Third", 3], ["Which of these is NOT a type of quark?", "Charm", "Left", "Up", "Strange", 2], ["Who painted the Mona Lisa?", "Michelangelo", "Frida Kahlo", "Leonardo da Vinci", "Vincent van Gogh", 3], ["What is the 8th planet from the Sun?", "Saturn", "Neptune", "Jupiter", "Tau Ceti f", 2], ["What is the chemical name of water?", "Sodium chloride", "Dihydrogen monoxide", "Hydroxide", "Hydroperoxyl", 2], ["What was the capital of the Majapahit?", "Jakarta", "Palembang", "Angkor", "Trowulan", 4], ["Which of these is a scalar quantity?", "Speed", "Displacement", "Momentum", "Acceleration", 1], ["What element has 26 protons?", "Hydrogen", "Iron", "Oxygen", "Oganesson", 2]];
const livesamt = document.getElementById("lives");
const number = document.getElementById("number");
const questionamt = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const result = document.getElementById("result");
const game = document.getElementById("game");
const restart = document.getElementById("restart");
const ending = document.getElementById("ending");
const start = document.getElementById("start");
const menu = document.getElementById("menu");

start.onclick=function(){
    menu.style.display="none";
    Begin();
}

function Update(question){
    livesamt.textContent = `Lives: ${lives}`;
    number.textContent = question+1;
    questionamt.textContent = answers[question][0];
    a.textContent = answers[question][1];
    b.textContent = answers[question][2];
    c.textContent = answers[question][3];
    d.textContent = answers[question][4];
}

function Hide(){
    result.style.display="none";
}

function Begin(){
    lives = 10;
    question = 0;
    Update(question);
    game.style.display="block";
    restart.style.display="none";
    result.style.display="none";
}

a.onclick=function(){
    answer(1);
}

b.onclick=function(){
    answer(2);
}

c.onclick=function(){
    answer(3);
}
d.onclick=function(){
    answer(4);
}

function answer(choice){
    if(answers[question][5]==choice){
        question++;
        if(question==20){
            Victory();
        } else {
            Update(question);
            result.style.color="green";
            result.textContent="Correct!";
            setTimeout(Hide, 500);
            result.style.display="flex";
        }
    } else {
        lives--;
        if(lives==0){
            Defeat();
        } else {
            livesamt.textContent = `Lives: ${lives}`;
            result.style.color="red";
            result.textContent="Incorrect...";
            setTimeout(Hide, 500);
            result.style.display="flex";
        }
    }
}

function Defeat(){
    ending.style.color="red";
    ending.textContent="Defeat...";
    ending.style.display="flex";
    game.style.display="none";
    restart.style.display="block";
}

function Victory(){
    ending.style.color="green";
    ending.textContent="Victory!";
    ending.style.display="flex";
    game.style.display="none";
    restart.style.display="block";
}

restart.onclick=function(){
    ending.style.display="none";
    restart.style.display="none";
    menu.style.display="block";
}