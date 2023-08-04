# To-Do List App

A simple To-Do list app built using HTML, CSS, React, and Redux Toolkit. The app allows users to add, remove, and manage their to-do items. It also includes a weather feature that allows users to check the weather for a specific city.

## Technologies Used

- HTML: Markup language for building the app's structure.
- CSS: Styling the app's layout and appearance.
- React: JavaScript library for building the user interface.
- Redux Toolkit: State management library for managing app state.
- Axios: HTTP client library for making API requests to OpenWeatherMap.

## Approach

The app is structured using React components for modularity and reusability. The Redux Toolkit is used for managing the app's state, allowing the user's to-do items and weather data to be shared across different components.

The app consists of the following components:

- TodoForm: Allows users to add new to-do items.
- TodoList: Displays the list of to-do items and enables removing them.
- Weather: Enables users to search for a city's weather and display the temperature and weather description.



## Unsolved Problems

- Currently, the app does not handle error states when fetching weather data. If an invalid city name is entered, no error message is displayed.
- The weather data is not saved to local storage, so the last searched city will not persist after the app is reloaded.

## Ideas for Future Advancements

- Implement error handling for weather data fetching to provide meaningful error messages to the user.
- Add a feature to mark tasks as completed and filter tasks based on their status (completed or not).
- Implement user authentication to allow multiple users to have their own to-do lists.
- Improve the user interface with animations, icons, and better styling.



