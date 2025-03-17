document.addEventListener('DOMContentLoaded', () => {
    const quizContent = document.getElementById('quiz-content');
    
    function initQuiz() {
        document.getElementById('quiz-title').textContent = quizData.title;
        renderSections();
        setupCaseStudyToggle();
        initializeCharts();
        attachEventListeners();
    }

    function setupCaseStudyToggle() {
        const headers = document.querySelectorAll('.case-study-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                if (content.style.display === 'none' || !content.style.display) {
                    content.style.display = 'block';
                    header.classList.add('active');
                } else {
                    content.style.display = 'none';
                    header.classList.remove('active');
                }
            });
        });
    }

    function renderSections() {
        quizData.sections.forEach(section => {
            const sectionElement = createSection(section);
            quizContent.appendChild(sectionElement);
        });
    }

    function createSection(section) {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'case-study';
        sectionElement.innerHTML = `
            <h2 class="case-study-header">${section.title}</h2>
            <div class="case-study-content">
                <p class="description">${section.description}</p>
                ${section.companyData ? `<pre class="company-data">${section.companyData}</pre>` : ''}
                <div class="charts-container">
                    ${section.title.includes('LeiWei') ? 
                        `<canvas id="stackedCostChart"></canvas>` : 
                        `<canvas id="plantProductionChart"></canvas>
                         <canvas id="productComparisonChart"></canvas>`
                    }
                </div>
                <div class="questions-container">
                    ${renderQuestions(section.questions)}
                </div>
            </div>
        `;
        return sectionElement;
    }

    function renderQuestions(questions) {
        return questions.map(q => `
            <div class="question">
                <h3>Question ${q.id}</h3>
                <p>${q.question}</p>
                <div class="options">
                    ${q.options.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="question${q.id}" value="${index}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    function initializeCharts() {
        // Initialize each chart with proper sizing and data
        renderStackedCostGraph();
        renderProductComparisonGraph();
        renderPlantProductionGraph();
    }

    function renderStackedCostGraph() {
        const ctx = document.getElementById('stackedCostChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2017', '2018'],
                datasets: [
                    {
                        label: 'Raw materials',
                        data: [80, 95],
                        backgroundColor: '#2563eb'
                    },
                    {
                        label: 'R&D',
                        data: [30, 10],
                        backgroundColor: '#e5e7eb'
                    },
                    {
                        label: 'Salaries and wages',
                        data: [5, 15],
                        backgroundColor: '#f87171'
                    },
                    {
                        label: 'Transportation and shipping',
                        data: [20, 10],
                        backgroundColor: '#60a5fa'
                    },
                    {
                        label: 'Marketing and promotion',
                        data: [20, 40],
                        backgroundColor: '#f59e0b'
                    },
                    {
                        label: 'Others',
                        data: [5, 5],
                        backgroundColor: '#10b981'
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Cost (€ per unit)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: "LeiWei's Cost Structure in 2017 and 2018"
                    },
                    legend: {
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Cost Categories'
                        }
                    }
                }
            }
        });
    }

    function renderProductComparisonGraph() {
        const ctx = document.getElementById('productComparisonChart').getContext('2d');
        const totalProduction = 1000000;
        const margin = 0.65;
        const revenues = [
            totalProduction * 0.8 * 0.01,  // Low Cost
            totalProduction * 0.2 * 0.02   // Premium
        ];
        const recyclingTaxes = [
            totalProduction * 0.8 * 0.005, // Low Cost
            totalProduction * 0.2 * 0      // Premium
        ];
        const profits = revenues.map(rev => rev * margin);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Low Cost', 'Premium'],
                datasets: [
                    {
                        label: 'Revenues (in USD)',
                        data: revenues,
                        backgroundColor: 'rgba(54, 162, 235, 0.8)'
                    },
                    {
                        label: 'Recycling Taxes (in USD)',
                        data: recyclingTaxes,
                        backgroundColor: 'rgba(255, 159, 64, 0.8)'
                    },
                    {
                        label: 'Profits (in USD)',
                        data: profits,
                        backgroundColor: 'rgba(75, 192, 192, 0.8)'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Product Types'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Values (in USD)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenues, Taxes, and Profits by Product Type'
                    },
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    }

    function renderPlantProductionGraph() {
        const ctx = document.getElementById('plantProductionChart').getContext('2d');
        const plants = ['Plant A', 'Plant B', 'Plant C'];
        const dailyProductionCapacity = [1.5, 1.2, 2.3];
        const dailyProduction = [1.0, 1.2, 2.0];
        const utilizationRate = dailyProduction.map((dp, i) => (dp / dailyProductionCapacity[i] * 100));

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: plants,
                datasets: [
                    {
                        label: 'Daily Production Capacity (in Million Units)',
                        data: dailyProductionCapacity,
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        order: 2
                    },
                    {
                        label: 'Daily Production (in Million Units)',
                        data: dailyProduction,
                        backgroundColor: 'rgba(75, 192, 192, 0.8)',
                        order: 2
                    },
                    {
                        label: 'Utilization Rate (%)',
                        data: utilizationRate,
                        type: 'line',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                        pointRadius: 5,
                        fill: false,
                        order: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Plants'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Values'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Production Capacity, Daily Production, and Utilization Rate'
                    },
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.dataset.type === 'line') {
                                    label += context.parsed.y.toFixed(1) + '%';
                                } else {
                                    label += context.parsed.y.toFixed(1);
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    function attachEventListeners() {
        document.getElementById('submit-btn').addEventListener('click', handleSubmit);
    }

    function validateAnswers() {
        let score = 0;
        const results = [];

        quizData.sections.forEach(section => {
            section.questions.forEach(q => {
                const selected = document.querySelector(`input[name="question${q.id}"]:checked`);
                if (selected) {
                    const isCorrect = parseInt(selected.value) === correctAnswers[q.id];
                    score += isCorrect ? 1 : 0;
                    results.push({
                        question: q.question,
                        isCorrect,
                        selectedAnswer: q.options[parseInt(selected.value)],
                        correctAnswer: q.options[correctAnswers[q.id]]
                    });
                }
            });
        });

        return { score, details: results };
    }

    function generateResultsHTML(score, totalQuestions, percentage, details) {
        return `
            <div class="results">
                <h3>Your Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)</h3>
                ${details.map(result => `
                    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <p>${result.question}</p>
                        <p>Your answer: ${result.selectedAnswer}</p>
                        ${!result.isCorrect ? `<p>Correct answer: ${result.correctAnswer}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    function handleSubmit() {
        const results = validateAnswers();
        displayResults(results.score, results.details);
    }

    function displayResults(score, details) {
        const resultsContainer = document.querySelector('main');
        if (!resultsContainer) return;

        const totalQuestions = quizData.sections.reduce((total, section) => 
            total + section.questions.length, 0);
        const percentage = (score / totalQuestions) * 100;

        resultsContainer.innerHTML = generateResultsHTML(score, totalQuestions, percentage, details);
        
        const submitButton = document.getElementById('submit-btn');
        if (submitButton) {
            submitButton.style.display = 'none';
        }
    }

    initQuiz();
});
