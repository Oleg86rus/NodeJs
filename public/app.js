async function remove(id) {
  await fetch(`/${id}`, {
    method: 'DELETE'
  })
}
async function changeTitle(note) {
  await fetch(`/${note.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(note)
  })
}

document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id
    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const title = event.target.dataset.title
    const newTitle = prompt('Введите новую запись', title)
    if (newTitle) {
      console.log('new title', newTitle)
      changeTitle({id, title: newTitle}).then(() => {
        event.target.closest('li').querySelector('p').innerText = newTitle
      })
    }
  }
})