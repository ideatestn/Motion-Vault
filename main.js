/* =====================================================================
   IDEATEST - main.js
   Semua data konten ada di bagian atas file ini. Edit di sini saja.
   ===================================================================== */

// ===== UBAH/TAMBAH BANK MOSI DI SINI =====
// Kategori yang dipakai: Ekonomi | Politik/HI | Sosial-Budaya | Hukum/HAM | Teknologi/Lingkungan
// Tingkat: Dasar | Menengah | Lanjut. "id" harus unik dan sama dengan kunci di MOTION_ANALYSIS_DATA.
const MOTIONS_DATA = [
  { id: 1, cat: 'Ekonomi', lvl: 'Dasar', text: 'Dewan ini akan menerapkan pajak khusus bagi kekayaan di atas Rp100 miliar.' },
  { id: 2, cat: 'Ekonomi', lvl: 'Menengah', text: 'Dewan ini menyesalkan semakin banyaknya anak muda yang menjadikan pekerjaan gig (ojek daring, freelance) sebagai karier utama.' },
  { id: 3, cat: 'Politik/HI', lvl: 'Menengah', text: 'Dewan ini akan menurunkan usia minimum hak pilih menjadi 16 tahun.' },
  { id: 4, cat: 'Politik/HI', lvl: 'Lanjut', text: 'Dewan ini percaya bahwa negara berkembang harus memprioritaskan hilirisasi industri daripada ekspor bahan mentah.' },
  { id: 5, cat: 'Sosial-Budaya', lvl: 'Dasar', text: 'Dewan ini akan melarang penggunaan ponsel pribadi selama jam sekolah.' },
  { id: 6, cat: 'Sosial-Budaya', lvl: 'Menengah', text: 'Dewan ini menyesalkan budaya hustle yang mengagungkan kesibukan berlebih pada remaja.' },
  { id: 7, cat: 'Hukum/HAM', lvl: 'Lanjut', text: 'Dewan ini akan menghapus hukuman mati untuk kasus narkotika.' },
  { id: 8, cat: 'Teknologi/Lingkungan', lvl: 'Menengah', text: 'Dewan ini akan melarang penjualan kendaraan berbahan bakar bensin mulai tahun 2035.' },
  { id: 9, cat: 'Teknologi/Lingkungan', lvl: 'Dasar', text: 'Dewan ini akan mewajibkan sekolah menyediakan AI sebagai alat bantu belajar resmi.' },
];

// ===== UBAH BEDAH MOSI DI SINI =====
// Kunci = id mosi. bg: status quo & background, aff: stance afirmasi, opp: stance oposisi, clash: daftar titik clash.
const MOTION_ANALYSIS_DATA = {
  1: { bg: 'Indonesia memiliki kesenjangan kekayaan yang tinggi, sementara penerimaan pajak terhadap PDB relatif rendah dan pajak kekayaan belum ada.', aff: 'Pajak ini mengurangi ketimpangan dan memberi dana untuk layanan publik seperti kesehatan dan pendidikan.', opp: 'Orang kaya bisa memindahkan aset ke luar negeri, investasi turun, dan penerimaan yang didapat tidak sebanding dengan biaya penegakan.', clash: ['Apakah modal akan lari ke luar negeri?', 'Apakah hasil pajak benar-benar sampai ke masyarakat miskin?'] },
  2: { bg: 'Platform digital membuka banyak pekerjaan fleksibel, tetapi pekerjanya umumnya berstatus mitra tanpa jaminan sosial dan upah tetap.', aff: 'Pekerjaan gig membuat anak muda tidak membangun keahlian jangka panjang dan tidak punya perlindungan kerja.', opp: 'Gig memberi akses penghasilan bagi yang kesulitan masuk sektor formal, dan fleksibilitasnya memungkinkan mereka tetap sekolah atau berwirausaha.', clash: ['Fleksibilitas atau kerentanan?', 'Apakah sektor formal tersedia sebagai alternatif?'] },
  3: { bg: 'Usia minimum memilih di Indonesia saat ini 17 tahun atau sudah menikah. Beberapa negara seperti Brasil dan Austria sudah memakai 16 tahun.', aff: 'Remaja 16 tahun menanggung dampak kebijakan pendidikan dan lingkungan, sehingga layak punya suara. Memilih sejak dini juga membentuk kebiasaan berpartisipasi.', opp: 'Remaja 16 tahun rentan dipengaruhi pihak lain dan belum matang secara hukum, karena belum bisa memiliki KTP pada usia tersebut di banyak kasus.', clash: ['Kematangan berpikir politik', 'Siapa yang diuntungkan secara elektoral?'] },
  4: { bg: 'Indonesia melarang ekspor nikel mentah sejak 2020 untuk mendorong pengolahan di dalam negeri, dan kebijakan ini sempat digugat di WTO.', aff: 'Hilirisasi menambah nilai ekonomi, membuka lapangan kerja, dan mengurangi ketergantungan pada fluktuasi harga komoditas.', opp: 'Hilirisasi butuh modal dan teknologi besar, merusak lingkungan, dan bisa memicu sengketa dagang serta mengurangi pendapatan jangka pendek.', clash: ['Nilai tambah atau beban biaya?', 'Dampak lingkungan dan sosial di daerah tambang'] },
  5: { bg: 'Kebijakan ponsel di sekolah berbeda-beda. Beberapa sekolah mengizinkan, sebagian membatasi, dan belum ada aturan nasional yang seragam.', aff: 'Tanpa ponsel, fokus belajar meningkat, perundungan daring menurun, dan interaksi langsung antar siswa bertambah.', opp: 'Ponsel adalah alat belajar dan alat komunikasi darurat, dan pelarangan total mendorong siswa menyembunyikannya.', clash: ['Gangguan atau alat belajar?', 'Apakah aturan bisa ditegakkan?'] },
  6: { bg: 'Media sosial menampilkan citra produktivitas ekstrem. Remaja dituntut aktif di akademik, organisasi, lomba, dan kursus sekaligus.', aff: 'Budaya ini memicu burnout dan kecemasan, dan membuat istirahat dianggap kemalasan.', opp: 'Ambisi mendorong prestasi dan membuka peluang kuliah serta karier, dan tidak semua kesibukan dipaksakan.', clash: ['Ambisi sehat atau tekanan sosial?', 'Siapa yang memegang kendali atas pilihan remaja?'] },
  7: { bg: 'Indonesia masih menerapkan hukuman mati untuk kasus narkotika, dan eksekusi terhadap terpidana dalam dan luar negeri sering memicu perdebatan HAM.', aff: 'Hak hidup tidak bisa dicabut, tidak ada bukti kuat bahwa hukuman mati menjerakan, dan kesalahan peradilan tidak bisa dikoreksi.', opp: 'Narkotika merusak banyak nyawa dan hukuman maksimal diperlukan sebagai efek jera bagi bandar besar.', clash: ['Efek jera: terbukti atau tidak?', 'Hak hidup vs perlindungan masyarakat'] },
  8: { bg: 'Pemerintah mendorong kendaraan listrik lewat insentif, tetapi sebagian besar kendaraan di jalan masih berbahan bakar bensin, dan listrik nasional masih banyak dari batu bara.', aff: 'Larangan memberi kepastian bagi industri, mengurangi emisi dan polusi udara kota, serta menurunkan impor BBM.', opp: 'Infrastruktur pengisian belum merata, harga kendaraan listrik masih mahal, dan emisi hanya berpindah ke pembangkit listrik.', clash: ['Kesiapan infrastruktur dan harga', 'Emisi total: hilang atau berpindah?'] },
  9: { bg: 'Siswa sudah memakai AI generatif untuk tugas, sementara sekolah belum punya panduan resmi, dan akses ke teknologi berbeda antar sekolah.', aff: 'Penggunaan resmi mengajarkan literasi AI, memberi belajar personal, dan menyamakan akses antar siswa.', opp: 'AI mengurangi kemampuan berpikir mandiri, mempermudah kecurangan, dan meningkatkan beban sekolah yang belum siap secara teknis.', clash: ['Alat bantu atau pengganti berpikir?', 'Kesiapan guru dan infrastruktur sekolah'] },
};

// ===== UBAH FOTO/VIDEO GALERI DI SINI =====
// type: 'foto' | 'video'. src: path gambar (mis. 'img/latihan1.jpg'), file video (.mp4), atau link embed YouTube. Kosongkan untuk tampilan "NO DATA".
// Data di bawah hanya contoh. Ganti title, date, dan src dengan dokumentasi asli.
const GALLERY_DATA = [
  { type: 'foto', src: '', title: 'Latihan Rutin LDBI', date: '2026-08-14' },
  { type: 'foto', src: '', title: 'Simulasi Debat Asian Parliamentary', date: '2026-08-28' },
  { type: 'video', src: '', title: 'Cuplikan Final Debat Internal', date: '2026-09-11' },
  { type: 'foto', src: '', title: 'Sesi Materi NSDC', date: '2026-09-18' },
  { type: 'foto', src: '', title: 'Persiapan Perlombaan Antar Sekolah', date: '2026-10-02' },
  { type: 'video', src: '', title: 'Dokumentasi Pelantikan Pengurus', date: '2026-10-09' },
];

// ===== UBAH STRUKTUR PENGURUS DI SINI =====
// n: nama, k: kelas, r: jabatan. Tambah anggota dengan menambah baris di array members.
const COMMITTEE_DATA = [
  { group: 'Pengurus Inti', subs: [{ name: '', members: [
    { n: 'Mohamad Azriel Hermawansyah', k: 'XI-B', r: 'Ketua' },
    { n: 'Laysa Ilarobani', k: 'XI-C', r: 'Sekretaris' },
    { n: 'Resi Aryani', k: 'XI-D', r: 'Bendahara' } ] }] },
  { group: 'Divisi Diklat (Pendidikan & Pelatihan)', subs: [
    { name: 'Sub-Divisi LDBI', members: [
      { n: 'Raya Zahida', k: 'XI-A', r: 'Koordinator' },
      { n: 'Farsya Nirvana', k: 'XI-E', r: 'Anggota' },
      { n: 'Maira Alma Syahira', k: 'XI-A', r: 'Anggota' },
      { n: 'Refan Natansyah Ramadan', k: 'XI-E', r: 'Anggota' },
      { n: 'Ryanwar Khaizan', k: 'XI-F', r: 'Anggota' } ] },
    { name: 'Sub-Divisi NSDC', members: [
      { n: 'Diva Carissa Zahira', k: 'XI-C', r: 'Koordinator' },
      { n: 'Aegea Galena Yudoyono', k: 'XI-E', r: 'Anggota' } ] } ] },
  { group: 'Divisi Perlombaan', subs: [{ name: '', members: [
    { n: 'Nabila Armita Rusdi', k: 'XI-C', r: 'Koordinator' },
    { n: 'Naufal Rizki Angkasa', k: 'XI-D', r: 'Anggota' },
    { n: 'Gerald Mora Chrisfan Doli', k: 'XI-D', r: 'Anggota' },
    { n: 'Karina Dwi Aulia', k: 'XI-D', r: 'Anggota' } ] }] },
  { group: 'Divisi PDD (Publikasi, Dekorasi, & Dokumentasi)', subs: [{ name: '', members: [
    { n: 'Tsamara Ufairah Azka', k: 'XI-F', r: 'Koordinator' },
    { n: 'Nadia Humaira Alatas', k: 'XI-B', r: 'Anggota' },
    { n: 'Rasyid Surya Pratama Ramadhan', k: 'XI-F', r: 'Anggota' },
    { n: 'Farras Abiyyu Hanif', k: 'XI-E', r: 'Anggota' } ] }] },
];

// ===== UBAH LINK SOSIAL MEDIA & KONTAK DI SINI =====
const SOCIALS = [
  ['Instagram', 'https://www.instagram.com/ideatest62?exln=MWd2bDFucTEzenFkdw=='],
  ['YouTube: IDEATEST 62', 'https://www.youtube.com/'], // ganti dengan URL channel resmi
  ['WhatsApp Admin 1: +62 838-9424-8075', 'https://wa.me/6283894248075'],
  ['WhatsApp Admin 2: +62 812-1005-4796', 'https://wa.me/6281210054796'],
];

// ===== Konten edukasi & beranda =====
const AREL_DATA = [
  { l: 'A', t: 'Assertion', d: 'Pernyataan klaim utama.', x: 'Kalimat singkat yang langsung menjawab mosi. Contoh: "Larangan ponsel meningkatkan fokus belajar siswa."' },
  { l: 'R', t: 'Reason', d: 'Alasan logis mengapa klaim benar.', x: 'Jelaskan mekanisme sebab-akibat. Contoh: "Tanpa notifikasi, perhatian siswa tidak terpecah saat guru menjelaskan."' },
  { l: 'E', t: 'Evidence', d: 'Bukti, data riset, dan contoh konkret.', x: 'Pakai data, studi, atau kasus nyata. Contoh: sekolah yang menerapkan larangan ponsel dan hasil belajarnya.' },
  { l: 'L', t: 'Link-Back', d: 'Menghubungkan argumen kembali ke mosi.', x: 'Tutup dengan menjelaskan mengapa argumen ini membuat mosi benar atau salah, supaya juri tidak menebak sendiri.' },
];
const AP_DATA = {
  aff: { label: 'Tim Afirmasi', roles: [
    ['Pembicara 1: Prime Minister', 'Set-up, definisi, parameter debat, background isu, dan argumen dasar tim.'],
    ['Pembicara 2: Deputy Prime Minister', 'Deep rebuttal terhadap oposisi, defense argumen tim, dan extension argument baru.'],
    ['Pembicara 3: Government Whip', 'Full rebuttal, clash analysis, dan tidak boleh memunculkan argumen baru.'],
    ['Reply Speaker', 'Bird\'s-eye view, analisis pertandingan, dan summary: mengapa tim kami menang.'] ] },
  opp: { label: 'Tim Oposisi', roles: [
    ['Pembicara 1: Leader of Opposition', 'Menanggapi set-up pemerintah, menyajikan stance oposisi, dan argumen dasar tim.'],
    ['Pembicara 2: Deputy Opposition', 'Deep rebuttal terhadap pemerintah, defense argumen tim, dan extension argument baru.'],
    ['Pembicara 3: Opposition Whip', 'Full rebuttal, clash analysis, dan tidak boleh memunculkan argumen baru.'],
    ['Reply Speaker', 'Bird\'s-eye view, analisis pertandingan, dan summary: mengapa tim kami menang.'] ] },
};
const BRIEF_DATA = [
  { f: 'BRIEF-01', s: 'DEBAT', t: 'Apa itu Debat?', d: 'Debat adalah seni menyusun logika, riset berbasis fakta, dan retorika yang beretika. Dua tim beradu argumen untuk meyakinkan juri, bukan untuk saling menjatuhkan.' },
  { f: 'BRIEF-02', s: 'IDT', t: 'Apa itu IDEATEST?', d: 'IDEATEST (Indonesia Debate of Sixty Two) adalah klub debat SMAN 62 Jakarta. Tempat siswa melatih berpikir kritis dan menyuarakan aspirasi di atas panggung.' },
];
const HUB_DATA = [
  { f: 'IDT-EDU', s: 'AREL', t: 'Edukasi A.R.E.L', d: 'Metode berpikir dan peran pembicara AP.', h: 'edukasi.html' },
  { f: 'IDT-VLT', s: 'MOSI', t: 'Bank Mosi', d: 'Cari mosi dan buka bedah mosinya.', h: 'vault.html' },
  { f: 'IDT-DOC', s: 'LOG', t: 'Galeri', d: 'Foto dan video kegiatan IDEATEST.', h: 'dokumentasi.html' },
  { f: 'IDT-ORG', s: 'ORG', t: 'Pengurus', d: 'Susunan pengurus 2026/2027.', h: 'pengurus.html' },
];

/* ===================== LOGIKA (tidak perlu diedit) ===================== */
const $ = (s) => document.querySelector(s);
const pad = (n) => String(n).padStart(2, '0');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const STAMP = { 'Ekonomi': 'EKO', 'Politik/HI': 'POL', 'Sosial-Budaya': 'SOS', 'Hukum/HAM': 'HUK', 'Teknologi/Lingkungan': 'TEK' };
const PAGES = [['index.html', 'Beranda'], ['edukasi.html', 'Edukasi'], ['vault.html', 'Bank Mosi'], ['dokumentasi.html', 'Galeri'], ['pengurus.html', 'Pengurus']];

function card(inner, file, stamp, tag = 'div', attrs = '') {
  return `<div class="dw reveal"><div class="dossier"><div class="in"><div class="dhead"><span class="fileno">${esc(file)}</span>${stamp ? `<span class="stamp sm">${esc(stamp)}</span>` : ''}</div><${tag} class="dbody" ${attrs}>${inner}</${tag}></div></div></div>`;
}
function reveal() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } }), { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => io.observe(el));
}
function modal(html) {
  let m = document.getElementById('modal');
  if (!m) {
    m = document.createElement('div'); m.id = 'modal'; m.className = 'modal';
    m.innerHTML = '<div class="panel" role="dialog" aria-modal="true"><button class="x" aria-label="Tutup">✕</button><div id="mbody"></div></div>';
    document.body.appendChild(m);
    m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('.x')) closeModal(); });
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());
  }
  $('#mbody').innerHTML = html;
  requestAnimationFrame(() => m.classList.add('open'));
}
function closeModal() { const m = document.getElementById('modal'); if (m) { m.classList.remove('open'); $('#mbody').innerHTML = ''; } }

function chrome() {
  const cur = location.pathname.split('/').pop() || 'index.html';
  const links = PAGES.map(([h, l]) => `<a href="${h}" class="nl ${h === cur ? 'on' : ''}">${l}</a>`).join('');
  $('#nav-root').innerHTML = `
  <header class="navbar fixed top-3 inset-x-3 md:inset-x-6 z-40"><div class="flex items-center justify-between gap-3 px-4 py-2.5">
    <a href="index.html" class="flex items-center gap-3"><span class="stamp" style="width:2.5rem;height:2.5rem">62</span><span class="disp text-lg">IDEATEST</span></a>
    <span class="hidden lg:flex items-center gap-2 fileno"><i class="dot"></i>ONLINE ARCHIVE</span>
    <nav class="hidden md:flex gap-1" aria-label="Navigasi utama">${links}</nav>
    <button id="burger" class="md:hidden text-2xl px-2" aria-label="Buka menu" aria-expanded="false">☰</button>
  </div></header>
  <div id="drawer" class="md:hidden"><div id="dbg"></div><aside id="dpanel"><button id="dclose" class="self-end text-2xl mb-4" aria-label="Tutup menu">✕</button><span class="fileno mb-2 flex items-center gap-2"><i class="dot"></i>ONLINE ARCHIVE</span>${links}</aside></div>`;
  const dr = $('#drawer'), toggle = (o) => { dr.classList.toggle('open', o); $('#burger').setAttribute('aria-expanded', o); };
  $('#burger').onclick = () => toggle(true); $('#dclose').onclick = () => toggle(false); $('#dbg').onclick = () => toggle(false);
  dr.querySelectorAll('a').forEach((a) => (a.onclick = () => toggle(false)));
  $('#footer-root').innerHTML = `
  <footer class="border-t border-[#620000] bg-[#2E0004]"><div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
    <div><div class="flex items-center gap-3"><span class="stamp">62</span><span class="disp text-2xl">IDEATEST</span></div>
    <p class="t-sub mt-3">Indonesia Debate of Sixty Two<br>SMAN 62 Jakarta</p></div>
    <div class="flex flex-wrap gap-3 md:justify-end content-start">${SOCIALS.map(([l, h]) => `<a class="social" href="${h}" target="_blank" rel="noopener">${esc(l)}</a>`).join('')}</div>
  </div><p class="text-center fileno pb-6">© 2026 IDEATEST SMAN 62 JAKARTA</p></footer>`;
}

function initIndex() {
  const total = COMMITTEE_DATA.flatMap((g) => g.subs.flatMap((s) => s.members)).length;
  const row = (a, b) => `<div class="flex justify-between border-b border-[#620000] py-2"><span class="t-sub">${a}</span><span class="count !p-0 !border-0 !bg-transparent">${b}</span></div>`;
  $('#hero-card').innerHTML = card(`<h2 class="disp text-xl">Indeks Arsip</h2><div>${row('Mosi', `${MOTIONS_DATA.length}/${MOTIONS_DATA.length}`)}${row('Pengurus', `${total} Member`)}${row('Galeri', `${GALLERY_DATA.length} Berkas`)}${row('Status', 'ONLINE')}</div>`, 'FILE NO: IDT-2026/00', '62');
  $('#brief').innerHTML = BRIEF_DATA.map((b) => card(`<h3 class="disp text-2xl">${b.t}</h3><p class="t-sub">${b.d}</p>`, b.f, b.s)).join('');
  $('#hub').innerHTML = HUB_DATA.map((h) => card(`<h3 class="disp text-xl">${h.t}</h3><p class="t-sub flex-1">${h.d}</p><a class="btn btn-s self-start" href="${h.h}" aria-label="Buka ${h.t}">Buka berkas</a>`, h.f, h.s)).join('');
}

function initEdukasi() {
  $('#arel').innerHTML = AREL_DATA.map((a, i) => card(`<span class="letter">${a.l}</span><h3 class="disp text-xl">${a.t}</h3><p class="t-sub">${a.d}</p><div class="more"><div><p class="blk text-sm">${a.x}</p></div></div>`, `A.R.E.L ${i + 1}/4`, a.l, 'button', 'type="button" aria-expanded="false" style="text-align:left;width:100%;background:none;border:0;color:inherit;cursor:pointer"')).join('');
  document.querySelectorAll('#arel .dbody').forEach((b) => b.addEventListener('click', () => { const o = b.closest('.dw').classList.toggle('open'); b.setAttribute('aria-expanded', o); b.closest('.dossier').style.background = o ? 'var(--vivid)' : ''; b.querySelector('.more').style.gridTemplateRows = o ? '1fr' : '0fr'; }));
  const tabs = $('#ap-tabs'), panel = $('#ap-panel');
  const show = (k) => {
    tabs.querySelectorAll('.chip').forEach((c) => { const on = c.dataset.k === k; c.classList.toggle('on', on); c.setAttribute('aria-selected', on); });
    panel.innerHTML = AP_DATA[k].roles.map(([t, d], i) => card(`<h3 class="disp text-lg">${t}</h3><p class="t-sub">${d}</p>`, `${AP_DATA[k].label.toUpperCase()} ${i + 1}/4`)).join('');
    reveal();
  };
  tabs.innerHTML = Object.entries(AP_DATA).map(([k, v]) => `<button class="chip" role="tab" data-k="${k}">${v.label}</button>`).join('');
  tabs.onclick = (e) => { const b = e.target.closest('.chip'); if (b) show(b.dataset.k); };
  show('aff');
}

function initVault() {
  const cats = ['Semua', ...Object.keys(STAMP)]; let cat = 'Semua', q = '';
  const g = $('#vault-grid');
  $('#chips').innerHTML = cats.map((c) => `<button class="chip ${c === 'Semua' ? 'on' : ''}" data-c="${c}" aria-pressed="${c === 'Semua'}">${c}</button>`).join('');
  const draw = () => {
    const list = MOTIONS_DATA.filter((m) => (cat === 'Semua' || m.cat === cat) && (m.text + ' ' + m.cat).toLowerCase().includes(q));
    $('#counter').textContent = `Mosi: ${list.length}/${MOTIONS_DATA.length}`;
    g.innerHTML = list.length ? list.map((m) => card(`<div class="flex gap-2 flex-wrap"><span class="pill">${m.cat}</span><span class="pill">${m.lvl}</span></div><p class="flex-1 text-lg font-medium">${esc(m.text)}</p><button class="btn btn-p self-start" data-id="${m.id}">Bedah Mosi</button>`, `FILE NO: IDT-2026/${pad(m.id)}`, STAMP[m.cat])).join('') : '<p class="t-sub md:col-span-2 lg:col-span-3">Mosi tidak ditemukan. Ubah kata kunci atau pilih kategori Semua.</p>';
    reveal();
  };
  $('#chips').onclick = (e) => { const b = e.target.closest('.chip'); if (!b) return; cat = b.dataset.c; document.querySelectorAll('#chips .chip').forEach((c) => { c.classList.toggle('on', c === b); c.setAttribute('aria-pressed', c === b); }); draw(); };
  $('#q').oninput = (e) => { q = e.target.value.trim().toLowerCase(); draw(); };
  g.onclick = (e) => {
    const b = e.target.closest('[data-id]'); if (!b) return;
    const m = MOTIONS_DATA.find((x) => x.id == b.dataset.id), a = MOTION_ANALYSIS_DATA[m.id];
    const blk = (t, c) => `<div class="blk"><h4>${t}</h4><p>${c}</p></div>`;
    modal(`<div class="dhead"><span class="fileno">CASE FILE BREAKDOWN: IDT-2026/${pad(m.id)}</span></div><div class="p-6 pt-5">
      <div class="flex gap-2 mb-3 flex-wrap"><span class="pill">${m.cat}</span><span class="pill">${m.lvl}</span></div>
      <h2 class="disp text-xl">${esc(m.text)}</h2>
      ${a ? `${blk('Status Quo & Background Isu', a.bg)}${blk('Stance Afirmasi', a.aff)}${blk('Stance Oposisi', a.opp)}<div class="blk"><h4>Key Clash Points</h4><ul class="list-disc pl-5">${a.clash.map((c) => `<li>${c}</li>`).join('')}</ul></div>` : '<p class="t-sub mt-4">Bedah mosi belum tersedia untuk mosi ini.</p>'}</div>`);
  };
  draw();
}

function initGallery() {
  $('#gcount').textContent = `Berkas: ${GALLERY_DATA.length}`;
  const fmt = (d) => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const media = (it) => it.src ? (it.type === 'video' ? (/youtube|youtu\.be|embed/.test(it.src) ? `<iframe src="${it.src}" class="w-full h-full" allowfullscreen title="${esc(it.title)}"></iframe>` : `<video src="${it.src}" muted></video>`) : `<img src="${it.src}" alt="${esc(it.title)}" loading="lazy">`) : '<div class="nodata">NO DATA</div>';
  $('#gallery-grid').innerHTML = GALLERY_DATA.map((it, i) => {
    const r = [-2, 1.5, -1, 2][i % 4];
    const cap = `<p class="disp text-sm mt-3">${esc(it.title)}</p><p class="fileno" style="color:inherit;opacity:.7">${fmt(it.date)}</p>`;
    return it.type === 'video'
      ? `<div class="reveal"><button class="film" data-i="${i}"><div class="frame relative">${it.src && !/youtube|embed/.test(it.src) ? media(it) : '<div class="nodata">NO DATA</div>'}<span class="play">▶</span></div>${cap}</button></div>`
      : `<div class="reveal"><button class="polaroid" style="--r:${r}deg" data-i="${i}"><div class="frame">${media(it)}</div>${cap}</button></div>`;
  }).join('');
  $('#gallery-grid').onclick = (e) => {
    const b = e.target.closest('[data-i]'); if (!b) return;
    const it = GALLERY_DATA[b.dataset.i];
    const m = it.src && it.type === 'video' && !/youtube|embed/.test(it.src) ? `<video src="${it.src}" controls autoplay class="w-full"></video>` : media(it);
    modal(`<div class="frame" style="aspect-ratio:16/10">${m}</div><div class="p-5"><h2 class="disp text-lg">${esc(it.title)}</h2><p class="fileno">${fmt(it.date)}</p></div>`);
  };
  reveal();
}

function initCommittee() {
  let n = 0;
  const html = COMMITTEE_DATA.map((g) => `<section class="mb-14"><h2 class="disp sec-t reveal">${g.group}</h2>${g.subs.map((s) => `${s.name ? `<h3 class="disp text-base t-sub mb-4 reveal">${s.name}</h3>` : ''}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">${s.members.map((m) => { n++; return card(`<div class="flex gap-4 items-center"><div class="avatar" aria-hidden="true">${m.n[0]}</div><div><h4 class="disp text-base">${m.n}</h4><p class="t-sub text-sm mt-1">${m.r}</p></div></div><div class="flex gap-2"><span class="pill">Kelas ${m.k}</span></div>`, `ID: IDT-26-${pad(n)}`, m.r === 'Anggota' ? '' : '★'); }).join('')}</div>`).join('')}</section>`).join('');
  $('#committee').innerHTML = html;
  $('#pcount').textContent = `Pengurus: ${n} Member`;
  reveal();
}

document.addEventListener('DOMContentLoaded', () => {
  chrome();
  if ($('#hero-card')) initIndex();
  if ($('#arel')) initEdukasi();
  if ($('#vault-grid')) initVault();
  if ($('#gallery-grid')) initGallery();
  if ($('#committee')) initCommittee();
  reveal();
});
