import React from 'react';
import Form from 'react-bootstrap/Form';
import $ from 'jquery';

const handleSubmit = event => {
    event.preventDefault();
    const contactInfo = {
        email : event.target.emailAddress.value,
        message : event.target.message.value
    }
    console.log('on submit contact form: ',contactInfo);
    fetch('http://localhost:3001/contactform',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contactInfo)
    }).then(onSubmitSuccess)
    fetch('http://localhost:3001/mail',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contactInfo)
    }).then(res=> res.json()).then(res=>{
        if(res!=='error'){
            onEmailSent();
        }
    })
}
const onEmailSent = () => {
    $('.emailSent').removeClass('d-none');
}
const onSubmitSuccess = () => {
    $('.thanks').removeClass('d-none');
    $('#emailAddress').prop('value','');
    $('#message').prop('value','');
}
const newForm = () => {
    $('.emailSent').addClass('d-none');
    $('.thanks').addClass('d-none');
}
const ContactForm = () => {

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="emailAddress">
                    <Form.Label><span className='red'>*</span>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        required 
                        onChange={newForm}
                    />
                    <Form.Text className="text-muted"><span className='red'>*</span>Your email is required so we can contact you, we'll never share it with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        onChange={newForm}
                    />
                </Form.Group>
                <Form.Text className="thanks mb3 green f5 d-none">Thank you for contacting us! Your submission was successful.</Form.Text>
                <Form.Text className="emailSent mb3 green f5 d-none">A confirmation email has been sent to the address you provided.</Form.Text>
                <input className="f5 br2 b--green ba ph3 pv2 mb2 dib green hover-bg-green hover-white" type='submit'/>
            </Form>
        </div>
    )
}

export default ContactForm;