<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Math in Music</title>
  <style>
    body {
      margin: 0;
      font-family: 'Courier New', Courier, monospace;
      background-color: #0d0d0d;
      color: #f5f5f5;
      scroll-behavior: smooth;
    }

    header {
      background: url('https://images.unsplash.com/photo-1511370211608-50c75b81d7b4?auto=format&fit=crop&w=1500&q=80') no-repeat center center/cover;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
    }

    header h1 {
      background: rgba(0,0,0,0.6);
      padding: 20px;
      border-radius: 10px;
      font-size: 3.5em;
      text-shadow: 2px 2px 4px #000;
    }

    nav {
      background-color: #1a1a1a;
      padding: 15px;
      text-align: center;
    }

    nav a {
      color: #ff4c4c;
      margin: 0 20px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1em;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: #ffffff;
    }

    .container {
      max-width: 1000px;
      margin: auto;
      padding: 40px 20px;
    }

    section {
      margin-bottom: 60px;
    }

    h2 {
      color: #ff4c4c;
      border-bottom: 1px solid #444;
      padding-bottom: 5px;
      font-size: 2.2em;
    }

    img {
      width: 100%;
      max-width: 700px;
      margin: 20px auto;
      display: block;
      border-radius: 10px;
      box-shadow: 0 0 10px #000;
      transition: transform 0.3s ease-in-out;
    }

    img:hover {
      transform: scale(1.05);
    }

    button {
      background: #ff4c4c;
      color: #fff;
      border: none;
      padding: 10px 20px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1em;
      transition: background 0.3s ease;
    }

    button:hover {
      background: #cc0000;
    }

    footer {
      background: #1a1a1a;
      text-align: center;
      color: #aaa;
      padding: 20px;
      font-size: 0.9em;
    }

    audio {
      margin-top: 20px;
      width: 100%;
      max-width: 600px;
      border-radius: 10px;
      background-color: #222;
      padding: 10px;
    }
  </style>
</head>
<body onload="welcomeUser()">

<header>
  <h1>🎶 Math in Music</h1>
</header>

<nav>
  <a href="#beats">Beats</a>
  <a href="#frequencies">Frequencies</a>
  <a href="#ratios">Ratios</a>
</nav>

<div class="container">

  <section id="beats">
    <h2>🕒 Beats & BPM</h2>
    <p>Turntables spin at specific speeds (e.g., 33⅓ RPM), which link directly to rhythm. Music is divided into beats per minute — 60, 90, 120 BPM — a mathematical count of time.</p>
    <img src="https://images.unsplash.com/photo-1602526218652-154ad93c7a7f?auto=format&fit=crop&w=1200&q=80" alt="Vinyl spinning on turntable">
  </section>

  <section id="frequencies">
    <h2>📊 Frequencies & Sound Waves</h2>
    <p>Each vinyl groove encodes a waveform. The pitch of a note is its frequency, measured in Hertz (Hz). A = 440 Hz. Go up an octave? That’s double the frequency — 880 Hz.</p>
    <img src="https://images.unsplash.com/photo-1622912643626-8f9f47ec4236?auto=format&fit=crop&w=1200&q=80" alt="Close-up of vinyl grooves">
    <audio controls>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </section>

  <section id="ratios">
    <h2>📐 Musical Ratios & Harmony</h2>
    <p>Musical intervals are math in motion. A perfect fifth is a 3:2 ratio, a major third is 5:4. Music relies on these mathematical relationships to produce harmony.</p>
    <img src="https://images.unsplash.com/photo-1602093970973-f4f2b17c7b91?auto=format&fit=crop&w=1200&q=80" alt="Stack of vinyl records">
    <button onclick="toggleImage()">🎛 Switch Vinyl View</button>
    <img id="vinylView" src="https://images.unsplash.com/photo-1615388427199-004c892c29f1?auto=format&fit=crop&w=1200&q=80" alt="Turntable with vinyl">
  </section>

</div>

<footer>
  &copy; 2025 Math in Music | Where Sound Meets Numbers
</footer>

<script>
  function welcomeUser() {
    alert("Welcome to Math in Music – Where Sound Meets Numbers 🎵📐");
  }

  function toggleImage() {
    const img = document.getElementById("vinylView");
    const altSrc = "https://images.unsplash.com/photo-1610484824204-3cf45b2d13f3?auto=format&fit=crop&w=1200&q=80";
    const originalSrc = "https://images.unsplash.com/photo-1615388427199-004c892c29f1?auto=format&fit=crop&w=1200&q=80";

    img.src = img.src.includes("1615388427199") ? altSrc : originalSrc;
  }
</script>

</body>
</html>
