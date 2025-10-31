// Hamburger Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


// Gallery Modal Logic (Renamed from "Memory")
const galleryModal = document.getElementById("galleryModal");
const modalGalleryTitle = document.getElementById("modalGalleryTitle");
const modalGalleryGrid = document.getElementById("modalGalleryGrid"); 
const closeModal = document.querySelector(".modal-close");
const galleryCards = document.querySelectorAll(".memory-card"); // The card class is still .memory-card

const galleryImages = [ // Placeholder images
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
    "https://images.unsplash.com/photo-1483391265910-a8725f02d7b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&q=80&w=200",
];

function populateModalGallery(year) {
    if (!modalGalleryGrid) return;
    modalGalleryGrid.innerHTML = ''; 
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery image from ${year}`;
        modalGalleryGrid.appendChild(img);
    });
}

galleryCards.forEach(card => {
    card.addEventListener("click", function() {
        const year = this.getAttribute("data-year");
        if (modalGalleryTitle) {
            modalGalleryTitle.textContent = `Gallery: ${year} Highlights`;
        }
        populateModalGallery(year); 
        if (galleryModal) {
            galleryModal.style.display = "block";
        }
    });
});

if (closeModal) {
    closeModal.onclick = function() {
        if (galleryModal) {
            galleryModal.style.display = "none";
        }
    }
}

window.onclick = function(event) {
    if (event.target == galleryModal) {
        galleryModal.style.display = "none";
    }
}

// NEW "View All Members" Logic
const viewAllMembersBtn = document.getElementById('view-all-members');
const membersGrid = document.querySelector('.members-grid-main');

if (viewAllMembersBtn && membersGrid) {
    viewAllMembersBtn.addEventListener('click', () => {
        membersGrid.classList.add('show-all');
    });
}


// <<<<< NAYA ANIMATION CODE YAHAN HAI >>>>>

// NEW Scroll-to-Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});
