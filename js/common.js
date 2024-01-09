const searchEl = document.querySelector('.search'); /* document = HTML */
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () { /* 돋보기 아이콘 클릭해도 focus 동작이 됨 */
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();