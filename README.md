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
```

deltaTime means the amount of real time that passed since the previous frame.

This is important because different screens have different refresh rates.

For example:

60Hz screen
144Hz screen
240Hz screen

Without deltaTime, the logo could move faster on high-refresh-rate monitors.
With deltaTime, the motion speed stays much more consistent.

Wall collision

The browser window acts like a box.

When the logo reaches the left or right side, the horizontal direction is reversed.

if (x <= 0 || x >= maxX) {
  vx = -vx
}

When the logo reaches the top or bottom side, the vertical direction is reversed.

if (y <= 0 || y >= maxY) {
  vy = -vy
}

Where:

maxX = windowWidth - logoWidth
maxY = windowHeight - logoHeight

So the logo does not move outside the visible page.

Corner detection

A corner hit happens when the logo touches a vertical wall and a horizontal wall at the same time.

In simple terms:

hitCorner = hitVerticalWall && hitHorizontalWall

For example:

right wall + top wall
right wall + bottom wall
left wall + top wall
left wall + bottom wall

The project also supports corner tolerance.

That means near-corners can also be counted if the user wants a more forgiving / arcade-style experience.

Highlight mode

Highlight mode is a cinematic helper.

It does not control the physics by itself.

Instead, it watches the current path and checks whether the logo is approaching a corner.
If a corner is predicted, the animation can slow down and add a visual glow so the user can see the corner hit clearly.

This is useful because true corner hits can be rare.

Why corner hits are rare

A real corner hit requires the logo to reach a horizontal wall and a vertical wall at almost the exact same time.

That depends on:

browser window size
logo size
starting position
horizontal speed
vertical speed
refresh timing
corner tolerance

So the logo may hit the walls many times before reaching a corner.

That is part of the classic DVD logo charm.

File structure

This project is intentionally kept as a single HTML file.

Inside the file there are three main parts:

HTML    → page structure and controls
CSS     → styling, glass menu, layout, animations
JS      → movement, collision, counters, settings, saved preferences

The code is divided into regions so it is easier to read and modify.

How to run

Download or clone the project, then open the HTML file directly in your browser.

dvd-logo-bouncer.html

No installation needed.

Purpose

This project is a fun visual experiment, but it is also a small learning project for:

animation loops
delta time
collision detection
UI controls
browser storage
dynamic favicon updates
single-file HTML app structure
Credits

Created as a small interactive HTML/CSS/JavaScript project inspired by the classic DVD screensaver.


והנה קובץ הלוגו ל־`assets/dvd-logo.svg`:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160">
  <rect width="300" height="160" rx="28" fill="#060912"/>

  <ellipse
    cx="150"
    cy="126"
    rx="118"
    ry="23"
    fill="none"
    stroke="#38bdf8"
    stroke-width="12"
    opacity="0.95"
  />

  <text
    x="150"
    y="92"
    text-anchor="middle"
    font-family="Arial Black, Impact, sans-serif"
    font-size="72"
    font-weight="900"
    fill="#38bdf8"
    letter-spacing="-5"
  >DVD</text>

  <text
    x="150"
    y="143"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="19"
    font-weight="900"
    fill="#38bdf8"
    letter-spacing="9"
    opacity="0.82"
  >VIDEO</text>
</svg>
```
---
