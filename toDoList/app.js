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
let iterator = 0
const allNoties = document.getElementById("allNoties")
const arrayNoties = [{
    index:0,
    time: checkerTime.checked,
    importance:checkerImportance.checked,
    noteText: 'test',
    matter:0,
}]




creater.onclick = function(){
    newList()
    newNotes(arrayNoties[iterator].noteText,arrayNoties[iterator].time,arrayNoties[iterator].importance)
    checkerImportance.checked = false
    checkerTime.checked = false
    // console.log(arrayNoties[iterator].noteText)
}




function newNotes(note,time,importance){
    if ((time == true) && (importance == true)){
        if(note != ''){
            listElement1.insertAdjacentHTML('beforeend',`
            <li>
                <span class="span" data-span="${iterator}">
                    ${note}
                <span/>
        </li>
        `)
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="importence-time listItem" ><button class="importence-time- accepter "data-index=${iterator} id="donebtn">☑</button>${note}<span></span></li>
        `)

}}
    if ((time == false) && (importance == true)){
        if(note != ''){
            listElement3.insertAdjacentHTML('beforeend',`
                <li>
                    <span class="span" data-span="${iterator}">
                    ${note}
                    <span/>
                </li>
                `)
                allNoties.insertAdjacentHTML('beforeend',`
            <li class="importence listItem"><button class="importence- accepter " data-index=${iterator} id="donebtn">☑</button>${note}

        </li>`)
    }}

if (((time == true )&& (importance == false))){
if(note != ''){
    listElement2.insertAdjacentHTML('beforeend',`
        <li>
            <span class="span" data-span="${iterator}">
                ${note}
            <span/>
        </li>
`)
        allNoties.insertAdjacentHTML('beforeend',`
        <li class="time listItem"><button class="time- accepter "data-index=${iterator} id="donebtn" >☑</button>${note}

        </li>`)
    }}

if(((time == false ) && (importance == false))){

    if(note != ''){
    listElement4.insertAdjacentHTML('beforeend',`
    <li>
    <span class="span" data-span="1">
    ${note}
    <span/>
    </li>
    `)
    allNoties.insertAdjacentHTML('beforeend',`
    <li class="delete listItem" ><button class="delete- accepter " data-index=${iterator} id="donebtn" >☑</button>${note}

    </li>
    `)

    }}
console.log(iterator)}
///////////////////////////////////

allNoties.addEventListener('click', (event) =>{
const {target} = event
const indexLine = target.closest('.listItem')
target.remove()
indexLine.remove()
arrayNoties.splice(target.dataset.index,1)
const spanToDelete = document.querySelector('[data-span="${target.dataset.index}"]')
console.log(spanToDelete)

})
/////////// test
// document.addEventListener('click',(event) =>{
// const {target} = event
// console.log(target,arrayNoties)
// })
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// allNoties.addEventListener('mouseover',(event)=>{
// const { target } = event
// // console.log(target)
// })

////////////////////////////////////////////////////////

function newList(){
if(noteData.value != ''){
++iterator
const newNote = {
index:iterator,
time: checkerTime.checked,
importance:checkerImportance.checked,
noteText: noteData.value,
matter: checkerTime.checked+checkerImportance.checked
}
arrayNoties.push(newNote)
}}
