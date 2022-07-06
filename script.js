var payload = {"text": "unexpected error. Try again."}

var userXoxc = "String"; 
userXoxc = fetch('!token.txt').then(response => response.text()); //localStorage.getItem("sessionData".value);
var channelID = "C01U6T5KKV4";




setTimeout(function()
{ 
  loadXoxcFromFile();
}, 200);
//Button clicking 
function loadXoxcFromFile()
{
  fetch('!token.txt')
  .then(response => response.text())
  .then(data => {
    userXoxc = data;
  	console.log(userXoxc);
  });
/*
    userXoxc = document.getElementById("sessionData").value;

    localStorage.setItem("CRM2Duty_sessionData".value, userXoxc);

    console.log(userXoxc);
    console.log(localStorage.getItem("CRM2Duty_sessionData".value));

    alert(userXoxc);
    */
}



//Get current CRM2 status


//Main func
async function checkMsg()
{
  var lastMsg = "String";
  
  var settings = 
  {
      "url": "https://slack.com/api/conversations.history?channel=C01U4DJ20BZ&limit=1",
      "method": "GET",
      "timeout": 0,      
      "headers": 
      {
      "Authorization": "Bearer " + userXoxc
      }
  };
      
      $.ajax(settings).done(function (response) 
      {
        lastMsg = response.messages[0].text;
        console.log(lastMsg);

        


        if(lastMsg.includes("GO"))
        {
            console.log("GO BABE GO");
            
            document.getElementById("currentStatus").style.backgroundColor = "#4cff4c";      
            document.getElementById("currentStatus").style.boxShadow = "0 0 6px rgba(0,255,0, 0.8)";   
        }

        if(lastMsg.includes("STOP"))
        {        
            console.log("STOP BABE STOP");
    
            document.getElementById("currentStatus").style.backgroundColor = "#ff4c4c";
            document.getElementById("currentStatus").style.boxShadow = "0 0 6px rgba(255,0,0, 0.8)"; 
        }
      });
}
//Button clicking 
document.getElementById("currentStatus").onclick = function ()
{
    alert("Проверено. Пожалуйста, не используй эту кнопку больше 3х раз в минуту. Она создаёт большую нагрузку на Slack.")

    console.log("clicked");
    checkMsg();
}





//SLACK FUNCTIONS


$('#button_GO').click(function()
{
    var curTime = new Date();
    var newTime = curTime / 1000;

    console.log(newTime);

    fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=4705caa4-newTime&_x_csid=lMj3OvD_4RM&slack_route=T03A3SUFB&_x_version_ts=newTime&_x_gantry=true&_x_b3_traceid=9a928ad3cf544fa18a966bed101da1b8&_x_b3_spanid=3ba6b5ca5d1b4ef4b1e71f6681c8a20e&_x_b3_sampled=1", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryJBxtBNoftvuAosK0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrerPolicy": "no-referrer",
  "body": "------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nC01U4DJ20BZ\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\nnewTime.xxxxx2\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"xArgs\"\r\n\r\n{\"draft_id\":\"26a2e3c6-1110-4793-b302-874b8e1327df\"}\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"usergroup\",\"usergroup_id\":\"SEQNP1P8F\"},{\"type\":\"text\",\"text\":\" GO \"},{\"type\":\"emoji\",\"name\":\"large_green_circle\"}]}]}]\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"draft_id\"\r\n\r\n26a2e3c6-1110-4793-b302-874b8e1327df\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"include_channel_perm_error\"\r\n\r\ntrue\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + userXoxc + "\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

alert('Свет светофора установлен зелёным');
      
});

$('#button_STOP').click(function()
{
  var curTime = new Date();
  var newTime = curTime / 1000;

  console.log(newTime);
  
    fetch("https://skyeng.slack.com/api/chat.postMessage?_x_id=4705caa4-newTime&_x_csid=lMj3OvD_4RM&slack_route=T03A3SUFB&_x_version_ts=newTime&_x_gantry=true&_x_b3_traceid=9a928ad3cf544fa18a966bed101da1b8&_x_b3_spanid=3ba6b5ca5d1b4ef4b1e71f6681c8a20e&_x_b3_sampled=1", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ru;q=0.8",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryJBxtBNoftvuAosK0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrerPolicy": "no-referrer",
  "body": "------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"channel\"\r\n\r\nC01U4DJ20BZ\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\nnewTime.xxxxx2\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"type\"\r\n\r\nmessage\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"xArgs\"\r\n\r\n{\"draft_id\":\"26a2e3c6-1110-4793-b302-874b8e1327df\"}\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"blocks\"\r\n\r\n[{\"type\":\"rich_text\",\"elements\":[{\"type\":\"rich_text_section\",\"elements\":[{\"type\":\"usergroup\",\"usergroup_id\":\"SEQNP1P8F\"},{\"type\":\"text\",\"text\":\" STOP \"},{\"type\":\"emoji\",\"name\":\"red_circle\"}]}]}]\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"draft_id\"\r\n\r\n26a2e3c6-1110-4793-b302-874b8e1327df\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"include_channel_perm_error\"\r\n\r\ntrue\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n" + userXoxc + "\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"_x_reason\"\r\n\r\nwebapp_message_send\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"_x_mode\"\r\n\r\nonline\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0\r\nContent-Disposition: form-data; name=\"_x_sonic\"\r\n\r\ntrue\r\n------WebKitFormBoundaryJBxtBNoftvuAosK0--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
  
    alert('Свет светофора установлен красным');
    
})