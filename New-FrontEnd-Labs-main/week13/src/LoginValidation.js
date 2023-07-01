function Validation(values) {
    let error = {};
    const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
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
    //The following are the validation rules for the email and password fields
    //The two following rules are pulled from an instructional video on YouTube
    //const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
}

export default Validation;