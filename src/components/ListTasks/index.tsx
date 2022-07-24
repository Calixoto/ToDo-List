import styles from "./listTasks.module.scss";
export function ListTasks() {
  return (
    <div className={styles.container}>
      <div>
        <button>
          <img
            src="/images/check.svg"
            alt="checkbox"
            style={{ width: "17px", height: "17px" }}
          />
          <img
            src="/images/check-hover.svg"
            alt="checkbox"
            className={styles.onHover}
            style={{ width: "17px", height: "17px" }}
          />
        </button>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <button>
          <img
            src="/images/trash.svg"
            style={{ width: "12px", height: "14px" }}
            alt="lixo"
          />
          <img
            src="/images/trash-danger.svg"
            className={styles.onHover}
            style={{ width: "12px", height: "14px" }}
            alt="lixo"
          />
        </button>
      </div>
    </div>
  );
}
