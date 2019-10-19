(function(){ // IIFE
  const inputs = document.querySelectorAll(".controls input");
  const imageContainer = document.querySelector('img');

  function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  
  function setDefaults() {
    console.log("loaded");
    console.log(inputs);
    inputs.map(input => {
      console.log(input.value)
    });
  }

  console.log(imageContainer);
  
  // Add a listener that triggers when the range point changes
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  // Add a listener that triggers when the mouse moves the range point 
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  
  imageContainer.addEventListener('load', setDefaults);
})();
