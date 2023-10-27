import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./pages/action";
import "./App.css";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.name.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
    };
    dispatch(setUser(payload));
  };

  useEffect(() => {
    const { name, age, gender } = user;
    console.log(`Имя: ${name}\nВозраст: ${age}\nПол: ${gender}`);
  }, [user]);

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" name="name" />
          <input type="number" placeholder="Возраст" name="age" />
          <select name="gender">
            <option value="male">Мужчина</option>
            <option value="female">Женщина</option>
          </select>
          <button>Отправить</button>
        </form>
      </div>
  );
};

export default App;
