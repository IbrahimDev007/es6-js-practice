document.getElementById('1st-submit').addEventListener('click',function () {
    const id=document.getElementById('1st-id').value;
    const name=document.getElementById('1st-name').value;
    const marks=document.getElementById('1st-marks').value;
    tablerowAdd(id,name,marks)
})

let tablerowAdd=(id,name,marks)=>{
    const row=document.createElement('tr')
    const tbody=document.getElementById('table-body');
    row.innerHTML=`<tr>
    <th>${id}</th>
    <td>${name}</td>
    <td>${marks}</td>
    <td><button  id="change"class="btn btn-sm bg-blue-700 change">change</button></td>
</tr>`;
tbody.appendChild(row);

}
// // document.getElementById('cards').addEventListener('click',function (e) {
// //     console.log(e.target.children[3]).addEventListener('click',function () {
// //         console.log('ppp');
// //     })
    
// })


console.log('hello');
