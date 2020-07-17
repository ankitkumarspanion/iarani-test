import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { Button, ListGroup, Form, InputGroup } from "react-bootstrap";

import { Spacer, EmptyState } from ".";

function NoteList({ notes, onEdit, onSearch, emptyState }) {
  const notesLength = notes.length;
  return (
    <React.Fragment>
      <div className="mb-4 d-flex align-items-center">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="px-3">
              <Icon path={mdiMagnify} size={0.9}></Icon>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
          ></Form.Control>
        </InputGroup>
      </div>
      {!!notesLength && (
        <ListGroup className="note-list">
          <TransitionGroup style={{ borderRadius: "0.25rem" }}>
            {notes.map((note) => (
              <CSSTransition key={note.id} timeout={500} classNames="note">
                <ListGroup.Item className="px-3 note-list-item">
                  <div className="d-flex align-items-center">
                    <div className="text-left">
                      <span>{note.title}</span>
                    </div>
                    <Spacer />
                    <div className="text-nowrap pr-3 font-weight-light small">
                      {(note.date || "").slice(4, 10)}
                    </div>
                    <Button size="sm" onClick={() => onEdit(note)}>
                      Edit
                    </Button>
                  </div>
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      )}
      {!notesLength && <EmptyState className="note-empty-state" {...emptyState} />}
    </React.Fragment>
  );
}

export default NoteList;
