// 1. VARIABLE untuk simpan cart
let cart = [];

// 2. FUNGSI untuk TAMPILKAN cart
function tampilkanCart() {
    let cartItems = document.getElementById('cartItems');
    let totalItems = document.getElementById('totalItems');
    let totalPrice = document.getElementById('totalPrice');
    let checkoutBtn = document.getElementById('checkoutBtn');
    
    // Hitung total
    let totalBarang = 0;
    let totalHarga = 0;
    
    cart.forEach(item => {
        totalBarang += 1;
        totalHarga += item.harga;
    });
    
    // Update tampilan
    totalItems.textContent = totalBarang;
    totalPrice.textContent = 'Rp ' + totalHarga.toLocaleString();
    checkoutBtn.disabled = totalBarang == 0;
    
    // Tampilkan list barang di cart
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty">Belum ada barang</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span class="item-name">${item.nama}</span>
                <span class="item-price">Rp ${item.harga.toLocaleString()}</span>
            </div>
        `).join('');
    }
}

// 3. EVENT LISTENER untuk semua tombol "add"
document.querySelectorAll('.tombol-tambah').forEach(tombol => {
    tombol.addEventListener('click', function() {
        let card = this.closest('.card');
        let nama = card.querySelector('.nama-produk').textContent;
        
        // AMBIL DARI SPAN VALUE
        let valueText = card.querySelector('.value').textContent;
        let harga = parseInt(valueText.replace(/\./g, '')); // Hapus titik saja
        
        cart.push({
            nama: nama,
            harga: harga
        });
        
        tampilkanCart();
    });
});

// 4. CHECKOUT
document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (cart.length > 0) {
        let totalHarga = cart.reduce((sum, item) => sum + item.harga, 0);
        
        let detail = '📦 Pesanan Anda:\n\n';
        cart.forEach(item => {
            detail += `• ${item.nama} - Rp ${item.harga.toLocaleString()}\n`;
        });
        detail += `\n💰 Total: Rp ${totalHarga.toLocaleString()}`;
        
        alert(detail);
        
        // Reset cart
        cart = [];
        tampilkanCart();
    }
});

// 5. JALANKAN pertama kali
tampilkanCart();



// =======================================================

// Form Contact Functionality
function kirimPesan() {
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let pesan = document.getElementById('pesan').value;
    
    if (!nama || !email || !pesan) {
        alert('❌ Harap isi semua field!');
        return;
    }
    
    alert(`✅ Terima kasih ${nama}! Pesan terkirim.`);
    
    // Reset form
    document.getElementById('nama').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pesan').value = '';
}