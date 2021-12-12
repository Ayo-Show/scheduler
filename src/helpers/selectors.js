// Use the state to return the appointments for a specific day
function getAppointmentsForDay(state, day) {
  const result = [];
  const dayData = state.days.filter((d) => d.name === day);

  if (!dayData[0]) return result;
  for (const a of dayData[0].appointments) {
    result.push(state.appointments[a]);
  }

  return result;
}

// Add the info of the interviewer for an existing interview
function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
  return null;
}

export { getAppointmentsForDay, getInterview };
