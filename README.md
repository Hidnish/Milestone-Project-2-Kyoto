# Kyoto Day'n'Night

<img src="assets/images/readme-img/responsive.png" alt="about section" width="70%"/>

[Link to the live site on GitHub pages](https://hidnish.github.io/Milestone-Project-2-Kyoto/)

#### Overview

This is "Kyoto Day'n'Night", a project developed with the aim of promoting Kyoto as a destination for people traveling through Japan or simply interested in visiting the country in the future. The major theme of the website is the division between day activities (historical sites and parks) and night activities (restaurants and bars), to facilitate the website navigation and add a unique touch to the page.

---

### Table of Contents

- [UX](#ux)
    - [User Stories](#user-stories)
    - [Strategy](#1.-strategy)
    - [Scope](#2.-scope)
    - [Structure](#3.-structure)
    - [Skeleton](#4.-skeleton)
    - [Surface](#5.-surface)
- [Features](#features)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Integration](#integration)
    - [Workspace, version control and Repository storage](#workspace-version-control-and-repository-storage)
- [Resources](#resources)
    - [Sources of knowledge](#sources-of-knowledge)
    - [Other resources](#other-resources)
- [Code Validation](#code-validation)
    - [Testing](#testing)
    - [Solved bugs](#solved-bugs)
    - [Unsolved bugs](#unsolved-bugs)
- [GitHub Pages](#github-pages)
    - [Deployment](#deploying-the-project-on-github-pages)
    - [Forking](#forking-the-github-repository)
    - [Cloning](#making-a-local-clone-of-the-github-repository)
- [Credits](#credits)
    - [Media](#media)
    - [Content](#content)
    - [Code](#code)
    - [Acknowledgement](#acknowledgement)

--- 

## UX

The target audience is comprised by english-speaking individuals and families, interested in the history and culture of the city, as well as eating well and having fun.

#### User Stories 

- "I want to navigate the website easily and intuitively, on any device (phone, tablet or laptop)"
- "I want to understand the main purpose of the site"
- "I am interested in visiting Kyoto, but first, I would like to know what the city has to offer"
- "I want to get in touch with questions about the locations listed on the website or other locations I believe should be mentioned"
- "I want to be able to follow the page on social medias to check for any update/reviews"  

#### 1. Strategy

##### Project Goals:
- To Provide information/promote on a holiday destinations.
- Grab people's attention through images and tips on recommended locations.
- Eventually, to increase the number of tourists visiting Kyoto and the specific locations listed in the website.

##### Customer Goals:
- To find a nice destination for the next holiday.
- To find information confirming the worthiness of such destination (also for those who were already interested in visiting Kyoto).
- To be able to contact someone for clarifications or in a case of doubts 
- To navigate the website smoothly and intuitively.

#### 2. Scope 

- Provides a clean UX for users with intuitive navigation.
- Structures the content with clear division and focus on introduction, maps and contact form. 
- Animations (made with JavaScript) included to improve the overall user experience and increase the trustworthiness of the website. 

#### 3. Structure 

- The structure has been developed to allow users to quickly absorb information and imagery.
- Content throughout the website has been provided in small bites, to allow the user to easily understand how the website works and avoid information overload.
- The About section introduces the user to the different activities available in the city.
- The Location section allows the user to chose between day & night activities and find all the locations on a map with essential information and pictures. 
- A Contact form (via email) is provided at the bottom of the page together with links to Social Media in the Footer.

#### 4. Skeleton

- [Wireframes](assets/docs/wireframes.pdf)
- Interactive navbar (fixed on mobile browsers) with 4 links + logo.
- Home, About, Locations (map) and Contact sections.
- Footer with social media links and copyright message.

#### 5. Surface 

##### Colors 

Colours throughout the page fall in the spectrum between #fafafa (off white) & #1c334d (dark blue) to fit with the 'Day and Night' theme of the website. 

![image](https://www.colorhexa.com/fafafa.png) ![Image](https://www.colorhexa.com/1c334d.png) 

##### Typography

- "Japanese Brush" font for: Logo and sections heading.
- "Crimson Text" font for small headings and nav-links, to add an elegant touch.
- "Helvetica Neue" font for body content (Default Bootstrap font-family), to keep the website's content clean and easily readable.
- "Sans-serif" as fall-back font for every text.


##### images

- Images were carefully selected to match with the background colours and create a sense of 'authenticity' in the website.

--- 

## Features 

- Designed with HTML5, CSS3, JavaScript + libraries (Bootstrap, jQuery, GSAP).
- Responsive **navigation bar** (fixed on mobile) present throughout the page to move from one section to the other with ease. 
- **Home/landing section** with auto-playing slideshow.

    <img src="assets/images/readme-img/homepage.png" alt="homepage" width="70%"/>

- **About section** with:
    - Information about the website and the different activities/locations available.
    - Links to the specific locations from the 'Location section'.
    <br><br>
    
    <img src="assets/images/readme-img/about.png" alt="about section" width="70%"/>

- **Location section** with:
    - First menu to select day-time or night-time locations (based on the choice the section background and map colour will change).
    - Second menu to select one of the two groups of locations available based on the first selection (i.e. Restaurants and Bars & Clubs).
    - Third menu to select a specific location (that will show on the map).
    - Map with markers and popup information for each location.
    <br><br>

    <img src="assets/images/readme-img/locationsd.png" alt="location section 1" width="70%"/>
    <img src="assets/images/readme-img/locationsn.png" alt="location section 2" width="70%"/>

- **Contact section** with contact form

    <img src="assets/images/readme-img/contact.png" alt="contact section" width="70%"/>

- **Footer** with links to social media and copyright message.

    <img src="assets/images/readme-img/footer.png" alt="footer" width="70%"/>

- **404 page** with link to the homepage  

    <img src="assets/images/readme-img/404.png" alt="404 page" width="70%"/>

#### Future prospects

- A section to book a trip directly from the website.
- A review section with comment from previous customers/users.

---

## Technologies Used 

#### Languages 

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

#### Integration

1. [Bootstrap](https://getbootstrap.com/)
   - Used to assist with styling and responsiveness of the website
2. [FontAwesome](https://fontawesome.com/)
   - Used to create social media icons in the footer 
3. [Google Fonts](https://fonts.google.com/) 
   - Used to import 'Crimson Text' font
4. [Online Web Fonts](https://www.onlinewebfonts.com/download/fc87c87c07938e0484418e4c0a773b02)
   - Used to import 'Japanese Brush Master' font
5. [GSAP](https://greensock.com/gsap/)
   - Used to add animation to the About section
6. [jQuery](https://jquery.com/)
   - Included with Bootstrap to create responsive navbar and used to simplify scripts.
7. [Email.js](https://www.emailjs.com)
   - API for sending emails through contact form   
8. [LeafletJS](https://leafletjs.com/)
   - API for interactive maps 

#### Workspace Version control and Repository storage

1. [Gitpod](https://www.gitpod.io/) - Used as workspace IDE (Integrated Development Environment).
2. [GitHub](https://github.com/) - Hosting platform for version control, used to manage my repositories.
3. [Git](https://git-scm.com/) - Version control software to record file changes and updates.

---

## Resources

#### Sources of knowledge
- SLACK Community - Source of assistance and inspiration. 
- [Stack Overflow](https://stackoverflow.com/) - General resource.
- [Youtube](https://www.youtube.com/) - General resource.
- [CSS-Tricks](https://css-tricks.com/) - General resource.
- [W3.CSS](https://www.w3schools.com/w3css/4/w3.css) - General resource.

#### Other resources 
- [Balsamiq](https://balsamiq.com/wireframes/) - For designing wireframes.
- [TinyPNG](https://tinypng.com/) - For compression of images.
- [Toolur](https://compressimage.toolur.com) - For re-sizing images.
- [Autoprefixer](https://autoprefixer.github.io/) - Used to parse CSS and add vendor prefixes.
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - To check whether the website is Mobile-friendly.

---
## Code validation 

### Testing

Testing documentation, including User Stories, can be found here: [Testing](assets/docs/Testing.md) 

#### Solved bugs

1. Navbar was disappearing on page load: The issue has been solved by setting display: 'block' on page load, for desktop browsers, and by setting fixed-top navbar for mobile browsers (as the navbar was oversensitive to window scroll, causing additional issues.)
2. When selecting a location from the respective menu, the popup for the location's marker was overflowing out of the map (in smaller screen sizes): The issue has been solves by centring the popup in the middle of the map, rather than the marker.
3. When pressing the DAY or NIGHT button in the 'Location section', the map gets populated with all the markers connected to the relevant locations (all collected into a layer). However, I could not connect each specific marker to the respective button from the "locations' list": The issue has been solved by setting the map so that when pressing a specific location button, the map would clear from all the markers present and would generate a single new marker for the desired location.

#### Unsolved bugs

1. Sometimes, the home slideshow becomes shows the white background instead of displaying the next picture.
2. When clicking on a location button for the first time, the map does not center the marker's popup. This causes the popup to partly overflow out of the map in small screen sizes. However, the problem does not reoccur after the first click. 
3. On certain mobile browsers (i.e. Safari), it is sometimes necessary to hold pressed on a marker (on the map) in order to open the popup attached, instead of just tapping on it.

---

## GitHub Pages

#### Deploying the project on GitHub Pages

  1. Log in to GitHub and locate the GitHub Repository
  2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu ("gear" icon).
  3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
  4. You will find the current message: "Pages settings now has its own dedicated tab! Check it out here!". Click the link.
  5. Under "Source", click the dropdown called "None" and select "Master Branch".
  6. The page will automatically refresh.
  7. Go back to step 4, once you have clicked the link, you will find the published site link.

#### Forking the GitHub Repository

  By forking the GitHub Repository you make a copy of the original repository on your GitHub account to view and/or make changes without affecting the original repository. Forking requires the following steps:

  1. Log in to GitHub and locate the GitHub Repository
  2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
  3. You should now have a copy of the original repository in your GitHub account.

#### Making a local clone of the GitHub Repository

  1. On GitHub, navigate to the main page of the repository.
  2. Above the list of files, click the green 'Code' button.
  3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
  4. Open Terminal
  5. Change the current working directory to the location where you want the cloned directory to be made.
  6. Type 'git clone', and then paste the URL you copied in Step 3: (https://github.com/Hidnish/Milestone-Project-2-Kyoto.git).
  7. Press Enter. Your local clone will be created.

---

## Credits

#### Media 

- All the pictures uploaded were retrived from: [Unsplash](https://unsplash.com/s/photos/kyoto) 
- Favicon taken from: [123RF](https://www.123rf.com/photo_65360684_stock-vector-japanese-temple-icon-illustration-isolated-sign-symbol.html)
- Custom font "Japanese Brush Master" taken from: [Online Web Fonts](https://www.onlinewebfonts.com/download/fc87c87c07938e0484418e4c0a773b02)

#### Content 

- About section content was partly based on: 
    - [Culture Trip: 10 Historical Landmarks to see in Kyoto](https://theculturetrip.com/asia/japan/articles/10-historical-landmarks-to-see-in-kyoto/)
    - [Culture Trip: The most beautiful parks in Kyoto](https://theculturetrip.com/asia/japan/articles/the-most-beautiful-parks-in-kyoto/)
- Information about specific locations was based on:
    - [Google](https://www.google.com/)
    
#### Code 

- Main sources (Specific credits are provided in the respective files, above each piece of code):
    - [W3Scgools](https://www.w3schools.com/)
    - [Stack Overflow](https://stackoverflow.com/)
    - [YouTube](https://www.youtube.com/)
    - [CSS-Tricks](https://css-tricks.com/)
    - [CI-MS2-Safari-Africa](https://github.com/JimLynx/CI-MS2-Safari-Africa)
    - Code Institute tutorial: Rosie - Resume Project.

#### Acknowledgement

- Thanks to my mentor : Oluwafemi Medale, for his support and feedback.
- Thanks to the Slack community for providing essential knowledge.
