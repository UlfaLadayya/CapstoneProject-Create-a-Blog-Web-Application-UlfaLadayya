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








// document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
//     item.addEventListener('click', function(e) {
//         e.preventDefault();

//         let dropdownToggle = this.closest('.dropdown').querySelector('.dropdown-toggle');
//         dropdownToggle.textContent = this.textContent;

//         let tabTrigger = new bootstrap.Tab(this);
//         tabTrigger.show();
//     });
// });