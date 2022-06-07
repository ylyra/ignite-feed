import igniteSimbolSVG from "../../assets/images/ignite-simbol.svg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteSimbolSVG} alt="Ignite Logo" />
    </header>
  );
}
