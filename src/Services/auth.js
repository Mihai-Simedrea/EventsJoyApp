import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

class Auth {
  backendUrl;

  constructor(backendUrl) {
    this.backendUrl = backendUrl;
    this.state = { postCreated: false };
  }

  register = (data) => {
    axios.post(`${this.backendUrl}/registration`, data).then((response) => {
      console.log(response);
    });
  };

  login = (data) => {
    axios.post(`${this.backendUrl}/authentication`, data).then((response) => {
      console.log(response);
    });
  };

  postEvent = (data) => {
    axios.post(`${this.backendUrl}/events`, data).then((response) => {
      console.log(response.data.id);
      return response.data.id;
    });
  };

  postTicket = async (data) => {
    await axios
      .post(`${this.backendUrl}/tickets`, data)
      .then((response) => {
        alert(
          "Ai aplicat la acest event. Cand vei fi acceptat, vei primi un cod QR pe email."
        );
        return true;
      })
      .catch((err) => {
        alert("Ai aplicat deja la acest everiment.");
        return false;
      });
  };

  patchTicket = (data) => {
    axios.post(`${this.backendUrl}/tickets`, data).then((response) => {
      console.log(response.data);
      return response.data;
    });
  };

  getEvents = async () => {
    return (await axios.get(`${this.backendUrl}/events`)).data;
  };

  getEventById = async (id) => {
    return (await axios.get(`${this.backendUrl}/events/` + id)).data;
  };
}

export default new Auth(process.env.REACT_APP_BACKEND_URL);
