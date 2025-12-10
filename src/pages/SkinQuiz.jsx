import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const SkinQuiz = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 'skinType',
            question: 'How would you describe your skin type?',
            options: [
                { value: 'dry', label: 'Dry - Feels tight and flaky' },
                { value: 'oily', label: 'Oily - Shiny with visible pores' },
                { value: 'combination', label: 'Combination - Oily T-zone, dry cheeks' },
                { value: 'normal', label: 'Normal - Balanced and comfortable' },
                { value: 'sensitive', label: 'Sensitive - Easily irritated' }
            ]
        },
        {
            id: 'concerns',
            question: 'What are your main skin concerns? (Select all that apply)',
            multiple: true,
            options: [
                { value: 'acne', label: 'Acne & Breakouts' },
                { value: 'hyperpigmentation', label: 'Dark Spots & Hyperpigmentation' },
                { value: 'aging', label: 'Fine Lines & Wrinkles' },
                { value: 'dullness', label: 'Dullness & Uneven Tone' },
                { value: 'dryness', label: 'Dryness & Dehydration' },
                { value: 'sensitivity', label: 'Redness & Sensitivity' }
            ]
        },
        {
            id: 'routine',
            question: 'What is your current skincare routine?',
            options: [
                { value: 'minimal', label: 'Minimal - Just cleanser or moisturizer' },
                { value: 'basic', label: 'Basic - Cleanser, moisturizer, sunscreen' },
                { value: 'moderate', label: 'Moderate - 4-6 products daily' },
                { value: 'extensive', label: 'Extensive - 7+ products with treatments' }
            ]
        },
        {
            id: 'goals',
            question: 'What is your primary skincare goal?',
            options: [
                { value: 'hydration', label: 'Deep Hydration & Moisture' },
                { value: 'brightening', label: 'Brightening & Even Tone' },
                { value: 'antiaging', label: 'Anti-Aging & Firmness' },
                { value: 'clearing', label: 'Clear & Blemish-Free Skin' },
                { value: 'maintenance', label: 'Maintain Healthy Skin' }
            ]
        },
        {
            id: 'lifestyle',
            question: 'How much sun exposure do you get daily?',
            options: [
                { value: 'minimal', label: 'Minimal - Mostly indoors' },
                { value: 'moderate', label: 'Moderate - Some outdoor activity' },
                { value: 'high', label: 'High - Frequently outdoors' }
            ]
        }
    ];

    const handleAnswer = (questionId, value) => {
        const question = questions[currentStep];

        if (question.multiple) {
            const currentAnswers = answers[questionId] || [];
            const newAnswers = currentAnswers.includes(value)
                ? currentAnswers.filter(v => v !== value)
                : [...currentAnswers, value];

            setAnswers({ ...answers, [questionId]: newAnswers });
        } else {
            setAnswers({ ...answers, [questionId]: value });
        }
    };

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const canProceed = () => {
        const currentQuestion = questions[currentStep];
        const answer = answers[currentQuestion.id];

        if (currentQuestion.multiple) {
            return answer && answer.length > 0;
        }
        return answer !== undefined;
    };

    const getDiagnosis = () => {
        const skinType = answers.skinType || 'normal';
        const concerns = answers.concerns || [];
        const goal = answers.goals || 'maintenance';

        // Determine skin diagnosis
        let diagnosis = {
            type: skinType,
            title: '',
            description: '',
            recommendations: [],
            products: []
        };

        // Customize based on skin type
        switch (skinType) {
            case 'dry':
                diagnosis.title = 'Dry & Dehydrated Skin';
                diagnosis.description = 'Your skin needs intense hydration and nourishment to restore its natural moisture barrier.';
                diagnosis.recommendations = [
                    'Use a gentle, creamy cleanser',
                    'Apply hydrating serums with hyaluronic acid',
                    'Use rich moisturizers morning and night',
                    'Avoid harsh exfoliants'
                ];
                diagnosis.products = [
                    { id: 2, name: 'Velvet Moisture Cream', price: '$65.00' },
                    { id: 1, name: 'Lumina Glow Serum', price: '$85.00' }
                ];
                break;
            case 'oily':
                diagnosis.title = 'Oily & Congested Skin';
                diagnosis.description = 'Your skin produces excess sebum. Focus on balancing oil production while maintaining hydration.';
                diagnosis.recommendations = [
                    'Use a gel-based cleanser twice daily',
                    'Incorporate gentle exfoliation 2-3x weekly',
                    'Choose lightweight, oil-free moisturizers',
                    'Always use non-comedogenic products'
                ];
                diagnosis.products = [
                    { id: 3, name: 'Purify Gel Cleanser', price: '$45.00' },
                    { id: 6, name: 'Exfoliating Toner', price: '$48.00' }
                ];
                break;
            case 'combination':
                diagnosis.title = 'Combination Skin';
                diagnosis.description = 'Your skin has both oily and dry areas. You need a balanced approach to address both concerns.';
                diagnosis.recommendations = [
                    'Use a balanced cleanser suitable for all areas',
                    'Apply lightweight hydration to oily zones',
                    'Use richer products on dry areas',
                    'Exfoliate regularly but gently'
                ];
                diagnosis.products = [
                    { id: 1, name: 'Lumina Glow Serum', price: '$85.00' },
                    { id: 3, name: 'Purify Gel Cleanser', price: '$45.00' }
                ];
                break;
            case 'sensitive':
                diagnosis.title = 'Sensitive & Reactive Skin';
                diagnosis.description = 'Your skin is easily irritated. Focus on gentle, soothing products with minimal ingredients.';
                diagnosis.recommendations = [
                    'Choose fragrance-free products',
                    'Patch test new products before full use',
                    'Avoid harsh actives and exfoliants',
                    'Use calming, anti-inflammatory ingredients'
                ];
                diagnosis.products = [
                    { id: 2, name: 'Velvet Moisture Cream', price: '$65.00' },
                    { id: 3, name: 'Purify Gel Cleanser', price: '$45.00' }
                ];
                break;
            default:
                diagnosis.title = 'Normal & Balanced Skin';
                diagnosis.description = 'Your skin is well-balanced. Focus on maintenance and prevention.';
                diagnosis.recommendations = [
                    'Maintain a consistent routine',
                    'Use antioxidant serums for protection',
                    'Don\'t forget daily SPF',
                    'Incorporate gentle exfoliation weekly'
                ];
                diagnosis.products = [
                    { id: 1, name: 'Lumina Glow Serum', price: '$85.00' },
                    { id: 2, name: 'Velvet Moisture Cream', price: '$65.00' }
                ];
        }

        // Add concern-specific recommendations
        if (concerns.includes('hyperpigmentation')) {
            diagnosis.recommendations.push('Use vitamin C and niacinamide for brightening');
        }
        if (concerns.includes('aging')) {
            diagnosis.recommendations.push('Incorporate retinol or peptides at night');
        }
        if (concerns.includes('acne')) {
            diagnosis.recommendations.push('Use salicylic acid or benzoyl peroxide treatments');
        }

        return diagnosis;
    };

    const diagnosis = showResults ? getDiagnosis() : null;

    if (showResults) {
        return (
            <div className="quiz-results">
                <section className="page-hero">
                    <div className="container">
                        <h1>Your Skin Analysis Results</h1>
                        <p>Based on your answers, here's your personalized skincare diagnosis</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="results-content">
                            <div className="diagnosis-card">
                                <div className="diagnosis-header">
                                    <CheckCircle size={48} className="text-gold" />
                                    <h2>{diagnosis.title}</h2>
                                </div>
                                <p className="diagnosis-description">{diagnosis.description}</p>

                                <div className="recommendations">
                                    <h3>Recommended Routine</h3>
                                    <ul>
                                        {diagnosis.recommendations.map((rec, index) => (
                                            <li key={index}>
                                                <CheckCircle size={18} className="text-gold" />
                                                <span>{rec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="product-recommendations">
                                    <h3>Perfect Products For You</h3>
                                    <div className="recommended-products">
                                        {diagnosis.products.map((product) => (
                                            <div key={product.id} className="recommended-product">
                                                <h4>{product.name}</h4>
                                                <p className="price">{product.price}</p>
                                                <Link to={`/product/${product.id}`} className="btn btn-outline">
                                                    View Product
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="results-actions">
                                    <Link to="/bestsellers" className="btn btn-primary">
                                        Shop Recommended Products
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setShowResults(false);
                                            setCurrentStep(0);
                                            setAnswers({});
                                        }}
                                        className="btn btn-outline"
                                    >
                                        Retake Quiz
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    const currentQuestion = questions[currentStep];
    const progress = ((currentStep + 1) / questions.length) * 100;

    return (
        <div className="skin-quiz">
            <section className="page-hero">
                <div className="container">
                    <h1>Skin Analysis Quiz</h1>
                    <p>Answer a few questions to get your personalized skincare recommendations</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="quiz-container">
                        {/* Progress Bar */}
                        <div className="quiz-progress">
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="progress-text">
                                Question {currentStep + 1} of {questions.length}
                            </p>
                        </div>

                        {/* Question */}
                        <div className="quiz-question">
                            <h2>{currentQuestion.question}</h2>
                            <div className="quiz-options">
                                {currentQuestion.options.map((option) => {
                                    const isSelected = currentQuestion.multiple
                                        ? (answers[currentQuestion.id] || []).includes(option.value)
                                        : answers[currentQuestion.id] === option.value;

                                    return (
                                        <button
                                            key={option.value}
                                            className={`quiz-option ${isSelected ? 'selected' : ''}`}
                                            onClick={() => handleAnswer(currentQuestion.id, option.value)}
                                        >
                                            <div className="option-radio">
                                                {isSelected && <CheckCircle size={20} />}
                                            </div>
                                            <span>{option.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="quiz-navigation">
                            <button
                                onClick={handlePrevious}
                                className="btn btn-outline"
                                disabled={currentStep === 0}
                            >
                                <ArrowLeft size={18} />
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                className="btn btn-primary"
                                disabled={!canProceed()}
                            >
                                {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkinQuiz;
