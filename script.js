const toggle = document.getElementById('toggle');
const container = document.querySelector('.container');
const bdayContainer = document.querySelector('.bday-container');
const ydigit = document.querySelector('.ydigit');
const mdigit = document.querySelector('.mdigit');
const ddigit = document.querySelector('.ddigit');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.documentElement.style.setProperty('--primary-color', '#4caf50');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--background-color', '#2b2b2b');
        document.documentElement.style.setProperty('--text-color', '#ddd');
        document.documentElement.style.setProperty('--toggle-checked-color', '#4caf50');
        document.documentElement.style.setProperty('--toggle-unchecked-color', '#444');
        container.style.borderColor = '#4caf50';
        
    } else {
        document.documentElement.style.setProperty('--primary-color', '#4caf50');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--background-color', '#f5f5f5');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--toggle-checked-color', '#4caf50');
        document.documentElement.style.setProperty('--toggle-unchecked-color', '#bbb');
        container.style.borderColor = '#4caf50';
        
    }
});

const calculateAge = () => {
    const days = document.getElementById('days').value;
    const months = document.getElementById('months').value;
    const years = document.getElementById('years').value;
    const today = new Date();
    const birthDate = new Date(years, months - 1, days);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    ydigit.textContent = age;
    mdigit.textContent = today.getMonth() - birthDate.getMonth();
    ddigit.textContent = today.getDate() - birthDate.getDate();

    if (ddigit.textContent === '0') {
        ddigit.textContent = '';
    }

    if (mdigit.textContent === '0') {
        mdigit.textContent = '';
    }

    if (age < 0) {
        alert('Please enter a valid birthdate.');
    } else {
        localStorage.setItem();
    }
};

const daysInput = document.getElementById('days');
const monthsInput = document.getElementById('months');
const yearsInput = document.getElementById('years');

daysInput.addEventListener('input', calculateAge);
monthsInput.addEventListener('input', calculateAge);
yearsInput.addEventListener('input', calculateAge);

const savedAge = localStorage.getItem('age');
if (savedAge) {
    ydigit.textContent = savedAge;
}
function bDay(){
    if(urMnth()==getCurMnth() && urDay()==getCurDay())
        {
            document.querySelector(".container").setAttribute("style","display:none");
            document.querySelector(".bday-container").setAttribute("style","display:flex");
            
        }
}

