// Complete product catalog with detailed information
export const products = [
    {
        id: 1,
        name: 'Lumina Glow Serum',
        category: 'Serums',
        price: '$85.00',
        image: '/assets/lumina_glow_serum.png',
        rating: 4.9,
        reviews: 128,
        bestseller: true,
        description: 'A powerful vitamin C serum formulated specifically for melanin-rich skin. This lightweight, fast-absorbing formula brightens dark spots and evens skin tone without irritation.',
        benefits: [
            'Fades hyperpigmentation and dark spots in 3-4 weeks',
            'Boosts radiance for a natural, healthy glow',
            'Protects against environmental damage',
            'Safe for sensitive and melanin-rich skin',
            'Non-irritating, stable vitamin C formula'
        ],
        painPoint: 'Tired of dark spots and uneven skin tone that won\'t fade? Our Glow Serum is specifically formulated to address hyperpigmentation in melanin-rich skin without harsh ingredients.',
        ingredients: 'Vitamin C (15%), Niacinamide, Hyaluronic Acid, Ferulic Acid',
        howToUse: 'Apply 3-4 drops to clean, dry skin morning and evening. Follow with moisturizer and SPF during the day.'
    },
    {
        id: 2,
        name: 'Velvet Moisture Cream',
        category: 'Moisturizers',
        price: '$65.00',
        image: '/assets/velvet_moisture_cream.png',
        rating: 4.8,
        reviews: 94,
        bestseller: true,
        description: 'A luxuriously rich yet lightweight moisturizer that delivers deep hydration without heaviness. Perfect for dry, dehydrated skin that needs intense nourishment.',
        benefits: [
            'Provides 24-hour deep hydration',
            'Strengthens skin barrier function',
            'Reduces dryness and flakiness',
            'Silky, non-greasy finish',
            'Suitable for all skin types, especially dry skin'
        ],
        painPoint: 'Does your skin feel tight and uncomfortable by midday? This cream locks in moisture all day long, keeping your skin soft, supple, and comfortable.',
        ingredients: 'Hyaluronic Acid, Ceramides, Squalane, Shea Butter, Peptides',
        howToUse: 'Apply to face and neck morning and evening after serums. Gently massage until fully absorbed.'
    },
    {
        id: 3,
        name: 'Purify Gel Cleanser',
        category: 'Cleansers',
        price: '$45.00',
        image: '/assets/purify_gel_cleanser.png',
        rating: 4.9,
        reviews: 210,
        bestseller: true,
        description: 'A gentle yet effective gel cleanser that removes impurities, makeup, and excess oil without stripping your skin. Leaves skin clean, balanced, and refreshed.',
        benefits: [
            'Deep cleans without over-drying',
            'Removes makeup and impurities effectively',
            'Balances oil production',
            'pH-balanced formula',
            'Won\'t disrupt skin barrier'
        ],
        painPoint: 'Struggling with cleansers that either don\'t clean enough or leave your skin feeling stripped? This gel cleanser finds the perfect balance.',
        ingredients: 'Salicylic Acid (0.5%), Glycerin, Aloe Vera, Green Tea Extract',
        howToUse: 'Use morning and evening. Massage onto damp skin, rinse thoroughly with lukewarm water.'
    },
    {
        id: 4,
        name: 'Radiance Night Oil',
        category: 'Serums',
        price: '$95.00',
        image: '/assets/radiance_night_oil.png',
        rating: 4.7,
        reviews: 156,
        bestseller: true,
        description: 'An overnight treatment oil packed with antioxidants and nourishing botanicals. Wake up to visibly brighter, smoother, and more radiant skin.',
        benefits: [
            'Repairs and regenerates skin overnight',
            'Boosts radiance and luminosity',
            'Reduces fine lines and wrinkles',
            'Deeply nourishes without greasiness',
            'Packed with antioxidants'
        ],
        painPoint: 'Wake up with dull, tired-looking skin? This luxurious night oil works while you sleep to restore your natural glow.',
        ingredients: 'Rosehip Oil, Marula Oil, Vitamin E, Bakuchiol, Squalane',
        howToUse: 'Apply 3-5 drops to clean skin at night. Gently press into face and neck. Can be used alone or mixed with night cream.'
    },
    {
        id: 5,
        name: 'Bright Eyes Cream',
        category: 'Eye Care',
        price: '$55.00',
        image: '/assets/bright_eyes_cream.png',
        rating: 4.8,
        reviews: 89,
        bestseller: true,
        description: 'A targeted eye cream that tackles dark circles, puffiness, and fine lines. Gentle yet effective formula safe for the delicate eye area.',
        benefits: [
            'Reduces appearance of dark circles',
            'Diminishes puffiness and bags',
            'Smooths fine lines and crow\'s feet',
            'Brightens and awakens eye area',
            'Lightweight, fast-absorbing texture'
        ],
        painPoint: 'Tired of looking tired? Dark circles and puffy eyes making you look exhausted? This eye cream brightens and refreshes for a well-rested appearance.',
        ingredients: 'Caffeine, Vitamin K, Peptides, Niacinamide, Hyaluronic Acid',
        howToUse: 'Gently pat a small amount around eye area morning and evening. Use ring finger for gentle application.'
    },
    {
        id: 6,
        name: 'Exfoliating Toner',
        category: 'Toners',
        price: '$48.00',
        image: '/assets/exfoliating_toner.png',
        rating: 4.9,
        reviews: 178,
        bestseller: true,
        description: 'A gentle chemical exfoliant that refines skin texture, minimizes pores, and reveals smoother, brighter skin. Perfect for achieving that coveted glow.',
        benefits: [
            'Gently exfoliates dead skin cells',
            'Minimizes appearance of pores',
            'Evens skin tone and texture',
            'Prepares skin for better product absorption',
            'Alcohol-free, non-drying formula'
        ],
        painPoint: 'Rough, bumpy skin texture holding you back? This toner gently resurfaces skin for a smooth, refined complexion.',
        ingredients: 'Glycolic Acid (7%), Lactic Acid (3%), Niacinamide, Witch Hazel',
        howToUse: 'Apply to clean skin with cotton pad or hands, avoiding eye area. Use 2-3 times weekly, gradually increasing frequency. Always follow with SPF in the morning.'
    },
    {
        id: 7,
        name: 'Hydrating Face Mist',
        category: 'Toners',
        price: '$38.00',
        image: '/assets/exfoliating_toner.png',
        rating: 4.6,
        reviews: 145,
        bestseller: false,
        description: 'A refreshing facial mist that instantly hydrates and revitalizes skin throughout the day. Perfect for on-the-go hydration and makeup setting.',
        benefits: [
            'Instant hydration boost',
            'Sets makeup beautifully',
            'Refreshes skin anytime',
            'Calms and soothes irritation',
            'Travel-friendly size'
        ],
        painPoint: 'Skin feeling dry and dull by afternoon? This mist provides instant refreshment and hydration whenever you need it.',
        ingredients: 'Rose Water, Hyaluronic Acid, Aloe Vera, Chamomile Extract',
        howToUse: 'Mist over face with eyes closed. Use after cleansing, throughout the day, or to set makeup.'
    },
    {
        id: 8,
        name: 'Renewal Night Cream',
        category: 'Moisturizers',
        price: '$75.00',
        image: '/assets/velvet_moisture_cream.png',
        rating: 4.7,
        reviews: 112,
        bestseller: false,
        description: 'A rich, restorative night cream that works while you sleep to repair, renew, and rejuvenate your skin. Wake up to softer, smoother skin.',
        benefits: [
            'Intensive overnight repair',
            'Reduces signs of aging',
            'Deeply nourishes and hydrates',
            'Improves skin elasticity',
            'Rich, luxurious texture'
        ],
        painPoint: 'Want to wake up with better skin? This night cream maximizes your skin\'s natural repair process while you sleep.',
        ingredients: 'Retinol, Peptides, Ceramides, Shea Butter, Vitamin E',
        howToUse: 'Apply generously to face and neck before bed. Allow to absorb fully.'
    },
    {
        id: 9,
        name: 'Gentle Cleansing Balm',
        category: 'Cleansers',
        price: '$52.00',
        image: '/assets/purify_gel_cleanser.png',
        rating: 4.8,
        reviews: 167,
        bestseller: false,
        description: 'A luxurious cleansing balm that melts away makeup, sunscreen, and impurities. Transforms from balm to oil to milk for a thorough yet gentle cleanse.',
        benefits: [
            'Removes all makeup including waterproof',
            'Gentle on sensitive skin',
            'Nourishes while cleansing',
            'No residue or greasy feeling',
            'Spa-like cleansing experience'
        ],
        painPoint: 'Struggling to remove stubborn makeup without harsh rubbing? This balm effortlessly dissolves everything while nourishing your skin.',
        ingredients: 'Coconut Oil, Jojoba Oil, Vitamin E, Chamomile, Sunflower Oil',
        howToUse: 'Massage onto dry skin to dissolve makeup. Add water to emulsify, then rinse thoroughly. Use as first cleanse in double cleansing routine.'
    }
];

// Group products by category
export const productsByCategory = {
    'Serums': products.filter(p => p.category === 'Serums'),
    'Moisturizers': products.filter(p => p.category === 'Moisturizers'),
    'Cleansers': products.filter(p => p.category === 'Cleansers'),
    'Toners': products.filter(p => p.category === 'Toners'),
    'Eye Care': products.filter(p => p.category === 'Eye Care')
};

// Get bestsellers
export const bestsellers = products.filter(p => p.bestseller);

// Get product by ID
export const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id));
};
