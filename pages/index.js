import Head from "next/head";
import { getFeaturedEvents } from "./../dummy-data";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Next js event</title>
        <meta name="description" content="sample content" />
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
