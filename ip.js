
var ip;
 $.ajax({type: "GET", url: "http://jeffcheema.tk/ip.php", async: false, dataType: "text", success: function (data, textStatus, jqXHR) {ip = data;} });    
 
