export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          selected: false,
        },
      ];

    case "modify":
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            id: action.id,
            text: action.text,
            selected: action.selected,
          };
        }
        return task;
      });

    case "delete":
      return tasks.filter((task) => task.id !== action.id);

    default:
      return tasks;
  }
}
