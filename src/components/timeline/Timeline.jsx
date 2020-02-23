import React, { useMemo } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

AuthorsTimeline.propTypes = {
  biography: PropTypes.object
};

function AuthorsTimeline(props) {
  const { biography } = props;

  const timeLineItems = useMemo(
    () =>
      biography.map((item, index) => {
        return (
          <TimelineItem
            key={index}
            dateText={item.year}
            dateInnerStyle={{ background: "#49c5b6", color: "#000" }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              {item.info}
            </Typography>
          </TimelineItem>
        );
      }),
    [biography]
  );

  return <Timeline lineColor={"#aed1d5"}>{timeLineItems}</Timeline>;
}

export default AuthorsTimeline;
