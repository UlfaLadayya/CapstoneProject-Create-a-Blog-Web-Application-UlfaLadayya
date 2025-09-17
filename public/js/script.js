// document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
//     item.addEventListener('click', function(e) {
//         e.preventDefault();

//         let dropdownToggle = this.closest('.dropdown').querySelector('.dropdown-toggle');
//         dropdownToggle.textContent = this.textContent;

//         let tabTrigger = new bootstrap.Tab(this);
//         tabTrigger.show();
//     });
// });
document.querySelectorAll('#button_action .dropdown-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    // ganti tulisan tombol
    let dropdownToggle = this.closest('.btn-group').querySelector('.dropdown-toggle');
    dropdownToggle.textContent = this.textContent;

    // ambil target tab
    let targetSelector = this.getAttribute('data-bs-target');
    let target = document.querySelector(targetSelector);

    if (target) {
      // sembunyiin semua tab-pane
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('show', 'active');
      });

      // munculin tab yang sesuai
      target.classList.add('show', 'active');
    }
  });
});




// Ahh iya, ketebak masalahnya 👍.
// Sekarang semua elemen `.dropdown-item` kamu daftarin listener JS yang sama → termasuk yang ada di **dropdown kategori** (`Technology`, `Science`, dll) dan yang ada di **dropdown action** (`Create`, `Edit`, dll). Jadi ketika klik salah satunya, script menganggap mereka sama → jadinya tab ganda yang aktif.

// 📌 Solusi: bedakan selector JS supaya tidak bentrok. Misalnya:

// ```js
// // Untuk dropdown action (Create, Edit, Delete, Setting)
// document.querySelectorAll('#button_action .dropdown-item').forEach(item => {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();

//     let dropdownToggle = this.closest('.dropdown').querySelector('.dropdown-toggle');
//     dropdownToggle.textContent = this.textContent;

//     let targetId = this.getAttribute('data-bs-target');
//     let targetTab = document.querySelector(targetId);

//     // Tutup semua tab dulu
//     document.querySelectorAll('#Content_Tab .tab-pane').forEach(tab => {
//       tab.classList.remove('show', 'active');
//     });

//     // Aktifkan tab yang sesuai
//     if (targetTab) {
//       targetTab.classList.add('show', 'active');
//     }
//   });
// });
// ```

// 👉 Bedanya:

// * Selector pakai `#button_action .dropdown-item` biar cuma jalan di dropdown action.
// * Manual toggle `.show` + `.active` supaya pasti pindah tab yang bener.
// * Dropdown kategori (`Technology`, `Science`, dll) masih bisa pakai native Bootstrap (nggak perlu script tambahan).

// ---

// Mau aku bikinin contoh full HTML+JS yang clean (sekali paste langsung jalan) biar kelihatan jelas bedanya kategori vs action?
