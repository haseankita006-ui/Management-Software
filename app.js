let storedPassword = localStorage.getItem("neuroplusPassword");
let patients = JSON.parse(localStorage.getItem("patients")) || [];

function login() {
  const inputPass = document.getElementById("setPassword").value;
  if (!storedPassword) {
    localStorage.setItem("neuroplusPassword", inputPass);
    storedPassword = inputPass;
    alert("Password set successfully!");
    showDashboard();
  } else if (inputPass === storedPassword) {
    showDashboard();
  } else {
    alert("Incorrect password!");
  }
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function showDashboard() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  loadPatients();
}

function addPatient() {
  const name = document.getElementById("name").value;
  const diagnosis = document.getElementById("diagnosis").value;
  const pkg = document.getElementById("package").value;
  const amt = document.getElementById("amount").value;
  if (!name || !diagnosis) return alert("Enter all details!");

  patients.push({ name, diagnosis, pkg, amt });
  localStorage.setItem("patients", JSON.stringify(patients));
  loadPatients();
}

function loadPatients() {
  const tableBody = document.querySelector("#patientTable tbody");
  tableBody.innerHTML = "";
  patients.forEach((p) => {
    const row = `<tr><td>${p.name}</td><td>${p.diagnosis}</td><td>${p.pkg}</td><td>${p.amt}</td></tr>`;
    tableBody.innerHTML += row;
  });
}
