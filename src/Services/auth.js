import * as React from "react";
import axios from "axios";
import { useState } from "react";

class Auth {
  registerPostUrl;
  loginPostUrl;

  constructor(registerPostUrl, loginPostUrl) {
    this.registerPostUrl = registerPostUrl;
    this.loginPostUrl = loginPostUrl;
  }

  register = (data) => {
    axios
      .post(this.registerPostUrl, {
        data,
      })
      .then((response) => {
        console.log(response);
      });
  };

  login = (data) => {
    axios
      .post(this.loginPostUrl, {
        data,
      })
      .then((response) => {
        console.log(response);
      });
  };
}
//   function Register(data) {
//     axios
//       .post(registerPostUrl, {
//         data,
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   function Login(data) {
//     axios
//       .post(loginPostUrl, {
//         data,
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

export default new Auth("", "");
