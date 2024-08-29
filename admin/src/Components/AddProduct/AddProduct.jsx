import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);

    let responseData;
    let product = { ...productDetails };
    let formData = new FormData();
    formData.append('productImage', image);

    try {
      const response = await fetch('https://e-commerce-react-backend.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer upload da imagem.");
      }

      responseData = await response.json();
      
      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);

        // Aqui você pode enviar `product` para outro endpoint para salvar os dados no banco de dados
        const saveProductResponse = await fetch('https://e-commerce-react-backend-838f.onrender.com/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        const saveProductData = await saveProductResponse.json();

        if (saveProductData.success) {
          console.log("Produto salvo com sucesso!");
          // Adicione qualquer feedback ao usuário aqui, como um alerta ou redirecionamento
        } else {
          throw new Error("Erro ao salvar o produto.");
        }
      }
    } catch (error) {
      console.error("Erro:", error);
      // Adicione aqui o tratamento de erro, como mostrar uma mensagem ao usuário
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Título do produto</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Digite aqui"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Preço original</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Digite aqui"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Preço com desconto</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Digite aqui"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Categoria do produto</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Mulher</option>
          <option value="men">Masculina</option>
          <option value="kid">Criança</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt="Pré-visualização"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={Add_Product} className="addproduct-btn">Adicionar</button>
    </div>
  );
};

export default AddProduct;
