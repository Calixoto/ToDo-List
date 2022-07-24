import { useState } from "react";
import { ListTasks } from "../ListTasks";
import styles from "./tasks.module.scss";
export function Tasks() {
  const [countTask, setCountTask] = useState(5);
  return (
    <div className={styles.container}>
      <div>
        <section>
          <h2>Tarefas criadas</h2>
          <span>
            <strong>{countTask}</strong>
          </span>
        </section>
        <section>
          <h2>Concluídas</h2>
          <span>
            <strong>
              5 de 5
              {/* {countTask !== 0 ? countTask + " de" + countTask : 0} */}
            </strong>
          </span>
        </section>
      </div>
      {/* <EmptyTasks /> */}
      {[1, 2, 3, 4, 5].map((item) => (
        <ListTasks key={item} />
      ))}
      {/* <ul>
        <li></li>
      </ul> */}
    </div>
  );
}
