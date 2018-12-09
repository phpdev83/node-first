const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
var app = express();
hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

// app.use((req,res,next)=>{
//   console.log("hiss");
// });

app.use(express.static('public'));

app.set('view engine','hbs');

app.get('/',(req, res)=>{
  res.send("hi")
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    'name':'Tarun Narang'
  })
})

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
