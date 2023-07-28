const rightButtons = document.querySelectorAll('.rightButtons');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.filter = 'blur(0px)';
      entry.target.style.transform = 'translateY(0)';
	} else {
		entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(-100%)';
      entry.target.style.filter = 'blur(5px)';
    }
  });
}, observerOptions);

rightButtons.forEach((element) => {
  observer.observe(element);
});
