# Pragmateam code challenge client by Suwanto Yip (React)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

○ Highlights of your improvements (tests and others you choose)
1. Refactor api callbacks to Promise.all, to improve performance.
2. Instead of every loop of data, calls setItems<useState>, which will cause page to re-render each times, 
i store into a temp array "request" and once combine with "data", i call setItems to store it.
3. Created a new function getTemperature, to do fetch call, and easier for mock testing (component based).
4. Created a new function returnCombineArrayById, to combine arrays, and easier for mock testing.
5. Added data-testId for easier code reference for unit testing, and value checking.

○ What would you improve next if you had more time?
○ Questions you would ask and your own answers and assumptions
○ Explanations of decisions or the approach you took
○ Any other notes you feel relevant to evaluate your test improvements.
