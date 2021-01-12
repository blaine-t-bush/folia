export function togglePasswordVisibility(event, inputId, iconId) {
    // Prevent event from running so form doesn't get submitted.
    event.preventDefault();

    // Change password to hidden if visible and vice versa,
    // and change icon to match.
    let input = document.getElementById(inputId);
    let icon = document.getElementById(iconId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else if (input.type === "text") {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }

    return;
}