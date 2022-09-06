const submit = document.querySelector('.submit-button');
const container1 = document.querySelector('#before-submit-container');
const container2 = document.querySelector('#after-submit-container');
var reviewAmount = document.querySelector('.submit-amount');
const review1 = document.querySelector('#review-item-1');
const review2 = document.querySelector('#review-item-2');
const review3 = document.querySelector('#review-item-3');
const review4 = document.querySelector('#review-item-4');
const review5 = document.querySelector('#review-item-5');
const reviews = document.querySelectorAll('.review-item');

submit.addEventListener('click', function (e) {

    if (reviewAmount.innerText !== '0') {

        container1.classList.toggle('inactive');
        container2.classList.toggle('inactive');

    }
    else {
        alert('Please submit a review');
    }
});

for (let i = 0; i < reviews.length; i++) {

        reviews[i].addEventListener('click', function (e) {

            if (review1.classList.contains('review-active') ||
                review2.classList.contains('review-active') ||
                review3.classList.contains('review-active') || 
                review4.classList.contains('review-active') || 
                review5.classList.contains('review-active')) {

                review1.classList.remove('review-active');
                review2.classList.remove('review-active');
                review3.classList.remove('review-active');
                review4.classList.remove('review-active');
                review5.classList.remove('review-active');
                
            }

            reviews[i].classList.toggle('review-active');
            reviewAmount.innerText = reviews[i].innerText;

        });

}; 
