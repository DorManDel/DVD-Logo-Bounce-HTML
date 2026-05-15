<p align="center">
  <a href="https://dormandel.github.io/DVD-Logo-Bounce-HTML/">
    <img src="./assets/dvd-logo.svg" alt="DVD Logo Bouncer" width="220" />
  </a>
</p>

<h1 align="center">DVD Logo Bouncer</h1>

<p align="center">
  A single-file HTML/CSS/JavaScript project inspired by the classic DVD screensaver.
</p>

---

## What is this?

**DVD Logo Bouncer** is a small interactive web page that recreates the classic bouncing DVD logo.

The DVD logo moves around the browser window, bounces when it touches the screen edges, changes color on wall hits, counts wall and corner hits, and includes a compact glass-style settings menu.

The whole app runs from **one HTML file**.

No build tools.  
No frameworks.  
No server required.  
Just open the HTML file in a browser.

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

The project is based on simple 2D motion.

The DVD logo has:

- a position: `x`, `y`
- a velocity: `vx`, `vy`
- a size: `width`, `height`

On every animation frame, the logo moves according to its velocity:

```js
x = x + vx * deltaTime
y = y + vy * deltaTime
```

`deltaTime` is the amount of real time that passed since the previous frame.

This matters because different screens have different refresh rates:

- 60Hz
- 144Hz
- 240Hz
- 360Hz

Without `deltaTime`, the logo could move faster on high-refresh-rate monitors.  
With `deltaTime`, the motion speed stays more consistent across different screens.

---

## Wall collision

The browser window acts like a box.

The logo can move inside this box, but when it touches a wall, its direction is reversed.

The maximum movement area is calculated like this:

```js
maxX = windowWidth - logoWidth
maxY = windowHeight - logoHeight
```

When the logo reaches the left or right wall, the horizontal velocity flips:

```js
if (x <= 0 || x >= maxX) {
  vx = -vx
}
```

When the logo reaches the top or bottom wall, the vertical velocity flips:

```js
if (y <= 0 || y >= maxY) {
  vy = -vy
}
```

So if the logo moves right and hits the right wall, it starts moving left.  
If it moves down and hits the bottom wall, it starts moving up.

---

## Corner detection

A corner hit happens when the logo touches a vertical wall and a horizontal wall at the same time.

In simple terms:

```js
hitCorner = hitVerticalWall && hitHorizontalWall
```

Examples:

- right wall + top wall
- right wall + bottom wall
- left wall + top wall
- left wall + bottom wall

The project also supports **corner tolerance**.

Corner tolerance makes the counter more forgiving. Instead of counting only perfect corner hits, it can also count near-corners.

This is useful because exact corner hits are rare.

---

## Highlight mode

Highlight mode is a cinematic helper.

It does not replace the physics system.  
It only watches the current path and checks whether the logo is approaching a corner.

When a corner is predicted, the animation can:

- slow down temporarily
- add a glow effect
- make the corner hit easier to notice

This is useful for testing and for actually seeing corner hits, because they can happen quickly or rarely.

---

## Why corner hits are rare

A real corner hit requires the logo to reach a horizontal wall and a vertical wall at almost the exact same time.

That depends on:

- browser window size
- logo size
- starting position
- horizontal speed
- vertical speed
- refresh timing
- corner tolerance

So the logo may hit the walls many times before reaching a corner.

That is part of the classic DVD logo charm.

---

## File structure

```text
project/
├── README.md
├── dvd-logo-bouncer.html
└── assets/
    └── dvd-logo.svg
```

This project is intentionally kept as a **single HTML file**.

Inside the HTML file there are three main parts:

```text
HTML    → page structure and controls
CSS     → styling, glass menu, layout, animations
JS      → movement, collision, counters, settings, saved preferences
```

The code is divided into regions so it is easier to read, learn from, and modify.

---

## How to run

Open this file directly in your browser:

```text
dvd-logo-bouncer.html
```

No installation needed.

---

## Purpose

This project is a fun visual experiment, but it is also a small learning project for:

- animation loops
- delta time
- collision detection
- UI controls
- browser storage
- dynamic favicon updates
- single-file HTML app structure

---

## Credits

Created as a small interactive HTML/CSS/JavaScript project inspired by the classic DVD screensaver.
