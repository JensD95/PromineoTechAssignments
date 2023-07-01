function Validation(values) {
    let error = {};
    const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if(values.name === '') {
        error.name = 'The name field is empty';
    }
    else {
        error.name = '';
    }

    if(values.email === '') {
        error.email = 'The email field is empty';
    }
    else if(!email_pattern.test(values.email)) {
        error.email = 'That email is invalid';
    } else {
        error.email = '';
    }
    if(values.password === '') {
        error.password = 'The password field is empty';
    } else if(!password_pattern.test(values.password)) {
        error.password = 'That password is invalid';
    } else {
        error.password = '';
    }
    return error;
}

export default Validation;