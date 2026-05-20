// Y2K / MySpace / GeoCities cursor sparkle trail
const COLORS = ['#ff00ff', '#00ffff', '#ffff00', '#ff69b4', '#7fff00', '#ff4500', '#00ff88', '#bf5fff']
const SYMBOLS = ['★', '✦', '✧', '✩', '⋆', '·', '✶', '✴']

let mouseX = 0
let mouseY = 0
let lastX = 0
let lastY = 0

document.addEventListener('mousemove', e => {
  mouseX = e.clientX
  mouseY = e.clientY

  const dx = mouseX - lastX
  const dy = mouseY - lastY
  const dist = Math.sqrt(dx * dx + dy * dy)

  if (dist > 8) {
    spawnSparkle(mouseX, mouseY)
    lastX = mouseX
    lastY = mouseY
  }
})

function spawnSparkle(x, y) {
  const el = document.createElement('span')
  el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]

  const size = 10 + Math.random() * 10
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]
  const vx = (Math.random() - 0.5) * 2.5
  const vy = -1.5 - Math.random() * 2

  Object.assign(el.style, {
    position: 'fixed',
    left: x + 'px',
    top: y + 'px',
    fontSize: size + 'px',
    color,
    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: '99999',
    transform: 'translate(-50%, -50%)',
    lineHeight: '1',
    textShadow: `0 0 4px ${color}`,
    transition: 'none',
    fontFamily: 'serif',
  })

  document.body.appendChild(el)

  let opacity = 1
  let posX = x
  let posY = y
  let rot = (Math.random() - 0.5) * 360

  function animate() {
    posX += vx
    posY += vy
    opacity -= 0.035
    rot += 3

    el.style.left = posX + 'px'
    el.style.top = posY + 'px'
    el.style.opacity = opacity
    el.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`

    if (opacity > 0) {
      requestAnimationFrame(animate)
    } else {
      el.remove()
    }
  }

  requestAnimationFrame(animate)
}
