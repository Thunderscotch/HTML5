document.getElementById("contact-button").addEventListener("click", function () {
    const form = document.getElementById("contact-control");
    const isHidden = form.hasAttribute("hidden");

    if (isHidden) {
        form.removeAttribute("hidden");
        this.setAttribute("aria-expanded", "true");
    } else {
        form.setAttribute("hidden", "");
        this.setAttribute("aria-expanded", "false");
    }
})

var ContactFormHandler = function() {
    this.form = document.getElementById('contact-control');
    this.setupEventListeners();
}

ContactFormHandler.prototype.setupEventListeners = function() {
    var self = this;
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();
        self.handleSubmit();
        alert('Form submitted!');
    });
}

ContactFormHandler.prototype.handleSubmit = function() {
    var formData = new FormData(this.form);
    var contactInfo = Object.fromEntries(formData);
    var contact = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        timestamp: Date.now().toISOString()
    };
    console.log(contact);
    console.log(contactInfo);
    this.form.reset();
    alert('Thank you for your message! We will get back to you soon.');
}

document.addEventListener('DOMContentLoaded', function() {
    new ContactFormHandler();
});