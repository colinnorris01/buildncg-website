// ============================================================
// NORRIS CONSTRUCTION GROUP — CENTRAL IMAGE MANAGER
// ============================================================
// EDIT THIS FILE ONLY to change any image on the entire site.
// One file, one commit, one deploy.
//
// "images/filename.jpg" = your photos in the images folder
// "https://..." = stock photos (swap with yours when ready)
// ============================================================

const SITE_IMAGES = {

    // ========== HOMEPAGE — HERO ==========
    hero_bg:      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=75",
    hero_card_1:  "images/kitchen-island.jpg",
    hero_card_2:  "images/bathroom-luxury.jpg",
    hero_card_3:  "images/kitchen-marble.jpg",

    // ========== HOMEPAGE — ABOUT SECTION ==========
    about_large:  "images/living-room.jpg",
    about_small:  "images/bathroom-modern.jpg",

    // ========== HOMEPAGE — SERVICE GRID (5 cards) ==========
    service_kitchen:   "images/kitchen-island.jpg",
    service_bathroom:  "images/bathroom-luxury.jpg",
    service_cabinets:  "images/kitchen-marble.jpg",
    service_newbuild:  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
    service_additions: "images/living-room.jpg",

    // ========== SERVICES PAGE — DETAIL PHOTOS ==========
    detail_kitchen:    "images/kitchen-island.jpg",
    detail_bathroom:   "images/bathroom-modern.jpg",
    detail_cabinets:   "images/kitchen-marble.jpg",
    detail_newbuild:   "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
    detail_additions:  "images/living-room.jpg",

    // ========== ABOUT PAGE ==========
    about_story:  "images/kitchen-island.jpg",

    // ========== SHOWCASE — PROJECT TYPE DEFAULTS ==========
    // Each showcase project gets an image based on its type.
    // When you have per-project photos, add them directly
    // in showcase.html's project array.
    project_renovation: "images/living-room.jpg",
    project_kitchen:    "images/kitchen-island.jpg",
    project_bathroom:   "images/bathroom-luxury.jpg",
    project_newbuild:   "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
    project_commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
};

// Auto-apply on page load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-img]").forEach(function(el) {
        var key = el.getAttribute("data-img");
        if (SITE_IMAGES[key]) { el.src = SITE_IMAGES[key]; }
    });
});
