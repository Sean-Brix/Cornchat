import { createContext, useState } from "react";
import { Header, SideNav, Aside, Convo } from "../../components/index";
import styles from "./cornchat.module.css";

export const Apps = createContext(null);

export default function cornChat() {
  const [show, setShow] = useState(true);
  return (
    <Apps.Provider value={{ show, setShow }}>
      <main className={styles.body}>
        <Header></Header>
        <SideNav></SideNav>
        <Convo></Convo>
        <Aside></Aside>
      </main>
    </Apps.Provider>
  );
}
