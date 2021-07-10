const add = document.getElementById("add");
const tbody = document.querySelector('tbody');
let table = document.querySelector('table');
let index, count = 0;
add.onclick = () => {
    console.log('inside add');
    count++;
    $('#tbody').append(`  <tr>
<td><select class="form-select" required>
        <option selected>Select</option>
    </select>
</td>
<td>
    <div class="form-group"><input type="text" placeholder="Programme Name" class="form-control"></div>
</td>
<td>
    <select class="form-select" required>
        <option selected>Select</option>
        
    </select>
</td>
<td>
    <div class="form-group"><input type="text" placeholder="Percentage" class="form-control" /></div>
</td>
<td>
    <div class="form-group"><input type="text" placeholder="Link of the Relevant Document" class="form-control" /></div>
</td>
<td><button id="delete" class="btn btn-warning" onclick="removeClicked(${count})">Remove</button></td>
</tr>`)
}

//getting Remove Button
const remove = document.getElementById('delete');
function removeClicked(index) {
    console.log(index);
    if (confirm('Are u sure you want to delete this row?')) {
        console.log('approval for removing');
        document.getElementsByTagName("tr")[index].remove();
        count--;
    }
}


