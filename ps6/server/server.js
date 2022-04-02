import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Server with products');
});

app.get('/products', (req, res) => {
    fs.readFile('./products.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /products: "+ err);
            res.status(500).send('File read failed');
            return;
        }
        console.log("GET: /products");
        res.send(productsJson);
    });
});

app.get('/products/:id', (req, res) => {
    fs.readFile('./products.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in GET /products/" + req.params.id + ": "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var products = JSON.parse(productsJson);
        var product = products.find(producttmp => producttmp.productId == req.params.id);
        if (!product) {
            
            console.log("Can't find product with id: " + req.params.id);
            res.status(500).send('Cant find product with id: ' + req.params.id);
            return;
        }
        var productJSON = JSON.stringify(product);
        console.log("GET /products/" + req.params.id);
        res.send(productJSON);
    });
});

app.post('/products', (req, res) => {
    fs.readFile('./products.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in POST /products: "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var products = JSON.parse(productsJson);
        var product = products.find(producttmp => producttmp.productId == req.body.productId);
        if (!product) {
            products.push(req.body);
            var newList = JSON.stringify(products);
            fs.writeFile('./products.json', newList, err => {
                if (err) {
                    console.log("Error writing file in POST /products: "+ err);
                    res.status(500).send('Error writing file products.json');
                } else {
                    res.status(201).send(req.body);
                    console.log("Successfully wrote file products.json and added new product with id = " + req.body.productId);
                }
            });
        } else {
            console.log("product by id = " + req.body.productId + " already exists");
            res.status(500).send('product by id = ' + req.body.productId + ' already exists');
            return;
        }
    });
});

app.put('/products/:id', (req, res) => {
    fs.readFile('./products.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in PUT /products/" + req.params.id+": "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var products = JSON.parse(productsJson);
        var productBody = products.find(producttmp => producttmp.productId == req.body.productId);
        if (productBody && productBody.productId != req.params.id) {
            console.log("product by id = " + productBody.productId + " already exists");
            res.status(500).send('product by id = ' + productBody.productId + ' already exists');
            return;
        }
        var product = products.find(producttmp => producttmp.productId == req.params.id);
        if (!product) {
            products.push(req.body);
            var newList = JSON.stringify(products);
            fs.writeFile('./products.json', newList, err => {
                if (err) {
                    console.log("Error writing file in PUT /products/" + req.params.id+": "+err);
                    res.status(500).send('Error writing file products.json');
                } else {
                    res.status(201).send(req.body);
                    console.log("Successfully wrote file products.json and added new product with id = " + req.body.productId);
                }
            });
        } else {
            for (var i = 0; i < products.length; i++) {
                if (products[i].productId == product.productId) {
                    products[i] = req.body;
                }
            }
            var newList = JSON.stringify(products);
            fs.writeFile('./products.json', newList, err => {
                if (err) {
                    console.log("Error writing file in PUT /products/" + req.params.id+": "+ err);
                    res.status(500).send('Error writing file products.json');
                } else {
                    res.status(200).send(req.body);
                    console.log("Successfully wrote file products.json and edit product with old id = " + req.params.id);
                }
            });
        }
    });
});

app.delete('/products/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./products.json', 'utf8', (err, productsJson) => {
        if (err) {
            console.log("File read failed in DELETE /products: "+ err);
            res.status(500).send('File read failed');
            return;
        }
        var products = JSON.parse(productsJson);
        var productIndex = products.findIndex(producttmp => producttmp.productId == req.params.id);
        if (productIndex != -1) {
            products.splice(productIndex, 1);
            var newList = JSON.stringify(products);
            fs.writeFile('./products.json', newList, err => {
                if (err) {
                    console.log("Error writing file in DELETE /products/" + req.params.id+": "+ err);
                    res.status(500).send('Error writing file products.json');
                } else {
                    res.status(204).send();
                    console.log("Successfully deleted product with id = " + req.params.id);
                }
            });
        } else {
            console.log("product by id = " + req.params.id + " does not exists");
            res.status(500).send('product by id = ' + req.params.id + ' does not exists');
            return;
        }
    });
});

app.listen(7777, () => console.log("Server address http://localhost:7777"));