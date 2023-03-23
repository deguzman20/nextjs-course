import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '@/components/events/event-list';
import ErrorAlert from '@/components/ui/error-alert';

const FilteredEventPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if(!filterData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if(isNaN(filteredYear) || 
      isNaN(filteredMonth) || 
      numYear > 2030 || 
      numYear < 2021 || 
      numMonth < 1 || 
      numMonth > 12
  ) {
    return <p>Invalid filter please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!filteredEvents || filteredEvents.length == 0) {
    return (
      <ErrorAlert>
        <p>no events found!</p>
      </ErrorAlert>
    )
  }

  return (
    <div>
      <EventList items={filteredEvents}/>
    </div>
  );
}

export default FilteredEventPage;