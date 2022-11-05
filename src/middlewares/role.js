import express from "express";

export const verifyRole = (req, res, next) => {
  const { isAdmin } = req.body;

  if (isAdmin === true) {
    return next();
  } else {
    return res.status(403).send("Unauthorized");
  }
};