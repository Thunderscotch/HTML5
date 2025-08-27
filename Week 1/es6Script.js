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

const handleSubmit = (form) => {
    const formData = new FormData(form);
    const contactInfo = Object.fromEntries(formData);
    const contact = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        timestamp: Date.now().toString()
    };
    console.log(contact);
    console.log(contactInfo);
    form.reset();
    alert('Thank you for your message! We will get back to you soon.');
}

class ContactFormHandler {
    constructor() {
        this.form = document.getElementById("contact-control");
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            handleSubmit(this.form);
        });
    }

    // handleSubmit() {
    //     const formData = new FormData(this.form);
    //     const contactInfo = Object.fromEntries(formData);
    //     const contact = {
    //         name: formData.get("name"),
    //         email: formData.get("email"),
    //         message: formData.get("message"),
    //         timestamp: Date.now().toString()
    //     };

    //     console.log(contact);
    //     console.log(contactInfo);

    //     alert('Thank you for your message! We will get back to you soon.');

    //     this.form.reset();
    // }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactFormHandler();
});
