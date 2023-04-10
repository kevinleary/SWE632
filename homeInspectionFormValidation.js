function isFormValid(firstName, lastName, email, houseType, address,
    city, state, zip) {
    return (firstName != '' && lastName != '' && email != '' && houseType != '' && address != '' &&
        city != '' && state != '' && zip != '')
}

module.exports = isFormValid;