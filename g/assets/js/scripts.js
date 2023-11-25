const modal = document.getElementById("modal");
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");

(function () {
    btnOpen.addEventListener('click', ()=>{modal.showModal();});
    btnClose.addEventListener('click', ()=>{modal.close();});
})();
