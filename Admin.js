import React, { useState } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', description: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    setProducts([...products, { ...form }]);
    setForm({ name: '', price: '', description: '' });
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin - Gestion des Produits</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nom du produit" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Prix" type="number" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button onClick={addProduct}>Ajouter le produit</button>

      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name} - {prod.price}€ - {prod.description}
            <button onClick={() => deleteProduct(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
