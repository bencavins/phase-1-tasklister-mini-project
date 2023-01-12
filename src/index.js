document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector('#create-task-form')

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const descField = document.querySelector('#new-task-description')
        // console.log(descField.value)

        const taskList = document.querySelector('#tasks')
        const newTask = document.createElement('li')
        newTask.textContent = descField.value

        const priority = document.querySelector('#priority')
        // console.log(priority)
        console.log(priority.value)

        if (priority.value === 'High') {
          newTask.classList.add('red')
        } else if (priority.value === 'Med') {
          newTask.classList.add('yellow')
        } else {
          newTask.classList.add('green')
        }
        
        
        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'
        delBtn.addEventListener('click', (event) => {
            // console.log('you clicked')
            newTask.remove()
        })


        newTask.append(delBtn)
        taskList.append(newTask)
    })
});
