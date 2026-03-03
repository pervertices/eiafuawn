function altTitle() {
    const images = document.querySelectorAll('img');
  
    images.forEach(image => {
      if (image.alt) {
        image.title = image.alt;
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', altTitle);