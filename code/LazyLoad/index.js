const urls = [
  "https://www.meinv.uk/static/images/20200514/2163/1581560779rGzM.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560777SKAv.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560775SBIf.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560773M63I.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560771zK9e.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560769n4EB.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560767CHFU.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560765VjBw.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560764QLFD.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560762S6dQ.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560760KwSu.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560758zLh3.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607577xLD.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607553dWR.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560754iL97.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560752LR2y.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560749kwrC.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560747WLb5.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560745B2n7.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607447hvn.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560742TEcM.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560740awB9.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560738uDRx.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560737PxS8.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560735MQJd.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607348MMP.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560732tcWp.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607319Uu8.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607294tWz.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560728CKyx.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560726gCKy.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560725eR8k.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560722zWcH.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560721htUP.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560719L88u.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560717bs4A.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560716vdeI.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560714HW8E.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560712TRVx.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560711LQQg.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560709JRgI.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560707BNVW.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815607052qTj.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560703AH2E.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560702yQmu.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560700dtvD.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560698yg99.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560696rGjq.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560694v2fK.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560692C9LD.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560691DGfx.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815606898tyf.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560687CjFf.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560686uRcN.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560683e5ux.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560681fK3e.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560680GKne.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560678yrBz.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815606765fab.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560674SBIa.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560673V2DR.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560671dxmU.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560670gDNb.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560667NbLD.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/158156066698uN.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560664K6FP.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560662R663.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560661Lusa.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560659wqFI.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560657vbWb.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/15815606562Mp6.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560655mCM6.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560653b7qE.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560651E8A7.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560650NrBv.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560648Ajj6.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560646JDfm.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560645UWES.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560643gyRh.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/158156064274Gk.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560640DN9W.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560639R26C.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560637fP68.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560636IwfD.jpg",
  "https://www.meinv.uk/static/images/20200514/2163/1581560634ehBB.jpg",
];

const imgs = [];

// const container = document.getElementById('container');
const container = document.getElementById('anotherContainer');

function initView() {
  console.log('init view');
  for (let i=0; i<urls.length; i++) {
    const img = document.createElement('img');
    img.setAttribute('attr-src', urls[i]);
    img.style.width = "200px";
    imgs.push(img);
    const imgContainer = document.createElement('div');
    imgContainer.style.minHeight = '200px';
    imgContainer.appendChild(img);
    // container.appendChild(imgContainer);
    container.appendChild(imgContainer);
  }

  lazyload();
}

let displayedNum = 0;
// const viewHeight = window.innerHeight || document.documentElement.clientHeight;

function lazyload() {
  console.log('scrolled');
  for (let i=displayedNum; i<imgs.length; i++) {
    // let distance = viewHeight - imgs[i].getBoundingClientRect().top;
    let distance = container.scrollTop + container.clientHeight - imgs[i].offsetTop;
    if (distance > 0) {
      console.log(`image ${i} will be loaded`);
      imgs[i].src = imgs[i].getAttribute('attr-src');
      displayedNum = i+1;
    }
  }
}

window.onload = initView;
// window.onscroll = lazyload;
container.onscroll = lazyload;