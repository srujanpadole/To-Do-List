const listContainer = document.getElementById("list-container")
const Add = document.getElementById("Add")
const search = document.getElementById("search")



Add.addEventListener("click", function () {
    if (search.value === '') {
        alert("write your task")
    } else {
        let li = document.createElement("li")
        li.innerHTML = search.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        let check = document.createElement("input")
        check.type = "checkbox"
        listContainer.appendChild(check)
        saveData()
        span.addEventListener("click",function(){
            li.remove()
            saveData()
        
            
        })

    }
    search.value = ''

})

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }else if(e.target.tagName === "INPUT"){
        saveData()
    }
})


function saveData(){
    localStorage.setItem("task",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML= localStorage.getItem("task")

}
showData()