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






function send_msg_to_line(text){

        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    let msg={};

       msg = ["code：" + text] ;　 //トークに送信する内容
      
        sendText(String(msg)); 
      
        return false;

}









document.getElementById('scan-qr-button').addEventListener('click', () => {
  liff.scanCode()
    .then(result => {
      const scannedCode = result.value;

send_msg_to_line(scannedCode)

    
    })
    .catch(error => {
      console.error('QRコードスキャンエラー:', error);
    });
});　　　　














$('#qr-button').click(function() {
	// LIFF の QR コード読み取り機能呼び出し


    
}); 

