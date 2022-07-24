import styles from "./emptyTasks.module.scss";
export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <img src="/images/clipboard.svg" alt="clipboard" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie
        tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
