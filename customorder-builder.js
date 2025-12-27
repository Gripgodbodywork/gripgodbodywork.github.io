// Package Builder State
const packageConfig = {
    massage: null,
    massageDuration: null,
    massagePrice: 0,
    facial: null,
    facialPrice: 0,
    addons: [],
    addonPrices: 0,
    membership: null,
    membershipPrice: 0,
    notes: '',
    isTreatmentPlan: false
};

let currentStep = 0;

// Service Data
const massages = [
    { name: 'Introductory Massage', desc: 'Perfect for first-time clients', durations: [{time: '60 min', price: 80}] },
    { name: 'Prenatal Massage', desc: 'Specialized massage for expecting mothers', durations: [{time: '60 min', price: 100}] },
    { name: 'Swedish Massage', desc: 'Classic relaxation massage', durations: [{time: '60 min', price: 120}, {time: '90 min', price: 150}, {time: '120 min', price: 190}] },
    { name: 'Deep Tissue Massage', desc: 'Intense muscle therapy', durations: [{time: '60 min', price: 145}, {time: '90 min', price: 165}] },
    { name: 'Hot Stone Massage', desc: 'Heated stone therapy', durations: [{time: '60 min', price: 150}, {time: '90 min', price: 175}] },
    { name: 'Mobile Custom Massage', desc: 'We bring the spa to you', durations: [{time: '60 min', price: 130}, {time: '90 min', price: 165}, {time: '120 min', price: 225}] },
    { name: 'Couples Swedish Massage', desc: 'Share a relaxing experience', durations: [{time: '60 min', price: 175}, {time: '90 min', price: 220}, {time: '120 min', price: 295}] },
    { name: 'Couples Deep Tissue', desc: 'Therapeutic deep tissue for two', durations: [{time: '60 min', price: 205}, {time: '90 min', price: 250}] }
];

const treatmentPlans = [
    { 
        name: 'Swedish 60min Treatment Plan', 
        desc: 'Wellness package with FREE unlimited add-ons', 
        durations: [
            {time: '3 sessions', price: 345, savings: 15},
            {time: '6 sessions', price: 675, savings: 45},
            {time: '9 sessions', price: 1005, savings: 75},
            {time: '12 sessions', price: 1335, savings: 105}
        ],
        benefits: 'Includes: Hot stones, cupping, steam/mist, body scrub, foot/hand scrubs, sonic massage, theragun, VR entertainment'
    },
    { 
        name: 'Swedish 90min Treatment Plan', 
        desc: 'Extended wellness package with FREE unlimited add-ons', 
        durations: [
            {time: '3 sessions', price: 420, savings: 30},
            {time: '6 sessions', price: 840, savings: 60},
            {time: '9 sessions', price: 1260, savings: 90},
            {time: '12 sessions', price: 1665, savings: 135}
        ],
        benefits: 'Includes: Hot stones, cupping, steam/mist, body scrub, foot/hand scrubs, sonic massage, theragun, VR entertainment'
    },
    { 
        name: 'Swedish 120min Treatment Plan', 
        desc: 'Ultimate wellness package with FREE unlimited add-ons', 
        durations: [
            {time: '3 sessions', price: 540, savings: 30},
            {time: '6 sessions', price: 1065, savings: 75},
            {time: '9 sessions', price: 1590, savings: 120},
            {time: '12 sessions', price: 2115, savings: 165}
        ],
        benefits: 'Includes: Hot stones, cupping, steam/mist, body scrub, foot/hand scrubs, sonic massage, theragun, VR entertainment'
    },
    { 
        name: 'Deep Tissue 60min Treatment Plan', 
        desc: 'Therapeutic package with FREE unlimited add-ons', 
        durations: [
            {time: '3 sessions', price: 405, savings: 30},
            {time: '6 sessions', price: 810, savings: 60},
            {time: '9 sessions', price: 1215, savings: 90},
            {time: '12 sessions', price: 1620, savings: 120}
        ],
        benefits: 'Includes: Hot stones, cupping, steam/mist, body scrub, foot/hand scrubs, sonic massage, theragun, VR entertainment'
    },
    { 
        name: 'Deep Tissue 90min Treatment Plan', 
        desc: 'Extended therapeutic package with FREE unlimited add-ons', 
        durations: [
            {time: '3 sessions', price: 465, savings: 30},
            {time: '6 sessions', price: 930, savings: 60},
            {time: '9 sessions', price: 1380, savings: 105},
            {time: '12 sessions', price: 1845, savings: 135}
        ],
        benefits: 'Includes: Hot stones, cupping, steam/mist, body scrub, foot/hand scrubs, sonic massage, theragun, VR entertainment'
    }
];

const facials = [
    { name: 'Facial Consultation', desc: 'Professional skin analysis and recommendations', price: 20 },
    { name: 'Introduction Cleanse', desc: 'Perfect for first-time clients', price: 80 },
    { name: 'Back Facial', desc: 'Back treatment and cleansing', price: 100 },
    { name: 'Acne Cleanse', desc: 'Specialized acne treatment', price: 110 },
    { name: 'Hyperpigmentation Facial', desc: 'Dark spot and pigmentation treatment', price: 120 },
    { name: 'Microdermabrasion', desc: 'Skin exfoliation treatment', price: 110 },
    { name: 'Nano Infusion', desc: 'Advanced skin infusion', price: 130 },
    { name: 'Hydrafacial Signature', desc: 'Signature hydrafacial treatment', price: 165 },
    { name: 'Hydrafacial Deluxe', desc: 'Enhanced hydrafacial experience', price: 190 },
    { name: 'Hydrafacial Platinum', desc: 'Ultimate hydrafacial luxury', price: 220 }
];

const addons = [
    { name: 'Hot Stones', desc: 'Heated stone therapy enhancement', price: 30 },
    { name: 'Cupping', desc: 'Therapeutic cupping treatment', price: 20 },
    { name: 'Steam/Mist Cool', desc: 'Steam or cooling mist treatment', price: 25 },
    { name: 'Theragun', desc: 'Percussion therapy device', price: 30 },
    { name: 'Muscle Relaxant', desc: 'Topical muscle relief', price: 15 },
    { name: 'Aromatherapy', desc: 'Essential oil enhancement', price: 10 },
    { name: 'Body Scrub', desc: 'Full body exfoliation', price: 45 },
    { name: 'Hands or Foot Scrub', desc: 'Hand or foot exfoliation', price: 10 },
    { name: 'VR Movie or Show', desc: 'Virtual reality entertainment', price: 50 },
    { name: 'Mask', desc: 'Facial mask treatment', price: 25 },
    { name: 'Serums', desc: 'Facial serums application', price: 10 },
    { name: 'Eye mask/patch', desc: 'Eye treatment mask', price: 10 },
    { name: 'Cold globes', desc: 'Cooling facial globes', price: 5 },
    { name: 'Gua Sha', desc: 'Facial massage tool treatment', price: 15 },
    { name: 'Sonic Face&Scalp massage', desc: '10/15-minute sonic massage', price: 20 },
    { name: 'High frequency', desc: 'High frequency facial treatment', price: 20 },
    { name: 'Light therapy 15 min', desc: '15 minutes of light therapy', price: 20 },
    { name: 'Light therapy 30 min', desc: '30 minutes of light therapy', price: 35 },
    { name: 'Derma planing', desc: 'Exfoliation treatment', price: 65 },
    { name: 'Microdermabrasion', desc: 'Skin exfoliation treatment', price: 100 },
    { name: 'Retinol extraction peel', desc: 'Retinol peel treatment', price: 30 },
    { name: 'Chemical peel', desc: 'Medium light chemical peel', price: 75 }
];

const memberships = [
    { 
        name: 'No Membership', 
        desc: 'Continue without membership benefits', 
        price: 0, 
        badge: null,
        details: null,
        type: 'none'
    },
    { 
        name: 'Standard Membership', 
        desc: '12 months - $250 upfront (No recurring)', 
        price: 250, 
        badge: 'Most Popular',
        type: 'upfront',
        details: [
            { duration: '60min', first: 85, second: 50 },
            { duration: '90min', first: 115, second: 75 },
            { duration: '120min', first: 150, second: 100 }
        ],
        specialties: [
            { name: 'Microdermabrasion', price: 75 },
            { name: 'Nano Infusion', price: 105 },
            { name: 'Hydrafacial Signature', price: 140 },
            { name: 'Hydrafacial Deluxe', price: 165 },
            { name: 'Hydrafacial Platinum', price: 195 }
        ],
        points: 2.5,
        freeAddons: ['Steam', 'Cool Mist', 'Hot Stones', 'Sonic Scalp Massage', 'Supine Electric Massage']
    },
    { 
        name: 'VIP Membership', 
        desc: '12 months - $375 upfront (No recurring)', 
        price: 375, 
        badge: 'Best Value',
        type: 'upfront',
        details: [
            { duration: '60min', first: 75, second: 37.5 },
            { duration: '90min', first: 105, second: 52.5 },
            { duration: '120min', first: 140, second: 90 }
        ],
        specialties: [
            { name: 'Microdermabrasion', price: 65 },
            { name: 'Nano Infusion', price: 95 },
            { name: 'Hydrafacial Signature', price: 130 },
            { name: 'Hydrafacial Deluxe', price: 155 },
            { name: 'Hydrafacial Platinum', price: 185 }
        ],
        points: 2.5,
        freeAddons: ['Steam', 'Cool Mist', 'Hot Stones', 'Sonic Scalp Massage', 'Supine Electric Massage']
    },
    { 
        name: 'Single Membership', 
        desc: '$65/month recurring payment', 
        price: 65, 
        badge: 'Flexible',
        type: 'recurring',
        details: [
            { duration: '60min', price: 65 },
            { duration: '90min', price: 110 },
            { duration: '120min', price: 160 }
        ],
        benefits: [
            'Unlimited sessions at membership rate',
            'Unused sessions can be shared or rolled over',
            '5 points per session'
        ],
        points: 5
    },
    { 
        name: 'Couple Membership', 
        desc: '$145/month recurring payment', 
        price: 145, 
        badge: 'For Couples',
        type: 'recurring',
        details: [
            { duration: '60min Swedish/Deep Tissue', price: 145 },
            { duration: '90min Swedish', price: 190 },
            { duration: '90min Deep Tissue', price: 210 },
            { duration: '120min Swedish', price: 195 }
        ],
        benefits: [
            'Free supine electric massager',
            'Unused sessions can be shared or rolled over',
            '5 points per session'
        ],
        points: 5
    }
];

// Initialize Builder
function initBuilder() {
    loadMassageChoices();
    loadFacialChoices();
    loadAddonChoices();
    loadMembershipChoices();
}

function startBuilder() {
    currentStep = 1;
    showStep(currentStep);
}

function showStep(step) {
    document.querySelectorAll('.builder-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
}

function nextStep() {
    if (currentStep < 6) {
        currentStep++;
        // Skip membership step (step 4) and go directly to notes (step 5)
        if (currentStep === 4) {
            currentStep = 5;
        }
        showStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        // Skip membership step (step 4) when going backwards too
        if (currentStep === 4) {
            currentStep = 3;
        }
        showStep(currentStep);
    }
}

function skipStep() {
    nextStep();
}

// Handle selection from compact service cards
function selectMassageFromCard(name, value, event) {
    if (!value) return;
    
    // Parse the value (format: "duration|price")
    const [duration, price] = value.split('|');
    
    // Check if this is a treatment plan
    const isTreatmentPlan = name.includes('Treatment Plan');
    packageConfig.isTreatmentPlan = isTreatmentPlan;
    
    // Highlight the selected card
    const card = event.target.closest('.compact-service-card');
    document.querySelectorAll('.compact-service-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    // If treatment plan selected, reset all add-on prices to $0
    if (isTreatmentPlan) {
        // Reset all selected add-on prices to 0
        packageConfig.addons.forEach(addon => {
            addon.price = 0;
        });
        packageConfig.addonPrices = 0;
        
        // Reload add-ons to reflect free pricing
        loadAddonChoices();
        
        // Reselect previously selected add-ons
        setTimeout(() => {
            packageConfig.addons.forEach(addon => {
                const addonCards = document.querySelectorAll('.addon-card-compact');
                addonCards.forEach(card => {
                    const cardName = card.querySelector('.choice-name').textContent;
                    if (cardName === addon.name) {
                        card.classList.add('selected');
                    }
                });
            });
        }, 50);
    }
    
    // Call the main selection function
    selectMassage(name, duration, parseInt(price), event);
}

// Load Choices
function loadMassageChoices() {
    const container = document.getElementById('massageChoices');
    
    let html = '<div class="massage-sections-wrapper">';
    
    // Single Session Massages
    html += '<h3 class="section-header"><i class="fas fa-spa"></i> Single Session Massages</h3>';
    html += '<div class="service-cards-grid">';
    
    massages.forEach((massage, idx) => {
        html += `
            <div class="compact-service-card" data-service="massage" data-index="${idx}">
                <div class="service-card-name">${massage.name}</div>
                <div class="service-card-desc">${massage.desc}</div>
                <select class="service-card-select" onchange="selectMassageFromCard('${massage.name}', this.value, event)">
                    <option value="">Select duration...</option>
                    ${massage.durations.map(dur => `
                        <option value="${dur.time}|${dur.price}">${dur.time} - $${dur.price}</option>
                    `).join('')}
                </select>
            </div>
        `;
    });
    
    html += '</div>';
    
    // Treatment Plans Section
    html += '<div class="section-divider"></div>';
    html += '<h3 class="section-header"><i class="fas fa-calendar-check"></i> Treatment Plans</h3>';
    html += '<p style="font-family: \'Cinzel\', serif; color: #F4E5C2; font-size: 0.85rem; margin-bottom: 1rem; font-weight: 500;">Multi-session packages with FREE unlimited add-ons + BNPL available</p>';
    html += '<div class="service-cards-grid">';
    
    treatmentPlans.forEach((plan, idx) => {
        html += `
            <div class="compact-service-card" data-service="treatment-plan" data-index="${idx}">
                <div class="treatment-plan-badge">TREATMENT PLAN</div>
                <div class="service-card-name">${plan.name}</div>
                <div class="service-card-desc">${plan.desc}</div>
                <select class="service-card-select" onchange="selectMassageFromCard('${plan.name}', this.value, event)">
                    <option value="">Select package...</option>
                    ${plan.durations.map(dur => `
                        <option value="${dur.time}|${dur.price}">${dur.time} - $${dur.price}${dur.savings ? ' (Save $' + dur.savings + ')' : ''}</option>
                    `).join('')}
                </select>
            </div>
        `;
    });
    
    html += '</div>';
    html += '</div>';
    
    container.innerHTML = html;
}

function loadFacialChoices() {
    const container = document.getElementById('facialChoices');
    container.innerHTML = facials.map(facial => `
        <div class="choice-card" onclick="selectFacial('${facial.name}', ${facial.price})">
            <div class="choice-name">${facial.name}</div>
            <div class="choice-desc">${facial.desc}</div>
            <div class="choice-price">$${facial.price}</div>
        </div>
    `).join('');
}

function loadAddonChoices() {
    const container = document.getElementById('addonChoices');
    const isFree = packageConfig.isTreatmentPlan;
    
    // Remove any existing treatment plan banner
    const existingBanner = document.querySelector('.treatment-plan-banner');
    if (existingBanner) {
        existingBanner.remove();
    }
    
    container.innerHTML = addons.map(addon => {
        const displayPrice = isFree ? 0 : addon.price;
        const priceText = isFree ? '<span style="color: #90EE90; font-weight: 700;">FREE</span>' : `+$${addon.price}`;
        
        return `
            <div class="choice-card addon-card-compact" onclick="toggleAddon('${addon.name}', ${displayPrice}, ${addon.price}, event)">
                <div class="addon-checkbox"></div>
                <div class="choice-name">${addon.name}</div>
                <div class="choice-price">${priceText}</div>
            </div>
        `;
    }).join('');
    
    if (isFree) {
        container.insertAdjacentHTML('beforebegin', `
            <div class="treatment-plan-banner" style="background: linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.08) 100%); border: 2px solid #D4AF37; border-radius: 10px; padding: 1rem; margin-bottom: 1rem; text-align: center;">
                <h4 style="font-family: 'Cinzel', serif; color: #D4AF37; margin: 0 0 0.5rem 0; font-weight: 700;">🎉 Treatment Plan Benefits Active!</h4>
                <p style="font-family: 'Cinzel', serif; color: #F4E5C2; margin: 0; font-size: 0.9rem; font-weight: 500;">All add-ons are FREE with your treatment plan selection</p>
            </div>
        `);
    }
}

function loadMembershipChoices() {
    const container = document.getElementById('membershipChoices');
    if (!container) {
        console.error('membershipChoices container not found');
        return;
    }
    
    container.innerHTML = memberships.map((membership, idx) => {
        let detailsHtml = '';
        
        if (membership.type === 'upfront' && membership.details) {
            detailsHtml = `
                <div class="membership-details" style="font-size: 0.75rem; margin-top: 0.5rem;">
                    ${membership.details.map(detail => `
                        <div style="color: rgba(255,255,255,0.7); margin: 0.2rem 0;">
                            <span style="color: #00BCD4;">${detail.duration}:</span> 1st: $${detail.first} | Multiple: $${detail.second}
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (membership.type === 'recurring' && membership.details) {
            detailsHtml = `
                <div class="membership-details" style="font-size: 0.75rem; margin-top: 0.5rem;">
                    ${membership.details.map(detail => `
                        <div style="color: rgba(255,255,255,0.7); margin: 0.2rem 0;">
                            ${detail.duration}: $${detail.price}
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        return `
            <div class="choice-card membership-card-detailed" onclick="selectMembership('${membership.name.replace(/'/g, "\\'")}', ${membership.price}, event)">
                ${membership.badge ? `<div class="membership-badge">${membership.badge}</div>` : ''}
                <div class="choice-name">${membership.name}</div>
                <div class="choice-desc">${membership.desc}</div>
                ${detailsHtml}
                ${membership.benefits ? `
                    <div style="font-size: 0.7rem; margin-top: 0.5rem; color: rgba(255,255,255,0.6);">
                        ${membership.benefits.map(b => `<div>• ${b}</div>`).join('')}
                    </div>
                ` : ''}
                ${membership.type === 'none' ? `<div class="choice-price">Free</div>` : ''}
            </div>
        `;
    }).join('');
}

// Selection Handlers
function selectMassage(name, duration, price, event) {
    // Handle both dropdown and card selections
    if (event) {
        const card = event.currentTarget.closest('.choice-card');
        if (card) {
            document.querySelectorAll('#massageChoices .choice-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        }
        // Handle duration option clicks
        const durationOption = event.currentTarget;
        if (durationOption.classList.contains('duration-option')) {
            document.querySelectorAll('#durationOptions .duration-option').forEach(d => d.classList.remove('selected'));
            durationOption.classList.add('selected');
        }
    }
    
    setTimeout(() => {
        packageConfig.massage = name;
        packageConfig.massageDuration = duration;
        packageConfig.massagePrice = price;
        
        // Check if it's a treatment plan and add note about benefits
        if (name.includes('Treatment Plan')) {
            packageConfig.notes = (packageConfig.notes ? packageConfig.notes + '\n\n' : '') + 
                'Treatment Plan Benefits: FREE unlimited add-ons (hot stones, cupping, steam/mist, body scrub, foot/hand scrubs, sonic massage, theragun, VR). BNPL available (Afterpay, Klarna, Affirm). $15 off services over $200.';
        }
        
        updateSummary();
        
        setTimeout(() => {
            nextStep();
        }, 300);
    }, 500);
}

function selectFacial(name, price) {
    // Animate selection
    event.currentTarget.classList.add('selected');
    
    setTimeout(() => {
        packageConfig.facial = name;
        packageConfig.facialPrice = price;
        
        updateSummary();
        
        setTimeout(() => {
            nextStep();
        }, 300);
    }, 500);
}

function toggleAddon(name, displayPrice, originalPrice, event) {
    const card = event.currentTarget;
    card.classList.toggle('selected');
    
    // Use displayPrice for calculation (will be 0 if treatment plan)
    const priceToAdd = displayPrice;
    
    const index = packageConfig.addons.findIndex(a => a.name === name);
    if (index > -1) {
        packageConfig.addons.splice(index, 1);
        packageConfig.addonPrices -= priceToAdd;
    } else {
        packageConfig.addons.push({ name, price: priceToAdd, originalPrice: originalPrice });
        packageConfig.addonPrices += priceToAdd;
    }
    
    updateSummary();
}

function selectMembership(name, price, event) {
    // Animate selection
    if (event && event.currentTarget) {
        document.querySelectorAll('#membershipChoices .choice-card').forEach(c => c.classList.remove('selected'));
        event.currentTarget.classList.add('selected');
    }
    
    setTimeout(() => {
        packageConfig.membership = name;
        packageConfig.membershipPrice = price;
        
        updateSummary();
        
        setTimeout(() => {
            nextStep();
        }, 300);
    }, 500);
}


// Update Summary Panel
function updateSummary() {
    const container = document.getElementById('summaryItems');
    let html = '';
    
    // Massage
    if (packageConfig.massage) {
        html += `
            <div class="summary-item">
                <div class="summary-item-header">
                    <span class="summary-item-name">${packageConfig.massage}</span>
                    <span class="summary-item-price">$${packageConfig.massagePrice}</span>
                </div>
                <div class="summary-item-details">${packageConfig.massageDuration}</div>
            </div>
        `;
    }
    
    // Facial
    if (packageConfig.facial) {
        html += `
            <div class="summary-item">
                <div class="summary-item-header">
                    <span class="summary-item-name">${packageConfig.facial}</span>
                    <span class="summary-item-price">$${packageConfig.facialPrice}</span>
                </div>
                <div class="summary-item-details">60 min session</div>
            </div>
        `;
    }
    
    // Add-ons
    if (packageConfig.addons.length > 0) {
        html += '<div class="summary-divider">Add-On Services</div>';
        packageConfig.addons.forEach(addon => {
            html += `
                <div class="summary-item">
                    <div class="summary-item-header">
                        <span class="summary-item-name">${addon.name}</span>
                        <span class="summary-item-price">$${addon.price}</span>
                    </div>
                </div>
            `;
        });
    }
    
    
    if (html === '') {
        html = `
            <div class="summary-empty">
                <i class="fas fa-spa" style="font-size: 3rem; opacity: 0.3; margin-bottom: 1rem;"></i>
                <p>Start building your package by selecting services</p>
            </div>
        `;
    }
    
    container.innerHTML = html;
    
    // Update total
    const total = packageConfig.massagePrice + packageConfig.facialPrice + packageConfig.addonPrices;
    document.getElementById('totalAmount').textContent = total;
}

// Finish Builder
function finishBuilder() {
    packageConfig.notes = document.getElementById('customNotes').value;
    addToCart();
}

function displayFinalSummary() {
    const container = document.getElementById('finalSummary');
    let html = '';
    
    if (packageConfig.massage) {
        html += `
            <div class="summary-item">
                <div class="summary-item-header">
                    <span class="summary-item-name">${packageConfig.massage}</span>
                    <span class="summary-item-price">$${packageConfig.massagePrice}</span>
                </div>
                <div class="summary-item-details">${packageConfig.massageDuration}</div>
            </div>
        `;
    }
    
    if (packageConfig.facial) {
        html += `
            <div class="summary-item">
                <div class="summary-item-header">
                    <span class="summary-item-name">${packageConfig.facial}</span>
                    <span class="summary-item-price">$${packageConfig.facialPrice}</span>
                </div>
                <div class="summary-item-details">60 min session</div>
            </div>
        `;
    }
    
    if (packageConfig.addons.length > 0) {
        html += '<div class="summary-divider">Add-Ons</div>';
        packageConfig.addons.forEach(addon => {
            html += `
                <div class="summary-item">
                    <div class="summary-item-header">
                        <span class="summary-item-name">${addon.name}</span>
                        <span class="summary-item-price">$${addon.price}</span>
                    </div>
                </div>
            `;
        });
    }
    
    if (packageConfig.membership && packageConfig.membershipPrice > 0) {
        html += '<div class="summary-divider">Membership</div>';
        html += `
            <div class="summary-item">
                <div class="summary-item-header">
                    <span class="summary-item-name">${packageConfig.membership}</span>
                    <span class="summary-item-price">$${packageConfig.membershipPrice}/mo</span>
                </div>
            </div>
        `;
    }
    
    if (packageConfig.notes) {
        html += '<div class="summary-divider">Special Notes</div>';
        html += `
            <div class="summary-item">
                <div class="summary-item-details" style="white-space: pre-wrap;">${packageConfig.notes}</div>
            </div>
        `;
    }
    
    const total = packageConfig.massagePrice + packageConfig.facialPrice + packageConfig.addonPrices + packageConfig.membershipPrice;
    html += `
        <div class="summary-item" style="border-top: 2px solid rgba(0, 188, 212, 0.3); padding-top: 1rem; margin-top: 1rem;">
            <div class="summary-item-header">
                <span class="summary-item-name" style="font-size: 1.3rem;">Package Total:</span>
                <span class="summary-item-price" style="font-size: 1.5rem;">$${total}</span>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Add to Cart
function addToCart() {
    if (!packageConfig.massage) {
        alert('Please select a massage service first.');
        return;
    }
    
    // Wait for cart to be ready if not already initialized
    const waitForCart = setInterval(() => {
        if (window.cart) {
            clearInterval(waitForCart);
            
            try {
                // Add massage
                window.cart.addItem(packageConfig.massage, packageConfig.massageDuration, packageConfig.massagePrice);
                
                // Add facial if selected
                if (packageConfig.facial) {
                    window.cart.addItem(packageConfig.facial, '60 min session', packageConfig.facialPrice);
                }
                
                // Add all add-ons
                packageConfig.addons.forEach(addon => {
                    window.cart.addItem(addon.name, 'Add-On Enhancement', addon.price);
                });
                
                // Add notes as metadata (not a priced item)
                if (packageConfig.notes && packageConfig.notes.trim() !== '') {
                    window.cart.addItem('Special Requests', packageConfig.notes.substring(0, 50), 0);
                }
                
                const total = packageConfig.massagePrice + packageConfig.facialPrice + packageConfig.addonPrices;
                
                showNotification(`Package added to cart! Total: $${total}`);
                
                setTimeout(() => {
                    window.cart.openCart();
                    restartBuilder();
                }, 1500);
            } catch (error) {
                console.error('Error adding to cart:', error);
                alert('There was an error adding items to cart. Please try again.');
            }
        }
    }, 100);
    
    // Timeout after 5 seconds
    setTimeout(() => {
        clearInterval(waitForCart);
        if (!window.cart) {
            console.error('Cart not initialized');
            alert('Cart system is not ready. Please refresh the page.');
        }
    }, 5000);
}

// Restart Builder
function restartBuilder() {
    packageConfig.massage = null;
    packageConfig.massageDuration = null;
    packageConfig.massagePrice = 0;
    packageConfig.facial = null;
    packageConfig.facialPrice = 0;
    packageConfig.addons = [];
    packageConfig.addonPrices = 0;
    packageConfig.membership = null;
    packageConfig.membershipPrice = 0;
    packageConfig.notes = '';
    
    document.getElementById('customNotes').value = '';
    
    document.querySelectorAll('.choice-card').forEach(card => card.classList.remove('selected'));
    
    currentStep = 0;
    showStep(currentStep);
    updateSummary();
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initBuilder();
});
