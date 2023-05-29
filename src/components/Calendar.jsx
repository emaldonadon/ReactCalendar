import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es'

const event = [
  {
    title: 'Hora libre',
    start: '2023-05-30T10:00:00',
    end: '2023-05-30T12:00:00',
  },
  {
    title: 'Hora de descanso',
    start: '2023-06-01T14:30:00',
    end: '2023-06-01T16:30:00',
  },
  {
    title: 'Hora libre',
    start: '2023-05-30T10:00:00',
    end: '2023-05-30T12:00:00',
  },
  {
    title: 'Hora libre',
    start: '2023-05-30T10:00:00',
    end: '2023-05-30T12:00:00',
  },
  {
    title: 'Hora libre',
    start: '2023-05-30T10:00:00',
    end: '2023-05-30T12:00:00',
  },
  {
    title: 'Hora libre',
    start: '2023-05-30T10:00:00',
    end: '2023-05-30T12:00:00',
  },
  {
    title: 'Hora libre',
    start: '2023-05-30T10:00:00',
    end: '2023-05-30T12:00:00',
  },
];

function Calendar() {
  

  return (
    <div>
      <Fullcalendar
        locale={esLocale}
      
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        weekends={true}
        events={event}
        /* select={handleSelect}*/
         editable={false}  
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
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
