/* eslint-disable radix */
import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function TaskDetailsPage() {
  const [selectedTask, setSelectedTask] = useState([]);
  const params = useParams();
  const tasks = useSelector((state) => state.entities.tasks.data);
  const task = tasks.find((item) => item._id === params.id);
  useEffect(() => {
    setSelectedTask(task)
  }, []);

  return <div>TaskDetailsPage id={selectedTask._id}</div>;
}
