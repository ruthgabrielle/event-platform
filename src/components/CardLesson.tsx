import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function CardLesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const dateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      {" "}
      <span className="text-gray-300">{dateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-green-400 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Video released
            </span>
          ) : (
            <span className="text-sm text-red-700 font-medium flex items-center gap-2">
              <Lock size={20} />
              Coming soon
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-purple-500 border border-purple-500 font-bold">
            {props.type === "live" ? "LIVE" : "PRATICAL CLASS"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
