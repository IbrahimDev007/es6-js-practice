let serial = 0;
document.getElementById('1st-submit').addEventListener('click', function () {
    const id = document.getElementById('1st-id').value;
    const name = document.getElementById('1st-name').value;
    const marks = document.getElementById('1st-marks').value;
    tablerowAdd(id, name, marks)
})
document.getElementById('2nd-submit').addEventListener('click', function () {
    const id = document.getElementById('2nd-id').value;
    const name = document.getElementById('2nd-name').value;
    const marks = document.getElementById('2nd-marks').value;
    tablerowAdd(id, name, marks)
})

let tablerowAdd = (id, name, marks) => {
    serial = serial + 1;
    const row = document.createElement('tr')
    const tbody = document.getElementById('table-body');
    row.innerHTML = `<tr>
    <th id='valueId-${serial}'>${serial}</th>
    <td>${id}</td>
    <td>${name}</td>
    <td class='marks'>${marks}</td>
    <td ><button  id="change"class="btn btn-sm btn-change bg-blue-700 change"  onclick='changeNumber(${serial})'>change</button></td>
</tr>`;
//  wrong to learn => you have to declear this block where you use classes
    tbody.appendChild(row);
    const button=document.getElementsByClassName('btn-change')
    for (const btn of button) {
        btn.addEventListener('click',function (e) {
            const parent=e.target.parentNode.parentNode;
          const marks = parent.querySelector('.marks');
          console.log(marks);
          marks.innerText=parseFloat(marks.innerText)*2
        })
        
    }

}
function changeNumber(serial) {
     //wrong to learn you should parameter in function when you change here globally change every parameter 
    {
   
        const id = parseInt(document.getElementById(`valueId-${serial}`).innerText);
        document.getElementById(`valueId-${serial}`).innerText = id * 2;

    }
}






console.log('hello');
