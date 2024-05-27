let sliderIndex = {
  slide: 1,
};

function plusSlider(sliderName, n) {
  showSlider(sliderName, (sliderIndex[sliderName] += n));
}

function showSlider(sliderName, n) {
  const slides = document.getElementsByClassName(sliderName);
  if (slides.length === 0) {
    console.error(`No slides found with class name: ${sliderName}`);
    return;
  }

  if (n > slides.length) {
    sliderIndex[sliderName] = 1;
  }
  if (n < 1) {
    sliderIndex[sliderName] = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[sliderIndex[sliderName] - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  showSlider("slide", 1);

  // Change slide every 3 seconds (3000 milliseconds)
  setInterval(() => {
    plusSlider("slide", 1);
  }, 3000);
});

// pjesa e mapsit
window.addEventListener("load", () => {
  const map = L.map("map").setView([45.544731920752156, 11.57338372162557], 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([45.544731920752156, 11.57338372162557]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
  };
  const onFailure = () => {
    console.log("Error getting the user'permission for location");
  };
  document.querySelector(".btn-primary").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  });
});

//contact procces
function openWhatsAppChat() {
  // Replace "1234567890" with the phone number you want to chat with
  let phoneNumber = "+393923202929";
  let Name = "Kosta";
  // Construct the WhatsApp chat URL
  var url = "https://wa.me/" + phoneNumber;
  // Open the WhatsApp chat link in a new tab/window
  window.open(url, "_blank");
}

function makephonecall() {
  window.open("tel:" + "+393923202929");
}
