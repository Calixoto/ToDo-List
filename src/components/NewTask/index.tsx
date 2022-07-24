import { BsPlusCircle } from "react-icons/bs";
import styles from "./newTask.module.scss";

export function NewTask() {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <BsPlusCircle />
        </button>
      </form>
    </div>
  );
}
