import React from "react";
import PropTypes from "prop-types";
import { ContactClass } from "../model/ContactClass";

function Contact({ contacto }) {
  return (
    <div>
      <h3>Nombre: {contacto.nombre} </h3>
      <h3>Apellido: {contacto.apellido} </h3>
      <h3>Email: {contacto.email} </h3>
      <h3>
        {contacto.conectado ? "Contacto en línea" : "Contacto no disponible"}
      </h3>
    </div>
  );
}

Contact.propTypes = {
  contacto: PropTypes.instanceOf(ContactClass),
};

export default Contact;
