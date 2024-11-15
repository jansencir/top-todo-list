# TOP To-Do List
The Odin Project To-Do List from the "JavaScript Course"


## Features
Users should be able to create "projects" with their own to-do list.
- A "default" project should be open when a user first opens the app
    - (Kind of like their default list of miscellaneous tasks)

## User Interface
Users should be able to do the following:
- View all projects
- View all to-dos in those projects (general view with title, due date, priority, etc.)
    - Expand a single to-do to see/edit its details
- Delete a to-do item

## Data Storing
So far, we haven't learned how to store data anywhere.
The project tells you to store it in a JSON file on localStorage
- The downside is that the to-do list is only accessible on the machine it's created on
- The upside is that it's a learning experience (???), so why not

## Project Notes
Application logic should be separate from DOM manipulation stuff.
- Application logic: create new to-dos, setting to-dos as complete, changing to-dos priority