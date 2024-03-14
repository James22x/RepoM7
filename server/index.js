// dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const crypto = require('crypto');

app.use(express.json())
app.use(cors())

//run server
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

//db mysql
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'plantdb',
    port: '33065'
})

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});


//route to server that register users
app.post('/register', async (req, res) => {
    const sentEmail = req.body.Email;
    const sentName = req.body.Name;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;
  
    // Generate MD5 hash of the password
    const passwordHash = crypto.createHash('md5').update(sentPassword).digest('hex');
  
    const SQL = 'INSERT INTO users (email, name, username, password) VALUES (?,?,?,?)';
    const Values = [sentEmail, sentName, sentUserName, passwordHash];
  
    db.query(SQL, Values, async (err, results) => {
      if (err) {
        res.send(err);
      } else {
        console.log('Usuario insertado exitosamente');
        res.send({ message: '¡Usuario agregado!' });
      }
    });
});
  

// Route for login
app.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginPassword = req.body.LoginPassword;

    // Generate MD5 hash of the entered password for comparison
    const hashedLoginPassword = crypto.createHash('md5').update(sentLoginPassword).digest('hex');

    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?';
    const Values = [sentLoginUserName, hashedLoginPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
        res.send({ error: err });
        } else if (results.length > 0) {
        res.send(results);
        } else {
        res.send({ message: 'Usuario o contraseña incorrectos' });
        }
    });
});

/*app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          console.error('Error al cerrar sesión:', err);
          res.status(500).send('Error al cerrar sesión');
      } else {
          res.status(200).send('Sesión cerrada exitosamente');
      }
  });
});*/

/*app.get('/user', (req, res) => {
  const username = req.headers.username;

  console.log('Received username:', username);

  if (!username) {
    return res.status(400).json({ error: 'Username not provided' });
  }

  const SQL = 'SELECT username FROM users WHERE username = ?';
  const values = [username];

  db.query(SQL, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (results.length > 0) {
      res.json({ username: results[0].username });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});*/