const table = document.querySelector("table")




//Creating table of images with captions
for (let i = 4; i < episodes.length; i += 4) {
    let tr = document.createElement('tr')
    table.append(tr)
    for (let j = i-4; j < i; j++) {
        let td = document.createElement('td')
        let img = document.createElement('img')
        let figcaption = document.createElement('figcaption')
        img.src = episodes[j].image.original
        figcaption.innerHTML = episodes[j].number + ' - ' + episodes[j].name
        td.append(img)
        td.append(figcaption)        
        
        tr.append(td)
    }
    
    

}

const imgs = document.querySelectorAll('img')
const caps = document.querySelectorAll('figcaption')

for (let i = 0; i < imgs.length; i++) {
    let imgg = imgs[i]
    let capp = caps[i]
    imgg.addEventListener('click', () => {
        imgg.className = 'viewed'
        capp.className = 'viewedCaption'
    })
}



