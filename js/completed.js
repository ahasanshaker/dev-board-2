
const totalButtons = 6;
let completedButtons = 0; 
document.querySelectorAll('.btn-completed').forEach(button =>{
    button.addEventListener('click',function(){
        const taskAssignedElement = document.getElementById('task-assigned');
        let taskAssigned = parseInt(taskAssignedElement.innerText);
        if(taskAssigned >0){
        taskAssignedElement.innerText = taskAssigned-1;
    }
        const checkboxPraElement = document.getElementById('checkbox-pra');
        let checkboxPra = parseInt(checkboxPraElement.innerText);
        checkboxPraElement.innerText = checkboxPra + 1;
        alert('board updated sucsessfully')

        this.disabled = true;
        this.style.backgroundColor = '#ccc'; 
        this.style.color = '#666'; 
        this.style.cursor = "not-allowed";
        completedButtons++;
        if(completedButtons === totalButtons){
            const currenttime = new Date().toLocaleString();
            const completedMsg =`You have Complete The Task Add Dark Mode at ${currenttime}`;
            const historyy =document.getElementById('history');
            const p= document.createElement('p');
            p.innerText= completedMsg;
            historyy.appendChild(p);
        }
       
    })
})
document.getElementById('clear-history').addEventListener('click', function () {
    const historyy  = document.getElementById('history');
    historyy.innerHTML = ''; 
})

document.getElementById('discover-section').addEventListener('click',function(){
     
     window.location.href='next.html';
})
