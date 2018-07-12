const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');
const port = 3000;

app.use(express.static('public'));

app.get('/home', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res)=>{
    res.render('index.ejs', {
        pokemons: Pokemon
    });
})

app.get('/pokemon/:id', (req,res)=>{
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    });
})

app.listen(port, ()=>{
    console.log('test')
})
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));
// const Fruits = require('./models/fruits')
// app.use(bodyParser.urlencoded({extended: false}))
// app.get('/fruits', (req, res) => {
// res.render('index.ejs', {
// fruits: Fruits
//   });
// });
//
// app.post('/fruits', (req, res) => {
// if(req.body.readyToEat === 'on') {
//   req.body.readyToEat = true;
// } else {
//   req.body.readyToEat = false;
// }
//
// Fruits.push(req.body);
//
// console.log(req.body, 'this is req.body, shoud be the form info');
//   res.redirect('/fruits');
// })
//
// app.get('/fruits/new', (req, res) => {
//   res.render('new.ejs');
// });
//
// app.get('/fruits/:index/edit', function(req, res){
// 	res.render(
// 		'edit.ejs', //render views/edit.ejs
// 		{ //pass in an object that contains
// 			fruit: fruits[req.params.index], //the fruit object
// 			index: req.params.index //... and its index in the array
// 		}
// 	);
// });
//
// // show route
// app.get('/fruits/:index', (req, res) => {
// res.render('show.ejs', {
//   fruit: Fruits[req.params.index]
// })
// });
//
//  // delete route
// app.delete('/fruits/:index', (req, res) => {
// 	Fruits.splice(req.params.index, 1); //remove the item from the array
// 	res.redirect('/fruits');  //redirect back to index route
// });
