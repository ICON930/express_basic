const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  <nav>
    <a class="nav-link" href="/">回到首頁</a>
    <a class="nav-link" href="/about">About</a></li>
    <a class="nav-link" href="/portfolio">Portfolio</a></li>
    <a class="nav-link" href="/contact">Contact</a></li>
  </nav>
  <h1>首頁</h1>
  `)
})

app.get('/about', (req, res) => {
  res.send(`
  <nav>
    <a class="nav-link" href="/">回到首頁</a>
    <a class="nav-link" href="/about">About</a></li>
    <a class="nav-link" href="/portfolio">Portfolio</a></li>
    <a class="nav-link" href="/contact">Contact</a></li>
  </nav>
  <h1>About</h1>
  `)
})

app.get('/portfolio', (req, res) => {
  res.send(`
  <nav>
    <a class="nav-link" href="/">回到首頁</a>
    <a class="nav-link" href="/about">About</a></li>
    <a class="nav-link" href="/portfolio">Portfolio</a></li>
    <a class="nav-link" href="/contact">Contact</a></li>
  </nav>
  <h1>Portfolio</h1>
  `)
})

app.get('/contact', (req, res) => {
  res.send(`
  <nav>
    <a class="nav-link" href="/">回到首頁</a>
    <a class="nav-link" href="/about">About</a></li>
    <a class="nav-link" href="/portfolio">Portfolio</a></li>
    <a class="nav-link" href="/contact">Contact</a></li>
  </nav>
  <h1>Contact</h1>
  `)
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})