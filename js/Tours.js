window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const tourOperatorsData = [
  "Unseen Japan Tours - Your unique guided experience of Japan",
  "The Japan Tour Company",
  "Authentic Ise Walking Tours by Shō"
];

const tourDatesData = [
  "Jan-Dec 2023",
  "Jan-Dec 2024",
  "Jan-Dec 2025"
];

const fillSelectOptions = (selectId, dataArray) => {
  const select = document.getElementById(selectId);
  dataArray.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
};

fillSelectOptions('tourOperators', tourOperatorsData);
fillSelectOptions('tourDates', tourDatesData);

document.getElementById('tourForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const tourOperator = document.getElementById('tourOperators').value;
  const name = document.getElementById('name').value;
  const tel = document.getElementById('tel').value;
  const tourDates = document.getElementById('tourDates').value;
  const specialRequests = document.getElementById('specialRequests').value;

  console.log('Submitted Form Data:');
  console.log('Tour Operator:', tourOperator);
  console.log('Name:', name);
  console.log('Phone Number:', tel);
  console.log('Tour Dates:', tourDates);
  console.log('Special Requests:', specialRequests);
});
