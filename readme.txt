--Readme document for *Serena Nguyen, serenaan@uci.edu, serenaan--

demo URL: https://youtube.com/shorts/7ApZ5T_mPeg?feature=share

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
Approximately 10-15 hours including coding, debugging, testing, and UI improvements.


3. What online resources did you consult when completing this assignment? (list specific URLs)
Ionic Documentation
Ionic Storage API
Angular Documentation
Stack Overflow

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
I primarily worked on this assignment independently but referenced discussions in class or on the course discussion board for clarifications on storing data locally.


5. Is there anything special we need to know in order to run your code?
Run npm install to ensure all dependencies are installed.
If running in a browser, use ionic serve to preview.
If testing on a mobile device, use an emulator or an actual device via ionic capacitor run for proper styling and layout checks.


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
Yes, the app is designed for students, professionals, or anyone tracking their sleep habits to monitor their overnight sleep and daytime sleepiness efficiently.


7. Did you design your app specifically for iOS or Android, or both?
Both. The app is responsive and works on both **iOS and Android**, tested via Chrome DevTools.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
A user selects a start and end time using a time picker and adds optional notes before clicking "Submit." This method was chosen for its simplicity and efficiency in logging sleep with minimal effort.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
A user selects a sleepiness level from the Stanford Sleepiness Scale dropdown, adds optional notes, and clicks "Log Sleepiness." This method allows for quick and accurate tracking without excessive manual input.

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
Users can navigate to the "View Data" tab to see a list of their overnight sleep logs and daytime sleepiness logs. The data is displayed in an organized card format for easy readability.


11. Which feature choose--using a native device resource, backing up logged data, or both?
I chose backing up logged data using Ionic Storage for local persistence, ensuring that data remains available even after refreshing the app.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
I did not use a native device resource but relied on local storage for data persistence.


13. If you backed up logged data, where does it back up to?
The data is backed up locally on the device using Ionic Storage, which allows users to retain their sleep logs between sessions.

14. How does your app implement or follow principles of good mobile design?
Minimalistic UI, consistent design, persistent data, dark mode, responsive design, Uh-Oh buttons
