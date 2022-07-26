function generatehtml(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/d5db5a9cd6.js" crossorigin="anonymous"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="./style.css">

    <meta content="${data.title}" property="og:title">
    <meta content="${data.description}" property="og:description">
    <meta content="https://foxl.design/mind" property="og:url">
    <meta content="https://foxl.design/mind/icon.png" property="og:image">
</head>
<body>
    <div class="content" id="content">
        <div id="header" class="header">
            <div class="header-left">
                <a href= "${data.repo}" class="header-item header-title">${data.title}</a>
            </div
            <div class="header-right">
                <a href="/index.html" class="header-item">Download</a>
            </div>
        </div>
        <div id="splosh" class="splosh">
            <div class="splosh-content-wrapper">
                <div class="splosh-content">
                    <h1 class="splosh-title">${data.description}</h1>
                    <a href="#summary" class="splosh-button button">LEARN MORE</a>
                    <a href="#downloads" class="splosh-button button">DOWNLOAD</a>
                </div>
            </div>
            <svg class="splosh-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path class="splosh-waves-path" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,165.3C640,149,800,75,960,64C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </div>
        <div id="summary" class="summary">
            <div class="summary-content">                
                <div class="summary-item">
                    <img class="summary-item-image image-popup-opener" src="./assets/media/1.png" onclick="openImagePopup('./assets/media/1.png')">
                    <div class="summary-item-caption">
                        <p class="summary-item-title">${data.deschead1}</p>
                        <p class="summary-item-desc">${data.desc1}</p>
                    </div>
                </div>
                <div class="summary-item">
                    <img class="summary-item-image image-popup-opener" src="./assets/media/2.png" onclick="openImagePopup('./assets/media/2.png')">
                    <div class="summary-item-caption">
                        <p class="summary-item-title">${data.deschead2}</p>
                        <p class="summary-item-desc">${data.desc2}</p>
                    </div>
                </div>
                <div class="summary-item">
                    <img class="summary-item-image image-popup-opener" src="./assets/media/3.png" onclick="openImagePopup('./assets/media/3.png')">
                    <div class="summary-item-caption">
                        <p class="summary-item-title">${data.deschead3}</p>
                        <p class="summary-item-desc">${data.desc3}</p>
                    </div>
                </div>
                <div class="summary-item">
                    <img class="summary-item-image image-popup-opener" src="./assets/media/4.png" onclick="openImagePopup('./assets/media/4.png')">
                    <div class="summary-item-caption">
                        <p class="summary-item-title">${data.deschead4}</p>
                        <p class="summary-item-desc">${data.desc4}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="downloads">
            <div class="downloads-content">
                <h1 class="downloads-title">Ready to get ${data.title}?</h1>
                <p class="downloads-desc"><a class="downloads-link" href="${data.repo}/releases">download on GitHub</a>.
                    <br>Need help? <a class="downloads-link" href = "https://jaivardhanbholaportfolio.netlify.app/#contact">Contact me</a>.</p>
            </div>
        </div>
    </div>
    

    <script src="./script.js"></script>
</body>
</html>
  <br>
<div align = "center"><img src="https://madewithlove.now.sh/in?heart=true&colorA=%23505050&colorB=%23${data.badgecolor}&template=for-the-badge&text=India" alt="Made with love in India"></div>

`;
}
module.exports = generatehtml;
