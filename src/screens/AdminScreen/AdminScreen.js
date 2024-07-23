import React, { useState } from "react";
import Menu from "../../components/menu";

import Header from "../../components/header";
import Body from "../../components/body";

import styles from "./AdminScreen.module.css";
import { menuData } from "../../data/Data";
import { ImagesComponent } from "../exercises/ImagesComponent/ImagesComponent";
import { Numbers } from "../exercises/Numbers/Numbers";

const AdminScreen = () => {
  const [selectedOption, setSelectedOption] = useState("/react/test");

  const getContext = () => {
    switch (selectedOption) {
      case "/image/component":
        return <ImagesComponent />;

      case "/matriz/number":
        return <Numbers />;

      default:
        break;
    }
  };

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.mainWrapper}>
        <Menu
          title="Ejecicios Prácticos"
          data={menuData}
          onSelected={setSelectedOption}
          selectedOption={selectedOption}
        />
        <Body>{getContext()}</Body>
      </div>
    </div>
  );
};

export default AdminScreen;
