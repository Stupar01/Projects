const btnElBasic = document.querySelector('.more-about-course-basic');
const infoBasic = document.querySelector('.course-info-basic');
const btnElAdvanced = document.querySelector('.more-about-course-advanced');
const infoAdvanced = document.querySelector('.course-info-advanced');
const btnElIntermediate = document.querySelector('.more-about-course-intermediate');
const infoIntermediate = document.querySelector('.course-info-intermediate');

btnElBasic.addEventListener('click', function() {
    infoBasic.classList.toggle('course-info-basic');
});

btnElAdvanced.addEventListener('click', function() {
    infoAdvanced.classList.toggle('course-info-advanced');
});

btnElIntermediate.addEventListener('click', function() {
    infoIntermediate.classList.toggle('course-info-intermediate');
});
