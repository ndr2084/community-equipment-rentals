# Todo:
## Big Picture
1. update all instances of .default-text to .default-input-field
2. go through entire application and set style="--field: n", where n is the number of fields that will exist on a given row with respect to the form.
3. Set standard size for modals (mobile, tablet, desktop), and allow components to determine their own width based on how many components are in a given row (reference 2.)
4. Standardize the media query breakpoints across the app, and document what they are, and why they were chosen.

## Granular Task
1. Apply Big Picture task to modal-for-rental-program
2. Apply Big Picture task to login-form
3. Apply Big Picture task to rental form
4. Apply Big Picture task to buy Form
5. Apply Big Picture task to sell Form

## Other Tasks
1. Make hero cards responsive for mobile design
2. Make modal-for-rental-program form responsive for mobile design  
  2.1. Appointment picker should have flex direction change from row to column  
  2.2. The number of fields per row should change from 2 -> 1 when pixel width is below 800px
3. Complete ts logic for appointment-picker component
4. Implement proper nav bar for mobile (bottom of page) 
5. Implemet proper nav bar for desktop and tablet top of page
6. create secondary button component to solve the complexities that have arised from needing the background color on :hover to be *brighter* than the background color when the button is depressed (such cases: picking date/time slot for appointment picker)
7. Standardize the colors for the buttons, then rewrite the background colors for the buttons in styles.css 
