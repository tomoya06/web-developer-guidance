let waterlist = [];
let waterRows = [];

const cellWidth = 252;
const cellPadding = 8;
const cellTotalWidth = cellPadding * 2 + cellWidth;

function addPhoto(url, newId) {
  const newWaterCell = document.createElement('div');
  newWaterCell.className += 'waterfall-cell';
  newWaterCell.style.padding = cellPadding + 'px';

  const newWaterTitle = document.createElement('div');
  newWaterTitle.className += 'waterfall-title';
  newWaterTitle.innerHTML += `#${newId}`;

  const newWaterImageContainer = document.createElement('div');
  newWaterImageContainer.style.minHeight = cellWidth;

  const newWaterImage = document.createElement('img');
  newWaterImage.setAttribute('data-url', url);
  newWaterImage.src = url;
  newWaterImage.style.width = cellWidth + 'px';
  newWaterImage.onload = function() {
    let targetRow = 0;
    let minHeight = Infinity;
    for (let i=0; i<waterRows.length; i++) {
      const curRowHeight = waterRows[i].clientHeight;
      if (curRowHeight < minHeight) {
        targetRow = i;
        minHeight = curRowHeight;
      }
    }
    console.log('image', url, 'added to row', targetRow);
    
    waterRows[targetRow].appendChild(newWaterCell);
  }
  newWaterImageContainer.appendChild(newWaterImage);

  newWaterCell.appendChild(newWaterTitle);
  newWaterCell.appendChild(newWaterImageContainer);
}

function containerInit() {
  waterRows = [];
  const container = document.getElementById('waterfall');
  let containerWidth = container.clientWidth;
  while (true) {
    containerWidth -= cellTotalWidth;
    if (containerWidth < 0) {
      break;
    }
    const newRow = document.createElement('div');
    newRow.className += 'waterfall-row';
    newRow.style.width = cellTotalWidth + 'px';
    container.appendChild(newRow);
    waterRows.push(newRow);
    console.log('containerWidth: ', containerWidth);
  }
}

function generateRandomUrl() {
  const sizes = [300, 360, 400, 450, 500, 512, 600, 640];
  const size = sizes[Math.floor(Math.random() * sizes.length)];
  return `https://picsum.photos/300/${size}`;
}

function addWaterChunk(size) {
  for (let i=0; i<size; i++) {
    const newUrl = generateRandomUrl();
    const newId = waterlist.length + 1;
    waterlist.push({
      url: newUrl,
      id: newId,
    });
  
    addPhoto(newUrl, newId);
  }
}

function initWaterfall() {
  containerInit();
  addWaterChunk(10);
}

window.onload = initWaterfall;
