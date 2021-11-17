import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Agenda,
  Month,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

import { DataManager, Query } from "@syncfusion/ej2-data";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

class Scheduler extends React.Component {
  constructor() {
    super(...arguments);
    this.scheduleData = [
      {
        Id: 3,
        Subject: "Testing",
        StartTime: new Date(2018, 1, 11, 9, 0),
        EndTime: new Date(2018, 1, 11, 10, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=3",
      },
      {
        Id: 4,
        Subject: "Vacation",
        StartTime: new Date(2018, 1, 12, 11, 0),
        EndTime: new Date(2018, 1, 12, 12, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=2",
      },
    ];
  }
  onClickAdd() {
    let Data = [
      {
        Id: 1,
        Subject: "Conference",
        StartTime: new Date(2018, 1, 15, 9, 0),
        EndTime: new Date(2018, 1, 15, 10, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=2",
      },
    ];
    this.scheduleObj.addEvent(Data);
  }
  onClickSave() {
    let data = new DataManager(this.scheduleObj.getCurrentViewEvents());
    console.log(data);
    // data[0].Subject = "Occurrence edited";
    // this.scheduleObj.saveEvent(data[0], "EditOccurrence");
    // console.log("asdasd");
  }
  onClickDelete() {
    let Data = [
      {
        Id: 4,
        Subject: "Vacation",
        RecurrenceID: 4,
        StartTime: new Date(2018, 1, 12, 11, 0),
        EndTime: new Date(2018, 1, 12, 12, 0),
        IsAllDay: false,
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=2",
      },
    ];
    this.scheduleObj.deleteEvent(Data, "DeleteSeries");
  }
  render() {
    return (
      <div>
        <ButtonComponent
          id="edit"
          title="Edit"
          onClick={this.onClickSave.bind(this)}
        >
          Save
        </ButtonComponent>
        <ScheduleComponent
          ref={(t) => (this.scheduleObj = t)}
          width="100%"
          height="550px"
          //   selectedDate={new Date(2018, 1, 15)}
          //   eventSettings={{ dataSource: this.scheduleData }}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default Scheduler;
