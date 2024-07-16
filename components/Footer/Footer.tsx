import classNames from "classnames";
import { footerItemsData } from "../../constants/Footer.constants";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer({ bordered }: { bordered?: boolean }) {
  return (
    <footer
      className={classNames(
        styles.Container,
        bordered && styles.BorderContainer
      )}
    >
      <div className={styles.InnerContainer}>
        {footerItemsData.map((item) => (
          <Link className={styles.Link} href={item.href} key={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
