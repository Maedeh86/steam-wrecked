# Steam Wrecked – TDD Assignment

## Project Overview
This project was built following Test Driven Development (TDD) principles.

- React + Next.js + TypeScript
- 15+ unit tests
- 2 integration tests
- Responsive UI

---

## 🧪 Testing Summary

###  Unit Tests
I created unit tests for the following components:
- Footer
- Header
- BackArrow
- YoutubeVideo
- ImageSlider

### Integration Tests
- `Home` page: tests rendering of all key components on the landing page
- `Team` page: tests layout and presence of team member cards

---

## Test Feedback

###  Original Tests - Feedback
The initial tests (if any) were incomplete. Important UI components like `Footer`, `Header`, and `BackArrow` were not covered. No integration tests were included, which made verifying page-wide behavior difficult.

### Additional Tests I Added
- Wrote comprehensive unit tests for all visual components
- Used `jest.mock()` to isolate components
- Ensured components render correctly and handle user interactions

### What Was Missing
- No coverage for navigation and layout
- No tests for page-specific content or responsive behavior
- No error-handling tests or edge case validation
