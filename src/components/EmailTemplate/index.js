import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
   width: '100%'
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'blue',
    color: 'white'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// codes based on: https://medium.com/@eesh.t/send-email-using-emailjs-and-react-form-9993bb6929d8
const ContactForm = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
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
    <Container component="main" maxWidth="xs">
    <div className={classes.paper}>
      <h1 className="p-heading1"> ¡Contáctanos! </h1>
      <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
        <TextField
            id="email"
            label="Mail"
            className={classes.textField}
            value={email}
            onChange={e => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
          />

        <TextField
            id="name"
            label="Nombre"
            className={classes.textField}
            value={name}
            onChange={e => setName(e.target.value)}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="subject"
            label="Tema"
            className={classes.textField}
            value={subject}
            onChange={e => setSubject(e.target.value)}
            margin="normal"
            variant="outlined"
          />


          <TextField
            id="message"
            label="Mensaje"
            className={classes.textField}
            value={message}
            onChange={e => setMessage(e.target.value)}
            margin="normal"
            variant="outlined"
          />
      </form>
      <Button variant="contained" color="primary" type="submit" className={classes.submit} onClick={handleSubmit} >
          Submit
      </Button>
    </div>
    </Container>
  );
}

export default ContactForm