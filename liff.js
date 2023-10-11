$(document).ready(function () {

    var liffId = "2001059289-X2m74PYZ";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    // sendMessages(text);
// }

// LINEトーク画面上でメッセージ送信
// function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {  
        liff.closeWindow();
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}







$(function () {
    // QRコードスキャンボタンのクリックイベント
    $('#qr-scan-button').click(function () {
        liff.scanCode()  // QRコードをスキャン
            .then(function (result) {
                // スキャン結果を取得
                var scannedData = result.value;

                // スキャン結果をトークに送信
                sendTextToLine(scannedData);
            })
            .catch(function (error) {
                console.error('QRコードスキャンエラー:', error);
            });
    });

    // LINEトークにテキストメッセージを送信する関数
    function sendTextToLine(text) {
        liff.sendMessages([
            {
                'type': 'text',
                'text': text
            }
        ])
        .then(function () {
            console.log('メッセージを送信しました');
        })
        .catch(function (error) {
            console.error('メッセージの送信エラー:', error);
        });
    }
});








