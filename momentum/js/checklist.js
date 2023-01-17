//toggle
function toggleCheckbox(event) {
  const item = event.target;
  const checked = item.getAttribute('aria-checked');
  
  if (checked === 'true') {
    console.log('aa');
    item.setAttribute('aria-checked', 'false');
  } else {
    console.log('bb');
    item.setAttribute('aria-checked', 'true');
  }
}


const items = document.querySelectorAll('#check-boxes input');
console.log(items);
for (var i=0; i<items.length; i++) {  
  items[i].addEventListener('click', toggleCheckbox);
}


