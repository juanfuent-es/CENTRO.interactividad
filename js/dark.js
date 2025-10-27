const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
const bgPicker = document.getElementById('bg-picker');

toggleThemeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggleThemeBtn.innerHTML = "<i class='fa-solid fa-sun'></i>";
        // toggleThemeBtn.innerText = 'Activar Light Mode';
    } else {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        //toggleThemeBtn.innerText = 'Dark Mode';
    }
});

colorPicker.addEventListener('change', function () {
    document.body.style.color = colorPicker.value;
});

bgPicker.addEventListener('input', function () {
    document.body.style.backgroundColor = bgPicker.value;
});