var incomeElement = document.getElementById("income");
var expenseElement = document.getElementById("expense");
var incomeElement = document.getElementById("income");
var balanceElement = document.getElementById("balance");

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// store total expense and total income
let totalExpense = 0;
let totalIncome = 0;

// Iterate through transactions
transactions.forEach(transaction => {
    if (transaction.type === 'expense') {
        totalExpense += parseInt(transaction.amount);
    } else if (transaction.type === 'income') {
        totalIncome += parseInt(transaction.amount);
    }
});

// Update the HTML elements with total expense, total income, and balance
expenseElement.textContent = totalExpense;
incomeElement.textContent =  totalIncome;

// Calculate balance
let balance = totalIncome - totalExpense;
balanceElement.textContent = balance;

		
		// Add innerHTML to the income and expense elements which have 'badge' class
		const elements = document.getElementsByClassName("badge");
		for (let i = 0; i < elements.length; i++) {
			elements[i].innerHTML = "<span> " + new Date().toLocaleString('default', { month: 'long' }) + "</span>";
		}

        const sliderContent = document.querySelector('.slider-content');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
    
        let currentIndex = 0;
    
        function updateSlider() {
          const translateValue = -currentIndex * 100 + '%'; // Adjust for the number of images
          sliderContent.style.transform = 'translateX(' + translateValue + ')';
        }
    
        function nextSlide() {
          currentIndex = (currentIndex + 1) % 3; // Change 3 to the total number of images
          updateSlider();
        }
    
        function prevSlide() {
          currentIndex = (currentIndex - 1 + 3) % 3; // Change 3 to the total number of images
          updateSlider();
        }
    
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    
        // Automatic slider movement every 3 seconds (adjust as needed)
        setInterval(nextSlide, 3000);