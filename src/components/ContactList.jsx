import React from "react";
import { ContactClass } from "../model/ContactClass";
import Contact from "./Contact";

function ContactList() {
  const defaultContact = new ContactClass(
    "Nombre default",
    "Apellido default",
    "email@mail.com",
    true
  );

  return (
    <div>
      <h1>Contacto:</h1>
      <Contact contacto={defaultContact} />
    </div>
  );
}

export default ContactList;
