# Using Next.js, Firebase and Chakra-UI to build this amazing website!


## The Project and the problem it solves
It is difficult to find students similar interests as you to collaborate on something, or to form communities, so is finding people to learn skills from. So this website was made so that students could sign up using their skills and interests, and then search for other students just like them.


## Design Process and Iterations
The design style I chose was a minimalistic one (duh).

The landing page is designed with a search bar to search for people by their skills(the main functionality of the website) and on searching, the user is prompted to sign-up or sign in to view the results. The landing page also displays all the ways in which the website can be used.

The sign up process was done in two parts, to reduce the cognitive load on the user.
Designing this second part of the registration process was a bit of a challenge as I wanted users to input skills one by one and then click the 'plus' button. I told a bunch of people to sign up, and a few of them added their skills without clicking the 'plus' button. And therefore, I added a tooltip, which popped up as soon as the page was loaded dispaying 'input an interest and click here' Also changing the form label from 'Enter all the things that interests you' to 'Enter things that interests you, one by one' also helped in achieving the desired result.

The home page was made with a toggle functionality so that people could search either by interests or by skills. Clicking on the accordion on the top-left corner displayed the logged in user's skills and the edit profile button.


## Development

The project was developed using Next.js and Firebase(a backend-as-a-service platform developed by google).
Firebase was initialized and all the functions were defined under 'authprovider'. The authprovider was defined using Context-API and the App component was wrapped inside it.
The styling was made super easy and super fast with the Chakra-UI
