import styles from "./listTasks.module.scss";

interface ListTasksProps {
  taskText: string;
  handleCompleteTask: () => void;
  handleDeleteTask: () => void;
  isActive: boolean;
}

export function ListTasks({
  taskText,
  handleCompleteTask,
  isActive = false,
  handleDeleteTask,
}: ListTasksProps) {
  return (
    <div className={styles.container}>
      <div className={isActive ? styles.active : ""}>
        <button type="button" onClick={handleCompleteTask}>
          <img
            src={!isActive ? "/images/check.svg" : "/images/checked.svg"}
            alt="checkbox"
            style={{ width: "17px", height: "17px" }}
          />
          <img
            src={
              !isActive
                ? "/images/check-hover.svg"
                : "/images/checked-hover.svg"
            }
            alt="checkbox"
            className={styles.onHover}
            style={{ width: "17px", height: "17px" }}
          />
        </button>
        <p>{taskText}</p>
        <button type="button" onClick={handleDeleteTask}>
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
