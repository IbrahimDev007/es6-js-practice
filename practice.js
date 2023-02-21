let serial=0;
document.getElementById('1st-submit').addEventListener('click',function () {
    const id=document.getElementById('1st-id').value;
    const name=document.getElementById('1st-name').value;
    const marks=document.getElementById('1st-marks').value;
    tablerowAdd(id,name,marks)
})
document.getElementById('2nd-submit').addEventListener('click',function () {
    const id=document.getElementById('2nd-id').value;
    const name=document.getElementById('2nd-name').value;
    const marks=document.getElementById('2nd-marks').value;
    tablerowAdd(id,name,marks)
})

let tablerowAdd=(id,name,marks)=>{
     serial= serial+1;
    const row=document.createElement('tr')
    const tbody=document.getElementById('table-body');
    row.innerHTML=`<tr>
    <th id='valueId-${serial}'>${serial}</th>
    <td>${id}</td>
    <td>${name}</td>
    <td>${marks}</td>
    <td><button  id="change"class="btn btn-sm bg-blue-700 change"  onclick='changeNumber()'>change</button></td>
</tr>`;
tbody.appendChild(row);

}
function changeNumber(){{

  const id= parseInt(document.getElementById(`valueId-${serial}`).innerText);
    document.getElementById(`valueId-${serial}`).innerText=id*2;
    

}}


    



console.log('hello');
