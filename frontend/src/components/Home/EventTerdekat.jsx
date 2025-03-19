import { useState, useEffect } from "react";

const EventTerdekat = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const dummyData = [
        { id: 1, title: "Lorem Ipsum", mulai: "Mulai 21 Maret 2025", image: "/images/image4.jpg" },
        { id: 2, title: "Lorem Doro", mulai: "Mulai 24 Maret 2025", image: "/images/image4.jpg" },
        { id: 3, title: "Lorem Foro", mulai: "Mulai 18 Maret 2025", image: "/images/image4.jpg" },
        { id: 4, title: "Lorem Goro", mulai: "Mulai 19 Maret 2025", image: "/images/image4.jpg" },
        { id: 5, title: "Lorem Koro", mulai: "Mulai 22 Maret 2025", image: "/images/image4.jpg" },
      ];
      setEvents(dummyData);
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-8">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Event Terdekat</h2>
        <button className="border border-black rounded-md px-4 sm:px-5 py-1.5 sm:py-2 font-medium text-black text-xs sm:text-sm w-[80px] sm:w-[95px] transition hover:bg-black hover:text-white active:scale-90 duration-300">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              index === 4 ? "hidden sm:block md:block lg:block xl:block" : ""
            }`}
          >
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="text-base font-semibold">{event.title}</h3>
              <p className="text-xs text-gray-600">{event.mulai}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTerdekat;

