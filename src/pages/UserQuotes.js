import React, { useState, useEffect, useContext } from "react";
import List from "../components/List";
import {QuotesContext} from "../context/QuotesContext"



function UserQuotes() {
  
  const [userQuotes, setUserQuotes] = useState();

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      const response = await fetch("https://pern-back-end.vercel.app/myquotes", options);
      const data = await response.json();
      setUserQuotes(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const deleteUserQuote = async (id) => {
  //   try {
  //     const deleteUserQuote = await fetch(
  //       `https://pern-back-end.vercel.app/myquotes/${id}`,
  //       { method: "DELETE" }
  //     );
  //     console.log(deleteUserQuote);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      <h2>My Created Quotes:</h2>
      <List
        data={userQuotes}
        showDeleteButton={true}
        // onClickDeleteButton={deleteUserQuote}
      />
    </div>
  );
}

export default UserQuotes;
