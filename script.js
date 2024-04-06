const checkbox = document.getElementById('toggleParagraph');
  const container = document.getElementById('container');

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('paragraph').style.display = 'block';
      container.classList.add('checked');
    } else {
      document.getElementById('paragraph').style.display = 'none';
      container.classList.remove('checked');
    }
  });