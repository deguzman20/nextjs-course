import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath =
      router.pathname === "events"
        ? `/${year}/${month}`
        : `/events/${year}/${month}`;

    router.push(fullPath);
  };

  console.log(events);

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
