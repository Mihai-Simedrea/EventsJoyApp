import * as React from "react";
import axios from "axios";
import { useState } from "react";

class Auth {
  backendUrl;

  constructor(backendUrl) {
    this.backendUrl = backendUrl;
  }

  register = (data) => {
    axios
      .post(`${this.backendUrl}/registration`, 
        data,
      )
      .then((response) => {
        console.log(response);
      });
  };

  login = (data) => {
    axios
      .post(`${this.backendUrl}/authentication`, 
        data,
      )
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

export default new Auth(process.env.REACT_APP_BACKEND_URL);
