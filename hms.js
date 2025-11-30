// Sample doctors
let doctors = [
    { name: "Dr. Smith", specialization: "Cardiology" },
    { name: "Dr. Adams", specialization: "Neurology" },
    { name: "Dr. Lee", specialization: "Pediatrics" }
];

// Patients and appointments
let patients = [];
let appointments = [];

// Initialize doctor list
function loadDoctors() {
    const list = document.getElementById('doctorList');
    const select = document.getElementById('selectDoctor');
    list.innerHTML = '';
    select.innerHTML = '<option value="">Select Doctor</option>';
    doctors.forEach((d, i) => {
        let li = document.createElement('li');
        li.innerText = `${d.name} - ${d.specialization}`;
        list.appendChild(li);

        let option = document.createElement('option');
        option.value = i;
        option.innerText = `${d.name} (${d.specialization})`;
        select.appendChild(option);
    });
}

// Register Patient
function registerPatient() {
    let name = document.getElementById('patientName').value;
    let age = document.getElementById('patientAge').value;
    let contact = document.getElementById('patientContact').value;
    let ailment = document.getElementById('patientAilment').value;

    if(!name || !age || !contact || !ailment){
        alert("Please fill all fields!");
        return;
    }

    let patient = { name, age, contact, ailment };
    patients.push(patient);

    // Update patient select
    const select = document.getElementById('selectPatient');
    let option = document.createElement('option');
    option.value = patients.length - 1;
    option.innerText = name;
    select.appendChild(option);

    alert(`Patient ${name} registered successfully!`);

    // Clear inputs
    document.getElementById('patientName').value='';
    document.getElementById('patientAge').value='';
    document.getElementById('patientContact').value='';
    document.getElementById('patientAilment').value='';
}

// Book Appointment
function bookAppointment() {
    const patientIndex = document.getElementById('selectPatient').value;
    const doctorIndex = document.getElementById('selectDoctor').value;

    if(patientIndex === '' || doctorIndex === '') {
        alert("Select patient and doctor!");
        return;
    }

    const appointment = {
        patient: patients[patientIndex].name,
        doctor: doctors[doctorIndex].name,
        status: "Scheduled"
    };

    appointments.push(appointment);
    displayAppointments();
    alert(`Appointment booked for ${appointment.patient} with ${appointment.doctor}`);
}

// Display Appointments
function displayAppointments() {
    const list = document.getElementById('appointmentList');
    list.innerHTML = '';
    appointments.forEach((a, i) => {
        let li = document.createElement('li');
        li.innerText = `${a.patient} ➤ ${a.doctor} [${a.status}]`;
        list.appendChild(li);
    });
}

// Initialize
loadDoctors();
