import asana from "../assets/images/asana.webp";
import calendly from "../assets/images/calendly.webp";
import clickup from "../assets/images/clickup.webp";
import docs from "../assets/images/docs.webp";
import drive from "../assets/images/drive.webp";
import hubspot from "../assets/images/hubspot.webp";
import monday from "../assets/images/monday.webp";
import notion from "../assets/images/notion.webp";
import trello from "../assets/images/trello.webp";
import workspace from "../assets/images/workspace.webp";
import zoho from "../assets/images/zoho.webp";
import { useFlyIn, useFlyInList } from "../hooks/useFlyIn";

const tools = [
  { name: "Asana", img: asana },
  { name: "Calendly", img: calendly },
  { name: "ClickUp", img: clickup },
  { name: "Google Docs", img: docs },
  { name: "Google Drive", img: drive },
  { name: "HubSpot", img: hubspot },
  { name: "Monday.com", img: monday },
  { name: "Notion", img: notion },
  { name: "Trello", img: trello },
  { name: "Google Workspace", img: workspace },
  { name: "Zoho CRM", img: zoho },
];

const Tools = () => {
  const eyeRef = useFlyIn("fly-from-left", 0.2);
  const titleRef = useFlyIn("fly-from-right", 0.2);
  const gridRef = useFlyInList(0.1, 60);

  return (
    <section id="tools" className="bg-warm-white px-[8%] py-24">
      <div className="max-w-6xl mx-auto">
        <p
          ref={eyeRef}
          className="font-hand text-xl text-terracotta mb-2 fly-from-left"
        >
          My toolkit
        </p>
        <h2
          ref={titleRef}
          className="font-serif text-4xl text-brown mb-3 fly-from-right"
        >
          Tools I use
        </h2>
        <p className="text-brown-mid mb-10">
          Familiar with the platforms that keep modern businesses running.
        </p>

        <div ref={gridRef} className="flex flex-wrap gap-5 justify-center">
          {tools.map(({ name, img }) => (
            <div
              key={name}
              data-fly
              className="fly-up flex flex-col items-center gap-2 bg-cream border border-border rounded-2xl p-5 w-27.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default"
            >
              <img src={img} alt={name} className="w-14 h-14 object-contain" />
              <span className="text-xs font-medium text-brown-mid text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
