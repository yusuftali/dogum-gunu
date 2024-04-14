document.addEventListener("DOMContentLoaded", function() {
    // Hedef doğum günü tarihini belirle (Yıl-Ay-Gün Saat:Dakika:Saniye)
    var birthday = new Date("2024-04-15T00:00:00");
    
    // Geri sayımı hesapla ve görüntüle
    function displayCountdown() {
        var currentDate = new Date();
        var difference = birthday - currentDate;

        if (difference <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "DOĞUM GÜNÜN KUTLU OLSUN HACI";

            // Videoyu göster ve otomatik olarak başlat
            var videoContainer = document.getElementById("videoContainer");
            videoContainer.style.display = "block";
            var video = document.getElementById("video");
            video.play();
        } else {
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `
                <div>${days} gün</div>
                <div>${hours} saat</div>
                <div>${minutes} dakika</div>
                <div>${seconds} saniye</div>
            `;
        }
    }

    // Her saniyede geri sayımı güncelle
    displayCountdown();
    var interval = setInterval(displayCountdown, 1000);
});
