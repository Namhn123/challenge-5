# 05 Third-Party APIs: Work Day Scheduler

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Description
The goal of this project is to add functionality to starter code of a workday scheduler. When opening up the application, the header displays the current month and day. Based on the current hour of the day, the time blocks will have a color displaying whether the hour has already passed, the hour matches the current hour, or if the hour has yet to happen. Each time block will have a text field that you can enter tasks or events that happen each day. You'll be able to save it to your local storage.

## Usage
The applications can be accessed via https://namhn123.github.io/challenge-5/

![scheduler at start](./assets/images/pic0.png)
![scheduler at 1pm](./assets/images/pic1.png)