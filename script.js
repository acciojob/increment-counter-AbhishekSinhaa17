//your JS code here. If required.
 const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");

    let count = 0;

    incrementButton.addEventListener("click", function() {
      alert(count);

      count++;

      counterElement.textContent = count;
    });