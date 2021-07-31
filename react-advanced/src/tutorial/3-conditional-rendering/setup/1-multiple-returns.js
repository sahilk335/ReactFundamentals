import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [user, setUser] = React.useState("default user");

  React.useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        console.log(user);
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
