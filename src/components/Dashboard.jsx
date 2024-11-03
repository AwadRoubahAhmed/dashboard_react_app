import NotificationsWidgets from "./NotificationsWidgets";
import TasksWidgets from "./TasksWidgets";
import StatsWidgets from "./StatsWidgets";

export default function Dashboard() {
  //Code JavasScript;

  //Code JSX;
  return (
    <div className="bg-slate-800 w-4/5 m-auto p-3 rounded-xl font-mono">
      <div className="mb-3 text-white">
        <h2 className="text-xl font-semibold my-4 font-mono underline">
          Dashboard
        </h2>
        <p>Statistiques reélles de l'application</p>
      </div>

      <div className="m-auto h-fit flex justify-around flex-wrap gap-3 mt-6">
        <NotificationsWidgets />
        <TasksWidgets />
        <StatsWidgets />
      </div>
    </div>
  );
}
