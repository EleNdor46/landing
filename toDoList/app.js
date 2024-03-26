const list_1 = document.getElementById('firstContent')
const list_2 = document.getElementById('secondContent')
const list_3 = document.getElementById('thirdContent')
const list_4 = document.getElementById('fourthContent')
const creater = document.getElementById('creater')
const checkerTime = document.getElementById('time') 
const checkerImportance = document.getElementById('importance')
const note = document.getElementById('inputText')
const listElement1 = document.getElementById("firstContent")
const listElement2 = document.getElementById("secondContent")
const listElement3 = document.getElementById("thirdContent")
const listElement4 = document.getElementById("fourthContent") 
const arrayNoties = [{
    index:0,
    time: checkerTime.checked,
    importance:checkerImportance.checked,
    noteText: note.value,
    matter:0,
},]
const aceepter = document.getElementById("donebtn")
const allNoties = document.getElementById("allNoties")
creater.onclick = function(){
    newNotes(arrayNoties.noteText,checkerTime.checked,checkerImportance.checked)
    note.value = ""
    checkerImportance.checked = false 
    checkerTime.checked = false 
    console.log(arrayNoties.noteText)
}



function newNotes(note,time,importance){
    console.log(note.value)
    if ((time == true) && (importance == true)){
        if(note.value == undefined){
            return
        }
        {
        listElement1.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="listinall"><button id="donebtn">☑</button>lorem<span></span></li>
        `)
        
    }}
    if ((time == false) && (importance == true)){
        if(note.value == undefined){
            return
        }
        else{
        listElement2.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 

    }}
    if ((time == true )&& (importance == false)){
        if(note.value == undefined){
            return
        }
        else{
        listElement3.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 

    }}
    if((time == false )&& (importance == false)){
        if(note.value == undefined){
            return
        }
        else{
        listElement4.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="delete"><button id="donebtn">☑</button>lorem
        
        </li>
        `)
        console.log(note.value)
    }}
}

 aceepter.onclick = function(){
    const newNote = {
        index:arrayNoties.length,
        time: checkerTime.checked,
        importance:checkerImportance.checked,
        noteText: note.value,
        matter:0     
    }
    arrayNoties.push(newNote)
    console.log(newNote.noteText)
    }

