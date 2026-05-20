// Filter
const btns = document.querySelectorAll('.filter-btn')
const cards = document.querySelectorAll('.project-card')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    const filter = btn.dataset.filter
    cards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden')
      } else {
        const tags = card.dataset.tags || ''
        card.classList.toggle('hidden', !tags.split(',').includes(filter))
      }
    })
  })
})

// Card click — navigate to project page, but let ext-links through
cards.forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('.ext-link')) return
    const href = card.dataset.href
    if (href) window.location.href = href
  })
})
