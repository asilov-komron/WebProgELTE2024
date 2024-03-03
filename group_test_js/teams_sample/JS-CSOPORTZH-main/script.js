let grades = [22, 13, 26, 27, 28, 30, 30, 25, 17, 18, 21, 21, 25, 26];

const grade_5s = grades.filter(g => g >= 24).length;
const avg = grades.reduce((a, b) => a + b) / grades.length;
const fail = grades.filter(g => g < 10).length;

//grade 5 tag
const gr5_tag = document.getElementById('f1-1');
const avg_tag = document.getElementById('f1-2');
const fail_tag = document.getElementById('f1-3');

gr5_tag.append(grade_5s);
avg_tag.append(avg);

if (fail > 0) {
    fail_tag.append("Yes, there was.");
} else {
    fail_tag.append("No, there wasn't");
}

let new_grades = grades.map(g => g + 3)

console.log(new_grades)



//task 2

const rows = document.getElementById("rows")
const cols = document.getElementById("cols")
const button_generate = document.getElementById('generate')
const table_tag = document.querySelector('table')
const output = document.getElementById('output')

button_generate.addEventListener('click', generate_table)

const tds = document.querySelectorAll('td')

for (let i = 0; i < tds.length; i++) {
    let tmp = tds[i]
    tmp.addEventListener('click', () => {
        tmp.style.backgroundColor = 'red'
    })    
}


button_generate.addEventListener('click', generate_table);

function generate_table() {
    let cnt = 1;
    table_tag.innerHTML = "";
    let rows_val = rows.value;
    let cols_val = cols.value;

    for (let i = 0; i < rows_val; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols_val; j++) {
            let td = document.createElement('td');
            td.innerText = cnt;
            cnt++;

            tr.append(td);
        }
        table_tag.append(tr);
    }


    let bg_cnt = 0
    let ls = []

    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', () => {
            
            
            if(bg_cnt == 0){
                
                output.innerText = ""
                tds.forEach(td => td.style.backgroundColor = 'unset');  
            }
            bg_cnt++
            
            

            if(bg_cnt < 3){
            tds[i].style.backgroundColor = 'red';
            ls.push(parseInt(tds[i].textContent))

            if(bg_cnt == 2){
                output.innerText = ls[0] + " * " +  ls[1] + " = " + ls.reduce((a,b) => a * b, 1)
                bg_cnt = 0
                ls = []           

                
            }


        }
        });
    }
    
}