# Pragmateam code challenge client by Suwanto Yip (React)


**Highlights of your improvements (tests and others you choose)**
  1. Refactor api callbacks to Promise.all, to improve performance.
  2. Instead of every loop of data, calls setItems<useState>, which will cause page to re-render each times, 
  i store into a temp array "request" and once combine with "data", i call setItems to store it.
  3. Created a new function getTemperature, to do fetch call, and easier for mock testing (component based).
  4. Created a new function returnCombineArrayById, to combine arrays, and easier for mock testing.
  5. Added data-testId for easier code reference for unit testing, and value checking.

**What would you improve next if you had more time?**
  1. I would use redux saga to handle the API call, and create a services modules which handles all the apiService calls
  2. By using a generic apiService calls, we can have a common error handlings for apiService calls, such as (BadRequestError, NotFoundResponseError, ConflictResponseError).
  2. I would like to create a react table component that requires at least array and columns object (consist of class, and value) as the props.
  3. New table component also allows easier unit testing and ensure component is working as intended
  4. Move all the logic (too low, too high, ...) in render to a function (it can be located in libs/helper). Render function should only be use to display result, not handle logics
  5. Additional page testing is needed to ensure data is generated properly by mocking api calls, and ensure each elements generated properly
  
**Questions you would ask and your own answers and assumptions**
  1. Why can't the api calls handles a list of ids, and return the result in array, or call .../sensor should return all the available measurement and let UI handles
     - my assumption is the api side was develop with a single id purpose only.
  
**Explanations of decisions or the approach you took**
  1. The decision i took to restructure the "data forEach" loop api calls which i think have major performance issue and user experience as well, 
    - To reduce the need of calling setItems<useState> each time, which will eventually reduce page renders
    - by using promise all, it ensure all the api calls executed at the same time, to reduce callback wait, which speeds up overall page loading.
  2. Create a temporary array, then combine them with "data array", also reduce the need of using complicated and confusing call of "...prevItems" and combining them before storing into setItems.
  
**Any other notes you feel relevant to evaluate your test improvements.**
  1. Feel free to comment on my project and i hope, i can explain a lot more in details on my approach and codes in our next meeting.

Cheers, Thanks for reading my long comment


