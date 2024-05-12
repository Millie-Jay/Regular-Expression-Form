const inputs = document.querySelectorAll("input");
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^\w{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d|.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

//validation
function validate(field, regex){
 if (regex.test(field.value)){
    field.className = "valid";
 }else{
    field.className = "invalid";
 }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // Accessing the pattern directly from the patterns object
        const pattern = patterns[e.target.name];
        // Passing both input field and regex pattern to the validate function
        validate(e.target, pattern);
    });
});