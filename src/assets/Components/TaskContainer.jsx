import styles from "./taskContainer.module.css";
const TaskContainer = ({ children }) => {
  return <div className={styles.taskContainer}>{children}</div>;
};
export default TaskContainer;
