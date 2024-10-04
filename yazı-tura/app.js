// Tura ve Yazı sayılarını oluştur ve başlangıçta sıfırla 
let tura = 0
let yazi = 0

// HTML'de bulunan coin, flip-btn ve reset-btn u seç
const coin = document.querySelector(".coin")
const flipBtn = document.getElementById("flip-button")
const resetBtn = document.getElementById("reset-button")

//Flip button'a tıklanıldığında
flipBtn.addEventListener("click", () => {
    //Rastgele 0 veya 1 sayısını seçer (0:tura 1:yazı)
    let i = Math.floor(Math.random() * 2);

    coin.style.animation = "none"

    if (i) {
        //eğer i = 1 ise (tura), 1 saniye sonra coin'e flip-tura animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
    }
    else {
        //eğer i = 0 ise (yazı), 1 saniye sonra coine flip-yazi animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
    }

    // istatistikleri güncelle ve butonu devre dışı bırak
    setTimeout(updateCount, 3000);
    disabledButton();
})

//istatistikleri güncelleme fonksiyonu
function updateCount() {
    document.querySelector(".heads-count").textContent = `Tura: ${tura}`
    document.querySelector(".tails-count").textContent = `Yazı: ${yazi}`
}

// butonu geçici olarak devre dışı bırakma fonksiyonu
function disabledButton() {
    flipBtn.disabled = true
    setTimeout(() => {
        flipBtn.disabled = false
    }, 3000);
}

//reset butonuna tıklama
resetBtn.addEventListener("click",()=>{
    //Coin animasyonunu kapat, tura ve yazı sayılarını sıfırla , istatistikleri güncelle
    coin.style.animation = "none"
    tura = 0
    yazi = 0
    updateCount()
})