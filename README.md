# Wellness Retreats

This project displays a list of wellness retreats with filtering and pagination functionality. It allows users to filter retreats by date, type, and title, and navigate through the list of retreats using pagination buttons.

## Features

- **Filter by Date**: Allows users to filter retreats based on the selected year.
- **Filter by Type**: Allows users to filter retreats based on the type (Yoga, Meditation, Detox).
- **Search by Title**: Allows users to search retreats by their title.
- **Pagination**: Allows users to navigate through the list of retreats with previous, next, and page number buttons.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/wellness-retreats.git
    cd wellness-retreats
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

The application provides a simple UI to browse wellness retreats. Use the filters at the top to narrow down your search:

- **Filter by Date**: Select a year from the dropdown to filter retreats by the specified year.
- **Filter by Type**: Select a type from the dropdown to filter retreats by the specified type (Yoga, Meditation, Detox).
- **Search by Title**: Enter a keyword in the search input to filter retreats by their title.

Navigate through the list of retreats using the pagination buttons at the bottom.

## Code Structure

- `src/components/Retreat.js`: Main component that handles the filtering and pagination logic.
- `src/data/Retreat.json`: JSON file containing the list of wellness retreats.



