#### Overview

This is "Kyoto Day'n'Night", a project developed with the aim of promoting Kyoto as a destination for people traveling through Japan or simply interested in visiting the country in the future. The major theme of the website is the division between day activities(historical sites and parks) and night activities (restaurants and bars) to facilitate the website navigation.

--- 

### UX

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

- Wireframes (AAAAADDDDDD)
- Interactive navbar (fixed on mobile browsers) with 4 links + logo.
- Home, About, Locations (map) and Contact sections.
- Footer with social media links and copyright message.

#### 5. Surface 

##### Colors 

Colors throughout the page fall in the spectrum between #fafafa (off white) & #1c334d (dark blue) to fit with the 'Day and Night' theme of the website. 

![image](https://www.colorhexa.com/fafafa.png) ![Image](https://www.colorhexa.com/1c334d.png) 

##### Typography

- "Japanese Brush" font for: Logo and sections heading.
- "Crimson Text" font for small headings and nav-links, to add an elegant touch.
- "Helvetica Neue" font for body content (Default Bootstrap font-family), to keep the website's content clean and easily readable.
- "Sans-serif" as fall-back font for every text.


##### images

- Images were carefully selected to match with the background colors and create a sense of 'authenticity' in the website.

--- 

### Features 

- Designed with HTML5, CSS3, JavaScript + libraries (Bootstrap, jQuery, GSAP).
- Responsive navigation bar (fixed on mobile) present thoughout the page to move from one section to the other with ease. 
- Home/landing section with auto-playing picture gallery.
- About section providing information about the website and the different activities available.
- Location section with menu to select specific locations to see info and their position on the map.
- Contact Form.
- Footer with links to social media.

#### Features for future prospects 

- A section to book a trip directly from the website.
- A review section with comment from previous customers/users.

---

### Technologies Used 

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

#### Workspace, version control and Repository storage

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
- [Autoprefixer](https://autoprefixer.github.io/) - Used to parse CSS and add vendor prefixes.
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - To check whether the website is Mobile-friendly.

---
## Code validation 

### Testing

Testing documentation is stored on a separate file: ..here.. 

#### Solved bugs

1. Navbar was disappearing on page load: The issue has been solved by setting display: 'block' on page load, for desktop browsers, and by setting fixed-top navbar for mobile browsers (as the navbar was oversensitive to window scroll, causing additional issues.)
2. When selecting a location from the respective menu, the popup for the location's marker was overflowing out of the map (in smaller screen sizes): The issue has been solves by centring the popup in the middle of the map, rather than the marker.
3. When pressing the DAY or NIGHT button in the 'Location section', the map gets populated with all the markers connected to the relevant locations (all collected into a layer). However, I could not connect each specific marker to the respective button from the "locations' list": The issue has been solved by setting the map so that when pressing a specific location button, the map would clear from all the markers present and would generate a single new marker for the desired location.

#### Unsolved bugs

1. Sometimes, the home gallery becomes blank instead of showing the next picture.






https://theculturetrip.com/asia/japan/articles/the-most-beautiful-parks-in-kyoto/