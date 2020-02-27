import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import theme from "../../config/material.theme";

AuthorsTimeline.propTypes = {
  timeLineItems: PropTypes.array.isRequired
};

function AuthorsTimeline({ timeLineItems }) {
  const { palette } = theme;

  return (
    <Timeline lineColor={palette.secondary.lightBlue}>
      {timeLineItems.map((item, index) => {
        return (
          <TimelineItem
            key={index}
            dateText={item.year}
            dateInnerStyle={{
              background: palette.secondary.main,
              color: palette.text.secondary
            }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              {item.info}
            </Typography>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

export default AuthorsTimeline;
