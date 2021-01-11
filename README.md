# TODO
## Style
- Restyle checkboxes to match rest of site
- Create icon and favicon
- Clean up sticky note (eraser missed some bits)
- Add sticky note animation on hover

## Tests
- Expand user and post tests
- Write comment tests

## Functionality
- Add ability to "like" posts and comments
- Add ability to update in real time
- Add daily recurring job to clear data and re-seed
- Add frequently recurring job to add posts and comments

# FIXME
- When deleting a post, some comments on other posts disappear
- Update business logic to have two separate layers:
    - API, which takes arguments (not Requests) and updates models
    - UI, which uses Requests to pass the correct information to the API based on user actions and state (e.g. session data)