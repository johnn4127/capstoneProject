import React, { useState, useEffect } from "react";
import { Button, Form, Container, Card, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const [charName, setCharName] = useState(""); // Change variable name to charName to store character name

  const fetchUsersData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users:${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const hello=JSON.stringify(data)
        console.log(hello)
        console.log('wahlfaksdjfklsjda')
        setCharName(hello); // Set the character name in the state
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("An error occurred while fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <>
      <h2>CHARACTERS</h2>

      <Form.Label>{charName}</Form.Label> 
      <Form.Label>PROFICIENCY:</Form.Label> 
      <Form.Label>{charName}</Form.Label> 
      <Form.Label>{charName}</Form.Label> 

      <Nav.Link className="navButton" as={Link} to="/game">
        Start Game
      </Nav.Link>
    </>
  );
};

export default Profile;