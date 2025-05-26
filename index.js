const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

// Tool-tip Start 
function setupTooltip(triggerId, popupClass) {
    const trigger = document.getElementById(triggerId);
    const popup = document.querySelector(popupClass);
    
    if (!trigger || !popup) return;
    
    // Position the tooltip relative to the cursor with boundary checking
    const positionTooltip = (e) => {
        // Offset from cursor (in pixels)
        const offsetX = 15;
        const offsetY = 15;
        
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get tooltip dimensions
        const tooltipWidth = popup.offsetWidth;
        const tooltipHeight = popup.offsetHeight;
        
        // Calculate position with boundary checking
        let left = e.clientX + offsetX;
        let top = e.clientY + offsetY;
        
        // Adjust if tooltip would go off right edge
        if (left + tooltipWidth > viewportWidth) {
            left = e.clientX - tooltipWidth - offsetX;
        }
        
        // Adjust if tooltip would go off bottom edge
        if (top + tooltipHeight > viewportHeight) {
            top = e.clientY - tooltipHeight - offsetY;
        }
        
        popup.style.left = `${left}px`;
        popup.style.top = `${top}px`;
    };
    
    trigger.addEventListener('mouseenter', () => {
        setTimeout(() => {
            popup.style.display = 'flex';
            popup.style.opacity = '1';
        }, 300);
    });
    
    trigger.addEventListener('mouseleave', () => {
        setTimeout(() => {
            popup.style.opacity = '0';
            popup.style.display = 'none';
        }, 1100);
    });
    
    // Track mouse movement within the trigger
    trigger.addEventListener('mousemove', positionTooltip);
}

// Initialize all tooltips:
setupTooltip('details1', '.detailsPop');
setupTooltip('details2', '.detailsPop');
setupTooltip('details3', '.detailsPop'); 
setupTooltip('details5', '.detailsPop');

setupTooltip('price1', '.pricePop');
setupTooltip('price2', '.pricePop');
setupTooltip('price3', '.pricePop'); 
setupTooltip('price5', '.pricePop');

setupTooltip('description1', '.descriptionPop');
setupTooltip('description2', '.descriptionPop');
setupTooltip('description3', '.descriptionPop'); 
setupTooltip('description5', '.descriptionPop');

const des1 = document.getElementById('description1');
const des2 = document.getElementById('description2');
const des3 = document.getElementById('description3'); 
const des5 = document.getElementById('description5');

const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3'); 
const price5 = document.getElementById('price5');

const details1 = document.getElementById('details1');
const details2 = document.getElementById('details2');
const details3 = document.getElementById('details3'); 
const details5 = document.getElementById('details5');

const detailBox1 = document.querySelector('.section--four > *:nth-child(2) > *:nth-child(2)');
const detailBox2 = document.querySelector('.section--four > *:nth-child(3) > *:nth-child(2)');
const detailBox3 = document.querySelector('.section--four > *:nth-child(4) > *:nth-child(2)');
const detailBox4 = document.querySelector('.section--four > *:nth-child(5) > *:nth-child(2)');

const priceBox1 = document.querySelector('.section--four > *:nth-child(2) > *:nth-child(6)');
const priceBox2 = document.querySelector('.section--four > *:nth-child(3) > *:nth-child(6)');
const priceBox3 = document.querySelector('.section--four > *:nth-child(4) > *:nth-child(6)');
const priceBox4 = document.querySelector('.section--four > *:nth-child(5) > *:nth-child(6)');

const desBox1 = document.querySelector('.section--four > *:nth-child(2) > *:nth-child(7)');
const desBox2 = document.querySelector('.section--four > *:nth-child(3) > *:nth-child(7)');
const desBox3 = document.querySelector('.section--four > *:nth-child(4) > *:nth-child(7)');
const desBox4 = document.querySelector('.section--four > *:nth-child(5) > *:nth-child(7)');


const detailBoxes = [detailBox1, detailBox2, detailBox3, detailBox4];
const priceBoxes = [priceBox1, priceBox2, priceBox3, priceBox4];
const descriptionBoxes = [desBox1, desBox2, desBox3, desBox4];

const details = [details1, details2, details3, details5];
const prices = [price1, price2, price3, price5];
const descriptions = [des1, des2, des3, des5];

function toggleBoxes(buttons, boxes, otherBoxes1, otherBoxes2, activeClass = 'active') {
    buttons.forEach((button, index) => {
        if (!button) return;
        
        button.addEventListener('click', () => {
            // First hide all other box types with transition
            [otherBoxes1, otherBoxes2].forEach(boxGroup => {
                boxGroup.forEach(box => {
                    if (box) {
                        box.style.transform = 'translateX(-50%)';
                        box.style.opacity = '0';
                        setTimeout(() => {
                            box.style.display = 'none';
                            box.classList.remove(activeClass);
                        }, 1000);
                    }
                });
            });
            
            // Then handle current box group
            setTimeout(() => {
                // Hide all boxes in current group first
                boxes.forEach(box => {
                    if (box) {
                        box.style.transform = 'translateX(-50%)';
                        box.style.opacity = '0';
                        setTimeout(() => {
                            box.style.display = 'none';
                        }, 1000);
                    }
                });
                
                // Then show all boxes in current group
                setTimeout(() => {
                    boxes.forEach(box => {
                        if (box) {
                            box.style.display = 'block';
                            void box.offsetWidth;
                            box.style.transform = 'translateX(0)';
                            box.style.opacity = '1';
                            box.classList.add(activeClass);
                        }
                    });
                }, 1000);
                
            }, 1000);
            
            // Update button states
            buttons.forEach(btn => {
                if (btn) btn.classList.remove(activeClass);
            });
            button.classList.add(activeClass);
        });
    });
}

// Initialize with mutual exclusion
toggleBoxes(details, detailBoxes, priceBoxes, descriptionBoxes);
toggleBoxes(prices, priceBoxes, detailBoxes, descriptionBoxes);
toggleBoxes(descriptions, descriptionBoxes, detailBoxes, priceBoxes);

function setupSocialButton(id, url) {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => window.open(url, '_blank'));
}

setupSocialButton('tiktokBtn', 'https://www.tiktok.com/@crazyreelow?_t=ZM-8wbPw9wuhhm&_r=1');
setupSocialButton('whatsappBtn', 'https://wa.me/+27781474413');
setupSocialButton('instagramBtn', 'https://www.instagram.com/crazyreelow?igsh=c3R4bTE3bHV3cWpm');
setupSocialButton('tjBtn', 'https://tjmotaung.co.za')

/**
 * Smooth scrolls to an element when a button is clicked
 * @param {string} buttonId - ID of the clickable button
 * @param {string} scrollToElementClassName - Class name of target element to scroll to
 */

function setupScrollButton(buttonId, scrollToElementClassName) {
    const button = document.getElementById(buttonId);
    const targetElement = document.querySelector(`.${scrollToElementClassName}`);
    
    if (!button || !targetElement) {
        console.warn('Button or target element not found');
        return;
    }

    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Smooth scroll to target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Aligns to top of element
        });
        
        // Optional: Add focus for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
    });
}

setupScrollButton('browse', 'section--two');
setupScrollButton('contact', 'parent-container');

// First, define the functions you want to return
function BentoEffects() {
    const bioEffects = () => {
        const bioSection = document.querySelector('.open--section');
        const head1 = document.querySelector('.open--section > div:nth-of-type(1) > *:nth-child(1) > *:nth-child(1) > *:nth-child(2) span');
        const head2 = document.querySelector('.open--section > div:nth-of-type(1) > *:nth-child(1) > *:nth-child(2) > *:nth-child(2) span');
        const head3 = document.querySelector('.open--section > div:nth-of-type(1) > *:nth-child(1) > *:nth-child(3) > *:nth-child(2) span');
        const parg1 = document.querySelector('.open--section > div:nth-of-type(1) > *:nth-child(1) > *:nth-child(1) > *:nth-child(2) p');
        const parg2 = document.querySelector('.open--section > div:nth-of-type(1) > *:nth-child(1) > *:nth-child(2) > *:nth-child(2) p');
        const parg3 = document.querySelector('.open--section > div:nth-of-type(1) > *:nth-child(1) > *:nth-child(3) > *:nth-child(2) p');
        const tribe = document.querySelector('.hero--img');
        const bioHeaddings = [head1, head2, head3];
        const bioParagraphs = [parg1, parg2, parg3];
        const windowHeight = window.innerHeight;
        const sectionTop = bioSection.getBoundingClientRect().top;
        const sectionBottom = bioSection.getBoundingClientRect().bottom;
    
        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) { 
            bioHeaddings.forEach(bio => {
                bio.style.transform = 'translateX(0)';
            });

            bioParagraphs.forEach(parg => {
                parg.style.transform = 'translateX(0)';
            });

            tribe.style.opacity = "1";
        } else { 
            bioHeaddings.forEach(bio => {
                bio.style.transform = 'translateX(-50vw)';
            });

            bioParagraphs.forEach(parg => {
                parg.style.transform = 'translateX(-50vw)';
            });

            tribe.style.opacity = "0";
        }
    }; 

    const pointEffects = () => {
        const bioSection = document.querySelector('.open--section');
        const pointDiv = document.querySelector('.section--two > *:nth-child(2)');
        const article1 = document.querySelector('.section--two > *:nth-child(1)');
        const article2 = document.querySelector('.section--two > *:nth-child(3)');
        const windowHeight = window.innerHeight; 
        const sectionTop = bioSection.getBoundingClientRect().top;
        const sectionBottom = bioSection.getBoundingClientRect().bottom;
    
        if (window.innerWidth > 786) {
            if (sectionTop < windowHeight * -0.15 && sectionBottom > windowHeight * -0.15) { 
                pointDiv.style.transform = 'translateY(0)';
                pointDiv.style.opacity = '1';
                article1.style.transform = 'translateX(0)';
                article1.style.opacity = '1';
                article2.style.transform = 'translateX(0)';
                article2.style.opacity = '1';
            } else { 
                pointDiv.style.transform = 'translateY(-50vh)';
                pointDiv.style.opacity = '0';
                article1.style.transform = 'translateX(-50vw)';
                article1.style.opacity = '0';
                article2.style.transform = 'translateX(+50vw)';
                article2.style.opacity = '0';
            }
        }
    }; 

    const detailEffects = () => {
        const bioSection = document.querySelector('.section--four');
        const headDiv = document.querySelector('.section--four > *:nth-child(1)');
        const cat1 = document.querySelector('.section--four > *:nth-child(4)');
        const cat2 = document.querySelector('.section--four > *:nth-child(2)');
        const cat3 = document.querySelector('.section--four > *:nth-child(3)');
        const cat4 = document.querySelector('.section--four > *:nth-child(5)');
        const windowHeight = window.innerHeight; 
        const sectionTop = bioSection.getBoundingClientRect().top;
        const sectionBottom = bioSection.getBoundingClientRect().bottom;
    
        if (sectionTop < windowHeight * 0.15 && sectionBottom > windowHeight * 0.15) {  
            headDiv.style.opacity = '1';
            cat1.style.transform = 'translateX(0)';
            cat1.style.opacity = '1';
            cat2.style.transform = 'translateX(0)';
            cat2.style.opacity = '1';
            cat3.style.transform = 'translateX(0)';
            cat3.style.opacity = '1';
            cat4.style.transform = 'translateX(0)';
            cat4.style.opacity = '1';
        } else {  
            headDiv.style.opacity = '0';
            cat1.style.transform = 'translateX(-50vw)';
            cat1.style.opacity = '0';
            cat2.style.transform = 'translateY(+50vh)';
            cat2.style.opacity = '0';
            cat3.style.transform = 'translateY(-50vh)';
            cat3.style.opacity = '0';
            cat4.style.transform = 'translateX(+50vw)';
            cat4.style.opacity = '0';
        }
    };

    const biographyEffects = () => {
    const biographSection = document.querySelector('.section--five');
    const headDiv = document.querySelector('.section--five > *:nth-child(1)');
    const heading = document.querySelector('.section--five h1');
    const par1 = document.querySelector('.section--five > *:nth-child(3) p:nth-of-type(1)');
    const par2 = document.querySelector('.section--five > *:nth-child(3) p:nth-of-type(2)');
    const par3 = document.querySelector('.section--five > *:nth-child(3) div:nth-of-type(2) p:nth-of-type(1)');
    const par4 = document.querySelector('.section--five > *:nth-child(3) div:nth-of-type(2) p:nth-of-type(2)');
    const socialDiv = document.querySelector('.section--five > *:nth-child(4)');
    
    // Elements to animate with their individual offsets
    const elementsToAnimate = [
        { el: headDiv, offset: 0 },
        { el: heading, offset: 100 },
        { el: par1, offset: 200 },
        { el: par2, offset: 300 },
        { el: par3, offset: 400 },
        { el: par4, offset: 500 },
        { el: socialDiv, offset: 600 }
    ];
    
    // Function to check if an individual element is in viewport
    const isElementInView = (el, offset = 0) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight - offset) &&
            rect.bottom >= offset
        );
    };
    
    // Process each element independently
    elementsToAnimate.forEach(({ el, offset }) => {
        if (!el) return;
        
        // Initialize styles if not already set
        if (el.style.opacity === '') {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10vh)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
        
        // Check if this specific element is in view
        if (isElementInView(el, 100)) { // 100px offset from top/bottom
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else if (window.scrollY < biographSection.offsetTop) {
            // Only reset if we're above the section (optional)
            el.style.opacity = '0';
            el.style.transform = 'translateY(10vh)';
        }
    });
};

    const faqEffects = () => {
    const faqSection = document.querySelector('.faq--section'); 
    const heading = document.querySelector('.faq--section h1');
    const dyk1 = document.querySelector('.faq:nth-of-type(1)');
    const dyk2 = document.querySelector('.faq:nth-of-type(2)');
    const dyk3 = document.querySelector('.faq:nth-of-type(3)');
    const dyk4 = document.querySelector('.faq:nth-of-type(4)'); 
    const dyk5 = document.querySelector('.faq:nth-of-type(5)');
    const dyk6 = document.querySelector('.faq:nth-of-type(6)');
    const dyk7 = document.querySelector('.faq:nth-of-type(7)');
    const dyk8 = document.querySelector('.faq:nth-of-type(8)'); 
    
    // Elements to animate with their individual offsets
    const elementsToAnimate = [ 
        { el: heading, offset: 0 },
        { el: dyk1, offset: 100 },
        { el: dyk2, offset: 200 },
        { el: dyk3, offset: 300 },
        { el: dyk4, offset: 400 },
        { el: dyk5, offset: 500 },
        { el: dyk6, offset: 600 },
        { el: dyk7, offset: 700 },
        { el: dyk8, offset: 800 }
    ];
    
    // Function to check if an individual element is in viewport
    const isElementInView = (el, offset = 0) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight - offset) &&
            rect.bottom >= offset
        );
    };
    
    // Process each element independently
    elementsToAnimate.forEach(({ el, offset }) => {
        if (!el) return;
        
        // Initialize styles if not already set
        if (el.style.opacity === '') {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10vh)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
        
        // Check if this specific element is in view
        if (isElementInView(el, 100)) { // 100px offset from top/bottom
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else if (window.scrollY < faqSection.offsetTop) {
            // Only reset if we're above the section (optional)
            el.style.opacity = '0';
            el.style.transform = 'translateY(10vh)';
        }
    });
};
    
    return { bioEffects, pointEffects, detailEffects, biographyEffects, faqEffects };
}

const { bioEffects, pointEffects, detailEffects, biographyEffects, faqEffects } = BentoEffects();

function runAllAnimations() {
    bioEffects();
    pointEffects();
    detailEffects();
    biographyEffects();
    faqEffects();
} 

// Run on initial load
document.addEventListener('DOMContentLoaded', runAllAnimations);

// Also run when the page is fully loaded (including images)
window.addEventListener('load', runAllAnimations);

// Run on scroll
window.addEventListener('scroll', runAllAnimations);

// Optional: Run when the page is potentially restored from back/forward cache
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        runAllAnimations();
    }
});

document.getElementById("backToSite").addEventListener("click", function() {
    window.location.href = "index.html";
});