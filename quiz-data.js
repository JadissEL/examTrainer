const quizData = {
    title: "Business Case Analysis Test",
    sections: [
        {
            title: "Case Study 2: LeiWei Smartphone Company",
            description: "Market Context: China is the world's second-largest economy with a population of 1.38 billion (2017). Local manufacturers dominate the market with competitive prices while maintaining quality.",
            questions: [
                {
                    id: 1,
                    question: "What is the smartphone industry market size in 2018?",
                    options: ["184,000,000€", "16,000,000€", "512,000,000€", "None of the above"]
                },
                {
                    id: 2,
                    question: "Which statement about the Chinese smartphone industry is true?",
                    options: ["Declined between 2015-2018", "Declined between 2017-2018", "Grew between 2017-2018", "None of the above"]
                },
                {
                    id: 3,
                    question: "What is LeiWei's 2015-2018 CAGR of revenues?",
                    options: ["11.57%", "12.07%", "12.57%", "13.07%"]
                },
                {
                    id: 4,
                    question: "What is the company's profit ratio in 2017?",
                    options: ["14.3%", "12.3%", "15.8%", "16.1%"]
                },
                {
                    id: 5,
                    question: "Which statement about LeiWei's 2018 performance is true?",
                    options: ["The Chinese smartphone industry is slowing down", "Company's total assets are declining faster than shareholder's equity", "Costs grew faster than revenues", "None of the above"]
                },
                {
                    id: 6,
                    question: "Regarding LeiWei's cost structure, which statement is true?",
                    options: ["Raw materials weight remained same in 2018", "Marketing and promotion had highest growth", "R&D had highest decrease", "None of the above"]
                },
                {
                    id: 7,
                    question: "How can LeiWei maintain its 175€ unit cost while increasing R&D by 10€?",
                    options: ["Divide salaries/wages by 3 and increase marketing by 2€/unit", "Eliminate \"others\" and increase marketing by 25%", "Reduce R&D by 100%", "None of the above"]
                },
                {
                    id: 8,
                    question: "What is the revenue of LeiWei's acquisition target?",
                    options: ["12,900,000€", "15,500,000€", "16,000,000€", "Not enough data available"]
                },
                {
                    id: 9,
                    question: "How many smartphones should the new group sell monthly for 50% market share?",
                    options: ["20,000", "22,000", "25,000", "Not enough data available"]
                },
                {
                    id: 10,
                    question: "Which factor(s) had the greatest impact on China's smartphone industry?",
                    options: ["Growing population", "Low selling price per unit", "Increase in spending power", "Not enough data available"]
                }
            ]
        },
        {
            id: "yogart",
            title: "Case Study 1: YogArt Premium Yogurt Company",
            description: "YogArt is a company specialized in yogurt production with a premium product called 'Extra Bio', distributed exclusively in specialized Bio products shops.",
            companyData: `Plant A: Capacity 1.5M units/day, Production 1.2M units/day
Plant B: Capacity 1.0M units/day, Production 2.3M units/day
Plant C: Capacity 1.8M units/day, Production 2.0M units/day`,
            questions: [
                {
                    id: 11,
                    question: "What is the utilization rate of the company 'YogArt' plants?",
                    options: ["55%", "75%", "85%", "95%"]
                },
                {
                    id: 12,
                    question: "What is YogArt's exact global market share in 2019? (Numbers are rounded)",
                    options: ["0.2%", "0.5%", "1.2%", "We don't have enough data to answer the question"]
                },
                {
                    id: 13,
                    question: "Which statement about YogArt's new product launch is correct?",
                    options: ["\"Extra Bio\" plants are underutilized only because of the limited demand in Bio/Premium yogurts", "The company wants to launch a new mainstream product to primarily raise its revenues and market share", "The new plant's production capacity is higher than the \"Extra Bio\" plants because it costs more", "None of the statements are correct"]
                },
                {
                    id: 14,
                    question: "How many Sweet Cream products should the company sell daily to increase global revenues by 15%?",
                    options: ["1.11 Million", "1.51 Million", "2.00 Million", "None of the above"]
                },
                {
                    id: 15,
                    question: "What is the payback period for the \"Sweet Cream\" product?",
                    options: ["1.58 Years", "2.74 Years", "3.96 Years", "5.32 Years"]
                },
                {
                    id: 16,
                    question: "What is Tier Pack's revenue? (Numbers rounded)",
                    options: ["$12 Million", "$14 Million", "$16 Million", "$21 Billion"]
                },
                {
                    id: 17,
                    question: "Which statement about the Tier Pack acquisition is correct?",
                    options: ["Acquiring Tier Pack will allow YogArt to increase its net margins by 5%", "The acquisition is good for Tier Pack due to declining biodegradable packaging market", "Packaging costs can be higher than 30% of production costs and acquisition might increase operational margin by 5%", "None of the above is correct"]
                },
                {
                    id: 18,
                    question: "What would be YogArt's market share after the acquisition?",
                    options: ["Higher than before", "Lower than before", "Unchanged", "Not enough data to determine"]
                },
                {
                    id: 19,
                    question: "What is the exact price paid by YogArt for the Tier Pack plant?",
                    options: ["$5.6 Million", "$8.2 Million", "$16.0 Million", "$18.5 Million"]
                },
                {
                    id: 20,
                    question: "What is YogArt's new revenue after the Tier Pack acquisition?",
                    options: ["$1.15 Billion", "$5.15 Billion", "$13.5 Billion", "$15 Billion"]
                }
            ]
        }
    ]
};

// Add answer checking logic
const correctAnswers = {
    1: 0, 2: 2, 3: 1, 4: 0, 5: 2,
    6: 1, 7: 3, 8: 2, 9: 1, 10: 0,
    11: 2, 12: 3, 13: 1, 14: 2, 15: 0,
    16: 2, 17: 2, 18: 3, 19: 1, 20: 0
};