import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es'

function Calendar() {
  return (
    <div>
      <Fullcalendar 
      locale={esLocale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }
        }
        height={"97vh"}
      />
    </div>
  );
}

export default Calendar;
