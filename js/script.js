/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('header nav a[href*=' + id + ']').classList.remove('active');
        }
    });
    //*sticky navbar*//

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    //*remove toggle icon adn navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


//*scroll revel*//

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servvices-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
ScrollReveal().reveal('.portfolio-more-projects h2', { origin: 'left' });


//text read more (about container)
const aboutMeBtn = document.getElementById('btn__read-more');
aboutMeBtn.addEventListener('click', function () {
    ScrollReveal().reveal('.about__hidden', { origin: 'left' });
    document.querySelector('.about__text').classList.toggle('about__hidden');
    if (document.querySelector('.about__text').classList.contains('about__hidden')) 
    aboutMeBtn.textContent = 'Read more';
    else aboutMeBtn.textContent = 'Read less';
});


//!!!!!!!!!!!!!!


const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendEmail", (req, res) => {
    const { fullname, email, subject, message } = req.body;

    // Create a transporter object using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
        service: "Gmail", // Use the email service you prefer (e.g., "Gmail", "Outlook")
        auth: {
            user: "your@gmail.com", // Replace with your Gmail address
            pass: "your_password"   // Replace with your Gmail password or app-specific password
        }
    });

    // Email subject
    const email_subject = `Contact Form Submission: ${subject}`;

    // Email headers
    const mailOptions = {
        from: email,
        to: "ms3713287@gmail.com", // Replace with your Gmail address
        subject: email_subject,
        text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error:", error);
            res.json({ success: false });
        } else {
            console.log("Email sent:", info.response);
            res.json({ success: true });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



