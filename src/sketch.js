let lines = []

function setup() {
  createCanvas(700, 400)
  for (let i = 0; i < width; i++)
    lines[i] = random(height)

  quickSort(lines, 0, lines.length - 1)
}

function draw() {
  background('#fac0e1')

  for (let i = 0; i < lines.length; i++) {
    stroke('#930077')
    line(i, height, i, height - lines[i])
  }
}
