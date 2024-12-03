const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");
const infoBox = document.getElementById("info-box");

const points = [
  { xPercent: 20, yPercent: 78, label: "Nexus", descriptionHtml: `
    <h2>Nexus</h2>
    <p>The goal of the game is to destroy the enemy Nexus. The Nexus is invulnerable unless both Nexus Turrets are destroyed, as well as 1 Inhibitor.</p>
    <p>The Nexus can regenerate health over time.</p>
    <div class='two-image-grid'>
      <div class="image-container">
        <img src='images/Blue_Nexus.webp' alt='Image of Blue Nexus' class='point-image'>
        <div class="image-caption">Blue Nexus</div>
      </div>
      <div class="image-container">
        <img src='images/Red_Nexus.webp' alt='Image of Red Nexus' class='point-image'>
        <div class="image-caption">Red Nexus</div>
      </div>
    </div>
  `},
  { xPercent: 39, yPercent: 28, label: "Baron Nasher", descriptionHtml: `
    <h2>Baron Nasher</h2>
    <p>Baron is a formidable monster that often requires the entire team to slay. It takes reduced damage against its primary target. </p>
    <p>Killing Baron grants a buff that empowers the team with features such as faster Recall, and an aura to empower nearby minions.</p>
    <p>Spawns 20:00, respawns every 6:00.</p>
    <p> When Baron Nashor arrives on the map for the first time, parts of terrain on the map become purple and fissured, matching the corrupted likeness of Void. In addition, newly-spawned or live non-Draconic Blue Sentinel, Red Brambleback, and Rift Scuttler become permanently corrupted. Corrupted monsters gain increased durability and greatly improved effects when slain.</p>
    <div class='point-image'>
      <img src='images/Territorial_Baron_Nashor_Render.webp' alt='Image of Baron Nashor' class='point-image'>
      <div class="image-caption">Baron Nashor</div>
    </div>
  `}, 
  { xPercent: 48, yPercent: 24.5, label: "Red Brambleback", descriptionHtml: `
    <h2>Red Brambleback</h2>
    <p>Grants the Crest of Cinders Crest of Cinders, a buff which grants health regeneration out of combat and causes your basic attacks to apply a  slow and a burn that deals true damage over time.</p> 
    <p>This buff is ideal for champions that use basic attacks often.</p>
    <p>Once the Baron Nashor spawns at 20:00, the Red Brambleback becomes permanently corrupted by the Void if it is not Draconic, transforming into a Voidborn with 30% increased health. Killing it in this form grants you and all your allied champions, if alive, the Crest of Cinders buff. Any remaining Draconic Red Bramblebacks that are slain respawn as Voidborn instead.</p>
    <p>Spawns 1:30, respawns every 5:00.</p>
        <div class='two-image-grid'>
      <div class="image-container">
        <img src='images/Red_Brambleback_Render.webp' alt='Image of Red Brambleback' class='point-image'>
        <div class="image-caption">Red Brambleback</div>
      </div>
      <div class="image-container">
        <img src='images/Voidborn_Red_Brambleback_Render.webp' alt='Image of Voidborn Red Brambleback' class='point-image'>
        <div class="image-caption">Voidborn Red Brambleback</div>
      </div>
    </div>
  `},
  { xPercent: 33, yPercent: 40, label: "Blue Sentinel", descriptionHtml: `
    <h2>Blue Sentinel</h2>
    <p>Grants the Crest of Insight Crest of Insight, a buff which grants increased mana regeneration as well as ability haste. </p>
    <p>This buff is ideal for champions that cast spells often.</p>
    <p>Once the Baron Nashor spawns at 20:00, the Blue Sentinel becomes permanently corrupted by the Void if it is not Draconic, transforming into a Voidborn with 30% increased health. Killing it in this form grants you and all your allied champions, if alive, the Crest of Insight buff. Any remaining Draconic Blue Sentinels that are slain respawn as Voidborn instead.</p>
    <p>Spawns 1:30, respawns every 5:00.</p>
    <div class='two-image-grid'>
      <div class="image-container">
        <img src='images/Blue_Sentinel_Render.webp' alt='Image of Blue Sentinel' class='point-image'>
        <div class="image-caption">Blue Sentinel</div>
      </div>
      <div class="image-container">
        <img src='images/Voidborn_Blue_Sentinel_Render.webp' alt='Image of Voidborn Blue Sentinel' class='point-image'>
        <div class="image-caption">Voidborn Blue Sentinel</div>
      </div>
    </div>
  `},
  { xPercent: 61, yPercent: 60, label: "Dragon", descriptionHtml: `
    <h2>Dragon</h2>
    <p>Dragon will be different each time it spawns, until the 3rd Dragon arrives. Killing each Dragon will grant a permanent buff to the team. Killing 4 Dragons will grant a more powerful Dragon Soul buff, and cause the camp to spawn the Elder Dragon Elder Dragon instead.</p>
    <p>Spawns 5:00, respawns every 5:00</p>
    <p> There are 7 different types of Dragons. The Elder Dragon is spawned after one of the team gains the Dragon Soul buff.</p>
    <div class="dragon-grid">
      <div class="dragon">
        <img src="images/Chemtech_Drake_spawn_symbol.webp" alt="Image of Chemtech Drake" class="dragon-icon">
        <span class="dragon-name">ChemTech Drake</span>
      </div>
      <div class="dragon">
        <img src="images/Cloud_Drake_spawn_symbol.webp" alt="Image of Cloud Drake" class="dragon-icon">
        <span class="dragon-name">Cloud Drake</span>
      </div>
      <div class="dragon">
        <img src="images/Hextech_Drake_spawn_symbol.webp" alt="Image of Hextech Drake" class="dragon-icon">
        <span class="dragon-name">Hextech Drake</span>
      </div>
      <div class="dragon">
        <img src="images/Infernal_Drake_spawn_symbol.webp" alt="Image of Infernal Drake" class="dragon-icon">
        <span class="dragon-name">Infernal Drake</span>
      </div>
      <div class="dragon">
        <img src="images/Mountain_Drake_spawn_symbol.webp" alt="Image of Mountain Drake" class="dragon-icon">
        <span class="dragon-name">Mountain Drake</span>
      </div>
      <div class="dragon">
        <img src="images/Ocean_Drake_spawn_symbol.webp" alt="Image of Ocean Drake" class="dragon-icon">
        <span class="dragon-name">Ocean Drake</span>
      </div>
      <div class="dragon">
        <img src="images/Elder_Drake_spawn_symbol.webp" alt="Image of Elder Drake" class="dragon-icon">
        <span class="dragon-name">Elder Drake</span>
      </div>
    </div>
  `},

  { xPercent: 29.5, yPercent: 80, label: "Inhibitor", descriptionHtml: `
    <h2>Inhibitor</h2>
    <p>Inhibitors are structures that prevent super minions super minions from spawning in the respective same lane. Inhibitors have 4000 health, 15 health regeneration per second, 20 armor, and 0 magic resistance.</p>
    <p>Each team has 3 inhibitors on Summoner's Rift in each of their bases, of which at least one inhibitor must be destroyed to render the Nexus and its defending turrets vulnerable to being attacked (the Nexus will be invulnerable as long as one of its turrets or all 3 inhibitors are standing). Every inhibitor is protected by a turret that makes that inhibitor invulnerable; destroying the turret makes the inhibitor vulnerable.</p>
    <div class='two-image-grid'>
      <div class="image-container">
        <img src='images/Blue_Inhibitor.webp' alt='Image of Blue Inhibitor' class='point-image'>
        <div class="image-caption">Blue Inhibitor</div>
      </div>
      <div class="image-container">
        <img src='images/Red_Inhibitor.webp' alt='Image of Red Inhibitor' class='point-image'>
        <div class="image-caption">Red Inhibitor</div>
      </div>
    </div>
    `},

  { xPercent: 13, yPercent: 86, label: "Fountain", descriptionHtml: `
      <h2>Fountain</h2>
      <p>The Fountain, also known as the Spawn, is the platform where champions spawn, respawn after dying, and teleport to after completing Recall. While at the spawn, players can purchase their items from the nearby shop, quickly restore any missing health or mana, and protect themselves from invading enemy threat through the Nexus Obelisk. </p>

    `},

  { xPercent: 31.5, yPercent: 63, label: "Turret", descriptionHtml: `
      <h2>Turret</h2>
      <p>Turrets, also called towers, are heavy fortifications that attack enemy units on sight. Turrets are a core component of League of Legends. They deal damage to enemies and provide vision to their team, allowing them to have static and persistent control over the battlefield. Turrets target one unit at a time and deal heavy damage. Teams must destroy enemy turrets to push their assault into enemy territory. </p>
      <p> There are 11 turrets per team:
      <ul>
        <li>3 Outer Turrets</li>
        <li>3 Inner Turrets</li>
        <li>3 Inhibitor Turrets</li>
        <li>2 Nexus Turrets</li>
      </ul>
      <div class='two-image-grid'>
      <div class="image-container">
        <img src='images/Chaos_Turret_Blue_Render.webp' alt='Image of Blue Turret' class='point-image'>
        <div class="image-caption">Blue Turret</div>
      </div>
      <div class="image-container">
        <img src='images/Chaos_Turret_Red_Render.webp' alt='Image of Red Turret' class='point-image'>
        <div class="image-caption">Red Turret</div>
        </div>
      </div>
  `},

  { xPercent: 27, yPercent: 36, label: "Gromp", descriptionHtml: `
    <h2>Gromp</h2>
    <p>Gromp is a neutral Monster on Summoner's Rift.</p>
    <p>Spawns 1:42, respawns every 2:15.</p>
    <div class='point-image'>
      <img src='images/Gromp_Render.webp' alt='Image of Gromp' class='point-image'>
      <div class="image-caption">Gromp</div>
    </div>
`},

{ xPercent: 47, yPercent: 54, label: "Raptor Camp", descriptionHtml: `
  <h2>Raptor Camp</h2>
  <p> The Crimson Raptor is a neutral Monster on Summoner's Rift.</p>
  <p>The Raptor camp consists of one large Crimson Raptor and five lesser Raptors Raptors.</p>
  <p>Spawns 1:30, respawns every 2:15.</p>
  <div class='point-image'>
    <img src='images/Crimson_Raptor.webp' alt='Image of Crimson Raptor Camp' class='point-image'>
    <div class="image-caption">Crimson Raptor Camp</div>
  </div>
`},

{ xPercent: 33, yPercent: 47, label: "Murk Wolf Camp", descriptionHtml: `
  <h2>Murk Wolf Camp</h2>
  <p>The Greater Murk Wolf and Murk Wolf are neutral monsters on Summoner's Rift. </p>
  <p>The Murk Wolf camp consists of one large Greater Murk Wolf Greater Murk Wolf and two lesser Murk Wolves Murk Wolves</p>
  <p>Spawns 1:30, respawns every 2:15.</p>
  <div class='point-image'>
    <img src='images/Murk_Wolf.webp' alt='Image of Murk Wolf Camp' class='point-image'>
    <div class="image-caption">Murk Wolf Camp</div>
  </div>
`},

{ xPercent: 54, yPercent: 70.5, label: "Krug Camp", descriptionHtml: `
  <h2>Krug Camp</h2>
  <p>The Ancient Krug, Krug, and Mini Krug are neutral monster on Summoner's Rift.
  <p>The Krug camp consists of one large Ancient Krug Ancient Krug and one medium Krug Krug. Killing the Ancient Krug Ancient Krug will spawn four lesser Krugs Krugs, and killing medium Krugs Krugs will spawn two lesser Mini Krugs Mini Krugs, for a total of 8 units. </p>
  <p>Spawns 1:42, respawns every 2:15.</p>
  <div class='point-image'>
    <img src='images/Krug.webp' alt='Image of Krug Camp' class='point-image'>
    <div class="image-caption">Krug Camp</div>
  </div>
`},

{ xPercent: 37, yPercent: 33, label: "Rift Scuttler", descriptionHtml: `
  <h2>Rift Scuttler</h2>
  <p>The Rift Scuttler is a neutral monster on Summoner's Rift. There are two Rift Scuttlers on the map, one in the top half of the river and one in the bottom half of the river.</p>
  <p> The Rift Scuttler is unique amongst all monsters for two reasons: she will not retaliate against an attacker, instead attempting to flee directly away from them; and two, she continually moves along a fixed path in the river on the part of the map where she spawns. This makes Rift Scuttler the only (1) non-hostile and (2) autonomously moving monster on the map. </p>
  <p>Spawns 3:30, respawns every 2:30.</p>
      <div class='two-image-grid'>
      <div class="image-container">
        <img src='images/Rift_Scuttler_Render.webp' alt='Image of Rift Scuttler' class='point-image'>
        <div class="image-caption">Rift Scuttler</div>
      </div>
      <div class="image-container">
        <img src='images/Voidborn_Rift_Scuttler_Render.webp' alt='Image of Voidborn Rift Scuttler' class='point-image'>
        <div class="image-caption">Voidborn Rift Scuttler</div>
      </div>
    </div>
`},
];

// Add these variables at the top with other constants
const neutral_color = "rgba(255, 255, 0, 0.8)";
const red_color = "rgb(215, 42, 42)";
const blue_color = "rgb(0, 97, 242)";

const highlightFrames = {
  "Baron Nasher": [
    { xPercent: 39, yPercent: 28, width: 4, height: 6, color: neutral_color },
  ],
  "Dragon": [
    { xPercent: 61, yPercent: 60, width: 4, height: 6, color: neutral_color },
  ],
  "Raptor Camp": [
    { xPercent: 47, yPercent: 54, width: 4, height: 6, color: neutral_color },
    { xPercent: 51, yPercent: 32, width: 4, height: 6, color: neutral_color },
  ],
  "Turret": [
    // blue turret
    { xPercent: 31.5, yPercent: 63, width: 4, height: 6, color: blue_color },
    { xPercent: 34, yPercent: 80, width: 4, height: 6, color: blue_color },
    { xPercent: 48, yPercent: 79, width: 4, height: 6, color: blue_color },
    { xPercent: 66, yPercent: 82, width: 4, height: 6, color: blue_color },
    { xPercent: 20, yPercent: 59, width: 4, height: 6, color: blue_color },
    { xPercent: 22, yPercent: 26, width: 4, height: 6, color: blue_color },
    { xPercent: 23, yPercent: 45, width: 4, height: 6, color: blue_color },
    { xPercent: 38, yPercent: 56, width: 4, height: 6, color: blue_color },
    { xPercent: 42, yPercent: 47, width: 4, height: 6, color: blue_color },
    { xPercent: 22, yPercent: 74, width: 6, height: 8, color: blue_color },
    // red turret
    { xPercent: 70, yPercent: 16, width: 6, height: 8, color: red_color },
    { xPercent: 74, yPercent: 25, width: 4, height: 6, color: red_color },
    { xPercent: 75, yPercent: 37, width: 4, height: 6, color: red_color },
    { xPercent: 80, yPercent: 59, width: 4, height: 6, color: red_color },
    { xPercent: 60, yPercent: 12, width: 4, height: 6, color: red_color },
    { xPercent: 64, yPercent: 23, width: 4, height: 6, color: red_color },
    { xPercent: 37, yPercent: 12, width: 4, height: 6, color: red_color },
    { xPercent: 50, yPercent: 14, width: 4, height: 6, color: red_color },
    { xPercent: 58, yPercent: 28, width: 4, height: 6, color: red_color },
    { xPercent: 56, yPercent: 36, width: 4, height: 6, color: red_color },
  ],
  // Add more frame definitions for other points as needed
};

let activeHighlights = null;


const backgroundImage = new Image();
backgroundImage.src = "images/summoner_rift.webp";

backgroundImage.onload = () => {
  console.log("backgroundImage loaded");
  const widthPercentage = 60;
  const heightPercentage = 40; 

  canvas.width = (window.innerWidth * widthPercentage) / 100;
  canvas.height = (window.innerWidth * heightPercentage) / 100;

  drawMap();
};

const pointRadius = 15;
const pointImage = new Image();
pointImage.src = "images/questionmark.png";

// Draw the map and points
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // Draw the highlights
  if (activeHighlights) {
    activeHighlights.forEach(frame => {
      const x = (frame.xPercent / 100) * canvas.width;
      const y = (frame.yPercent / 100) * canvas.height;
      const width = (frame.width / 100) * canvas.width;
      const height = (frame.height / 100) * canvas.height;

      ctx.strokeStyle = frame.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(x - width/2, y - height/2, width, height);
    });
  }

  // Draw the points
  points.forEach(point => {
    const x = (point.xPercent / 100) * canvas.width;
    const y = (point.yPercent / 100) * canvas.height;

    const imageWidth = canvas.width * 0.03;
    const imageHeight = canvas.height * 0.04;

    // Draw the image centered on the point
    ctx.drawImage(pointImage, x - imageWidth / 2, y - imageHeight / 2, imageWidth, imageHeight);

    console.log("point position of ", point.label, ": ", x, y);
    ctx.beginPath();
  });
}

// Check if a point is clicked
function isPointClicked(x, y, point) {
  const pointX = (point.xPercent / 100) * canvas.width;
  const pointY = (point.yPercent / 100) * canvas.height;

  const distance = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);
  return distance <= pointRadius;
}


// Handle canvas click
canvas.addEventListener("click", event => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  
  const clickX = (event.clientX - rect.left) * scaleX;
  const clickY = (event.clientY - rect.top) * scaleY;
  console.log("click position: ", clickX, clickY);

  let found = false;
  points.forEach(point => {
    if (isPointClicked(clickX, clickY, point)) {
      infoBox.innerHTML = point.descriptionHtml;
      activeHighlights = highlightFrames[point.label] || null;
      found = true;
    }
  });

  if (!found) {
    infoBox.textContent = "No point selected. Click on a point to see details.";
    activeHighlights = null;
  }

  // Initial rendering
  drawMap();
});





// Initial rendering
drawMap();
