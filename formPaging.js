const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");

const progressBar = document.querySelector("progress");

const summaryBooking = document.getElementById("summary-date");
const summaryBeds = document.getElementById("summary-beds");
const summaryPillows = document.getElementById("summary-pillows");
const summaryAdults = document.getElementById("summary-adults");
const summaryChildren = document.getElementById("summary-children");
const summaryColour = document.getElementById("summary-colour");
const summaryName = document.getElementById("summary-name");
const summaryEmail = document.getElementById("summary-email");
const summaryCutlery = document.getElementById("summary-cutlery");
const summaryCampfire = document.getElementById("summary-campfire");

const formData = document.getElementById("collected-data");

function showPage(pageNumber){
    switch (pageNumber) {
        case 1:
            formPage1.style.display = 'block';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            progressBar.value=25;
            break;

        case 2:
            formPage1.style.display = 'none';
            formPage2.style.display = 'block';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            progressBar.value=50;
            break;

        case 3:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'block';
            formPage4.style.display = 'none';
            progressBar.value=75;
            break;

        case 4:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            progressBar.value=100;
            updateSummary();
            break;
        
        default:
            break;
    }
}

function getFormData(){
    const booking = document.getElementById("booking-date").value;
    const beds = formPage2.querySelector('select').value;
    const pillows = document.getElementById("extra-pillows").value;
    const adults = document.getElementById("adults-number").value;
    const children = document.getElementById("children-number").value;
    const colour = document.getElementById("postcard-colour").value;
    const name = document.getElementById("booking-name").value;
    const email = document.getElementById("booking-email").value;
    const cutlery = document.getElementById("cutlery-required").value;
    const campfire = document.getElementById("campfire-required").value;

    return data ;{
        booking; booking
        beds; beds
        pillows; pillows,
        adults; adults,
        children; children,
        colour; colour,
        name; name
        email; email,
        cutlery; cutlery,
        campfire; campfire
    }
}

function updateSummary(){
    const data = getFormData();

    summaryBooking.innerHTML = data.booking;
    summaryBeds.innerHTML = data.beds;
    summaryPillows.innerHTML = data.pillows;
    summaryAdults.innerHTML = data.adults;
    summaryChildren.innerHTML = data.children;
    summaryColour.innerHTML = data.colour;
    summaryName.innerHTML = data.name;
    summaryEmail.innerHTML = data.email;
    summaryCutlery.innerHTML = data.cutlery;
    summaryCampfire.innerHTML = data.campfire;
}

function submitData(){
    const dataRow = document.createElement("tr");
    const cellBooking = document.createElement("td");
    const cellBeds = document.createElement("td");
    const cellPillows = document.createElement("td");
    const cellAdults = document.createElement("td");
    const cellChildren = document.createElement("td");
    const cellColour = document.createElement("td");
    const cellName = document.createElement("td");
    const cellEmail = document.createElement("td");
    const cellCutlery = document.createElement("td");
    const cellCampfire = document.createElement("td");

    dataRow.appendChild(cellBooking);
    dataRow.appendChild(cellBeds);
    dataRow.appendChild(cellPillows);
    dataRow.appendChild(cellAdults);
    dataRow.appendChild(cellChildren);
    dataRow.appendChild(cellColour);
    dataRow.appendChild(cellName);
    dataRow.appendChild(cellEmail);
    dataRow.appendChild(cellCutlery);
    dataRow.appendChild(cellCampfire);

    const data = getFormData();

    summaryBooking.innerHTML = data.booking;
    summaryBeds.innerHTML = data.beds;
    summaryPillows.innerHTML = data.pillows;
    summaryAdults.innerHTML = data.adults;
    summaryChildren.innerHTML = data.children;
    summaryColour.innerHTML = data.colour;
    summaryName.innerHTML = data.name;
    summaryEmail.innerHTML = data.email;
    summaryCutlery.innerHTML = data.cutlery;
    summaryCampfire.innerHTML = data.campfire;

    formData.appendChild(dataRow);
}