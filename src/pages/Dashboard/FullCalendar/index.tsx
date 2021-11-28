import React, { memo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Card } from "antd";

const Component = () => {
  return (
    <Card>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </Card>
  );
};

Component.defaultProps = {};

export default memo(Component);
