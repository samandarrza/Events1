let addbtn = document.getElementById('todo');
addbtn.addEventListener('click', function () {
    let datetime = this.previousElementSibling;
    let task = datetime.previousElementSibling;
    datetime.style.borderColor = '#ced4da';
    task.style.borderColor = '#ced4da';
    if (task.value.trim().length > 0 && datetime.value.trim().length > 0) {
        let list = document.getElementById('list');
        let date = datetime.value.split('T')[0];
        let time = datetime.value.split('T')[1];
        list.innerHTML += `<li class="list-group-item">
            <div class="row align-items-center">
                <p class="col-md-8 m-0">${task.value}</p>
                <p class="col-md-2 m-0">${date} | ${time}</p>
                <div class="col-md-2 row justify-content-between">
                <button onclick="this.parentElement.parentElement.parentElement.style.backgroundColor = 'red'" class="btn btn-success done-btn col-md-5">Done</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
                </div>
            </div>
        </li>`
        datetime.value = "";
        task.value = "";
        checkAllItem();
    }
    else {
        datetime.style.borderColor = 'red';
        task.style.borderColor = 'red';
    }
})

function checkAllItem() {
    let items = document.querySelectorAll(".list-group-item");
    for (const item of items) {
        let datetime = item.children[0].children[1].innerText.split('|');
        let result = checkTime(datetime[0], datetime[1])
        item.style = 'background-color:' + result + '!important'
    }
}


function checkTime(taskDate, taskTime) {
    let dateObj = new Date();
    let date = dateObj.toLocaleDateString("az").trim();
    let time = dateObj.toLocaleTimeString().trim();
    taskDate = taskDate.trim();
    taskTime = taskTime.trim();


    datearray = taskDate.split('-');
    timearray = taskTime.split(':');
    localtimearray = time.split(':');

    
    if ((parseInt(timearray[0]) - parseInt(localtimearray[0]) <= 1) && date == taskDate) {
        return 'yellow';
    }
    else if (date <= taskDate) {
        return '#fff';    
    }
    else{
        return 'bisque';  
    }
}