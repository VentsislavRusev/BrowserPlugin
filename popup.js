document.addEventListener('DOMContentLoaded', function(){
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let url = tabs[0].url;
        let qrcode = new QRCode(document.getElementById('qrcode'), url);
        let link = document.getElementById('url').innerText = url;
    });

});