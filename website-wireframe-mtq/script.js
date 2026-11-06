// JAVASCRIPT WIREFRAME KOMPETISI LABBBAIK
// Bagian ini hanya memberi interaksi sederhana untuk mencoba wireframe.

// 1. Membuka dan menutup menu navigasi pada layar kecil.
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// 2. Simulasi pencarian kompetisi berdasarkan kata kunci.
const keywordInput = document.getElementById('keyword');
const dateFromInput = document.getElementById('dateFrom');
const dateToInput = document.getElementById('dateTo');
const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');
const competitionCard = document.getElementById('competitionCard');
const filterCount = document.getElementById('filterCount');
const resultCount = document.getElementById('resultCount');

searchButton.addEventListener('click', () => {
  const keyword = keywordInput.value.trim().toLowerCase();
  const hasFilter = keyword !== '' || dateFromInput.value !== '' || dateToInput.value !== '';
  const matchesKeyword = 'mtq nasional musabaqah tilawatil quran'.includes(keyword);

  // Untuk wireframe, tanggal hanya dihitung sebagai filter yang diisi.
  const showCard = matchesKeyword;
  competitionCard.hidden = !showCard;
  resultCount.textContent = showCard ? '1' : '0';
  filterCount.textContent = hasFilter ? '1' : '0';
});

// 3. Mengosongkan filter dan menampilkan kembali kartu kompetisi.
resetButton.addEventListener('click', () => {
  keywordInput.value = '';
  dateFromInput.value = '';
  dateToInput.value = '';
  competitionCard.hidden = false;
  filterCount.textContent = '0';
  resultCount.textContent = '1';
});
