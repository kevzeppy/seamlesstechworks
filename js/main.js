// Mobile menu
var toggle = document.getElementById('menuToggle');
var list = document.getElementById('navList');
toggle.addEventListener('click', function () {
  var open = list.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
list.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    list.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }
});

// Netlify Forms: submit without leaving the page
var form = document.getElementById('reviewForm');
var msg = document.getElementById('formMsg');
if (form) form.addEventListener('submit', function (e) {
  e.preventDefault();
  msg.textContent = 'Sending...';
  var data = new URLSearchParams(new FormData(form)).toString();
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data
  }).then(function (r) {
    if (!r.ok) throw new Error('bad response');
    form.reset();
    msg.textContent = "Thank you. We'll review your site and be in touch soon.";
  }).catch(function () {
    msg.textContent = "Something went wrong. Please try again, or give us a call.";
  });
});
