import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

// codes based on: https://medium.com/@eesh.t/send-email-using-emailjs-and-react-form-9993bb6929d8
const ContactForm = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      name: name,
      from_name: email,
      to_name: 'nicoteare@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'salgode',
       templateParams,
      process.env.REACT_APP_EMAILJS_TOKEN,
     )
     setName('')
     setEmail('')
     setSubject('')
     setMessage('')
  }


  return (
    <>
      <h1 className="p-heading1"> Contactanos! </h1>
      <form className={classes.container} noValidate onSubmit={handleSubmit} autoComplete="off">
        <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={email}
            onChange={e => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
          />

        <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={e => setName(e.target.value)}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="subject"
            label="Subject"
            className={classes.textField}
            value={subject}
            onChange={e => setSubject(e.target.value)}
            margin="normal"
            variant="outlined"
          />


          <TextField
            id="message"
            label="Message"
            className={classes.textField}
            value={message}
            onChange={e => setMessage(e.target.value)}
            margin="normal"
            variant="outlined"
          />

        <Button variant="primary" type="submit" style={{ color: 'blue' }}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default ContactForm