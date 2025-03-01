
document.getElementById('blog').addEventListener('click', function(){
    window.location.href="blog.html";
})

const cardButtons = document.getElementsByClassName('cardButton');
let countOfCardButtons = 0;
for(const item of cardButtons){
    if(!item.hasAttribute('disabled')){
        countOfCardButtons++;
    }
}

const remainingTask = document.getElementById('remainingTask');
remainingTask.innerText= countOfCardButtons;
const completedTask = document.getElementById('done-work');

let countOfDisabledButtons = 0;
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("cardButton")) {
        event.target.setAttribute('disabled', 'true');
        remainingTask.innerText = parseInt(remainingTask.innerText) - 1;
        completedTask.innerText = parseInt(completedTask.innerText) + 1;

        alert("Board Updated Successfully");
        countOfDisabledButtons++;
        if(countOfCardButtons===countOfDisabledButtons){
            alert('Congratulations!!! You have completed all the current tasks');
        }

        const cardTitle = event.target.parentNode.parentNode.children[0].children[1].innerText;
        const currentTime = giveTheDate();
        const p = document.createElement('p');
        p.innerHTML = `
        You have completed the task ${cardTitle} at ${currentTime}
        `
        document.getElementById('activityLog').appendChild(p);
        document.getElementById('activityLog').lastElementChild.classList.add('p-2', 'bg-gray-100','rounded-lg' ,'my-1', 'text-sm');
    }
});

document.getElementById('clearHistoryBtn').addEventListener('click', function(){
    document.getElementById('activityLog').innerHTML = "";
})