// ST. LUKE HOSPITAL CALABAR main.js v4.0
// No database. No backend. No payments.
// Booking sends to WhatsApp + mailto only.

'use strict';

// ── CONTACT DETAILS ──────────────────────────────────────────
const WHATSAPP_NUMBER = '2348132930683'; // 08132930683 in international format
const EMAIL_ADDRESS   = 'md@stlukehospitalcalabar.com';

// ── SERVICES CONFIG ──────────────────────────────────────────
const SERVICES = [
  'Gynaecology & Obstetrics (GYN/OBGYN)',
  'Antenatal & Maternity Care',
  'General Consultation',
  'Counselling',
  'Surgery',
  'Laboratory & Diagnostics',
  'Pharmacy Consultation',
  'Emergency Care'
];

const DOCTORS = [
  'Dr. Patience T. Asor - GYN/OBGYN & Managing Director',
  'Matron Lily Ogar Head of Nursing',
  'No Preference Any Available'
];

const TIME_SLOTS = [
  '8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM',
  '1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'
];

// ── MOBILE MENU ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── NAVBAR SCROLL SHADOW ─────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 30
      ? '0 4px 28px rgba(13,34,64,0.35)'
      : 'none';
  }, { passive: true });
}

// ── ACTIVE NAV LINK ──────────────────────────────────────────
(function setActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── SCROLL REVEAL ────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 60, 400) + 'ms';
    obs.observe(el);
  });
}

// ════════════════════════════════════════════════════════════
//  BOOKING MODAL
// ════════════════════════════════════════════════════════════

let currentStep = 1;
const totalSteps = 3;

// Booking state object
const booking = {
  service: '', doctor: '', date: '', time: '',
  name: '', phone: '', email: '', notes: ''
};

function openModal() {
  const overlay = document.getElementById('bookingModal');
  if (!overlay) return;
  resetModal();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Focus first input for accessibility
  setTimeout(() => {
    const first = overlay.querySelector('select, input');
    if (first) first.focus();
  }, 300);
}

function closeModal() {
  const overlay = document.getElementById('bookingModal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function resetModal() {
  currentStep = 1;
  Object.keys(booking).forEach(k => booking[k] = '');
  showStep(1);
  // Reset fields
  const form = document.getElementById('bookingModal');
  if (form) { form.querySelectorAll('input, textarea').forEach(el => el.value = ''); }
  // Reset selects to first option
  const selects = ['bService','bDoctor','bTime'];
  selects.forEach(id => { const el = document.getElementById(id); if (el) el.selectedIndex = 0; });
  const dateEl = document.getElementById('bDate');
  if (dateEl) dateEl.value = '';
}

function showStep(n) {
  currentStep = n;
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('step' + n);
  if (target) target.classList.add('active');
  // Update progress bar
  document.querySelectorAll('.progress-step').forEach((ps, i) => {
    ps.classList.remove('active', 'done');
    if (i + 1 < n)       ps.classList.add('done');
    else if (i + 1 === n) ps.classList.add('active');
  });
}

function validateStep1() {
  const svc = document.getElementById('bService');
  const dt  = document.getElementById('bDate');
  if (!svc || !svc.value) { alert('Please select a service.'); return false; }
  if (!dt || !dt.value)   { alert('Please choose a preferred date.'); return false; }
  // Date must not be in the past
  const chosen = new Date(dt.value);
  const today  = new Date(); today.setHours(0,0,0,0);
  if (chosen < today) { alert('Please choose a future date.'); return false; }
  return true;
}

function validateStep2() {
  const name  = document.getElementById('bName');
  const phone = document.getElementById('bPhone');
  const email = document.getElementById('bEmail');
  if (!name  || !name.value.trim())  { alert('Please enter your full name.'); return false; }
  if (!phone || !phone.value.trim()) { alert('Please enter your phone number.'); return false; }
  if (!email || !email.value.trim() || !email.value.includes('@')) {
    alert('Please enter a valid email address.'); return false;
  }
  return true;
}

function goStep2() {
  if (!validateStep1()) return;
  // Capture step 1 values
  booking.service = document.getElementById('bService').value;
  booking.doctor  = document.getElementById('bDoctor').value || 'No preference';
  booking.date    = formatDate(document.getElementById('bDate').value);
  booking.time    = document.getElementById('bTime').value || 'Flexible';
  showStep(2);
}

function goStep3() {
  if (!validateStep2()) return;
  // Capture step 2 values
  booking.name  = document.getElementById('bName').value.trim();
  booking.phone = document.getElementById('bPhone').value.trim();
  booking.email = document.getElementById('bEmail').value.trim();
  booking.notes = document.getElementById('bNotes').value.trim() || 'None';
  // Populate review screen
  populateReview();
  showStep(3);
}

function goBack(step) {
  showStep(step);
}

function formatDate(dateStr) {
  if (!dateStr) return 'Not specified';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function populateReview() {
  const fields = {
    'rv-service': booking.service,
    'rv-doctor':  booking.doctor,
    'rv-date':    booking.date,
    'rv-time':    booking.time,
    'rv-name':    booking.name,
    'rv-phone':   booking.phone,
    'rv-email':   booking.email,
    'rv-notes':   booking.notes,
  };
  Object.entries(fields).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

// ── WHATSAPP SEND ────────────────────────────────────────────
function sendWhatsApp() {
  const msg =
`Hello St. Luke Hospital Calabar,

I would like to book an appointment. Here are my details:

*Service:* ${booking.service}
*Preferred Doctor:* ${booking.doctor}
*Preferred Date:* ${booking.date}
*Preferred Time:* ${booking.time}
*Name:* ${booking.name}
*Phone:* ${booking.phone}
*Email:* ${booking.email}
*Additional Notes:* ${booking.notes}

Please confirm my appointment. Thank you.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ── EMAIL SEND (mailto) ───────────────────────────────────────
function sendEmail() {
  const subject = `Appointment Request ${booking.service} ${booking.name}`;
  const body =
`Dear St. Luke Hospital Team,

I would like to book an appointment. My details are below:

Service Required: ${booking.service}
Preferred Doctor: ${booking.doctor}
Preferred Date: ${booking.date}
Preferred Time: ${booking.time}

Patient Name: ${booking.name}
Phone Number: ${booking.phone}
Email Address: ${booking.email}
Additional Notes: ${booking.notes}

Please confirm my appointment at your earliest convenience.

Thank you.`;

  const url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

// ── EXPOSE TO HTML ────────────────────────────────────────────
window.openModal   = openModal;
window.closeModal  = closeModal;
window.goStep2     = goStep2;
window.goStep3     = goStep3;
window.goBack      = goBack;
window.sendWhatsApp = sendWhatsApp;
window.sendEmail   = sendEmail;

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('bookingModal');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  }
  // Close on Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Populate service dropdown
  const svcSelect = document.getElementById('bService');
  if (svcSelect) {
    SERVICES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      svcSelect.appendChild(opt);
    });
  }
  // Populate doctor dropdown
  const docSelect = document.getElementById('bDoctor');
  if (docSelect) {
    DOCTORS.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      docSelect.appendChild(opt);
    });
  }
  // Populate time slots
  const timeSelect = document.getElementById('bTime');
  if (timeSelect) {
    TIME_SLOTS.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t; opt.textContent = t;
      timeSelect.appendChild(opt);
    });
  }
  // Set min date to today
  const dateInput = document.getElementById('bDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});

// ── CONTACT FORM (mailto) ─────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('cName')?.value.trim() || '';
    const phone   = document.getElementById('cPhone')?.value.trim() || '';
    const email   = document.getElementById('cEmail')?.value.trim() || '';
    const subject = document.getElementById('cSubject')?.value.trim() || 'General Enquiry';
    const message = document.getElementById('cMessage')?.value.trim() || '';
    if (!name || !message) { alert('Please fill in your name and message.'); return; }
    const mailSubject = `[St. Luke Hospital Enquiry] ${subject} ${name}`;
    const mailBody =
`Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}

Message:
${message}`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  });
}

// ── OPEN MODAL WITH PRE-SELECTED SERVICE ─────────────────────
// Called from "Book This Service" buttons on the services page.
// Walks up the DOM to find the parent card's data-service attribute.
function openModalWithService(btn) {
  // Find the nearest ancestor with data-service
  let el = btn;
  let serviceName = '';
  while (el && el !== document.body) {
    if (el.dataset && el.dataset.service) {
      serviceName = el.dataset.service;
      break;
    }
    el = el.parentElement;
  }

  openModal();

  // After modal opens, pre-select the service in the dropdown
  if (serviceName) {
    setTimeout(function() {
      const select = document.getElementById('bService');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          // Compare stripping HTML entities for robustness
          const optVal = select.options[i].value;
          // Match by checking if the option value contains key words
          if (optVal === serviceName ||
              optVal.replace(/&amp;/g,'&') === serviceName.replace(/&amp;/g,'&')) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }, 80);
  }
}
window.openModalWithService = openModalWithService;

function openModalWithDoctor(doctorName) {
  openModal();
  setTimeout(function() {
    const select = document.getElementById('bDoctor');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === doctorName) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }, 80);
}
window.openModalWithDoctor = openModalWithDoctor;
