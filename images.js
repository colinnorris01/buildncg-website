// ============================================================
// NCG — CENTRAL IMAGE MANAGER — Edit this file to change any image
// ============================================================
var SITE_IMAGES = {
    // HOMEPAGE
    hero_bg:           "images/living-room.jpg",
    about_large:       "images/kitchen-natural-1.jpg",
    about_small:       "images/bath-natural-1.jpg",
    service_kitchen:   "images/kitchen-natural-4.jpg",
    service_bathroom:  "images/bath-natural-2.jpg",
    service_newbuild:  "images/kitchen-natural-1.jpg",
    service_additions: "images/living-room.jpg",
    // SERVICES PAGE
    detail_kitchen:    "images/kitchen-natural-5.jpg",
    detail_bathroom:   "images/bath-modern-1.jpg",
    detail_newbuild:   "images/kitchen-natural-2.jpg",
    detail_additions:  "images/bath-natural-1.jpg",
    // ABOUT PAGE
    about_story:       "images/kitchen-natural-3.jpg",
    // SHOWCASE — varied by project index
    showcase: [
        "images/living-room.jpg",
        "images/kitchen-natural-1.jpg",
        "images/bath-natural-2.jpg",
        "images/kitchen-natural-4.jpg",
        "images/bath-natural-1.jpg",
        "images/kitchen-natural-5.jpg",
        "images/bath-modern-1.jpg",
        "images/kitchen-natural-2.jpg",
        "images/bathroom-luxury.jpg",
        "images/kitchen-natural-3.jpg",
        "images/bathroom-modern.jpg",
        "images/kitchen-marble.jpg",
        "images/kitchen-island.jpg",
        "images/kitchen-natural-1.jpg",
        "images/bath-natural-2.jpg",
        "images/bath-modern-1.jpg",
        "images/kitchen-natural-4.jpg",
        "images/living-room.jpg",
        "images/kitchen-natural-5.jpg",
        "images/bath-natural-1.jpg"
    ]
};
(function(){
    function apply(){
        document.querySelectorAll("[data-img]").forEach(function(el){
            var k=el.getAttribute("data-img");
            if(SITE_IMAGES[k]) el.src=SITE_IMAGES[k];
        });
    }
    if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",apply);
    else apply();
})();
