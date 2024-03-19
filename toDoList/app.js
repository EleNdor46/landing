const list_1 = document.getElementById('firstContent')
const list_2 = document.getElementById('secondContent')
const list_3 = document.getElementById('thirdContent')
const list_4 = document.getElementById('fourthContent')
const creater = document.getElementById('creater')
const checkerTime = document.getElementById('time') 
const checkerImportance = document.getElementById('importance')
const noteData = document.getElementById('inputText')
const listElement1 = document.getElementById("firstContent")
const listElement2 = document.getElementById("secondContent")
const listElement3 = document.getElementById("thirdContent")
const listElement4 = document.getElementById("fourthContent") 
const arrayNoties = [{
    index:0,
    time: checkerTime.checked,
    importance:checkerImportance.checked,
    noteText: 'test',
    matter:0,
}]
const aceepter = document.getElementById("donebtn")
const allNoties = document.getElementById("allNoties")
creater.onclick = function(){
    newNotes(noteData.value,checkerTime.checked,checkerImportance.checked)
    if(noteData.value != ''){
        const newNote = {
            index:arrayNoties.length,
            times: checkerTime.checked,
            importances:checkerImportance.checked,
            noteText: noteData.value,
            matter: checkerTime.checked+checkerImportance.checked
        }
        arrayNoties.push(newNote)
    checkerImportance.checked = false 
    checkerTime.checked = false 
   
        console.log(arrayNoties)
    }
    
}


function newNotes(note,time,importance){
     if ((time == true) && (importance == true)){
        if(noteData.value != ''){
        listElement1.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="importence-time"><button class="importence-time-" id="donebtn">☑</button>${note}<span></span></li>
        `)
            
}}
    if ((time == false) && (importance == true)){
        if(noteData.value != ''){
        listElement3.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="importence"><button class="importence-" id="donebtn">☑</button>${note}
        
        </li>`)
    }}
    if (((time == true )&& (importance == false))){
        if(noteData.value != ''){
        listElement2.insertAdjacentHTML('beforeend',`
        <li>
            <span>${note}<span/>
        </li>
        `) 
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="time"><button class="time-" id="donebtn">☑</button>${note}
        
        </li>`)
    }}
    if(((time == false )&& (importance == false))){ 

        if(noteData.value != ''){
            listElement4.insertAdjacentHTML('beforeend',`
            <li>
                <span>${note}<span/>
            </li>
            `) 
            allNoties.insertAdjacentHTML('beforeend',`
            <li class="delete"><button class="delete-" id="donebtn">☑</button>${note}
            
            </li>
            `) 
            console.log(note,time,importance)
}}}


 aceepter.onclick = function(){
        
    }
   
