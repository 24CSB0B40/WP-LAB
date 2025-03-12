function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('themeToggle');
    
    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      themeButton.textContent = 'Switch to Light Mode';
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      themeButton.textContent = 'Switch to Dark Mode';
    }
  
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  
  window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.replace('light-mode', 'dark-mode');
      document.getElementById('themeToggle').textContent = 'Switch to Light Mode';
    }
  }
  
  let countdown;
  let timeLeft;
  function startTimer() {
    const timeInput = document.getElementById('timerInput').value;
    timeLeft = parseInt(timeInput);
  
    if (isNaN(timeLeft) || timeLeft <= 0) return;
  
    updateTimer();
    countdown = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) clearInterval(countdown);
    }, 1000);
  }
  
  function updateTimer() {
    const timerElement = document.getElementById('timer');
    const timerInput = document.getElementById('timerInput');
  
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    if (timeLeft > 10) {
      document.body.style.backgroundColor = 'rgb(175, 223, 175)';
    } else if (timeLeft > 5) {
      document.body.style.backgroundColor = 'rgb(238, 238, 183)';
    } else {
      document.body.style.backgroundColor = 'rgb(233, 166, 166)';
    }
  }
  
  function pauseTimer() {
    clearInterval(countdown);
  }
  
  function resetTimer() {
    clearInterval(countdown);
    timeLeft = 0;
    updateTimer();
  }
  
  function changeStyle() {
    const element = document.getElementById('styledElement');
    element.style.backgroundColor = 'purple';
    element.style.width = '150px';
    element.style.height = '150px';
  }
  
  function sortList() {
    const list = document.getElementById('myList');
    const items = Array.from(list.getElementsByTagName('li'));
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    items.forEach(item => list.appendChild(item));
  }
  
  function filterDuplicates() {
    const list = document.getElementById('myList');
    const items = Array.from(list.getElementsByTagName('li'));
    const uniqueItems = Array.from(new Set(items.map(item => item.textContent)))
      .map(item => `<li>${item}</li>`);
    list.innerHTML = uniqueItems.join('');
  }
  
  function reverseList() {
    const list = document.getElementById('myList');
    const items = Array.from(list.getElementsByTagName('li'));
    items.reverse().forEach(item => list.appendChild(item));
  }
  
  function addRow() {
    const input = document.getElementById('rowInput');
    const value = input.value.trim();
  
    if (value) {
      const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      
      cell1.textContent = value;
      cell2.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    }
  
    input.value = '';
  }
  
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
  }
  
  function showLargerImage(img) {
    const largerImage = document.getElementById('larger-image');
    largerImage.src = img.src.replace('100', '300');
  }



  