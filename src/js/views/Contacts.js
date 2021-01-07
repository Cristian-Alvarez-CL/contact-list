import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters(
      "https://assets.breatheco.de/apis/fake/contact/agenda/CAP"
    );
  });

  const [state, setState] = useState({
    showModal: false,
  });
  //console.log("store.character: ",store.character);
  return (
    <div className="container">
      <div>
        <p className="text-right my-3">
          <Link className="btn btn-success" to="/add">
            Add new contact
          </Link>
        </p>
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            {store.character.map((elem, index) => {
              return (
                <ContactCard
                  className="contacCard"
                  key={index}
                  full_name={!!elem && elem.full_name}
                  address={!!elem && elem.address}
                  phone={!!elem && elem.phone}
                  email={!!elem && elem.email}
                  onDelete={() => setState({ showModal: true })}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Modal
        show={state.showModal}
        onClose={() => setState({ showModal: false })}
      />
    </div>
  );
};
