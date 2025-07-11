(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    openDrawerBtn: document.querySelector('[data-drawer-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeDrawerBtn: document.querySelector('[data-drawer-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
    drawer: document.querySelector('[data-modal-drawer]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openDrawerBtn.addEventListener('click', toggleDrawer);
  refs.closeDrawerBtn.addEventListener('click', toggleDrawer);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
  function toggleDrawer() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.drawer.classList.toggle('is-open-drawer');
  }
})();
