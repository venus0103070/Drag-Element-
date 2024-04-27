let elements = document.getElementsByClassName("element")
console.log(elements)
let leftBox = document.getElementById("left")
let rightBox = document.getElementById("right")
console.log(leftBox)
console.log(rightBox)
 
for(x of elements){
    x.addEventListener('dragstart',(e)=>{
        let selected = e.target
        rightBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
            console.log("dragoverss")
        })
        rightBox.addEventListener('drop',(e)=>{
            rightBox.appendChild(selected)
            selected = null
        })
        leftBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
            console.log("dragoverss")
        })
        leftBox.addEventListener('drop',(e)=>{
            leftBox.appendChild(selected)
            selected = null
        })
    }
)
}
