function isWeChat() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('wx') || urlParams.has('2')) {
    return true;
  }
  return /micromessenger/i.test(navigator.userAgent);
}

function initPage() {
  document.title = APP_CONFIG.pageTitle;
  document.getElementById('favicon').href = APP_CONFIG.appIcon;
  document.getElementById('appleIcon').href = APP_CONFIG.appIcon;

  document.getElementById('appIcon').src = APP_CONFIG.appIcon;
  document.getElementById('appName').innerText = APP_CONFIG.appName;
  document.getElementById('appDesc').innerText = APP_CONFIG.appDesc;
  
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.href = APP_CONFIG.downloadUrl;

  const webGuide = document.getElementById('webGuide');
  const mask = document.getElementById('wxMask');
  const btnText = document.getElementById('btnText');

  if (isWeChat()) {
    if (webGuide) webGuide.style.display = 'none';
    mask.style.display = 'block';
    btnText.innerText = '右上角浏览器打开';

    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mask.style.display = 'block';
    });

    mask.addEventListener('click', () => {
      mask.style.display = 'none';
    });
  } else {
    if (webGuide) webGuide.style.display = 'flex';
  }
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', initPage);
