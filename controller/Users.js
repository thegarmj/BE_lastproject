import Users from "../models/UserModels.js";
import bcrypt from "bcrypt";
import { request } from "express";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { username, email, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan konfirmasi password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Paswword Salah" });
    const userId = user[0].id;
    const username = user[0].username;
    const email = user[0].email;
    res.status(200).json({ userId, username, email });

    // const accesToken = jwt.sign({ userId, username, email }, process.env.ACCES_TOKEN_SECRET, { expiresIn: "20s" });
    // const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
    // 44;
    // await Users.update(
    //   { refresh_Token: refreshToken },
    //   {
    //     where: {
    //       id: userId,
    //     },
    //   }
    // );
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    // res.json({ accesToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};
