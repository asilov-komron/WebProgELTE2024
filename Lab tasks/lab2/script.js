// Task 1
const button1 = document.querySelector('#task1 button')
const input1 = document.querySelector('#task1 input')
const helloText = document.querySelector('#task1 #helloText')
 
button1.addEventListener('click', sayHello)

function sayHello(){
    helloText.style.fontSize = `100px`
    helloText.innerText = `Hello ${input1.value}`
}

// Task 2
const button2 = document.querySelector('#task2 button')
const input2 = document.querySelector('#task2 input')
const helloRepeats = document.querySelector('#task2 #helloRepeats')

button2.addEventListener('click', ()=> {

    helloRepeats.innerHTML =""

    let val2 = parseInt(input2.value)
    for (let i = 0; i < val2; i++) {
        const new2 = document.createElement('p')
        new2.innerText = 'Hello World'
        new2.style.fontSize = `${i*10 +15}px`
        helloRepeats.append(new2)

    }
})






// Task 3
const button3 = document.querySelector('#task3 button')
const input3 = document.querySelector('#task3 input')
const circleResult = document.querySelector('#task3 #circleResult')

button3.addEventListener('click', ()=>{
    // circleResult.innerText = ""
    let radius = parseInt(input3.value)
    let perimeter = 2 * 3.14 * radius
    circleResult.innerText = `The perimeter is ${perimeter}cm`
})




// Task 4
const links = document.querySelectorAll('#task4 a')
const out = document.querySelector('#task4 #hyperlinksList')

for (let i = 0; i < links.length; i++) {
    const li = document.createElement('li')
    li.innerText = links[i].href
    out.append(li)
    
}


// Task 5
const button5 = document.querySelector('#task5 button')
const input5 = document.querySelector('#task5 input')
const img_div = document.querySelector('#task5 #imageContainer')

button5.addEventListener('click', () =>{
    const img = document.createElement('img')
    img.src = input5.value
    img_div.append(img)
})


// Task 6
const children = [
    { name: "Anna", class: "3/A", age: 8 },
    { name: "Bence", class: "4/B", age: 9 },
    { name: "Cecilia", class: "2/C", age: 7 },
    { name: "David", class: "5/D", age: 10 },
    { name: "Emma", class: "1/E", age: 6 }
];



const input61 = document.querySelector('#task6 #input1')
const input62 = document.querySelector('#task6 #input2')
const input63 = document.querySelector('#task6 #input3')

const button6 = document.querySelector('#task6 button')
const table = document.querySelector('#task6 table')


for (let i = 0; i < children.length; i++) {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    tr.append(td1)
    let td2 = document.createElement('td')
    tr.append(td2)
    let td3 = document.createElement('td')
    tr.append(td3)
    td1.innerText = children[i].name
    td2.innerText = children[i].class
    td3.innerText = children[i].age
    table.append(tr)
}



button6.addEventListener('click', ()=>{
    let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        tr.append(td1)
        let td2 = document.createElement('td')
        tr.append(td2)
        let td3 = document.createElement('td')
        tr.append(td3)
        if (input61.value !== "" && input62.value !== "" && input63.value !== "") {
            td1.innerText = input61.value
            td2.innerText = input62.value
            td3.innerText = input63.value
            table.append(tr) 
        }
        
}
)

  
    




// Task 7
const booksList = [
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Philosopher's Stone",
        publicationYear: 1997,
        publisher: "Bloomsbury",
        isbn: "978-0747532743"
    },
    {
        author: "George Orwell",
        title: "1984",
        publicationYear: 1949,
        publisher: "Secker & Warburg",
        isbn: "978-0451524935"
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        publicationYear: 1960,
        publisher: "J. B. Lippincott & Co.",
        isbn: "978-0061120084"
    },
    {
        author: "F. Scott Fitzgerald",
        title: "The Great Gatsby",
        publicationYear: 1925,
        publisher: "Charles Scribner's Sons",
        isbn: "978-0743273565"
    },
    {
        author: "Leo Tolstoy",
        title: "War and Peace",
        publicationYear: 1869,
        publisher: "The Russian Messenger",
        isbn: "No ISBN"
    }
];

const button7 = document.querySelector('#task7 button')
const input7 = document.querySelector('#task7 input')
let div = document.querySelector('#task7 #booksByYear')
button7.addEventListener('click', ()=>{


    div.innerHTML = ""
    
    if (!booksList.some(e => e.publicationYear === input7.value)) {
        alert("No book found")
    }
    
    let title_list = booksList.filter(book => book.publicationYear === parseInt(input7.value))
    for (let i = 0; i < title_list.length; i++) {
        let li = document.createElement('li')
        div.append(li)
        li.innerText = title_list[i].title
        
    }

})



// Task 8

// Task 9
const button_p = document.querySelector('#task9 #inc');
const button_m = document.querySelector('#task9 #dec');
const input9 = document.querySelector('#task9 #counterValue'); // Corrected the selector

let val = 1


button_p.addEventListener('click', () => {
    // Convert the current value to a number and increment by 1
    
    

    if (parseInt(input9.value) > 20) {
        
        button_p.disabled = true;
        
    
    }
    else{
        button_p.disabled = false;
        button_m.disabled = false;
    }
    
   
    
    
    
    if (isNaN(parseInt(input9.value))) {
        input9.value = val;
    } else {
        input9.value = parseInt(input9.value) + 1;
    }});






button_m.addEventListener('click', () => {

    
    if (parseInt(input9.value) < -20) {
        
        button_m.disabled = true;
        
    
    }
    else{
        button_p.disabled = false;
        button_m.disabled = false;
    }
    

    if (isNaN(parseInt(input9.value))) {
        input9.value = -val;
    }
    else{
        input9.value = parseInt(input9.value) - 1
    }
});




let interval;
const max = 20
const min = -20

button_p.addEventListener('mousedown', startInc)
button_p.addEventListener('mouseup', stopIncrement)

function startInc(){
    increment();
    interval = setInterval(increment, 100)
}

function increment() {
    if (val < 20) {
        val++;
    } else {
        button_p.disabled = true;
        button_m.disabled = false;  
    }
    updateValue();
}



function stopIncrement(){
    clearInterval(interval)
}





button_m.addEventListener('mousedown', startDec)
button_m.addEventListener('mouseup', stopDecrement)

function startDec(){
    decrement();
    interval = setInterval(decrement, 100)
}

function decrement() {
    if (val > -20) {
        val--;
    } else {
        button_p.disabled = false;  
        button_m.disabled = true;
    }
    updateValue();
}

function updateValue(){
    input9.value = val 
}

function stopDecrement(){
    clearInterval(interval)
}





// Task 10

document.querySelectorAll("ul li a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the page from jumping to the link on click
        const targetId = this.getAttribute("href").substring(1); // Get the value of the "href" attribute without the "#" symbol
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(function(task) {
            if (task.id === targetId) {
                task.classList.add("current");
            } else {
                task.classList.remove("current");
            }
        });
    });
});

const input10 = document.querySelector('#task10 #guess');
const button10 = document.querySelector('#task10 button');
const guessResult = document.querySelector('#task10 #guessResult');

let x = Math.floor(Math.random() * (10 - 1)) + 1;

button10.addEventListener("click",()=>{
    let number = parseInt(input10.value);
    if(number > x){
        guessResult.innerHTML = "This number is higher than the expected"
    }
    else if(number < x){
        guessResult.innerHTML = "This number is lower than the expected"
    }
    else{
        guessResult.innerHTML = "<strong>Congratulations!, you guessed the number, press Guess to play again</strong>"
        x = Math.floor(Math.random() * (10 - 1)) + 1;
    }
});

