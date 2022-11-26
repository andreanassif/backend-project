import express from "express";
import { productosDAO } from "../config/config.dao.js";
import { Products } from "../services/products.js"; // => llamar al DAOS


export const getProducts = async (req, res) => {
  try {
    const prod = await Products.getAll();

    return res.send(prod);
  } catch (error) {
    return console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = JSON.parse(req.params.id);
    const prod = await Products.getById(id);
    if (!prod) return res.status(400).send("Product not found");

    return res.send(prod);
  } catch (error) {
    return console.log(error);
  }
};

export const saveProduct = async (req, res) => {
  try {
    const { name, price, url, description, stock } = req.body;
    if (!name || !price || !url || !description || !stock)
      return res.status(400).send("Empty fields");

    const newProduct = {
      name,
      price,
      url,
      description,
      stock,
    };

    await Products.save(newProduct);

    return res.status(200).send("Product saved successfully");
  } catch (error) {
    return console.log(error);
  }
};

export const updateProductById = async (req, res) => {
  try {
    const id = JSON.parse(req.params.id);
    const prod = await Products.getById(id);
    console.log(prod)
    if (!prod) return res.status(400).send("Product not found");

    const { name, price, url, description, stock } = req.body;
    if (!name && !price && !url && !description && !stock)
      return res.status(400).send("Empty/wrong fields");

    const updateProduct = {
      name: name ? name : prod.name,
      price: price ? price : prod.price,
      url: url ? url : prod.url,
      description: description ? description : prod.description,
      stock: stock ? stock : prod.stock,
    };

    await Products.updateById(id, updateProduct);

    return res.status(200).send("Product updated successfully");
  } catch (error) {
    return console.log(error);
  }
};

export const deleteProductById = async (req, res) => {
    try {
      const id = JSON.parse(req.params.id);
      const prod = await Products.getById(id);
      if (!prod) return res.status(400).send("Product not found");
  
      await Products.deleteById(id);
  
      return res.status(200).send("Product deleted successfully");
    } catch (error) {
      return console.log(error);
    }
  };