import React from "react";
import "./courseListStyles.css";
import orangeline from "../../assets/images/orangeline.png";
import purpleline from "../../assets/images/purpleline.png";
import { Button, Typography } from "@mui/material";
import List from "../list/list";
import { courses } from "../../model/courses";

export default function CoursesList(props) {
  return (
    <div className="courses">
      <div className="headline">
        <Typography variant="h3">{props.headline}</Typography>
        <div className="lines">
          <img src={orangeline} alt="orange line" />
          <img src={purpleline} alt="purple line" />
        </div>
      </div>
      {/* List of courses */}
      <List data={courses} />
      <Button
        sx={{ display: "flex", margin: "32px auto", width: 300, padding: "14px 0" }}
        variant="contained"
      >
        View More
      </Button>
    </div>
  );
}