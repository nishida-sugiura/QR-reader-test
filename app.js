function sendText(msg) {
    // sendMessages(text);
// }

// LINEトーク画面上でメッセージ送信
// function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': msg
    }]).then(function () {  
        liff.closeWindow();
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    // LIFFの初期化
    liff.init({
        liffId: "2001059289-X2m74PYZ" // 自分のLIFF IDに置き換えてください
    }).then(() => {
        // LIFFの初期化が成功したら
        initializeApp();
    }).catch((err) => {
        console.error(err);
    });
});

function initializeApp() {
    // スキャンボタンのクリックハンドラ

     document.getElementById("customButton").addEventListener("click", function () {
        liff.scanCode()
            .then(result => {
                // QRコードのスキャンが成功した場合
                if (result.value) {
                    // スキャン結果をトーク画面に送信

    let qr_data = result.value;
   
       //msg1="◎正常に処理されました。\n=======================\n今回獲得ポイント：【"+tt_pt+"pt】\n合計ポイント：【"+pre_point+"→"+ box_pt +"pt】

let aaa = ["qr_data:"+qr_data]
                    
               sendText(String(aaa))
                    
                }
            })
            .catch(err => {
                console.error(err);
            });
    });
}
            
