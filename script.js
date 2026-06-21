// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// WhatsApp button
function openWhatsApp() {
  const phone = "918090039297";
  window.open(`https://wa.me/${phone}`, "_blank");
}

// Call button
function callNow() {
  window.location.href = "tel:+918090039297";
}

const hero = document.querySelector(".hero");

for (let i = 0; i < 50; i++) {
    const dot = document.createElement("span");

    dot.classList.add("gold-dot");

    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";

    dot.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    dot.style.animationDelay =
        Math.random() * 5 + "s";

    hero.appendChild(dot);
}

function openModal(menuKey) {

  // 👇 Put your actual file names here
  const menuFiles = {
    kitty:  'kitty-party-menu.pdf.jpeg',
    silver: 'silver-menu.pdf.jpeg',
    gold:   'gold-menu.pdf.jpeg'
  };

  window.open(menuFiles[menuKey], '_blank');
}

// ---------- BANQUET BOOKING ----------
function sendWhatsApp() {
  const name = document.getElementById('fullname').value;
  const phone = document.getElementById('phone').value;
  const event = document.getElementById('eventtype').value;
  const guests = document.getElementById('guests').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const special = document.getElementById('special').value;

  if (!name || !phone || !date || !time) {
    alert('Please fill all required fields!');
    return;
  }

  const msg = `Hello Richi E Rich! 🎉
I'd like to book a Banquet inquiry.

Name: ${name}
Phone: ${phone}
Event Type: ${event}
Guests: ${guests}
Date: ${date}
Time: ${time}
Special Requests: ${special || 'None'}`;

  const url = `https://wa.me/918090039297?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ---------- TABLE BOOKING ----------
function bookTable() {
  const name = document.getElementById('book-name').value;
  const phone = document.getElementById('book-phone').value;
  const guests = document.getElementById('book-guests').value;
  const date = document.getElementById('book-date').value;
  const time = document.getElementById('book-time').value;
  const special = document.getElementById('book-special').value;

  if (!name || !phone || !date || !time) {
    alert('Please fill all required fields!');
    return;
  }

  const msg = `Hello Richi E Rich! 🍽️
I'd like to book a TABLE.

Name: ${name}
Phone: ${phone}
Guests: ${guests}
Date: ${date}
Time: ${time}
Special Requests: ${special || 'None'}`;

  const url = `https://wa.me/918090039297?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ---------- BUTTON CLICK CONNECT ----------
document.getElementById('banquet-whatsapp-btn').addEventListener('click', sendWhatsApp);
document.getElementById('book-whatsapp-btn').addEventListener('click', bookTable);



// BLOCK PAST DATES
window.onload = function() {
  var today = new Date().toISOString().split('T')[0];
  if (document.getElementById('book-date')) {
    document.getElementById('book-date').min = today;
  }
  if (document.getElementById('date')) {
    document.getElementById('date').min = today;
  }
}


