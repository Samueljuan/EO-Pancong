window.getVendors = function(page) {
	console.log(page);
 }

 window.sendWA = function(message) {
    console.log(message);
    var whatsapp_url =
                            "https://api.whatsapp.com/send?phone=6285703607702&text=hai saya mau tanya tentang" + message + "lebih lengkap";
                        window.open(whatsapp_url, '_blank');
 }