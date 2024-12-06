// Define pieces data
const pieces = [
    { id: '1', class: '1', attributes: ['Automata', 'Watcher'], image: './images/1/amumu.png' },
    { id: '2', class: '1', attributes: ['Family', 'Scrap', 'Ambusher'], image: './images/1/baobao.png' },
    { id: '3', class: '1', attributes: ['Rebel', 'Sentinel'], image: './images/1/daomei.png' },
    { id: '4', class: '1', attributes: ['Conqueror', 'Watcher'], image: './images/1/delaiesi.png' },
    { id: '5', class: '1', attributes: ['Conqueror', 'Pit Fighter'], image: './images/1/delaiwen.png' },
    { id: '6', class: '1', attributes: ['Experiment', 'Sorcerer'], image: './images/1/jiela.png' },
    { id: '7', class: '1', attributes: ['Academy', 'Sorcerer'], image: './images/1/lux.png' },
    { id: '8', class: '1', attributes: ['Enforcer', 'Sniper'], image: './images/1/maidi.png' },
    { id: '9', class: '1', attributes: ['Black Rose', 'Visionary'], image: './images/1/morganna.png' },
    { id: '10', class: '1', attributes: ['Scrap', 'Bruiser'], image: './images/1/telangdeer.png' },
    { id: '11', class: '1', attributes: ['Enforcer', 'Bruiser'], image: './images/1/weiaolai.png' },
    { id: '12', class: '1', attributes: ['Rebel', 'Visionary'], image: './images/1/weigusi.png' },
    { id: '13', class: '1', attributes: ['Chem-Baron', 'Sentinel'], image: './images/1/xinjide.png' },

    { id: '14', class: '2', attributes: ['Rebel', 'Quickstriker'], image: './images/2/akali.png' },
    { id: '15', class: '2', attributes: ['Experiment', 'Pit Fighter', 'Visionary'], image: './images/2/ejiate.png' },
    { id: '16', class: '2', attributes: ['Family', 'Watcher'], image: './images/2/fandeer.png' },
    { id: '17', class: '2', attributes: ['Scrap', 'Dominator'], image: './images/2/jigesi.png' },
    { id: '18', class: '2', attributes: ['Academy', 'Sentinel'], image: './images/2/leiouna.png' },
    { id: '19', class: '2', attributes: ['Chem-Baron', 'Visionary'], image: './images/2/lienata.png' },
    { id: '20', class: '2', attributes: ['Automata', 'Quickstriker'], image: './images/2/mengyan.png' },
    { id: '21', class: '2', attributes: ['Enforcer', 'Ambusher'], image: './images/2/qinggangyin.png' },
    { id: '22', class: '2', attributes: ['Conqueror', 'Sentinel', 'Visionary'], image: './images/2/ruier.png' },
    { id: '23', class: '2', attributes: ['Rebel', 'Bruiser'], image: './images/2/seti.png' },
    { id: '24', class: '2', attributes: ['Emissary', 'Artillerist'], image: './images/2/xiaopao.png' },
    { id: '25', class: '2', attributes: ['Black Rose', 'Watcher', 'Sorcerer'], image: './images/2/xixuegui.png' },
    { id: '26', class: '2', attributes: ['Firelight', 'Sniper'], image: './images/2/zeli.png' },

    { id: '27', class: '3', attributes: ['Chem-Baron', 'Bruiser'], image: './images/3/chani.png' },
    { id: '28', class: '3', attributes: ['Scrap', 'Form Swanpper', 'Pit Fighter'], image: './images/3/chuanzhang.png' },
    { id: '29', class: '3', attributes: ['Firelight', 'Watcher'], image: './images/3/daoba.png' },
    { id: '30', class: '3', attributes: ['Automata', 'Sniper'], image: './images/3/dazui.png' },
    { id: '31', class: '3', attributes: ['Academy', 'Rebel', 'Artillerist'], image: './images/3/ez.png' },
    { id: '32', class: '3', attributes: ['Automata', 'Dominator'], image: './images/3/jiqiren.png' },
    { id: '33', class: '3', attributes: ['Enforcer', 'Quickstriker'], image: './images/3/kapai.png' },
    { id: '34', class: '3', attributes: ['Enforcer', 'Sentinel'], image: './images/3/luolisi.png' },
    { id: '35', class: '3', attributes: ['Emissary', 'Sorcerer'], image: './images/3/namei.png' },
    { id: '36', class: '3', attributes: ['Experiment', 'Bruiser', 'Visionary'], image: './images/3/nunu.png' },
    { id: '37', class: '3', attributes: ['Black Rose', 'Dominator'], image: './images/3/shenv.png' },
    { id: '38', class: '3', attributes: ['Chem-Baron', 'Ambusher'], image: './images/3/shimiqi.png' },
    { id: '39', class: '3', attributes: ['Conqueror', 'Form Swanpper', 'Sorcerer'], image: './images/3/wuya.png' },

    { id: '40', class: '4', attributes: ['Firelight', 'Scrap', 'Ambusher'], image: './images/4/aike.png' },
    { id: '41', class: '4', attributes: ['Emissary', 'Conqueror', 'Quickstriker'], image: './images/4/anbeisa.png' },
    { id: '42', class: '4', attributes: ['Academy', 'Visionary'], image: './images/4/datou.png' },
    { id: '43', class: '4', attributes: ['Rebel', 'Sentinel'], image: './images/4/eluoyi.png' },
    { id: '44', class: '4', attributes: ['Scrap', 'Artillerist'], image: './images/4/feiji.png' },
    { id: '45', class: '4', attributes: ['Emissary', 'Watcher'], image: './images/4/gailun.png' },
    { id: '46', class: '4', attributes: ['Experiment', 'Sniper'], image: './images/4/laoshu.png' },
    { id: '47', class: '4', attributes: ['Experiment', 'Dominator'], image: './images/4/mengduo.png' },
    { id: '48', class: '4', attributes: ['Enforcer', 'Pit Fighter'], image: './images/4/wei.png' },
    { id: '49', class: '4', attributes: ['Chem-Baron', 'Dominator'], image: './images/4/xierke.png' },
    { id: '50', class: '4', attributes: ['Black Rose', 'Form Swanpper', 'Bruiser'], image: './images/4/zhizhu.png' },
    { id: '51', class: '4', attributes: ['Rebel', 'Sorcerer'], image: './images/4/zoe.png' },

    { id: '52', class: '5', attributes: ['Academy', 'Form Swanpper'], image: './images/5/jiexi.png' },
    { id: '53', class: '5', attributes: ['Rebel', 'Ambusher'], image: './images/5/jinx.png' },
    { id: '54', class: '5', attributes: ['Junker King', 'Scrap', 'Sentinel'], image: './images/5/lanbo.png' },
    { id: '55', class: '5', attributes: ['Black Rose', 'Sorcerer'], image: './images/5/lefulan.png' },
    { id: '56', class: '5', attributes: ['Automata', 'Visionary'], image: './images/5/mazha.png' },
    { id: '57', class: '5', attributes: ['Enforcer', 'Sniper'], image: './images/5/nvjing.png' },
    { id: '58', class: '5', attributes: ['High Roller', 'Chem-Baron', 'Pit Fighter'], image: './images/5/saiweika.png' },
    { id: '59', class: '5', attributes: ['Conqueror', 'Dominator'], image: './images/5/tienan.png' },
];

  
  // Initialize the selection area
  const selectionArea = document.getElementById('selection-area');
  const dropArea = document.getElementById('drop-area');
  const resultArea = document.getElementById('result');
  let attributesCount = {};
  
  // Dynamically create piece images
  pieces.forEach(piece => {
    const img = document.createElement('img');
    img.src = piece.image;
    img.draggable = true;
    img.id = piece.id;
    img.ondragstart = (event) => {
      event.dataTransfer.setData('text', piece.id);
    };
    selectionArea.appendChild(img);
  });
  
// Drag-and-drop logic
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const pieceId = event.dataTransfer.getData('text');
    const existing = document.getElementById(`dropped-${pieceId}`);

    // Limit to 10 pieces in the drop area
    const currentDroppedPieces = dropArea.querySelectorAll('.dropped-piece');
    if (currentDroppedPieces.length >= 10) {
        alert('You can only add up to 10 pieces.');
        return;
    }

    if (!existing) {
        const piece = pieces.find(p => p.id === pieceId);
        const img = document.createElement('img');
        img.src = piece.image;
        img.id = `dropped-${pieceId}`;
        img.className = 'dropped-piece';
        img.draggable = true; // Make it draggable to remove
        img.ondragstart = (event) => {
            event.dataTransfer.setData('text', piece.id);
        };
        img.onclick = () => {
            dropArea.removeChild(img); // Allow click to remove
        };
        dropArea.appendChild(img);
    }
}


// Clear all pieces from the drop area
document.getElementById('remove-all').addEventListener('click', () => {
    dropArea.innerHTML = ''; // Clear all child elements
    alert('All pieces have been removed.');
});

  
  // Calculate synergies
  document.getElementById('check-button').addEventListener('click', () => {
    const droppedPieces = Array.from(dropArea.querySelectorAll('img'));
    attributesCount = {};

    droppedPieces.forEach(img => {
        const pieceId = img.id.replace('dropped-', '');
        const piece = pieces.find(p => p.id === pieceId);
        piece.attributes.forEach(attr => {
            attributesCount[attr] = (attributesCount[attr] || 0) + 1;
        });
    });

    // 显示结果为每行一个属性
    resultArea.innerHTML = Object.entries(attributesCount)
        .map(([attr, count]) => `<li>${count} ${attr}</li>`)
        .join('');
});

  
  // Draw chart
  let chart;
  function updateChart(data) {
    const ctx = document.getElementById('chart').getContext('2d');
    const labels = Object.keys(data);
    const values = Object.values(data);
  
    if (chart) {
      chart.destroy();
    }
  
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Synergy Distribution',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    
  }
  