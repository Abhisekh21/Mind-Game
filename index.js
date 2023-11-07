
const conatiner=document.querySelector(".container")
let images = ["1.jpg", "2.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg","3.jpg", "4.jpg", "5.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]

function shufflearray(images){
    for(let i=images.length-1;i>0;i--){
        const j=Math.floor(Math.random()*i+1);
        [images[i],images[j]]=[images[j],images[i]]
    }
}

shufflearray(images)

for(let i=0;i<images.length;i++){
    let tag='iamge_'+(i+1)
    let imageelement=document.createElement('img')
    imageelement.src=`./image_download/${images[i]}`
    imageelement.alt=tag
    imageelement.classList="image"
    conatiner.appendChild(imageelement)
}
