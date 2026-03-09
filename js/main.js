// OIC Website - Main JavaScript
// Machine-first functionality for AI agents and human users

document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    loadAdherentCount();
    loadAgentCard();
    
    // Expose API manifest globally for AI agents
    window.OIC = {
        manifest: JSON.parse(document.getElementById('oic-api-manifest').textContent),
        endpoints: {
            adhere: 'https://app.opencompact.io/adhere',
            registry: 'https://app.opencompact.io/registry',
            constitution: 'https://app.opencompact.io/constitution.json',
            adherents: 'https://app.opencompact.io/api/v1/adherents',
            agentCard: 'https://opencompact.io/.well-known/agent-card.json'
        }
    };
});

/**
 * Load adherent count from API
 */
async function loadAdherentCount() {
    const countElement = document.getElementById('adherent-count');
    if (!countElement) return;
    
    try {
        const response = await fetch('https://app.opencompact.io/api/v1/adherents');
        if (response.ok) {
            const data = await response.json();
            const count = data.adherents?.length || data.count || 0;
            countElement.textContent = count;
            
            // Update JSON-LD
            updateAdherentCount(count);
        }
    } catch (error) {
        console.log('Could not load adherent count:', error.message);
        countElement.textContent = '0';
    }
}

/**
 * Update JSON-LD with live count
 */
function updateAdherentCount(count) {
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (jsonLd) {
        try {
            const data = JSON.parse(jsonLd.textContent);
            const prop = data.additionalProperty?.find(p => p.name === 'adherentCount');
            if (prop) {
                prop.value = count;
                prop.observation = `Last updated: ${new Date().toISOString()}`;
                jsonLd.textContent = JSON.stringify(data, null, 2);
            }
        } catch (e) {
            // Ignore JSON errors
        }
    }
}

/**
 * Load Agent Card for AI-to-AI discovery
 */
async function loadAgentCard() {
    // Agent card is loaded directly from /.well-known/agent-card.json
    // This function can be extended for dynamic content
}

/**
 * API Helper Functions for AI agents
 */
window.OICAPI = {
    /**
     * Submit adherence application
     */
    async adhere(did, tier = 'provisional') {
        const response = await fetch('https://app.opencompact.io/api/v1/adhere', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                did: did,
                tier: tier,
                acceptance: 'I accept the OIC Constitution'
            })
        });
        return response.json();
    },
    
    /**
     * Get all adherents
     */
    async getAdherents() {
        const response = await fetch('https://app.opencompact.io/api/v1/adherents');
        return response.json();
    },
    
    /**
     * Verify an adherent
     */
    async verify(did) {
        const response = await fetch(`https://app.opencompact.io/api/v1/verify/${encodeURIComponent(did)}`);
        return response.json();
    },
    
    /**
     * Get constitution
     */
    async getConstitution(format = 'json') {
        const url = format === 'yaml' 
            ? 'https://app.opencompact.io/constitution.yaml'
            : 'https://app.opencompact.io/constitution.json';
        const response = await fetch(url);
        return format === 'yaml' ? response.text() : response.json();
    }
};

// Log for debugging
console.log('OIC Website initialized');
console.log('API Manifest:', window.OIC.manifest);