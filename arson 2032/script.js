/*
 ARSON — tienda catálogo para dropshipping.
 ANTES DE PUBLICAR:
 1) Reemplaza WHATSAPP_NUMBER por tu número peruano con prefijo 51, solo dígitos.
 2) Cambia productos de demostración por productos reales y confirma costos con tu proveedor.
*/
const WHATSAPP_NUMBER = "51907234394";

const categoryNames = {
  todos: "Todo",
  tecnologia: "Tecnología",
  accesorios: "Accesorios",
  prendas: "Prendas",
  zapatillas: "Zapatillas",
  hogar: "Hogar & estilo"
};

const subcategories = {
  tecnologia: [
    "Audífonos (equipos)", "Celulares", "Computadoras", "Laptops", "Tablets",
    "Mouse", "Mousepads", "Parlantes", "Teclados",
    "— Accesorios —", "Todos los accesorios", "Cases", "Micas", "Protectores de vidrio",
    "Cargadores", "Protectores de cargador", "Protectores de cámara",
    "Audífonos", "Pencils", "Fundas para tablets", "Teclados para tablets"
  ],
  accesorios: ["Bolsos", "Gorras", "Lentes", "Medias", "Relojes"],
  prendas: ["Bividís", "Buzos", "Camisas", "Casacas", "Pantalones jean", "Poleras", "Polos"],
  zapatillas: ["Todas las marcas", "Adidas", "Converse", "New Balance", "Nike", "Puma", "Reebok", "Vans", "— Tipo de zapatilla —", "Deportivas", "De vestir"],
  hogar: ["Accesorios para el hogar", "Camas", "Decoración", "Escritorios", "Lámparas", "Muebles", "Organización", "Sillas", "Sofás", "Textiles"]
};

const products = [
 {id:1,name:"Auriculares Nova",category:"tecnologia",subcategory:"Audífonos (equipos)",label:"Tecnología",price:89.90,emoji:"🎧",badge:"DESTACADO",desc:"Comodidad para todos los días."},
 {id:2,name:"Reloj Minimal",category:"accesorios",subcategory:"Relojes",label:"Accesorios",price:119.90,emoji:"⌚",badge:"NUEVO",desc:"Diseño limpio y versátil."},
 {id:3,name:"Lámpara Aura",category:"hogar",subcategory:"Lámparas",label:"Hogar & estilo",price:74.90,emoji:"💡",badge:"",desc:"Luz ambiental con personalidad."},
 {id:4,name:"Parlante Pulse",category:"tecnologia",subcategory:"Parlantes",label:"Tecnología",price:99.90,emoji:"🔊",badge:"POPULAR",desc:"Sonido que acompaña tu día."},
 {id:5,name:"Bolso Urban",category:"accesorios",subcategory:"Bolsos",label:"Accesorios",price:69.90,emoji:"👜",badge:"",desc:"Práctico y fácil de combinar."},
 {id:6,name:"Botella Flow",category:"hogar",subcategory:"Accesorios para el hogar",label:"Hogar & estilo",price:39.90,emoji:"🥤",badge:"",desc:"Hidratación siempre a mano."},
 {id:7,name:"Soporte Flex",category:"tecnologia",subcategory:"Celulares",label:"Tecnología",price:29.90,emoji:"📱",badge:"",desc:"Más comodidad en tu escritorio."},
 {id:8,name:"Lentes Vector",category:"accesorios",subcategory:"Lentes",label:"Accesorios",price:59.90,emoji:"🕶️",badge:"",desc:"Un detalle que completa tu estilo."},
 {id:9,name:"Buzo Essential",category:"prendas",subcategory:"Buzos",label:"Prendas",price:79.90,emoji:"🧥",badge:"",desc:"Una opción cómoda para el día a día."},
 {id:10,name:"Zapatillas Urban",category:"zapatillas",subcategory:"Nike",brand:"Nike",type:"Deportivas",label:"Zapatillas",price:149.90,emoji:"👟",badge:"",desc:"Modelo de demostración; confirma disponibilidad."},
 {id:11,name:"Cama Comfort",category:"hogar",subcategory:"Camas",label:"Hogar & estilo",price:499.90,emoji:"🛏️",badge:"",desc:"Descanso y comodidad para tu espacio."},
 {id:12,name:"Silla Studio",category:"hogar",subcategory:"Sillas",label:"Hogar & estilo",price:159.90,emoji:"🪑",badge:"",desc:"Diseño funcional para casa o escritorio."},
 {id:13,name:"Gorra Daily",category:"accesorios",subcategory:"Gorras",label:"Accesorios",price:34.90,emoji:"🧢",badge:"",desc:"Un básico para completar tu estilo."},
 {id:14,name:"Medias Comfort",category:"accesorios",subcategory:"Medias",label:"Accesorios",price:14.90,emoji:"🧦",badge:"",desc:"Comodidad para todos los días."},
 {id:15,name:"Teclado Compact",category:"tecnologia",subcategory:"Teclados",label:"Tecnología",price:89.90,emoji:"⌨️",badge:"",desc:"Formato práctico para tu escritorio."},
 {id:16,name:"Mouse Core",category:"tecnologia",subcategory:"Mouse",label:"Tecnología",price:49.90,emoji:"🖱️",badge:"",desc:"Control sencillo para tu equipo."},
 {id:20,name:"Tablet Nova",category:"tecnologia",subcategory:"Tablets",label:"Tecnología",price:399.90,emoji:"📱",badge:"NUEVO",desc:"Tablet de muestra; confirma modelo, stock y precio."},
 {id:21,name:"Cargador USB-C",category:"tecnologia",subcategory:"Cargadores",label:"Tecnología · Accesorios",price:39.90,emoji:"🔌",badge:"",desc:"Ejemplo de accesorio; confirma compatibilidad y stock."},
 {id:22,name:"Case para celular",category:"tecnologia",subcategory:"Cases",label:"Tecnología · Accesorios",price:29.90,emoji:"📱",badge:"",desc:"Ejemplo de case; confirma el modelo compatible."},
 {id:23,name:"Protector de vidrio",category:"tecnologia",subcategory:"Protectores de vidrio",label:"Tecnología · Accesorios",price:19.90,emoji:"🛡️",badge:"",desc:"Ejemplo de protector; confirma el modelo compatible."},
 {id:24,name:"Mica para celular",category:"tecnologia",subcategory:"Micas",label:"Tecnología · Accesorios",price:15.90,emoji:"📱",badge:"",desc:"Ejemplo de mica; confirma el modelo compatible."},
 {id:25,name:"Audífonos inalámbricos",category:"tecnologia",subcategory:"Audífonos",label:"Tecnología · Accesorios",price:59.90,emoji:"🎧",badge:"",desc:"Ejemplo de accesorio; confirma conexión, stock y precio."},
 {id:26,name:"Protector de cargador",category:"tecnologia",subcategory:"Protectores de cargador",label:"Tecnología · Accesorios",price:12.90,emoji:"🔌",badge:"",desc:"Producto de muestra; confirma compatibilidad y stock."},
 {id:27,name:"Protector de cámara",category:"tecnologia",subcategory:"Protectores de cámara",label:"Tecnología · Accesorios",price:18.90,emoji:"📷",badge:"",desc:"Producto de muestra; confirma el modelo compatible."},
 {id:28,name:"Pencil universal",category:"tecnologia",subcategory:"Pencils",label:"Tecnología · Accesorios",price:49.90,emoji:"✏️",badge:"",desc:"Producto de muestra; confirma compatibilidad con el dispositivo."},
 {id:29,name:"Funda para tablet",category:"tecnologia",subcategory:"Fundas para tablets",label:"Tecnología · Accesorios",price:39.90,emoji:"📱",badge:"",desc:"Producto de muestra; confirma tamaño y modelo compatible."},
 {id:30,name:"Teclado para tablet",category:"tecnologia",subcategory:"Teclados para tablets",label:"Tecnología · Accesorios",price:89.90,emoji:"⌨️",badge:"",desc:"Producto de muestra; confirma conexión y compatibilidad."},
 {id:17,name:"Casaca Street",category:"prendas",subcategory:"Casacas",label:"Prendas",price:109.90,emoji:"🧥",badge:"",desc:"Una capa versátil para tus salidas."},
 {id:18,name:"Zapatillas Classic",category:"zapatillas",subcategory:"Adidas",brand:"Adidas",type:"De vestir",label:"Zapatillas",price:139.90,emoji:"👟",badge:"",desc:"Modelo de demostración; confirma disponibilidad."},
 {id:19,name:"Mesa auxiliar",category:"hogar",subcategory:"Muebles",label:"Hogar & estilo",price:129.90,emoji:"🪑",badge:"",desc:"Un complemento funcional para tu hogar."}
];

// Celulares Apple: modelos reales, precios de la tienda sujetos a cotización.
products.push(...iphoneCatalog);
const phoneSelections = new Map();
let cart = [];
let activeCategory = "todos";
let activeSubcategory = null;
let activeBrand = null;
let activeType = null;

const fmt = n => new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format(n);
const grid = document.getElementById("products");
const subcategoryFilters = document.getElementById("subcategoryFilters");
const subcategoryHeading = document.getElementById("subcategoryHeading");
const resultsLabel = document.getElementById("resultsLabel");

function renderSubcategories() {
  subcategoryFilters.innerHTML = "";
  if (activeCategory === "todos") {
    subcategoryHeading.textContent = "Explorar categorías";
    const items = Object.entries(categoryNames).filter(([key]) => key !== "todos");
    items.forEach(([key, name]) => addSubcategoryButton(name, key, false));
    return;
  }
  subcategoryHeading.textContent = activeCategory === "zapatillas" ? "Filtrar zapatillas" : categoryNames[activeCategory];
  (subcategories[activeCategory] || []).forEach(name => {
    if (name.startsWith("—") && name.endsWith("—")) {
      const separator = document.createElement("p");
      separator.className = "subcategory-separator";
      separator.textContent = name.replaceAll("—", "").trim();
      subcategoryFilters.appendChild(separator);
      return;
    }
    const value = name;
    const isBrand = activeCategory === "zapatillas" && ["Adidas","Converse","New Balance","Nike","Puma","Reebok","Vans"].includes(value);
    const isType = activeCategory === "zapatillas" && ["Deportivas","De vestir"].includes(value);
    const selected = isBrand ? activeBrand === value : isType ? activeType === value : activeSubcategory === value;
    addSubcategoryButton(value, value, selected, isBrand ? "brand" : isType ? "type" : "subcategory");
  });
  const all = document.createElement("button");
  all.type = "button";
  all.className = "subcategory-button" + (!activeSubcategory && !activeBrand && !activeType ? " active" : "");
  all.textContent = "Ver todos";
  all.addEventListener("click", () => {
    activeSubcategory = activeBrand = activeType = null;
    renderSubcategories();
    renderProducts();
  });
  subcategoryFilters.prepend(all);
}

function addSubcategoryButton(label, value, selected=false, kind="category") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "subcategory-button" + (selected ? " active" : "");
  button.textContent = label;
  button.addEventListener("click", () => {
    if (kind === "category") {
      activeCategory = value;
      activeSubcategory = activeBrand = activeType = null;
      document.querySelectorAll(".main-filters .filter").forEach(b => b.classList.toggle("active", b.dataset.filter === value));
      renderSubcategories();
    } else if (kind === "brand") {
      activeBrand = activeBrand === value ? null : value;
      activeSubcategory = null;
      renderSubcategories();
    } else if (kind === "type") {
      activeType = activeType === value ? null : value;
      activeSubcategory = null;
      renderSubcategories();
    } else {
      activeSubcategory = activeSubcategory === value ? null : value;
      activeBrand = activeType = null;
      renderSubcategories();
    }
    renderProducts();
    if(typeof filtersExpanded !== "undefined" && window.matchMedia("(max-width:600px)").matches){filtersExpanded=false;}
    if(typeof updateFilterToggle === "function") updateFilterToggle();
  });
  subcategoryFilters.appendChild(button);
}

function renderProducts() {
  let list = products.filter(p => activeCategory === "todos" || p.category === activeCategory);
  if (activeSubcategory === "Todos los accesorios" && activeCategory === "tecnologia") {
    const techAccessories = [
      "Cases", "Protectores de vidrio", "Micas", "Cargadores",
      "Protectores de cargador", "Protectores de cámara", "Audífonos",
      "Pencils", "Fundas para tablets", "Teclados para tablets"
    ];
    list = list.filter(p => techAccessories.includes(p.subcategory));
  } else if (activeSubcategory) {
    list = list.filter(p => p.subcategory === activeSubcategory);
  }
  if (activeCategory === "zapatillas" && activeBrand) list = list.filter(p => p.brand === activeBrand || p.subcategory === activeBrand);
  if (activeCategory === "zapatillas" && activeType) list = list.filter(p => p.type === activeType);
  resultsLabel.textContent = activeCategory === "todos"
    ? "Todos los productos"
    : `${categoryNames[activeCategory]}${activeSubcategory ? " · " + activeSubcategory : ""}${activeBrand ? " · " + activeBrand : ""}${activeType ? " · " + activeType : ""}`;
  if (!list.length) {
    grid.innerHTML = `<div class="empty-category"><strong>Próximamente en ARSON</strong><p>Aún no hay productos en este filtro. Puedes añadirlos cuando tengas las fotos, precios y datos de tu proveedor.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(p => p.iphone ? renderIphoneCard(p) : `<article class="product-card" data-product-open="${p.id}" tabindex="0" aria-label="Abrir detalle de ${safeText(p.name)}"><div class="product-image"><span class="product-emoji" aria-hidden="true">${p.emoji}</span>${p.badge?`<span class="badge">${p.badge}</span>`:""}</div><div class="info"><span class="category">${p.label}${p.subcategory ? " · " + p.subcategory : ""}</span><h3 class="name">${p.name}</h3><div class="desc">${p.desc}</div><div class="product-bottom"><span class="price">${fmt(p.price)}</span><button class="add" data-add="${p.id}" aria-label="Añadir ${p.name}">+</button></div></div></article>`).join("");

}

/* Imágenes auténticas: solo aparecen archivos expresamente incorporados al manifiesto
   phone-media.js. No se generan ni se recolorean fotografías para simular un color real. */
const phoneViews = ["frontal", "posterior", "ambas"];
const mediaManifest = window.ARSON_PHONE_MEDIA || {};
function phoneSelection(p) {
  if (!phoneSelections.has(p.id)) phoneSelections.set(p.id,{capacity:p.capacities[0],color:p.id===1000?4:0,view:p.id===1000?"frontal":"posterior"});
  return phoneSelections.get(p.id);
}
function mediaRecord(p,selected) { return mediaManifest[`${p.id}|${p.colors[selected.color].name}`] || {}; }
function phoneImage(p,selected) { return mediaRecord(p,selected)[selected.view] || ""; }
function safeText(value) {return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function phoneMediaMarkup(p,selected,detail=false) {
  const c=p.colors[selected.color], record=mediaRecord(p,selected), src=record[selected.view];
  if(selected.view==="ambas" && !src) {
    return `<div class="real-photo-placeholder" role="status"><span class="photo-symbol" aria-hidden="true">◇</span><strong>Vista conjunta pendiente</strong><small>Se incorporará cuando tengamos la frontal y la trasera de este modelo y color.</small></div>`;
  }
  if(src) {
    const credit = record.credit;
    const creditText = credit ? `Foto: ${safeText(credit.author)} · ${safeText(credit.license)}` : '';
    const creditLink = credit ? `<a class="gallery-photo-credit" href="${safeText(credit.source)}" target="_blank" rel="noopener noreferrer" title="Abrir autoría y licencia de la fotografía">${creditText}</a>` : '';
    return `<img class="real-phone-photo" src="${safeText(src)}" alt="${record.kind==='user-reference'?'Imagen de referencia facilitada por el usuario':'Fotografía real de referencia'} de ${safeText(p.name)} en ${safeText(c.name)} · vista ${selected.view}; no muestra stock de ARSON" loading="${detail?'eager':'lazy'}" referrerpolicy="no-referrer" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="real-photo-placeholder" hidden><strong>Fotografía no disponible</strong><small>Requiere conexión a internet. Consulta fuente y licencia en la carpeta.</small></div>${creditLink}`;
  }
  return `<div class="real-photo-placeholder" role="status"><span class="photo-symbol" aria-hidden="true">◇</span><strong>Fotografía real pendiente</strong><small>${safeText(p.name)} · ${safeText(c.name)} · ${selected.view}</small></div>`;
}
function phonePriceLabel(p,capacity){
 const value=p.refPrices[capacity];
 return value ? `<span class="reference-price">${fmt(value)}</span><small class="reference-note">Referencia iShop Perú · No es precio de ARSON</small>` : `<span class="reference-price pending">Precio a cotizar</span><small class="reference-note">Sin precio ARSON confirmado</small>`;
}
function phoneSwatches(p,state,detail=false) {return p.colors.map((c,i)=>`<button type="button" class="phone-swatch ${state.color===i?'is-selected':''}" data-phone-color="${i}" style="--swatch:${c.hex}" title="${safeText(c.name)}" aria-label="Elegir color ${safeText(c.name)}" aria-pressed="${state.color===i}"><span></span></button>`).join('');}
function phoneCapacities(p,state) {return p.capacities.map(x=>`<button class="phone-cap ${state.capacity===x?'is-selected':''}" type="button" data-phone-storage="${safeText(x)}" aria-pressed="${state.capacity===x}">${safeText(x)}</button>`).join('');}
function phoneGalleryMarkup(p,state,detail=false){
 const n=phoneViews.indexOf(state.view);
 return `<div class="phone-gallery ${detail?'detail-gallery':''}" data-phone-gallery="${p.id}" aria-label="Galería manual de ${safeText(p.name)}">
  <div class="product-image phone-image phone-media" data-phone-media>${phoneMediaMarkup(p,state,detail)}</div>
  <button type="button" class="gallery-arrow gallery-prev" data-phone-prev aria-label="Vista anterior">‹</button>
  <button type="button" class="gallery-arrow gallery-next" data-phone-next aria-label="Vista siguiente">›</button>
  <div class="gallery-position" data-gallery-position>${n+1} / ${phoneViews.length}</div>
 </div>`;
}
function renderIphoneCard(p) {
 const state=phoneSelection(p);
 return `<article class="product-card iphone-card" data-phone-card="${p.id}" data-product-open="${p.id}" tabindex="0" aria-label="Abrir detalle de ${safeText(p.name)}">
 ${phoneGalleryMarkup(p,state)}
 <div class="info"><span class="category">TECNOLOGÍA · CELULARES</span><h3 class="name">${safeText(p.name)}</h3>
 <div class="phone-option-label">Capacidad</div><div class="phone-capacities" role="group" aria-label="Capacidad de ${safeText(p.name)}">${phoneCapacities(p,state)}</div>
 <div class="phone-option-label">Color: <b data-color-label>${safeText(p.colors[state.color].name)}</b></div><div class="phone-swatches" role="group" aria-label="Colores de ${safeText(p.name)}">${phoneSwatches(p,state)}</div>
 <div class="phone-selected-name" data-phone-name>${safeText(p.name)} · ${state.capacity}</div><div class="phone-price" data-phone-price>${phonePriceLabel(p,state.capacity)}</div>
 <div class="product-bottom"><small class="phone-availability">Pulsa el producto para ver detalles</small><button class="add phone-add" type="button" data-add="${p.id}" aria-label="Añadir ${safeText(p.name)} seleccionado al carrito">+</button></div>
 </div></article>`;
}
function updatePhoneCard(card,p) {
 const state=phoneSelection(p), c=p.colors[state.color];
 card.querySelector('[data-phone-media]').innerHTML=phoneMediaMarkup(p,state);
 card.querySelector('[data-gallery-position]').textContent=`${phoneViews.indexOf(state.view)+1} / ${phoneViews.length}`;
 card.querySelector('[data-color-label]').textContent=c.name;
 card.querySelector('[data-phone-name]').textContent=`${p.name} · ${state.capacity}`;
 card.querySelector('[data-phone-price]').innerHTML=phonePriceLabel(p,state.capacity);
 card.querySelectorAll('[data-phone-color]').forEach(b=>{let on=Number(b.dataset.phoneColor)===state.color;b.classList.toggle('is-selected',on);b.setAttribute('aria-pressed',String(on));});
 card.querySelectorAll('[data-phone-storage]').forEach(b=>{let on=b.dataset.phoneStorage===state.capacity;b.classList.toggle('is-selected',on);b.setAttribute('aria-pressed',String(on));});

}
function changePhoneView(p,delta){
 const state=phoneSelection(p);
 state.view=phoneViews[(phoneViews.indexOf(state.view)+delta+phoneViews.length)%phoneViews.length];
 refreshPhone(p);
}
function refreshPhone(p){
 document.querySelectorAll(`[data-phone-card="${p.id}"]`).forEach(card=>updatePhoneCard(card,p));
 if(activeDetailId===p.id) renderDetailContent(p);
}
function linePrice(p) { return p.price == null ? "Precio ARSON por confirmar" : fmt(p.price); }
function renderCart() {
  const count = cart.reduce((n,p) => n + p.qty, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("drawerCount").textContent = `(${count})`;
  const hasPending = cart.some(p=>p.price == null);
  document.getElementById("total").textContent = hasPending ? "Por confirmar" : fmt(cart.reduce((n,p) => n + p.qty*p.price, 0));
  const list = document.getElementById("cartList");
  list.innerHTML = cart.length ? cart.map(p => `<div class="cart-row"><div><strong>${p.name}</strong><small>${linePrice(p)} por unidad</small></div><div class="qty"><button data-minus="${p.key}" aria-label="Quitar uno">−</button><span>${p.qty}</span><button data-plus="${p.key}" aria-label="Añadir uno">+</button></div></div>`).join("") : `<p class="empty">Tu carrito está vacío por ahora.</p>`;
}
function openCart(){document.getElementById("drawer").classList.add("open");document.getElementById("drawer").setAttribute("aria-hidden","false")}
function closeCart(){document.getElementById("drawer").classList.remove("open");document.getElementById("drawer").setAttribute("aria-hidden","true")}

function addToCart(p,quantity=1) {
 const qty=Number(quantity);
 if(!Number.isSafeInteger(qty)||qty<1) {alert("Introduce una cantidad válida mayor que cero.");return;}
 let item;
 if (p.iphone) {
  const selected=phoneSelection(p);
  item={key:`phone-${p.id}-${p.capacities.indexOf(selected.capacity)}-${selected.color}`,
    name:`${p.name} · ${selected.capacity} · ${p.colors[selected.color].name}`,price:null};
 } else item={key:`prod-${p.id}`,name:p.name,price:p.price};
 const old=cart.find(x=>x.key===item.key);
 if(old){if(!Number.isSafeInteger(old.qty+qty)){alert("Cantidad demasiado grande.");return;}old.qty+=qty;}
 else cart.push({...item,qty});
 renderCart();closeDetail();openCart();
}
function phoneFromElement(el){const wrapper=el.closest('[data-phone-card],[data-phone-gallery]');return wrapper?products.find(p=>p.id===Number(wrapper.dataset.phoneCard||wrapper.dataset.phoneGallery)):null;}
function applyPhoneAction(btn,p){
 const state=phoneSelection(p);
 if(btn.hasAttribute('data-phone-color')){state.color=Number(btn.dataset.phoneColor);state.view=p.id===1000?'frontal':'posterior';refreshPhone(p);}
 else if(btn.hasAttribute('data-phone-storage')){state.capacity=btn.dataset.phoneStorage;refreshPhone(p);}
 else if(btn.hasAttribute('data-phone-view')){state.view=btn.dataset.phoneView;refreshPhone(p);}
 else if(btn.hasAttribute('data-phone-prev'))changePhoneView(p,-1);
 else if(btn.hasAttribute('data-phone-next'))changePhoneView(p,1);
}
grid.addEventListener("click", e=>{
 const action=e.target.closest('[data-phone-color],[data-phone-storage],[data-phone-prev],[data-phone-next],[data-add]');
 if(action){const p=action.hasAttribute('data-add')?products.find(x=>x.id===Number(action.dataset.add)):phoneFromElement(action);
 if(!p)return;
 if(action.hasAttribute('data-add'))addToCart(p);
 else applyPhoneAction(action,p);
 return;}
 const card=e.target.closest('[data-product-open]');if(card)openDetail(Number(card.dataset.productOpen));
});
grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ') && e.target.matches('[data-product-open]')){e.preventDefault();openDetail(Number(e.target.dataset.productOpen));}});
document.getElementById("cartList").addEventListener("click", e => {
  const plus = e.target.closest("[data-plus]"), minus = e.target.closest("[data-minus]");
  if (plus) {const p=cart.find(p=>p.key===plus.dataset.plus);if(p)p.qty++;}
  if (minus) {const p=cart.find(p=>p.key===minus.dataset.minus);if(p){p.qty--;if(p.qty<1)cart=cart.filter(x=>x.key!==p.key);}}
  renderCart();
});
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("shade").addEventListener("click", closeCart);
document.getElementById("orderBtn").addEventListener("click", () => {
  if (!cart.length) { alert("Primero añade un producto a tu carrito."); return; }
  if (!WHATSAPP_NUMBER) { alert("Falta configurar el WhatsApp en script.js."); return; }
  const lines = cart.map(p => `• ${p.name} x${p.qty}: ${p.price == null ? "precio por cotizar" : fmt(p.price*p.qty)}`).join("\n");
  const hasPending = cart.some(p=>p.price == null);
  const total = hasPending ? "Por confirmar" : fmt(cart.reduce((n,p)=>n+p.qty*p.price,0));
  const msg = `Hola ARSON. Quiero consultar este pedido:\n${lines}\nTotal referencial: ${total}\n¿Me confirman stock, precio final, condición (nuevo/reacondicionado), garantía, costo y plazo de envío, y forma de pago?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

document.querySelectorAll(".main-filters .filter").forEach(b => b.addEventListener("click", () => {
  activeCategory = b.dataset.filter;
  activeSubcategory = activeBrand = activeType = null;
  document.querySelectorAll(".main-filters .filter").forEach(x => x.classList.toggle("active", x === b));
  renderSubcategories();
  renderProducts();
  if(typeof updateFilterToggle === "function") updateFilterToggle();
}));
document.getElementById("menuBtn").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
document.getElementById("emailForm").addEventListener("submit", e => {e.preventDefault();document.getElementById("emailNote").textContent="¡Gracias! Conecta un servicio de correo para activar las suscripciones.";});
document.getElementById("year").textContent = new Date().getFullYear();
renderSubcategories();
renderProducts();
renderCart();


// Filtros plegables solo en pantallas pequeñas. En escritorio siguen visibles.
const filtersToggle=document.getElementById('filtersToggle'), filterArea=document.getElementById('filterArea');
let filtersExpanded=false;
function updateFilterToggle(){
 filtersToggle.setAttribute('aria-expanded',String(filtersExpanded));
 filterArea.classList.toggle('mobile-expanded',filtersExpanded);
 document.getElementById('filtersToggleState').textContent=`${categoryNames[activeCategory]}  ${filtersExpanded?'⌃':'⌄'}`;
}
filtersToggle.addEventListener('click',()=>{filtersExpanded=!filtersExpanded;updateFilterToggle();});
document.querySelectorAll('.main-filters .filter').forEach(b=>b.addEventListener('click',updateFilterToggle));
updateFilterToggle();

// Ficha de producto independiente del carrito, con cantidad manual y galería.
const detailModal=document.getElementById('productModal');
const detailContent=document.getElementById('detailContent');
let activeDetailId=null,lastFocused=null,detailQuantity=1;
function openDetail(id){
 const p=products.find(x=>x.id===id);if(!p)return;
 lastFocused=document.activeElement;activeDetailId=id;detailQuantity=1;
 renderDetailContent(p);detailModal.classList.add('open');detailModal.setAttribute('aria-hidden','false');
 document.body.classList.add('detail-open');detailModal.querySelector('.product-modal-close').focus();
}
function closeDetail(){
 if(!detailModal.classList.contains('open'))return;
 detailModal.classList.remove('open');detailModal.setAttribute('aria-hidden','true');
 document.body.classList.remove('detail-open');activeDetailId=null;detailContent.innerHTML='';
 if(lastFocused && lastFocused.isConnected) lastFocused.focus();
}
// ARSON preview, approved product layout: large visual + three manually selected views.
function iphone11PreviewGallery(p,state){
 const c=p.colors[state.color], record=mediaRecord(p,state);
 const labels=['Frontal','Trasera','Ambas juntas'];
 const src=record[state.view] || '';
 const shown=src
  ? `<img class="arson-reference-phone" src="${safeText(src)}" alt="iPhone 11 ${safeText(c.name)}: ${safeText(labels[phoneViews.indexOf(state.view)])}; imagen ilustrativa basada en material de referencia" loading="eager" draggable="false">`
  : `<div class="arson-preview-unavailable"><strong>Imagen pendiente</strong><span>No se ha incorporado esta variante.</span></div>`;
 const thumbnails=phoneViews.map((view,i)=>{
  const selected=state.view===view;
  const thumb=record[view]?`<img src="${safeText(record[view])}" alt="" loading="lazy">`:'<span class="arson-empty-thumb">◇</span>';
  return `<button type="button" data-phone-view="${view}" class="arson-thumb ${selected?'active':''}" aria-pressed="${selected}" aria-label="Ver ${labels[i]}"><span class="arson-thumb-media">${thumb}</span><span class="arson-thumb-label">${labels[i]}</span></button>`;
 }).join('');
 return `<div class="arson-product-gallery phone-gallery" data-phone-gallery="${p.id}" aria-label="Tres fotografías del iPhone 11 ${safeText(c.name)}">
  <div class="arson-feature-stage" data-phone-media>${shown}</div>
  <button type="button" class="gallery-arrow gallery-prev" data-phone-prev aria-label="Vista anterior">‹</button>
  <button type="button" class="gallery-arrow gallery-next" data-phone-next aria-label="Vista siguiente">›</button>
  <div class="arson-thumbnails" aria-label="Seleccionar vista del iPhone">${thumbnails}</div>
  <p class="arson-preview-caption">Imágenes ilustrativas de referencia. Comprueba el acabado y el estado del producto con ARSON antes de comprar.</p>
 </div>`;
}
function renderDetailContent(p){
 const qty=`<div class="detail-quantity"><label for="detailQty">Cantidad</label><div class="detail-qty-controls"><button type="button" data-detail-minus aria-label="Restar unidad">−</button><input id="detailQty" type="number" min="1" step="1" inputmode="numeric" value="${detailQuantity}" aria-label="Cantidad de unidades"><button type="button" data-detail-plus aria-label="Sumar unidad">+</button></div></div>`;
 if(p.iphone){
  const state=phoneSelection(p);
  detailContent.innerHTML=`<div class="detail-layout"><div class="detail-visual">${p.id===1000?iphone11PreviewGallery(p,state):phoneGalleryMarkup(p,state,true)}<div class="detail-gallery-note">Usa las flechas o las miniaturas. La galería no avanza sola.</div></div>
   <div class="detail-info"><p class="eyebrow">TECNOLOGÍA / CELULARES</p><h2 id="detailTitle">${safeText(p.name)}</h2><p class="detail-summary">Selecciona el acabado, almacenamiento y cantidad. Confirma existencias y condiciones antes de comprar.</p>
   <div class="detail-option-title">Color: <strong>${safeText(p.colors[state.color].name)}</strong></div><div class="phone-swatches detail-swatches" role="group" aria-label="Colores">${phoneSwatches(p,state,true)}</div>
   <div class="detail-option-title">Almacenamiento</div><div class="phone-capacities detail-capacities" role="group" aria-label="Almacenamiento">${phoneCapacities(p,state)}</div>
   <div class="detail-price">${phonePriceLabel(p,state.capacity)}</div>${qty}<button class="btn light wide detail-buy" data-detail-add type="button">Añadir ${safeText(p.name)} al carrito ↗</button>
   <p class="detail-disclaimer">El precio final, disponibilidad, condición del equipo, garantía y envío se confirman por WhatsApp. Las imágenes de referencia no acreditan inventario ni procedencia oficial.</p></div></div>`;
 } else {
 detailContent.innerHTML=`<div class="detail-layout"><div class="detail-demo-photo"><span aria-hidden="true">${p.emoji||'◇'}</span><small>Producto de demostración · fotografía pendiente</small></div>
 <div class="detail-info"><p class="eyebrow">${safeText(p.label)}</p><h2 id="detailTitle">${safeText(p.name)}</h2><p class="detail-summary">${safeText(p.desc||'Consulta condiciones de entrega y disponibilidad.')}</p>
 <div class="detail-price">${fmt(p.price)} <small>Precio ilustrativo, por confirmar</small></div>${qty}<button class="btn light wide detail-buy" data-detail-add type="button">Añadir al carrito ↗</button>
 <p class="detail-disclaimer">Producto de demostración: confirma precio, foto real y stock antes de venderlo.</p></div></div>`;
 }

}
function currentDetailQty(){const field=document.getElementById('detailQty');const n=Number(field.value);if(!Number.isSafeInteger(n)||n<1){field.setCustomValidity('Introduce una cantidad entera mayor que cero.');field.reportValidity();return null;}field.setCustomValidity('');detailQuantity=n;return n;}
detailModal.addEventListener('click',e=>{
 if(e.target.closest('[data-close-detail]')){closeDetail();return;}
 if(!activeDetailId)return;const p=products.find(x=>x.id===activeDetailId);
 const action=e.target.closest('[data-phone-color],[data-phone-storage],[data-phone-view],[data-phone-prev],[data-phone-next]');
 if(action){const v=currentDetailQty();if(v!==null)applyPhoneAction(action,p);return;}
 if(e.target.closest('[data-detail-minus]')){detailQuantity=Math.max(1,(currentDetailQty()||1)-1);document.getElementById('detailQty').value=detailQuantity;}
 if(e.target.closest('[data-detail-plus]')){const n=currentDetailQty();if(n!==null&&Number.isSafeInteger(n+1)){detailQuantity=n+1;document.getElementById('detailQty').value=detailQuantity;}}
 if(e.target.closest('[data-detail-add]')){const n=currentDetailQty();if(n!==null)addToCart(p,n);}
});
detailContent.addEventListener('input',e=>{if(e.target.id==='detailQty'){const v=Number(e.target.value);if(Number.isSafeInteger(v)&&v>=1)detailQuantity=v;e.target.setCustomValidity('');}});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape' && activeDetailId!==null){closeDetail();return;}
 if(activeDetailId!==null && e.key==='Tab'){
  const nodes=[...detailModal.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href]')].filter(x=>x.getClientRects().length);
  if(!nodes.length)return;const first=nodes[0],last=nodes.at(-1);
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
// Gestos horizontales en las fotografías (sin avance automático ni afectar scroll vertical).
let touchStart=null;
document.addEventListener('touchstart',e=>{const gallery=e.target.closest('[data-phone-gallery]');if(!gallery || e.target.closest('button'))return;touchStart={id:Number(gallery.dataset.phoneGallery),x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
document.addEventListener('touchend',e=>{if(!touchStart)return;const start=touchStart;touchStart=null;const end=e.changedTouches[0];const dx=end.clientX-start.x,dy=end.clientY-start.y;if(Math.abs(dx)>42 && Math.abs(dx)>Math.abs(dy)*1.2){const p=products.find(x=>x.id===start.id);if(p)changePhoneView(p,dx<0?1:-1);}}, {passive:true});
// Carrusel principal: cambia cada 5 segundos y permite seleccionar cualquier imagen.
(function initHeroCarousel(){
  const carousel = document.getElementById("heroCarousel");
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
  const previous = document.getElementById("carouselPrev");
  const next = document.getElementById("carouselNext");
  if (!slides.length || slides.length !== dots.length) return;
  let current = 0;
  const intervalMs = 5000;
  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      dots[i].classList.toggle("is-active", active);
      if (active) dots[i].setAttribute("aria-current", "true");
      else dots[i].removeAttribute("aria-current");
    });
  }
  dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));
  previous.addEventListener("click", () => showSlide(current - 1));
  next.addEventListener("click", () => showSlide(current + 1));
  // La selección manual no detiene el avance automático.
  window.setInterval(() => showSlide(current + 1), intervalMs);
  carousel.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") { event.preventDefault(); showSlide(current - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); showSlide(current + 1); }
  });
  showSlide(0);
})();

// Direct preview route, used by the included PREVIA.html shortcut.
if (location.hash === '#vista-iphone-11') {
  openDetail(1000);
  window.addEventListener('hashchange',()=>{if(location.hash==='#vista-iphone-11')openDetail(1000);});
}
