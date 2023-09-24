const loading = document.getElementById("loading");
    const container = document.querySelector(".image-container");
    submitbtn.addEventListener("click", (e) => {
      loading.style.display = "block";
      e.preventDefault();
      const promptValue = description.value;
      container.innerHTML = "";
      fetch("/generate/" + promptValue)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          loading.style.display = "none";
          const images = data.data;
          images.forEach(image => {
            img = document.createElement("img");
            img.src = image.url;
            img.width = "340";
            container.appendChild(img);
          })
        })
    });