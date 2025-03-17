import React, { useState } from 'react';

const MarketDataTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-50">
                    <th className="border p-3 text-left">Year</th>
                    <th className="border p-3 text-right">Smartphones sold per month</th>
                    <th className="border p-3 text-right">Average selling price per unit (€)</th>
                    <th className="border p-3 text-right">Average costs per unit (€)</th>
                    <th className="border p-3 text-right">Market share in Chinese smartphone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-3">2015</td>
                    <td className="border p-3 text-right">8,000</td>
                    <td className="border p-3 text-right">180</td>
                    <td className="border p-3 text-right">150</td>
                    <td className="border p-3 text-right">10%</td>
                </tr>
                <tr>
                    <td className="border p-3">2016</td>
                    <td className="border p-3 text-right">8,500</td>
                    <td className="border p-3 text-right">180</td>
                    <td className="border p-3 text-right">160</td>
                    <td className="border p-3 text-right">12%</td>
                </tr>
                <tr>
                    <td className="border p-3">2017</td>
                    <td className="border p-3 text-right">9,000</td>
                    <td className="border p-3 text-right">190</td>
                    <td className="border p-3 text-right">170</td>
                    <td className="border p-3 text-right">15%</td>
                </tr>
                <tr>
                    <td className="border p-3">2018</td>
                    <td className="border p-3 text-right">9,500</td>
                    <td className="border p-3 text-right">200</td>
                    <td className="border p-3 text-right">180</td>
                    <td className="border p-3 text-right">18%</td>
                </tr>
                <tr>
                    <td className="border p-3">2019</td>
                    <td className="border p-3 text-right">10,000</td>
                    <td className="border p-3 text-right">210</td>
                    <td className="border p-3 text-right">190</td>
                    <td className="border p-3 text-right">20%</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const quizData = {
    title: "Business Case Analysis Test",
    sections: [
        {
            title: "LeiWei Market Performance Analysis",
            description: "In the last decades, China has become the world's second-largest economy with a population of 1.38 billion (2017). Local manufacturers are dominating the smartphone market with competitive prices while maintaining quality.",
            questions: [
                {
                    id: 1,
                    question: "What is the market size of the smartphone industry in 2018? (Numbers are rounded)",
                    options: [
                        "184,000,000 €",
                        "16,000,000 €",
                        "512,000,000 €",
                        "None of the above"
                    ]
                },
                {
                    id: 2,
                    question: "Which of the following statements is true?",
                    options: [
                        "The Chinese smartphone industry declined between 2015-2018",
                        "The Chinese smartphone industry declined between 2017-2018",
                        "The Chinese smartphone industry grew between 2017-2018",
                        "None of the above"
                    ]
                },
                {
                    id: 3,
                    question: "What trend can be observed in the average selling price from 2015 to 2018?",
                    options: [
                        "Steady increase year over year",
                        "Remained stable then increased",
                        "Fluctuated randomly",
                        "Decreased then increased"
                    ]
                },
                {
                    id: 4,
                    question: "How did LeiWei's market share change between 2017 and 2018?",
                    options: [
                        "Increased by 3%",
                        "Increased by 5%",
                        "Decreased by 4%",
                        "Increased by 2%"
                    ]
                },
                {
                    id: 5,
                    question: "What is the trend in monthly smartphone sales from 2015 to 2018?",
                    options: [
                        "Steady increase",
                        "Fluctuating with overall increase",
                        "Steady decrease",
                        "No clear trend"
                    ]
                }
            ]
        },
        // Cost Structure section remains the same...
    ]
};

export default function QuizApp() {
    const [currentSection, setCurrentSection] = useState(0);
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-2xl font-bold">{quizData.sections[currentSection].title}</h2>
                <p className="text-gray-600 mt-2">{quizData.sections[currentSection].description}</p>
            </div>
            <div>
                {currentSection === 0 && (
                    <div className="mb-8">
                        <MarketDataTable />
                    </div>
                )}
                
                {/* Rest of the content remains the same... */}
            </div>
        </div>
    );
}