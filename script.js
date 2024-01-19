const toggle = document.getElementById('toggle');


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