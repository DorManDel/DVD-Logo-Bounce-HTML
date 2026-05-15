<p align="center">
  <img src="./assets/dvd-logo.svg" alt="DVD Logo Bouncer" width="220" />
</p>

<h1 align="center">DVD Logo Bouncer</h1>

<p align="center">
  A single-file HTML/CSS/JavaScript project inspired by the classic DVD screensaver.
</p>

---

## What is this?

**DVD Logo Bouncer** is a small interactive web page that recreates the classic bouncing DVD logo.

The DVD logo moves around the browser window, bounces when it touches the screen edges, changes color on wall hits, counts wall and corner hits, and includes a compact glass-style settings menu.

The whole project runs from **one HTML file**.

No build tools.  
No frameworks.  
No server required.  
Just open the file in a browser.

---

## What does it include?

- Classic bouncing DVD-style logo
- Wall collision detection
- Corner hit counter
- Wall hit counter
- Color change on every wall hit
- Dynamic favicon color update
- Browser tab title update with corner count
- Speed control
- Pause and reset buttons
- Highlight / cinematic corner watch mode
- Corner tolerance control
- Debug corner shot tool
- Custom background image
- Custom logo image
- DVD logo size slider
- Saved preferences with `localStorage`
- Glass-style settings menu
- Fully contained in a single HTML file

---

## How it works

The project is based on a very simple movement idea.

The DVD logo has:

- a position: `x`, `y`
- a velocity: `vx`, `vy`
- a size: `width`, `height`

On every animation frame, the logo moves according to its velocity.

```js
x = x + vx * deltaTime
y = y + vy * deltaTime
