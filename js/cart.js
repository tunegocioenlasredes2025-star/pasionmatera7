class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('pm7_cart') || '[]');
    this.whatsappNumber = '5491179006737';
    this.listeners = [];
  }

  save() {
    localStorage.setItem('pm7_cart', JSON.stringify(this.items));
    this.listeners.forEach(fn => fn(this.items));
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  add(product, qty = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ ...product, qty });
    }
    this.save();
    this.showToast(product.name);
  }

  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
  }

  updateQty(productId, qty) {
    if (qty <= 0) { this.remove(productId); return; }
    const item = this.items.find(i => i.id === productId);
    if (item) { item.qty = qty; this.save(); }
  }

  clear() {
    this.items = [];
    this.save();
  }

  get count() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  }

  get total() {
    return this.items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  buildWhatsAppMessage() {
    if (this.items.length === 0) return '';
    let msg = '¡Hola Pasión Matera 7! Quiero hacer el siguiente pedido:\n\n';
    this.items.forEach(item => {
      msg += `• ${item.name} x${item.qty} — ${formatPrice(item.price * item.qty)}\n`;
    });
    msg += `\n*TOTAL: ${formatPrice(this.total)}*`;
    msg += '\n\n¿Tienen disponibilidad?';
    return encodeURIComponent(msg);
  }

  checkout() {
    const msg = this.buildWhatsAppMessage();
    if (!msg) return;
    window.open(`https://wa.me/${this.whatsappNumber}?text=${msg}`, '_blank');
  }

  buyNow(product) {
    let msg = `¡Hola Pasión Matera 7! Me interesa:\n\n• ${product.name} — ${formatPrice(product.price)}\n\n¿Tienen disponibilidad?`;
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  showToast(name) {
    const existing = document.getElementById('cart-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.className = 'cart-toast';
    toast.innerHTML = `<span>✓</span> <strong>${name.substring(0, 30)}${name.length > 30 ? '...' : ''}</strong> agregado al carrito`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2500);
  }
}

const cart = new Cart();
