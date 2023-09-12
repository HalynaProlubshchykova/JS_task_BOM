const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selectedInfo = document.getElementById("selectedInfo");

const citiesByCountry = {
  ukr: ["Kyiv", "Lviv", "Rivne"],
  pol: ["Warsaw", "Krakow", "Gdansk"],
  usa: ["New York", "Los Angeles", "Chicago"],
};

countrySelect.addEventListener("change", function () {
  const selectedCountry = countrySelect.value;
  const cities = citiesByCountry[selectedCountry];

  citiesSelect.innerHTML = "";

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.text = city;
    option.value = city;
    citiesSelect.appendChild(option);
  });
});

citiesSelect.addEventListener("change", function () {
  const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
  const selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;

  selectedInfo.textContent = `Country: ${selectedCountry}, City: ${selectedCity}`;
});
