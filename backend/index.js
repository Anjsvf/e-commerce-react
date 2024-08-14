const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config(); // Adicione isso no topo do seu arquivo

// Middleware
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// Rotas
app.get("/", (req, res) => {
  res.send("API rodando");
});

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Endpoint para upload de imagens
app.post("/upload", upload.single("productImage"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: 0, message: "Nenhum arquivo enviado" });
  }

  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Conexão com o MongoDB

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));
// Definição do modelo Product
const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

// Endpoint para adicionar produto
app.post("/addproduct", async (req, res) => {
  try {
    const products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log("Produto salvo:", product);

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Erro ao salvar o produto:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao salvar o produto" });
  }
});

// Endpoint para remover produto
app.post("/removeproduct", async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ id: req.body.id });
    if (result) {
      console.log("Produto removido:", result);
      res.json({ success: true, name: result.name });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Produto não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao remover o produto:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao remover o produto" });
  }
});
//novas coleçoes endpoint
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("adicionada novas coplecoes");
  res.send(newcollection);
});
//edpoit moda feminina
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular_in_women = products.slice(0, 4);
  console.log("adicionada ");
  res.send(popular_in_women);
});
//middlewere user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "use uma chave de autenticação válida" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "por favor use um código válido" });
    }
  }
};

//endpoit cart
app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("adicionado");
});
//endpoit para remover produtos do cart
app.post("/removefromcart", fetchUser, async (res, req) => {
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("removido");
});
// endpoit get cart data
app.post("/getcart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});
// Endpoint para listar todos os produtos
app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("Todos os produtos:", products);
    res.json(products);
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    res
      .status(500)
      .json({ success: false, message: "Erro ao buscar os produtos" });
  }
});
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secrete_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "senha icorreta" });
    }
  } else {
    res.json({ success: false, erros: "emmnail errado" });
  }
});

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "esse email já está sendo usado" }); //caso seja o mesmo email
  }
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});
// Iniciar o servidor
app.listen(port, (error) => {
  if (!error) {
    console.log("Servidor rodando na porta " + port);
  } else {
    console.log("Erro ao iniciar o servidor:", error);
  }
});
