// Saat Güncelleme
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);

// Sayfa Değiştirme
function changeSection(id) {
    document.querySelectorAll('.content-block').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.side-menu button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
}

// Akıllı Şifre Üretici (Sallama Algoritması)
function generateSmartPass(username) {
    const cleanUser = username.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const commonSuffixes = ["123", "2024", "2010", "gs", "fb", "bjk", "34", "06"];
    const suffix = commonSuffixes[Math.floor(Math.random() * commonSuffixes.length)];
    
    if (cleanUser.length > 3) {
        return cleanUser + suffix + ".";
    }
    return "pass" + Math.floor(Math.random() * 90000 + 10000);
}

// Ana Fonksiyon
async function startInfiltration() {
    const target = document.getElementById('target-id').value.trim().toLowerCase();
    const log = document.getElementById('output-log');
    
    if (!target) {
        alert("Kral, bir kullanıcı adı girmelisin!");
        return;
    }

    log.innerHTML = `<span style="color:white">[@${target}] için sistem protokolü başlatıldı...</span><br>`;

    const sequences = [
        "Ağ katmanına sızılıyor...",
        "SSL/TLS sertifikası bypass edildi.",
        "Kullanıcı veritabanı taranıyor...",
        "MD5/SHA-256 hashleri deşifre ediliyor...",
        "YASİN ERGÜN özel anahtarı kullanılıyor...",
        "Şifre kombinasyonları eşleştiriliyor..."
    ];

    for (let msg of sequences) {
        await new Promise(r => setTimeout(r, 1000));
        log.innerHTML += `> ${msg}<br>`;
        log.scrollTop = log.scrollHeight;
    }

    // ÖZEL KOŞULLAR
    let foundPass = "";
    
    if (target === "ynn_er247") {
        foundPass = "yasin2010.23";
    } else if (target === "kirdar.tugba") {
        foundPass = "tugbiş2345.";
    } else if (target === "zeynep23_435") {
        foundPass = "zeyno8395";
    } else {
        // İsme göre mantıklı salla
        foundPass = generateSmartPass(target);
    }

    await new Promise(r => setTimeout(r, 1500));
    log.innerHTML += `<br><div style="background:rgba(0,255,0,0.1); border:1px solid #0f0; padding:10px; color:white;">
        [BAŞARILI] HESAP ERİŞİMİ ONAYLANDI!<br>
        <strong>ŞİFRE: ${foundPass}</strong>
    </div>`;
}
