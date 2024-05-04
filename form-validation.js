document.getElementById('membershipForm').addEventListener('submit', function(event) {
    var isValid = true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;

    if (!name.trim()) {
        alert('Name is required.');
        isValid = false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
        alert('Phone number must be in the format 123-456-7890.');
        isValid = false;
    }

    if (!address.trim()) {
        alert('Address is required.');
        isValid = false
