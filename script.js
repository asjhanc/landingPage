function toggleContent(contentId) {
    const contentSections = document.querySelectorAll('.content');
  
    contentSections.forEach(section => {
      if (section.id === contentId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }