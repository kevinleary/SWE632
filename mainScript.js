// Emergency Form submission
if (document.getElementById('emergencyFormSubmit'))
    document.getElementById('emergencyFormSubmit').addEventListener("click", () => alert('Form submitted! We will contact you soon!'));

function isFormValid(firstName, lastName, email, houseType, address,
    city, state, zip) {
    return (firstName != '' && lastName != '' && email != '' && houseType != '' && address != '' &&
        city != '' && state != '' && zip != '')
}

function clearHomeInspectionForm() {
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputEmail4').val('');
    $('#houseType').val('');
    $('#inputAddress').val('');
    $('#inputCity').val('');
    $('#inputState').val('');
    $('#inputZip').val('');
}

$("#homeInspectionForm").submit(function (e) {
    e.preventDefault();
    const firstName = $('#inputFirstName').val();
    const lastName = $('#inputLastName').val();
    const email = $('#inputEmail4').val();
    const houseType = $('#houseType').val();
    const address = $('#inputAddress').val();
    const city = $('#inputCity').val();
    const state = $('#inputState').val();
    const zip = $('#inputZip').val();

    !firstName ? $('#inputFirstNameError').show() : $('#inputFirstNameError').hide();
    !lastName ? $('#inputLastNameError').show() : $('#inputLastNameError').hide();
    !email ? $('#inputEmail4Error').show() : $('#inputEmail4Error').hide();
    !houseType ? $('#houseTypeError').show() : $('#houseTypeError').hide();
    !address ? $('#inputAddressError').show() : $('#inputAddressError').hide();
    !city ? $('#inputCityError').show() : $('#inputCityError').hide();
    !state ? $('#inputStateError').show() : $('#inputStateError').hide();
    !zip ? $('#inputZipError').show() : $('#inputZipError').hide();

    if (isFormValid(firstName, lastName, email, houseType, address,
        city, state, zip)) {
        alert('Form submitted succesfuly!');
        clearHomeInspectionForm();
    }
});