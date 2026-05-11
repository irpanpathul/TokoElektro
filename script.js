// =============================================
// DATA PRODUK
// =============================================
const products = [
    {
        id: 1, nama: "Op-Amp AD827JN", harga: 28000,
        deskripsi: "IC Op-Amp dual kecepatan tinggi untuk aplikasi audio.",
        image: "https://down-id.img.susercontent.com/file/id-11134207-8224u-mggzkcu3xwy759@resize_w900_nl.webp",
        toko: { nama: "Toko Op-Amp", kota: "Surabaya", rating: 4.9, terjual: 7 }
    },
    {
        id: 2, nama: "Arduino UNO R3 ATMEGA328P", harga: 65000,
        deskripsi: "Mikrokontroler serbaguna berbasis ATmega328P.",
        image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=500&auto=format&fit=crop",
        toko: { nama: "Toko Arduino", kota: "Jakarta", rating: 4.9, terjual: 10 }
    },
    {
        id: 3, nama: "Kabel Jumper 40pcs Male-Female", harga: 9000,
        deskripsi: "Kabel jumper 20cm untuk breadboard dan prototyping.",
        image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mn1jbtixbhts67@resize_w900_nl.webp",
        toko: { nama: "Toko Kabel", kota: "Bandung", rating: 4.8, terjual: 9 }
    },
    {
        id: 4, nama: "Sensor Suhu DS18B20", harga: 15000,
        deskripsi: "Sensor suhu digital tahan air, akurasi ±0.5°C.",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lpfaxvfh95e5ff@resize_w900_nl.webp",
        toko: { nama: "Toko Sensor", kota: "Semarang", rating: 4.7, terjual: 6 }
    },
    {
        id: 5, nama: "ESP32 DOIT DevKit V1", harga: 72000,
        deskripsi: "Modul WiFi + Bluetooth dual-core untuk proyek IoT.",
        image: "https://down-id.img.susercontent.com/file/sg-11134201-824gz-mfl1bdo2uo7i66@resize_w900_nl.webp",
        toko: { nama: "Toko ESP32", kota: "Yogyakarta", rating: 4.9, terjual: 8 }
    },
    {
        id: 6, nama: "Transistor BC550 NPN", harga: 1500,
        deskripsi: "Transistor NPN serbaguna, cocok untuk switching & amplifikasi.",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rask-m4pfw6m45oxkb4@resize_w900_nl.webp",
        toko: { nama: "Toko Transistor", kota: "Malang", rating: 4.8, terjual: 10 }
    },
    {
        id: 7, nama: "Kapasitor Elektrolit 1µF 450V", harga: 2500,
        deskripsi: "Kapasitor elektrolit berkualitas untuk filter daya.",
        image: "https://down-id.img.susercontent.com/file/acc98bcb8a8da6fdaf801fac19d219d5@resize_w900_nl.webp",
        toko: { nama: "Toko Kapasitor", kota: "Bekasi", rating: 4.6, terjual: 5 }
    },
    {
        id: 8, nama: "10X Resistor 220Ω Metal Film", harga: 1000,
        deskripsi: "10pcs Resistor 220Ohm dengan daya 1/4watt dan toleransi 1%.",
        image: "https://down-id.img.susercontent.com/file/sg-11134201-7rblg-lmfhck69sg793b@resize_w900_nl.webp",
        toko: { nama: "Toko Resistor", kota: "Bogor", rating: 4.7, terjual: 9 }
    },
    {
        id: 10, nama: "ELCO 16V 2200µF Low ESR 105°C", harga: 2000,
        deskripsi: "Kapasitor elektrolitik 2200µF 16V, kualitas tinggi.",
        image: "https://down-id.img.susercontent.com/file/sg-11134201-7rdx1-mbvvuksgy2hm18.webp",
        toko: { nama: "Toko Elco", kota: "Surakarta", rating: 4.5, terjual: 4 }
    },
    {
        id: 11, nama: "LED 5mm 10pcs Warna Pilihan", harga: 1500,
        deskripsi: "10PCS Lampu LED 5mm - Biru Merah Putih Hijau Kuning.",
        image: "https://down-id.img.susercontent.com/file/a64600b5e027a8ad58e081c76a04b38a.webp",
        toko: { nama: "Toko LED", kota: "Depok", rating: 4.8, terjual: 7 }
    },
    {
        id: 12, nama: "Resistor 100 Ohm 2 Watt", harga: 400,
        deskripsi: "Resistor 100 Ohm 2 Watt berkualitas tinggi.",
        image: "https://down-id.img.susercontent.com/file/16372a34594f51031deee2653acdca91@resize_w900_nl.webp",
        toko: { nama: "Toko Resistor", kota: "Tangerang", rating: 4.6, terjual: 3 }
    },
    {
        id: 13, nama: "TIP41C NPN Power Transistor TO-220", harga: 1500,
        deskripsi: "Transistor NPN arus hingga 6A pada tegangan 100V.",
        image: "https://down-id.img.susercontent.com/file/df1146df795883c3a63c2d137e5fa7ef@resize_w900_nl.webp",
        toko: { nama: "Toko Transistor", kota: "Cirebon", rating: 4.9, terjual: 6 }
    },
    {
        id: 14, nama: "Mini Breadboard 400 Titik", harga: 10000,
        deskripsi: "Breadboard 400 titik, cocok untuk prototyping rangkaian.",
        image: "https://down-id.img.susercontent.com/file/c999b0500932bef69aee0c53ffe7c2c0@resize_w900_nl.webp",
        toko: { nama: "Toko Breadboard", kota: "Yogyakarta", rating: 4.7, terjual: 8 }
    },
    {
        id: 15, nama: "Buzzer Active 5V - Modul Alarm Suara", harga: 2000,
        deskripsi: "Modul buzzer aktif, langsung suara dengan tegangan 5V.",
        image: "https://down-id.img.susercontent.com/file/sg-11134201-82606-mjf7pbwiy3gn05@resize_w900_nl.webp",
        toko: { nama: "Toko Buzzer", kota: "Semarang", rating: 4.8, terjual: 5 }
    },
    {
        id: 16, nama: "Potensiometer WH148 Linier Rotary", harga: 2500,
        deskripsi: "Resistor variabel tipe putar, cocok untuk kontrol audio.",
        image: "https://down-id.img.susercontent.com/file/39d7c430e694e8c416804302689e32d9@resize_w900_nl.webp",
        toko: { nama: "Toko Potensiometer", kota: "Bandung", rating: 4.6, terjual: 2 }
    }
];

// Komentar produk — kosong by default
let productReviews = {};

let cart = [];
let historyTransactions = [];
let users = [];
let currentUser = null;
let isLoginMode = true;
let checkoutStep = 1;

// =============================================
// INIT
// =============================================
window.onload = () => {
    renderProducts(products);
};

// =============================================
// NAVIGASI
// =============================================
function showPage(pageId) {
    ['shop', 'history', 'profile', 'auth'].forEach(p => {
        const el = document.getElementById('page-' + p);
        if (el) el.classList.add('hide');
    });
    ['shop', 'history', 'profile'].forEach(b => {
        const btn = document.getElementById('btn-' + b);
        if (btn) btn.classList.remove('nav-active');
    });
    if (pageId === 'profile') updateProfileView();
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.remove('hide');
    if (['shop', 'history', 'profile'].includes(pageId)) {
        const btn = document.getElementById('btn-' + pageId);
        if (btn) btn.classList.add('nav-active');
    }
    closeCart();
    window.scrollTo(0, 0);
}

function updateProfileView() {
    const unauthDiv = document.getElementById('profile-unauthenticated');
    const authDiv = document.getElementById('profile-authenticated');
    if (!unauthDiv || !authDiv) return;
    if (currentUser) {
        unauthDiv.classList.add('hide');
        authDiv.classList.remove('hide');
        document.getElementById('profile-display-name').innerText = currentUser.name || "Pengguna Baru";
        document.getElementById('profile-display-email').innerText = currentUser.email;
        document.getElementById('profile-initial').innerText = (currentUser.name ? currentUser.name[0] : currentUser.email[0]).toUpperCase();
        document.getElementById('prof-name').value = currentUser.name || '';
        document.getElementById('prof-phone').value = currentUser.phone || '';
        document.getElementById('prof-address').value = currentUser.address || '';
    } else {
        unauthDiv.classList.remove('hide');
        authDiv.classList.add('hide');
    }
}

// =============================================
// AUTH
// =============================================
function goToAuth(isLogin) {
    isLoginMode = isLogin;
    toggleAuthMode(true);
    showPage('auth');
}

function toggleAuthMode(forceMode = null) {
    if (forceMode !== null) isLoginMode = forceMode;
    else isLoginMode = !isLoginMode;

    const authTitle = document.getElementById('auth-title');
    if (authTitle) {
        authTitle.innerHTML = isLoginMode
            ? `<div class="w-14 h-14 logo-box rounded-2xl flex items-center justify-center mx-auto mb-4 shadow"><i class="fas fa-bolt text-white text-xl"></i></div><h2 class="text-xl font-bold text-slate-800">Masuk ke Akun</h2><p class="text-slate-400 text-sm mt-1">Lanjutkan pengalaman belanja Anda</p>`
            : `<div class="w-14 h-14 logo-box rounded-2xl flex items-center justify-center mx-auto mb-4 shadow"><i class="fas fa-user-plus text-white text-xl"></i></div><h2 class="text-xl font-bold text-slate-800">Buat Akun Baru</h2><p class="text-slate-400 text-sm mt-1">Daftar dan mulai belanja sekarang</p>`;
    }
    document.getElementById('btn-auth-submit').innerText = isLoginMode ? "Masuk" : "Daftar Sekarang";
    document.getElementById('auth-toggle-text').innerText = isLoginMode ? "Belum memiliki akun?" : "Sudah memiliki akun?";
    document.getElementById('auth-toggle-link').innerText = isLoginMode ? "Daftar Sekarang" : "Masuk di Sini";
}

function handleAuth() {
    const email = document.getElementById('auth-email').value.trim();
    const pass = document.getElementById('auth-pass').value;
    if (!email || !pass) return showModal("Peringatan", "Harap isi semua kolom yang tersedia.");
    if (isLoginMode) {
        const user = users.find(u => u.email === email && u.pass === pass);
        if (user) {
            currentUser = user;
            document.getElementById('userIcon').classList.add('text-blue-500');
            showPage('shop');
        } else {
            showModal("Login Gagal", "Email atau kata sandi yang Anda masukkan tidak sesuai.");
        }
    } else {
        if (users.some(u => u.email === email)) return showModal("Pendaftaran Gagal", "Alamat email tersebut sudah terdaftar.");
        users.push({ email, pass, name: "", address: "", phone: "" });
        showModal("Pendaftaran Berhasil", "Akun berhasil dibuat. Silakan masuk menggunakan email dan kata sandi Anda.");
        toggleAuthMode(true);
    }
}

function logout() {
    currentUser = null;
    document.getElementById('userIcon').classList.remove('text-blue-500');
    showPage('shop');
}

function saveProfile() {
    if (!currentUser) return;
    currentUser.name = document.getElementById('prof-name').value;
    currentUser.phone = document.getElementById('prof-phone').value;
    currentUser.address = document.getElementById('prof-address').value;
    updateProfileView();
    showModal("Berhasil Disimpan", "Data profil dan alamat pengiriman Anda telah diperbarui.");
}

// =============================================
// RESET PASSWORD
// =============================================
function showForgotPassword() {
    // Reset semua state modal
    ['forgot-email', 'new-pass', 'confirm-pass'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    ['forgot-error', 'forgot-error-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hide');
    });
    showForgotStep(1);
    document.getElementById('forgotModal').classList.remove('hide');
}

function closeForgotModal() {
    document.getElementById('forgotModal').classList.add('hide');
}

function showForgotStep(step) {
    document.getElementById('forgot-step-1').classList.add('hide');
    document.getElementById('forgot-step-2').classList.add('hide');
    document.getElementById('forgot-step-' + step).classList.remove('hide');
}

function checkForgotEmail() {
    const emailEl = document.getElementById('forgot-email');
    const errEl = document.getElementById('forgot-error');
    const email = emailEl ? emailEl.value.trim() : '';

    if (!email) {
        errEl.innerText = 'Masukkan alamat email terlebih dahulu.';
        errEl.classList.remove('hide');
        return;
    }

    const userFound = users.find(u => u.email === email);
    if (!userFound) {
        errEl.innerText = 'Email ini tidak terdaftar di sistem kami.';
        errEl.classList.remove('hide');
        return;
    }

    errEl.classList.add('hide');
    // Simpan email di dataset untuk dipakai di step 2
    document.getElementById('forgot-step-2').dataset.email = email;
    showForgotStep(2);
}

function submitNewPassword() {
    const newPass = document.getElementById('new-pass').value;
    const confirmPass = document.getElementById('confirm-pass').value;
    const errEl = document.getElementById('forgot-error-2');

    if (!newPass || newPass.length < 6) {
        errEl.innerText = 'Kata sandi minimal 6 karakter.';
        errEl.classList.remove('hide');
        return;
    }
    if (newPass !== confirmPass) {
        errEl.innerText = 'Kata sandi baru dan konfirmasi tidak cocok.';
        errEl.classList.remove('hide');
        return;
    }

    const email = document.getElementById('forgot-step-2').dataset.email;
    const user = users.find(u => u.email === email);
    if (user) {
        user.pass = newPass;
        if (currentUser && currentUser.email === email) currentUser.pass = newPass;
    }

    errEl.classList.add('hide');
    closeForgotModal();
    showModal("Kata Sandi Diperbarui", "Kata sandi berhasil diubah. Silakan masuk menggunakan kata sandi baru Anda.");
}

// =============================================
// HELPER: BINTANG
// =============================================
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="${i <= Math.round(rating) ? 'star-display' : 'star-empty'}">★</span>`;
    }
    return html;
}

// =============================================
// RENDER PRODUK
// =============================================
function renderProducts(data) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    if (data.length === 0) {
        grid.innerHTML = `<div class="col-span-4 text-center py-16 text-slate-400 bg-white rounded-2xl">
            <i class="fas fa-search text-3xl mb-3 block text-slate-300"></i>
            <p class="font-semibold">Produk tidak ditemukan</p>
            <p class="text-xs mt-1">Coba gunakan kata kunci lain</p>
        </div>`;
        return;
    }

    grid.innerHTML = data.map(p => {
        const reviews = productReviews[p.id] || [];
        const avgRating = reviews.length > 0
            ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
            : p.toko.rating;
        const totalUlasan = reviews.length;

        return `
        <div class="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 p-4 flex flex-col">
            <div class="relative w-full aspect-square bg-slate-50 rounded-xl mb-3 overflow-hidden border border-slate-100">
                <img src="${p.image}" alt="${p.nama}"
                     onerror="this.src='https://placehold.co/400x400/f8fafc/64748b?text=Foto'"
                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>

            <div class="flex items-center justify-between mb-2">
                <span class="seller-badge"><i class="fas fa-store"></i> ${p.toko.nama}</span>
                <span class="text-[10px] text-slate-400 font-medium">${p.toko.kota}</span>
            </div>

            <h3 class="font-bold text-slate-800 text-sm leading-snug mb-1 line-clamp-2" style="min-height:2.6em">${p.nama}</h3>
            <p class="text-blue-600 font-black text-base mb-1">Rp${p.harga.toLocaleString('id-ID')}</p>
            <p class="text-[11px] text-slate-400 mb-2 line-clamp-2 leading-relaxed flex-1">${p.deskripsi}</p>

            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-1">
                    ${renderStars(avgRating)}
                    <span class="text-[10px] text-slate-500 font-semibold ml-0.5">${avgRating}</span>
                </div>
                <span class="text-[10px] text-slate-400">${p.toko.terjual} terjual</span>
            </div>

            <button onclick="openReviewModal(${p.id})"
                class="w-full mb-3 py-1.5 rounded-lg text-[11px] font-bold border border-slate-200 text-slate-500 hover:bg-slate-50 transition flex items-center justify-center gap-1.5">
                <i class="fas fa-comment-dots text-blue-400"></i>
                Komentar & Ulasan
                ${totalUlasan > 0 ? `<span class="bg-blue-100 text-blue-600 text-[9px] font-black px-1.5 py-0.5 rounded-full">${totalUlasan}</span>` : ''}
            </button>

            <div class="flex items-center space-x-2 mb-3 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                <button onclick="changeQty(${p.id}, -1)" class="w-7 h-7 bg-white rounded-lg border border-slate-200 text-slate-500 font-bold text-sm flex items-center justify-center hover:bg-slate-100 transition">−</button>
                <input type="number" id="qty-${p.id}" value="1" min="1"
                    class="flex-1 bg-transparent text-center font-bold text-slate-800 text-sm outline-none">
                <button onclick="changeQty(${p.id}, 1)" class="w-7 h-7 bg-white rounded-lg border border-slate-200 text-slate-500 font-bold text-sm flex items-center justify-center hover:bg-slate-100 transition">+</button>
            </div>

            <div class="grid grid-cols-2 gap-2 mt-auto">
                <button onclick="handleAddToCart(${p.id})"
                    class="bg-blue-50 text-blue-700 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wide hover:bg-blue-100 transition border border-blue-100">
                    + Keranjang
                </button>
                <button onclick="handleBuyNow(${p.id})"
                    class="bg-blue-600 text-white py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wide shadow-md hover:bg-blue-700 transition">
                    Beli Langsung
                </button>
            </div>
        </div>`;
    }).join('');
}

// =============================================
// MODAL ULASAN
// =============================================
let currentReviewProductId = null;
let selectedRating = 0;

function openReviewModal(productId) {
    currentReviewProductId = productId;
    selectedRating = 0;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const reviews = productReviews[productId] || [];
    const avgRating = reviews.length > 0
        ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
        : product.toko.rating;

    const content = document.getElementById('reviewModalContent');
    content.innerHTML = `
        <div class="flex items-start gap-3 mb-4">
            <img src="${product.image}" onerror="this.src='https://placehold.co/100x100'"
                 class="w-14 h-14 rounded-xl object-cover border border-slate-100 flex-shrink-0">
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-slate-800 text-sm line-clamp-2 leading-snug">${product.nama}</h3>
                <p class="text-blue-600 font-black text-base mt-0.5">Rp${product.harga.toLocaleString('id-ID')}</p>
                <div class="flex items-center gap-1 mt-1">
                    ${renderStars(avgRating)}
                    <span class="text-xs text-slate-500 font-semibold">${avgRating} · ${reviews.length} ulasan</span>
                </div>
            </div>
        </div>

        <div class="seller-info-card flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-base flex-shrink-0">
                ${product.toko.nama.split(' ').pop()[0]}
            </div>
            <div>
                <p class="font-bold text-sm text-slate-800">${product.toko.nama}</p>
                <p class="text-xs text-slate-400">${product.toko.kota} · Rating ${product.toko.rating} ★</p>
            </div>
            <div class="ml-auto text-right">
                <p class="text-xs font-bold text-blue-600">${product.toko.terjual} terjual</p>
            </div>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4">
            <p class="font-bold text-xs text-blue-700 mb-3 uppercase tracking-wider">Tulis Ulasan Kamu</p>
            <div class="flex gap-1 mb-2" id="starPicker">
                ${[1,2,3,4,5].map(i => `<button class="star-btn" id="star-${i}" onclick="selectRating(${i})" onmouseover="hoverRating(${i})" onmouseout="resetHover()">★</button>`).join('')}
            </div>
            <p id="ratingLabel" class="text-xs text-slate-400 mb-3">Pilih rating bintang</p>
            <input id="reviewUsername" type="text" placeholder="Nama kamu (opsional)"
                class="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 mb-2 transition"
                value="${currentUser ? (currentUser.name || '') : ''}">
            <textarea id="reviewText" rows="3" placeholder="Bagikan pengalamanmu dengan produk ini..."
                class="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"></textarea>
            <button onclick="submitReview()"
                class="mt-3 w-full bg-blue-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow">
                Kirim Ulasan
            </button>
        </div>

        <div>
            <p class="font-bold text-xs text-slate-500 uppercase tracking-wider mb-3">Ulasan Pembeli</p>
            <div id="reviewList" class="space-y-3 max-h-60 overflow-y-auto pr-1">
                ${renderReviewList(reviews)}
            </div>
        </div>
    `;

    document.getElementById('reviewModal').classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function renderReviewList(reviews) {
    if (reviews.length === 0) {
        return `<div class="text-center py-8 bg-slate-50 rounded-xl border border-slate-100">
            <i class="fas fa-comment-slash text-2xl mb-2 block text-slate-300"></i>
            <p class="text-xs font-semibold text-slate-400">Belum ada komentar di produk ini</p>
            <p class="text-[11px] text-slate-300 mt-1">Jadilah yang pertama memberi ulasan!</p>
        </div>`;
    }
    return reviews.slice().reverse().map(r => `
        <div class="comment-item">
            <div class="flex items-center gap-2 mb-1.5">
                <div class="comment-avatar">${(r.nama || 'A')[0].toUpperCase()}</div>
                <div class="flex-1">
                    <p class="text-xs font-bold text-slate-700">${r.nama || 'Anonim'}</p>
                    <div class="flex gap-0.5">${renderStars(r.rating)}</div>
                </div>
                <span class="text-[10px] text-slate-400">${r.tanggal}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed pl-9">${r.komentar}</p>
        </div>
    `).join('');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.add('hide');
    document.body.style.overflow = '';
    currentReviewProductId = null;
    selectedRating = 0;
}

function hoverRating(val) {
    for (let i = 1; i <= 5; i++) {
        const s = document.getElementById('star-' + i);
        if (s) s.classList.toggle('active', i <= val);
    }
}

function resetHover() {
    for (let i = 1; i <= 5; i++) {
        const s = document.getElementById('star-' + i);
        if (s) s.classList.toggle('active', i <= selectedRating);
    }
}

function selectRating(val) {
    selectedRating = val;
    const labels = ['', 'Sangat Buruk', 'Kurang Baik', 'Cukup', 'Bagus', 'Sangat Bagus!'];
    const label = document.getElementById('ratingLabel');
    if (label) label.innerText = labels[val];
    resetHover();
}

function submitReview() {
    if (selectedRating === 0) return showModal("Rating Diperlukan", "Pilih bintang rating terlebih dahulu.");
    const komentarEl = document.getElementById('reviewText');
    const namaEl = document.getElementById('reviewUsername');
    const komentar = komentarEl ? komentarEl.value.trim() : '';
    const nama = namaEl ? namaEl.value.trim() : '';
    if (!komentar) return showModal("Komentar Kosong", "Tulis komentar sebelum mengirim ulasan.");

    if (!productReviews[currentReviewProductId]) productReviews[currentReviewProductId] = [];
    productReviews[currentReviewProductId].push({
        nama: nama || (currentUser ? currentUser.name || 'Pengguna' : 'Anonim'),
        rating: selectedRating,
        komentar,
        tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    });

    const reviewList = document.getElementById('reviewList');
    const reviews = productReviews[currentReviewProductId];
    if (reviewList) reviewList.innerHTML = renderReviewList(reviews);

    if (komentarEl) komentarEl.value = '';
    selectedRating = 0;
    resetHover();
    const label = document.getElementById('ratingLabel');
    if (label) label.innerText = 'Pilih rating bintang';

    renderProducts(getCurrentFilter());
    showModal("Ulasan Terkirim!", "Terima kasih sudah memberikan ulasan untuk produk ini.");
}

function getCurrentFilter() {
    const searchVal = document.getElementById('searchInput');
    if (searchVal && searchVal.value.trim()) {
        const v = searchVal.value.toLowerCase();
        return products.filter(p => p.nama.toLowerCase().includes(v) || p.deskripsi.toLowerCase().includes(v));
    }
    return products;
}

// =============================================
// QTY & FILTER
// =============================================
function changeQty(id, delta) {
    const input = document.getElementById('qty-' + id);
    if (!input) return;
    let val = parseInt(input.value) || 1;
    val = Math.max(1, val + delta);
    input.value = val;
}

function filterProduk() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    renderProducts(products.filter(p => p.nama.toLowerCase().includes(val) || p.deskripsi.toLowerCase().includes(val)));
}

function toggleMobileSearch() {
    const el = document.getElementById('mobileSearch');
    if (el) el.classList.toggle('hide');
}

function filterProdukMobile(val) {
    renderProducts(products.filter(p => p.nama.toLowerCase().includes(val.toLowerCase())));
}

// =============================================
// KERANJANG
// =============================================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (!sidebar || !overlay) return;
    const isClosed = sidebar.classList.contains('translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hide');
        resetCheckoutStep();
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hide');
    }
}

function closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.add('translate-x-full');
    if (overlay) overlay.classList.add('hide');
    resetCheckoutStep();
}

function resetCheckoutStep() {
    checkoutStep = 1;
    const paySec = document.getElementById('payment-section');
    const btnProc = document.getElementById('btn-checkout-process');
    if (paySec) paySec.classList.add('hide');
    if (btnProc) btnProc.innerText = "Lanjut ke Pembayaran";
}

function handleAddToCart(id) {
    const input = document.getElementById('qty-' + id);
    const qty = input ? parseInt(input.value) || 1 : 1;
    addToCart(id, qty);
    const btn = event.target;
    const oldText = btn.innerText;
    btn.innerText = '✓ Ditambahkan';
    setTimeout(() => { btn.innerText = oldText; }, 1200);
}

function handleBuyNow(id) {
    const input = document.getElementById('qty-' + id);
    const qty = input ? parseInt(input.value) || 1 : 1;
    addToCart(id, qty);
    toggleCart();
    if (currentUser && currentUser.name && currentUser.address && currentUser.phone) {
        checkoutStep = 2;
        document.getElementById('payment-section').classList.remove('hide');
        document.getElementById('btn-checkout-process').innerText = "Konfirmasi & Bayar";
    }
}

function addToCart(id, qty) {
    const item = products.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);
    if (inCart) inCart.qty += qty;
    else cart.push({ ...item, qty: qty });
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
}

function updateQtyInCart(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    container.innerHTML = cart.length === 0
        ? `<div class="text-center py-16 text-slate-400"><i class="fas fa-shopping-cart text-3xl mb-3 block text-slate-300"></i><p class="font-semibold text-sm">Keranjang masih kosong</p><p class="text-xs mt-1">Tambahkan produk untuk memulai</p></div>`
        : cart.map(item => {
            const subtotalItem = item.harga * item.qty;
            return `
            <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div class="flex items-start space-x-3 mb-3">
                    <div class="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex-shrink-0 overflow-hidden">
                        <img src="${item.image}" onerror="this.src='https://placehold.co/100x100'" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-xs text-slate-800 leading-snug line-clamp-2">${item.nama}</h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Rp${item.harga.toLocaleString('id-ID')} / unit</p>
                        <span class="seller-badge mt-1 inline-flex"><i class="fas fa-store"></i> ${item.toko.nama}</span>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-slate-300 hover:text-red-400 transition text-sm flex-shrink-0">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="flex justify-between items-center pt-3 border-t border-dashed border-slate-100">
                    <div class="flex items-center space-x-2 bg-slate-50 rounded-lg p-1">
                        <button onclick="updateQtyInCart(${item.id}, -1)" class="w-6 h-6 bg-white rounded-md text-slate-500 font-bold text-xs border border-slate-200 hover:bg-slate-100 transition">−</button>
                        <span class="font-bold text-xs text-slate-800 min-w-[24px] text-center">${item.qty}</span>
                        <button onclick="updateQtyInCart(${item.id}, 1)" class="w-6 h-6 bg-white rounded-md text-slate-500 font-bold text-xs border border-slate-200 hover:bg-slate-100 transition">+</button>
                    </div>
                    <div class="font-black text-blue-600 text-sm">Rp${subtotalItem.toLocaleString('id-ID')}</div>
                </div>
            </div>`;
        }).join('');

    const subtotalSemua = cart.reduce((acc, item) => acc + (item.harga * item.qty), 0);
    const totalDiskon = subtotalSemua > 100000 ? subtotalSemua * 0.05 : 0;
    const subtotalDiskonVal = subtotalSemua - totalDiskon;
    const pajak = subtotalDiskonVal * 0.11;
    const totalFinal = subtotalDiskonVal + pajak;

    document.getElementById('subtotalText').innerText = "Rp" + subtotalSemua.toLocaleString('id-ID');
    document.getElementById('diskonText').innerText = "- Rp" + Math.round(totalDiskon).toLocaleString('id-ID');
    document.getElementById('pajakText').innerText = "Rp" + Math.round(pajak).toLocaleString('id-ID');
    document.getElementById('totalText').innerText = "Rp" + Math.round(totalFinal).toLocaleString('id-ID');
    document.getElementById('cartCount').innerText = cart.reduce((a, i) => a + i.qty, 0);
}

function handleCheckoutClick() {
    if (cart.length === 0) return showModal("Keranjang Kosong", "Silakan tambahkan produk ke keranjang terlebih dahulu.");
    if (!currentUser) {
        showPage('auth');
        showModal("Login Diperlukan", "Silakan masuk atau daftar untuk melanjutkan proses pembelian.");
        return;
    }
    if (!currentUser.name || !currentUser.address || !currentUser.phone) {
        closeCart();
        showPage('profile');
        showModal("Lengkapi Data Profil", "Harap lengkapi nama, alamat, dan nomor HP sebelum melakukan pembelian.");
        return;
    }
    if (checkoutStep === 1) {
        checkoutStep = 2;
        document.getElementById('payment-section').classList.remove('hide');
        document.getElementById('btn-checkout-process').innerText = "Konfirmasi & Bayar";
    } else {
        processCheckout();
    }
}

function processCheckout() {
    const payMethodSelect = document.querySelector('input[name="pay-method"]:checked');
    const payMethod = payMethodSelect ? payMethodSelect.value : "Transfer Bank";
    const subtotal = cart.reduce((acc, item) => acc + (item.harga * item.qty), 0);
    const diskon = subtotal > 100000 ? subtotal * 0.05 : 0;
    const subtotalSetelahDiskon = subtotal - diskon;
    const pajak = subtotalSetelahDiskon * 0.11;
    const totalFinal = subtotalSetelahDiskon + pajak;

    historyTransactions.unshift({
        id: "TRX-" + Date.now().toString().slice(-6),
        date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
        items: [...cart],
        subtotal, diskon, pajak, total: totalFinal, method: payMethod
    });

    renderHistory();
    cart = [];
    updateCartUI();
    closeCart();
    document.getElementById('successModal').classList.remove('hide');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hide');
    showPage('history');
}

function closeSuccessToHome() {
    document.getElementById('successModal').classList.add('hide');
    showPage('shop');
}

function renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;
    container.innerHTML = historyTransactions.length === 0
        ? `<div class="text-center py-20 text-slate-400 bg-white rounded-2xl border border-slate-100">
            <i class="fas fa-receipt text-4xl mb-4 block text-slate-300"></i>
            <p class="font-semibold text-sm">Belum ada transaksi</p>
            <p class="text-xs mt-1">Mulai belanja untuk melihat riwayat di sini</p>
           </div>`
        : historyTransactions.map(h => `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h4 class="font-black text-blue-600 text-base">${h.id}</h4>
                        <p class="text-[10px] text-slate-400 font-medium mt-0.5">${h.date}</p>
                    </div>
                    <span class="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-blue-100">${h.method}</span>
                </div>
                <div class="space-y-1.5 mb-4 bg-slate-50 rounded-xl p-3">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">Item Pesanan</p>
                    ${h.items.map(it => `
                        <div class="flex justify-between text-xs text-slate-600 font-semibold">
                            <span class="truncate mr-4">${it.nama} <span class="text-slate-400 font-normal">×${it.qty}</span></span>
                            <span class="flex-shrink-0">Rp${(it.harga * it.qty).toLocaleString('id-ID')}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="space-y-1.5 pt-3 border-t border-dashed border-slate-100">
                    <div class="flex justify-between text-xs text-slate-500">
                        <span>Subtotal</span><span class="font-semibold">Rp${h.subtotal.toLocaleString('id-ID')}</span>
                    </div>
                    ${h.diskon > 0 ? `
                    <div class="flex justify-between text-xs text-emerald-500">
                        <span>Diskon (5% belanja > Rp100.000)</span>
                        <span class="font-bold">- Rp${Math.round(h.diskon).toLocaleString('id-ID')}</span>
                    </div>` : ''}
                    <div class="flex justify-between text-xs text-slate-500">
                        <span>Pajak PPN (11%)</span>
                        <span class="font-semibold">+ Rp${Math.round(h.pajak).toLocaleString('id-ID')}</span>
                    </div>
                    <div class="flex justify-between font-black pt-2 border-t border-slate-100">
                        <span class="text-slate-400 text-xs self-center font-semibold uppercase tracking-wide">Total</span>
                        <span class="text-slate-800 text-lg">Rp${Math.round(h.total).toLocaleString('id-ID')}</span>
                    </div>
                </div>
            </div>`
        ).join('');
}

function showModal(title, msg) {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 flex items-center justify-center z-[300] px-4";
    modal.innerHTML = `
        <div class="absolute inset-0 bg-slate-900 bg-opacity-40 backdrop-blur-sm" onclick="this.parentElement.remove()"></div>
        <div class="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl text-center">
            <h3 class="text-base font-bold mb-2 text-slate-800">${title}</h3>
            <p class="text-slate-400 text-sm mb-6 leading-relaxed">${msg}</p>
            <button onclick="this.closest('.fixed').remove()"
                class="w-full bg-slate-800 text-white py-3 rounded-xl font-bold text-sm shadow hover:bg-black transition">
                Tutup
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}