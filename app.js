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
    document.getElementById("scanButton").addEventListener("click", function () {
        liff.scanCode()
            .then(result => {
                // QRコードのスキャンが成功した場合
                if (result.value) {
                    // スキャン結果をトーク画面に送信
                    liff.sendMessages([
                        {
                            type: "text",
                            text: result.value
                        }
                    ])
                        .then(() => {
                            alert("QRコードのデータを送信しました");  

                                    liff.closeWindow();
                        })


                        
                        .catch(err => {
                            console.error(err);
                        });
                }
            })
            .catch(err => {
                console.error(err);
            });
    });
}
