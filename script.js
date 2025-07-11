
class EduQuiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.selectedAnswer = null;
        this.quizCompleted = false;
        this.isUsingAPI = false;
        this.difficulty = 'medium';
        this.category = 'coding';
        

        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.errorScreen = document.getElementById('error-screen');
        this.loadingScreen = document.getElementById('loading-screen');
        
        
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.currentScoreSpan = document.getElementById('current-score');
        this.maxScoreSpan = document.getElementById('max-score');
        this.progressFill = document.getElementById('progress-fill');
        this.nextBtn = document.getElementById('next-btn');
        this.feedback = document.getElementById('feedback');
        this.feedbackText = document.getElementById('feedback-text');
        
        this.finalScore = document.getElementById('final-score');
        this.finalTotal = document.getElementById('final-total');
        this.scorePercentage = document.getElementById('score-percentage');
        this.performanceMessage = document.getElementById('performance-message');
        

        this.errorMessage = document.getElementById('error-message');
        
        
        this.localQuestions = {
            coding: [
                {
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Management Language"],
                    correct: 0
                },
                {
                    question: "Which programming language is known as the 'language of the web'?",
                    options: ["Python", "Java", "JavaScript", "C++"],
                    correct: 2
                },
                {
                    question: "What is the correct way to declare a variable in JavaScript?",
                    options: ["var x = 5;", "variable x = 5;", "v x = 5;", "declare x = 5;"],
                    correct: 0
                },
                {
                    question: "Which of these is NOT a programming language?",
                    options: ["Python", "Java", "HTML", "C++"],
                    correct: 2
                },
                {
                    question: "What does CSS stand for?",
                    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                    correct: 1
                },
                {
                    question: "Which symbol is used for comments in JavaScript?",
                    options: ["<!-- -->", "# ", "// ", "/* */"],
                    correct: 2
                },
                {
                    question: "What is the output of 'console.log(typeof null)' in JavaScript?",
                    options: ["null", "undefined", "object", "boolean"],
                    correct: 2
                },
                {
                    question: "Which HTML tag is used to create a hyperlink?",
                    options: ["<link>", "<a>", "<href>", "<url>"],
                    correct: 1
                },
                {
                    question: "What does API stand for?",
                    options: ["Application Programming Interface", "Advanced Programming Interface", "Application Protocol Interface", "Automated Programming Interface"],
                    correct: 0
                },
                {
                    question: "Which method is used to add an element to the end of an array in JavaScript?",
                    options: ["append()", "push()", "add()", "insert()"],
                    correct: 1
                }
            ],
            math: [
                {
                    question: "What is the value of π (pi) approximately?",
                    options: ["3.14159", "2.71828", "1.41421", "1.73205"],
                    correct: 0
                },
                {
                    question: "What is 15% of 200?",
                    options: ["25", "30", "35", "40"],
                    correct: 1
                },
                {
                    question: "If a triangle has angles of 90° and 45°, what is the third angle?",
                    options: ["30°", "45°", "60°", "35°"],
                    correct: 1
                },
                {
                    question: "What is the square root of 144?",
                    options: ["11", "12", "13", "14"],
                    correct: 1
                },
                {
                    question: "What is 7 × 8?",
                    options: ["54", "56", "58", "62"],
                    correct: 1
                },
                {
                    question: "What is the formula for the area of a circle?",
                    options: ["πr²", "2πr", "πd", "r²"],
                    correct: 0
                },
                {
                    question: "What is 125 ÷ 5?",
                    options: ["20", "25", "30", "35"],
                    correct: 1
                },
                {
                    question: "What is the value of 2³?",
                    options: ["6", "8", "9", "12"],
                    correct: 1
                },
                {
                    question: "What is the sum of interior angles of a triangle?",
                    options: ["90°", "180°", "270°", "360°"],
                    correct: 1
                },
                {
                    question: "What is 0.5 expressed as a fraction?",
                    options: ["1/3", "1/2", "2/3", "3/4"],
                    correct: 1
                }
            ],
            science: [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "O2", "NaCl"],
                    correct: 0
                },
                {
                    question: "Which planet is closest to the Sun?",
                    options: ["Venus", "Mars", "Mercury", "Earth"],
                    correct: 2
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Quartz"],
                    correct: 2
                },
                {
                    question: "How many bones are in the adult human body?",
                    options: ["206", "195", "220", "186"],
                    correct: 0
                },
                {
                    question: "What gas do plants absorb from the atmosphere during photosynthesis?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "What is the speed of light in vacuum?",
                    options: ["300,000 km/s", "299,792,458 m/s", "186,000 miles/s", "All of the above"],
                    correct: 3
                },
                {
                    question: "Which organ in the human body produces insulin?",
                    options: ["Liver", "Kidney", "Pancreas", "Heart"],
                    correct: 2
                },
                {
                    question: "What is the most abundant gas in Earth's atmosphere?",
                    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    correct: 2
                },
                {
                    question: "How many chambers does a human heart have?",
                    options: ["2", "3", "4", "5"],
                    correct: 2
                }
            ],
            general: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correct: 2
                },
                {
                    question: "Which is the smallest country in the world?",
                    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                    correct: 2
                },
                {
                    question: "In which year did World War II end?",
                    options: ["1944", "1945", "1946", "1947"],
                    correct: 1
                },
                {
                    question: "What is the largest mammal in the world?",
                    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                    correct: 1
                },
                {
                    question: "Which ocean is the largest?",
                    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    correct: 3
                },
                {
                    question: "What is the fastest land animal?",
                    options: ["Lion", "Cheetah", "Leopard", "Tiger"],
                    correct: 1
                },
                {
                    question: "Which continent is known as the 'Dark Continent'?",
                    options: ["Asia", "Africa", "Australia", "South America"],
                    correct: 1
                },
                {
                    question: "What is the longest river in the world?",
                    options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
                    correct: 1
                },
                {
                    question: "Which language has the most native speakers worldwide?",
                    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
                    correct: 2
                },
                {
                    question: "What is the highest mountain in the world?",
                    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
                    correct: 1
                }
            ]
        };
        
        this.initializeEventListeners();
        this.showWelcomeScreen();
    }
    
    initializeEventListeners() {
        
        document.getElementById('start-local-quiz').addEventListener('click', () => {
            this.isUsingAPI = false;
            this.category = document.getElementById('category').value;
            this.startQuiz();
        });
        
        document.getElementById('start-api-quiz').addEventListener('click', () => {
            this.isUsingAPI = true;
            this.category = document.getElementById('category').value;
            this.difficulty = document.getElementById('difficulty').value;
            this.startQuiz();
        });
        
        
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        
        
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('home-btn').addEventListener('click', () => this.showWelcomeScreen());
        
        
        document.getElementById('retry-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('use-local-btn').addEventListener('click', () => {
            this.isUsingAPI = false;
            this.category = document.getElementById('category').value;
            this.startQuiz();
        });
        
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !this.nextBtn.disabled) {
                this.nextQuestion();
            }
        });
    }
    
    showWelcomeScreen() {
        this.hideAllScreens();
        this.welcomeScreen.classList.remove('hidden');
        this.welcomeScreen.classList.add('fade-in');
        
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.selectedAnswer = null;
        this.quizCompleted = false;
    }
    
    hideAllScreens() {
        this.welcomeScreen.classList.add('hidden');
        this.quizScreen.classList.add('hidden');
        this.resultsScreen.classList.add('hidden');
        this.errorScreen.classList.add('hidden');
        this.loadingScreen.classList.add('hidden');
    }
    
    showLoadingScreen() {
        this.hideAllScreens();
        this.loadingScreen.classList.remove('hidden');
        this.loadingScreen.classList.add('fade-in');
    }
    
    showErrorScreen(message) {
        this.hideAllScreens();
        this.errorScreen.classList.remove('hidden');
        this.errorScreen.classList.add('fade-in');
        this.errorMessage.textContent = message;
    }
    
    async startQuiz() {
        try {
            this.showLoadingScreen();
            
            if (this.isUsingAPI) {
                await this.fetchAPIQuestions();
            } else {
                this.questions = this.shuffleArray([...this.localQuestions[this.category]]);
            }
            
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.selectedAnswer = null;
            this.quizCompleted = false;
            
            this.showQuizScreen();
            this.displayQuestion();
            
        } catch (error) {
            console.error('Error starting quiz:', error);
            this.showErrorScreen('Failed to load quiz questions. Please check your internet connection and try again.');
        }
    }
    
    async fetchAPIQuestions() {
        try {
            
            const categoryMapping = {
                'coding': 18, 
                'math': 19,   
                'science': 17, 
                'general': 9   
            };
            
            const categoryId = categoryMapping[this.category] || 9;
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${this.difficulty}&type=multiple`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.response_code !== 0) {
                throw new Error('API returned error code: ' + data.response_code);
            }
            
            this.questions = data.results.map(q => {
                const options = this.shuffleArray([...q.incorrect_answers, q.correct_answer]);
                return {
                    question: this.decodeHTMLEntities(q.question),
                    options: options.map(opt => this.decodeHTMLEntities(opt)),
                    correct: options.indexOf(this.decodeHTMLEntities(q.correct_answer))
                };
            });
            
        } catch (error) {
            console.error('Error fetching API questions:', error);
            throw error;
        }
    }
    
    decodeHTMLEntities(text) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    showQuizScreen() {
        this.hideAllScreens();
        this.quizScreen.classList.remove('hidden');
        this.quizScreen.classList.add('fade-in');
        
        
        const categoryDisplay = document.getElementById('category-display');
        const categoryNames = {
            'coding': '💻 Coding Quiz',
            'math': '🔢 Mathematics Quiz',
            'science': '🔬 Science Quiz',
            'general': '🌍 General Knowledge Quiz'
        };
        categoryDisplay.textContent = categoryNames[this.category] || '🌍 General Knowledge Quiz';
        
        
        this.totalQuestionsSpan.textContent = this.questions.length;
        this.maxScoreSpan.textContent = this.questions.length;
        this.currentScoreSpan.textContent = this.score;
    }
    
    displayQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }
        
        const question = this.questions[this.currentQuestionIndex];
        
        
        this.questionText.textContent = question.question;
        
    
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progressPercentage}%`;
        
        
        this.currentScoreSpan.textContent = this.score;
        
    
        this.optionsContainer.innerHTML = '';
        
        
        question.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option';
            optionButton.textContent = option;
            optionButton.setAttribute('data-index', index);
            optionButton.setAttribute('role', 'button');
            optionButton.setAttribute('aria-label', `Option ${index + 1}: ${option}`);
            
            optionButton.addEventListener('click', () => this.selectAnswer(index));
            
            this.optionsContainer.appendChild(optionButton);
        });
        
        
        this.selectedAnswer = null;
        this.nextBtn.disabled = true;
        this.feedback.classList.add('hidden');
        
        
        setTimeout(() => {
            const firstOption = this.optionsContainer.querySelector('.option');
            if (firstOption) {
                firstOption.focus();
            }
        }, 100);
    }
    
    selectAnswer(selectedIndex) {
        
        if (this.selectedAnswer !== null) return;
        
        this.selectedAnswer = selectedIndex;
        const question = this.questions[this.currentQuestionIndex];
        const options = this.optionsContainer.querySelectorAll('.option');
        
        
        options.forEach(option => {
            option.classList.add('disabled');
        });
        
    
        options[selectedIndex].classList.add('selected');
        

        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            this.score++;
            this.currentScoreSpan.textContent = this.score;
            options[selectedIndex].classList.add('correct');
            this.showFeedback('Correct!', 'correct');
        } else {
            options[selectedIndex].classList.add('incorrect');
            options[question.correct].classList.add('correct');
            this.showFeedback(`Incorrect. The correct answer is: ${question.options[question.correct]}`, 'incorrect');
        }
        
        
        this.nextBtn.disabled = false;
        this.nextBtn.focus();
        
        
        setTimeout(() => {
            if (!this.quizCompleted) {
                this.nextQuestion();
            }
        }, 2000);
    }
    
    showFeedback(message, type) {
        this.feedbackText.textContent = message;
        this.feedback.className = `feedback ${type}`;
        this.feedback.classList.remove('hidden');
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }
    
    showResults() {
        this.quizCompleted = true;
        this.hideAllScreens();
        this.resultsScreen.classList.remove('hidden');
        this.resultsScreen.classList.add('fade-in');
        
        const totalQuestions = this.questions.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);
        
        this.finalScore.textContent = this.score;
        this.finalTotal.textContent = totalQuestions;
        this.scorePercentage.textContent = `${percentage}%`;
        
        
        let message = '';
        let messageClass = '';
        
        if (percentage >= 90) {
            message = 'Excellent work! You\'re a quiz master!';
            messageClass = 'excellent';
        } else if (percentage >= 70) {
            message = 'Great job! You have solid knowledge.';
            messageClass = 'good';
        } else if (percentage >= 50) {
            message = 'Good effort! Keep studying to improve.';
            messageClass = 'average';
        } else {
            message = 'Don\'t give up! Practice makes perfect.';
            messageClass = 'poor';
        }
        
        this.performanceMessage.textContent = message;
        this.performanceMessage.className = `performance-message ${messageClass}`;
        
        
        setTimeout(() => {
            document.getElementById('restart-btn').focus();
        }, 100);
    }
    
    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.quizCompleted = false;
        
        this.showQuizScreen();
        this.displayQuestion();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new EduQuiz();
});



window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});


function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.classList.add('sr-only');
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}


const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;
document.head.appendChild(style);
