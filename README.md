# TODO

## Style
- Add loading/processing icons on form submissions
- Create icon and favicon
- Clean up sticky note (eraser missed some bits)
- Add sticky note animation on hover

## Tests
- Write API tests

## Functionality
- Add ability to view others' profiles
- Update profile page:
    - Posts
    - Comments
- Update seeder to add reactions
- Update seeded posts to sometimes have 0 comments
- Add ability to view other profiles
- Add daily recurring job to clear data (except accounts) and re-seed
- Add frequently recurring job to add posts and comments
- Add additional language option in profile

# FIXME
## Style
- Restyle checkboxes to match rest of site
- Move Vue component styles to component files

## Functionality
- Update supervisor to use queue:listen not queue:work during development
- When deleting a post, some comments on other posts disappear
- Update business logic to have two separate layers:
    - API, which takes arguments (not Requests) and updates models
    - UI, which uses Requests to pass the correct information to the API based on user actions and state (e.g. session data)
- Add cache-busting for assets compiled with mix