//This is for left slide-IN
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.remove('shift-left');
        entry.target.classList.add('show-content');
      }else{
        entry.target.classList.remove('show-content');
        entry.target.classList.add('shift-left');
      }
    });
  }, { threshold: 0}); // Add options here
  
  const hiddenElements = document.querySelectorAll(".shift-left");
  hiddenElements.forEach((el) => observer.observe(el));


// Get the element
const welcomeText = document.querySelector('#welcome-text');

// Set the text to type
const text = 'Welcome to my portfolio...';

// Set the typing speed
const speed = 70;

// Initialize the index
let i = 0;

// Initialize cursor visibility
let cursorVisible = true;

// Typing effect function
function typingEffects() {
  if (i < text.length) {
    // Add the next character to the element
    welcomeText.innerHTML = text.substring(0, i + 1) + (cursorVisible ? '|' : '');

    // Toggle cursor visibility
    cursorVisible = !cursorVisible;

    // Increment the index
    i++;

    // Call the function again after a delay
    setTimeout(typingEffects, speed);
  } else {
    // Remove the cursor symbol when typing is complete
    welcomeText.innerHTML = text;
  }
}

// Start the typing effect
typingEffects();

// Blink cursor function
setInterval(() => {
  if (i >= text.length) return;
  welcomeText.innerHTML = text.substring(0, i + 1) + (cursorVisible ? '|' : '');
  cursorVisible = !cursorVisible;
}, 500); // Blink every 500ms