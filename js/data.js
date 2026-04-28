/* ===== TOATE PRODUSELE ===== */
const PRODUCTS = [
  /* ---- WINDOWS ---- */
  {
    slug: 'windows-11-pro',
    title: 'Windows 11 Pro',
    type: 'windows',
    version: 'Windows 11',
    edition: 'Pro',
    price: 149,
    compare: 299,
    sku: 'WIN11PRO-RETAIL-1PC',
    emoji: '🪟',
    badge: 'Popular',
    available: true,
    description: `<p><strong>Windows 11 Pro</strong> este cel mai avansat sistem de operare Microsoft, conceput pentru utilizatori exigenți care au nevoie de performanță, securitate și productivitate maximă. Licența <strong>Retail transferabilă</strong> îți permite să activezi Windows 11 Pro pe orice PC compatibil.</p>
    <h3>🔒 Securitate Enterprise</h3><ul><li>BitLocker – criptare completă disc</li><li>Windows Hello – autentificare biometrică</li><li>Secure Boot + TPM 2.0</li><li>Microsoft Defender inclus</li></ul>
    <h3>💼 Funcții exclusive Pro</h3><ul><li>Remote Desktop</li><li>Hyper-V (mașini virtuale)</li><li>Windows Sandbox</li><li>Azure Active Directory</li><li>Group Policy</li></ul>`,
    specs: { 'Procesor': '1 GHz, 64-bit dual-core', 'RAM': '4 GB (8 GB recomandat)', 'Stocare': '64 GB', 'TPM': '2.0 obligatoriu', 'Firmware': 'UEFI + Secure Boot', 'Grafică': 'DirectX 12, WDDM 2.0' },
    tags: ['windows-11', 'pro', 'retail', '1-pc']
  },
  {
    slug: 'windows-11-home',
    title: 'Windows 11 Home',
    type: 'windows',
    version: 'Windows 11',
    edition: 'Home',
    price: 119,
    compare: 239,
    sku: 'WIN11HOME-RETAIL-1PC',
    emoji: '🪟',
    badge: null,
    available: true,
    description: `<p><strong>Windows 11 Home</strong> aduce cel mai modern sistem de operare Microsoft direct pe PC-ul tău. Interfață nouă, performanță îmbunătățită și securitate avansată.</p><ul><li>Snap Layouts pentru multitasking</li><li>Microsoft Teams integrat</li><li>DirectStorage pentru jocuri rapide</li><li>Auto HDR pentru ecrane compatibile</li></ul>`,
    specs: { 'Procesor': '1 GHz, 64-bit dual-core', 'RAM': '4 GB (8 GB recomandat)', 'Stocare': '64 GB', 'TPM': '2.0 obligatoriu', 'Firmware': 'UEFI + Secure Boot', 'Grafică': 'DirectX 12, WDDM 2.0' },
    tags: ['windows-11', 'home', 'retail', '1-pc']
  },
  {
    slug: 'windows-10-pro',
    title: 'Windows 10 Pro',
    type: 'windows',
    version: 'Windows 10',
    edition: 'Pro',
    price: 99,
    compare: 199,
    sku: 'WIN10PRO-RETAIL-1PC',
    emoji: '🪟',
    badge: 'Bestseller',
    available: true,
    description: `<p><strong>Windows 10 Pro</strong> rămâne cel mai stabil și mai folosit sistem de operare Microsoft. Ideal pentru birouri, freelanceri și utilizatori care nu doresc să migreze la Windows 11 încă.</p><ul><li>BitLocker și EFS inclus</li><li>Remote Desktop</li><li>Hyper-V</li><li>Suport până în octombrie 2025</li></ul>`,
    specs: { 'Procesor': '1 GHz, 64-bit', 'RAM': '2 GB (4 GB recomandat)', 'Stocare': '32 GB', 'TPM': 'Recomandat', 'Firmware': 'UEFI sau BIOS', 'Grafică': 'DirectX 9, WDDM 1.0' },
    tags: ['windows-10', 'pro', 'retail', '1-pc']
  },
  {
    slug: 'windows-10-home',
    title: 'Windows 10 Home',
    type: 'windows',
    version: 'Windows 10',
    edition: 'Home',
    price: 79,
    compare: 159,
    sku: 'WIN10HOME-RETAIL-1PC',
    emoji: '🪟',
    badge: null,
    available: true,
    description: `<p><strong>Windows 10 Home</strong> este soluția perfectă pentru utilizatorii casnici care caută un sistem de operare stabil și familiar, la cel mai bun preț.</p><ul><li>Microsoft Edge browser modern</li><li>Cortana asistent virtual</li><li>Windows Hello</li><li>Actualizări automate de securitate</li></ul>`,
    specs: { 'Procesor': '1 GHz, 64-bit', 'RAM': '2 GB (4 GB recomandat)', 'Stocare': '32 GB', 'TPM': 'Recomandat', 'Firmware': 'UEFI sau BIOS', 'Grafică': 'DirectX 9, WDDM 1.0' },
    tags: ['windows-10', 'home', 'retail', '1-pc']
  },
  {
    slug: 'windows-server-2022',
    title: 'Windows Server 2022 Standard',
    type: 'windows',
    version: 'Windows Server',
    edition: 'Standard',
    price: 899,
    compare: 1799,
    sku: 'WINSRV2022-RETAIL',
    emoji: '🖥️',
    badge: 'Enterprise',
    available: true,
    description: `<p><strong>Windows Server 2022 Standard</strong> oferă platforma ideală pentru infrastructura de business modernă. Securitate avansată, performanță cloud-optimizată și management simplificat.</p><ul><li>Secured-core server</li><li>Azure Arc integration</li><li>Hyper-V virtualizare</li><li>Storage Spaces Direct</li></ul>`,
    specs: { 'Procesor': '1.4 GHz, 64-bit', 'RAM': '512 MB (2 GB recomandat)', 'Stocare': '32 GB', 'Rețea': 'Gigabit Ethernet', 'VM': '2 mașini virtuale incluse' },
    tags: ['windows-server', 'server', '2022', 'retail']
  },
  {
    slug: 'windows-server-2019',
    title: 'Windows Server 2019 Standard',
    type: 'windows',
    version: 'Windows Server',
    edition: 'Standard',
    price: 649,
    compare: 1299,
    sku: 'WINSRV2019-RETAIL',
    emoji: '🖥️',
    badge: null,
    available: true,
    description: `<p><strong>Windows Server 2019 Standard</strong> — platformă server stabilă și maturizată, ideală pentru organizații care nu sunt pregătite pentru migrarea la Server 2022.</p><ul><li>Windows Defender Advanced Threat Protection</li><li>Storage Migration Service</li><li>System Insights</li><li>2 VM-uri incluse</li></ul>`,
    specs: { 'Procesor': '1.4 GHz, 64-bit', 'RAM': '512 MB (2 GB recomandat)', 'Stocare': '32 GB', 'Rețea': 'Gigabit Ethernet', 'VM': '2 mașini virtuale incluse' },
    tags: ['windows-server', 'server', '2019', 'retail']
  },
  {
    slug: 'windows-11-enterprise',
    title: 'Windows 11 Enterprise',
    type: 'windows',
    version: 'Windows 11',
    edition: 'Enterprise',
    price: 349,
    compare: 699,
    sku: 'WIN11ENT-RETAIL-1PC',
    emoji: '🏢',
    badge: 'Business',
    available: true,
    description: `<p><strong>Windows 11 Enterprise</strong> este conceput pentru organizații mari care necesită cele mai avansate funcții de securitate, management și productivitate.</p><ul><li>Microsoft Defender for Endpoint</li><li>DirectAccess VPN</li><li>AppLocker</li><li>Windows To Go</li><li>BranchCache</li></ul>`,
    specs: { 'Procesor': '1 GHz, 64-bit dual-core', 'RAM': '4 GB (8 GB recomandat)', 'Stocare': '64 GB', 'TPM': '2.0 obligatoriu', 'Firmware': 'UEFI + Secure Boot' },
    tags: ['windows-11', 'enterprise', 'retail', '1-pc']
  },
  {
    slug: 'windows-10-enterprise',
    title: 'Windows 10 Enterprise',
    type: 'windows',
    version: 'Windows 10',
    edition: 'Enterprise',
    price: 249,
    compare: 499,
    sku: 'WIN10ENT-RETAIL-1PC',
    emoji: '🏢',
    badge: null,
    available: true,
    description: `<p><strong>Windows 10 Enterprise</strong> oferă toate funcțiile Pro plus instrumente avansate de management pentru medii corporate cu cerințe stricte de securitate.</p><ul><li>Credential Guard</li><li>Device Guard</li><li>AppLocker</li><li>DirectAccess</li><li>Windows To Go</li></ul>`,
    specs: { 'Procesor': '1 GHz, 64-bit', 'RAM': '2 GB (4 GB recomandat)', 'Stocare': '32 GB', 'Firmware': 'UEFI sau BIOS' },
    tags: ['windows-10', 'enterprise', 'retail', '1-pc']
  },

  /* ---- OFFICE ---- */
  {
    slug: 'office-2021-pro',
    title: 'Office 2021 Professional Plus',
    type: 'office',
    version: 'Office 2021',
    edition: 'Professional Plus',
    price: 249,
    compare: 499,
    sku: 'OFF2021PRO-RETAIL-1PC',
    emoji: '📋',
    badge: 'Complet',
    available: true,
    description: `<p><strong>Office 2021 Professional Plus</strong> include toate aplicațiile Microsoft Office într-o licență permanentă, fără abonament. Cea mai completă suită Office disponibilă.</p><ul><li>Word, Excel, PowerPoint</li><li>Outlook, OneNote</li><li>Access, Publisher</li><li>Teams inclus</li><li>Licență permanentă – plătești o singură dată</li></ul>`,
    specs: { 'Aplicații': 'Word, Excel, PP, Outlook, Access, Publisher', 'Licență': 'Permanentă (fără abonament)', 'PC-uri': '1 PC', 'Actualizări': 'Securitate pe viață' },
    tags: ['office-2021', 'professional', 'retail', '1-pc']
  },
  {
    slug: 'office-2021-home',
    title: 'Office 2021 Home & Student',
    type: 'office',
    version: 'Office 2021',
    edition: 'Home & Student',
    price: 169,
    compare: 339,
    sku: 'OFF2021HS-RETAIL-1PC',
    emoji: '📚',
    badge: 'Popular',
    available: true,
    description: `<p><strong>Office 2021 Home & Student</strong> conține esențialul pentru studiu și uz casnic. Aplicațiile clasice Microsoft Office cu licență permanentă, fără costuri lunare.</p><ul><li>Word – documente profesionale</li><li>Excel – foi de calcul avansate</li><li>PowerPoint – prezentări dinamice</li><li>OneNote – notițe organizate</li></ul>`,
    specs: { 'Aplicații': 'Word, Excel, PowerPoint, OneNote', 'Licență': 'Permanentă', 'PC-uri': '1 PC', 'Actualizări': 'Securitate pe viață' },
    tags: ['office-2021', 'home', 'student', 'retail', '1-pc']
  },
  {
    slug: 'office-2019-home-business',
    title: 'Office 2019 Home & Business',
    type: 'office',
    version: 'Office 2019',
    edition: 'Home & Business',
    price: 199,
    compare: 399,
    sku: 'OFF2019HB-RETAIL-1PC',
    emoji: '💼',
    badge: null,
    available: true,
    description: `<p><strong>Office 2019 Home & Business</strong> combină aplicațiile esențiale cu Outlook pentru email profesional. Ideal pentru freelanceri și proprietari de mici afaceri.</p><ul><li>Word, Excel, PowerPoint</li><li>Outlook pentru email și calendar</li><li>OneNote pentru notițe</li><li>Licență permanentă</li></ul>`,
    specs: { 'Aplicații': 'Word, Excel, PowerPoint, Outlook, OneNote', 'Licență': 'Permanentă', 'PC-uri': '1 PC', 'Actualizări': 'Securitate pe viață' },
    tags: ['office-2019', 'home', 'business', 'retail', '1-pc']
  },
  {
    slug: 'microsoft-365-personal',
    title: 'Microsoft 365 Personal',
    type: 'office',
    version: 'Microsoft 365',
    edition: 'Personal',
    price: 159,
    compare: 319,
    sku: 'M365PERS-1AN-1PC',
    emoji: '☁️',
    badge: 'Nou',
    available: true,
    description: `<p><strong>Microsoft 365 Personal</strong> oferă cele mai noi versiuni ale aplicațiilor Office plus 1TB OneDrive cloud. Mereu actualizat, mereu modern.</p><ul><li>Word, Excel, PowerPoint, Outlook</li><li>1 TB OneDrive storage</li><li>Microsoft Teams inclus</li><li>Actualizări automate perpetue</li><li>Valabil 12 luni / 1 utilizator</li></ul>`,
    specs: { 'Aplicații': 'Word, Excel, PP, Outlook, Teams', 'Cloud': '1 TB OneDrive', 'Valabilitate': '12 luni', 'Utilizatori': '1', 'Dispozitive': 'PC, Mac, telefon, tabletă' },
    tags: ['microsoft-365', '365', 'personal', 'abonament', '1-an']
  },
  {
    slug: 'microsoft-365-family',
    title: 'Microsoft 365 Family',
    type: 'office',
    version: 'Microsoft 365',
    edition: 'Family',
    price: 239,
    compare: 479,
    sku: 'M365FAM-1AN-6PC',
    emoji: '👨‍👩‍👧‍👦',
    badge: 'Best Value',
    available: true,
    description: `<p><strong>Microsoft 365 Family</strong> este cea mai avantajoasă opțiune pentru familii. Până la 6 utilizatori, fiecare cu 1TB OneDrive propriu.</p><ul><li>Word, Excel, PowerPoint, Outlook</li><li>6 TB OneDrive (1TB per utilizator)</li><li>Până la 6 utilizatori</li><li>Acces pe toate dispozitivele</li><li>Valabil 12 luni</li></ul>`,
    specs: { 'Aplicații': 'Word, Excel, PP, Outlook, Teams', 'Cloud': '6 TB OneDrive (6×1TB)', 'Valabilitate': '12 luni', 'Utilizatori': '6', 'Dispozitive': 'PC, Mac, telefon, tabletă' },
    tags: ['microsoft-365', '365', 'family', 'abonament', '1-an', '6-utilizatori']
  }
];

const COLLECTIONS = {
  windows: {
    slug: 'windows',
    title: 'Windows',
    description: 'Licențe originale Microsoft Windows pentru PC. Retail transferabile, livrare prin curier 24/48h.',
    emoji: '🪟',
    products: PRODUCTS.filter(p => p.type === 'windows')
  },
  office: {
    slug: 'office',
    title: 'Microsoft Office',
    description: 'Suite Office originale Microsoft — licențe permanente și abonamente 365 la prețuri imbatabile.',
    emoji: '📋',
    products: PRODUCTS.filter(p => p.type === 'office')
  }
};

function getProduct(slug) { return PRODUCTS.find(p => p.slug === slug); }
function getCollection(slug) { return COLLECTIONS[slug]; }
function formatPrice(n) { return n.toLocaleString('ro-RO') + ' Lei'; }
function savings(p) { return Math.round((1 - p.price / p.compare) * 100); }
