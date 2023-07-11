const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home page <a href="/api/products">Products</a></h1>');
});

app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

/* app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find((product) => product.id === Number(productID));
  if (!singleProduct) {
    return res.status(404).send('Product not found');
  }
  res.json(singleProduct);
});
 */
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
    if (sortedProducts.length < 1) {
      return res.status(200).json({ success: true, data: [] });
    }
  }

  res.status(200).json(sortedProducts);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
