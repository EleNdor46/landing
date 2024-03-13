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
const arrayNoties = {
    index: 1,
    time: false,
    importance:false,
    noteText: 'test',
}


creater.onclick = function(){
    newNotes(note.value,checkerTime.checked,checkerImportance.checked)
    note.value = ''
    checkerImportance.checked = false 
    checkerTime.checked = false
    
}
console.log(checkerImportance.checked)



function newNotes(note,time,importance){
    if ((time == true) && (importance == true)){
        listElement1.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
    }
    if ((time == false) && (importance == true)){
        listElement2.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
    }
    if ((time == true )&& (importance == false)){
        listElement3.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
    }
    if((time == false )&& (importance == false)) {
        listElement4.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
    }
}