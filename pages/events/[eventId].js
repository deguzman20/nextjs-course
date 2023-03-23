import { Fragment } from "react";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/dummy-data";
import Comments from "@/components/input/comments";

const EventsDetailPage = () => {
  const router = useRouter();

  const { query } = router;
  const eventId = query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>no event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
};

export default EventsDetailPage;
