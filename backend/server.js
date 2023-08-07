const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/send-mail', async(req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mustaphaagboola1@gamil.com',
            pass: 'tunji998'
        },
    });


    const mailOptions = {
        from: 'mustaphaagboola1@gmail.com',
        to: 'mustaphaagboola1@yahoo.com',
        subject: `New Contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({success: true});
    }
    catch (error) {
        console.log('Error sending email',error);
        res.status(500).json({success: false, error: 'failed to send email'});
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}
);

