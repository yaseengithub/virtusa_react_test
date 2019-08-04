const express = require('express');
const bodyParser = require('body-parser');
const userlist = require('./mockdata/userslist').users;
let products = require('./mockdata/products').products;
const app = express()
const port = 4200;

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser());

app.get('/', (req, res) => res.send('Welcome to Vertusa Test!'))
app.post('/login', (req, res) => {
    if (req.body.username === 'user1' || req.body.username === 'user2' || req.body.username === 'user3') {
        const userdetails = userlist.filter(x => x.username === req.body.username)[0];
        
        return res.send({
            success: true,
            userdetails: {
                username: req.body.username
            }
        })
    }
    return res.send({
        success: false
    })
})

app.get('/details', (req, res) => {
    const userdetails = userlist.filter(x => x.username === req.query.username)[0];        
    return res.send({
        success: true,
        data: userdetails
    });
});

app.get('/list', (req, res) => {
    return res.send({
        success: true,
        data: products
    });
});

app.post('/update', (req, res) => {  
    if(req.body.action === 'DELETE') {
        products = products.filter(x => x.id !== req.body.item.id);         
        return res.send({
            success: true
        });
    }else if(req.body.action === 'CREATE'){
        const ids = products.map(x => x.id);
        products.push({...req.body.item, id: ids[ids.length]+1});
        return res.send({
            success: true
        });
    }else if(req.body.action === 'UPDATE'){
        products = products.map(x => {
            if(x.id === req.body.item.id){
                return {...x, ...req.body.item}
            }
            return x;
        });
        return res.send({
            success: true
        });
    }
 });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))