### HTML

HTML code was passed through [HTML Validator](https://validator.w3.org/).
- No errors found or warnings shown

---

### CSS

CSS code was passed through [CSS Validator](https://jigsaw.w3.org/css-validator/)
- No errors found or warnings shown

--- 

### JavaScript

Javascript code was passed through [JSHINT](https://jshint.com/)

- A warning was shown in line 255 & 316 (in the map.js file): "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics". The code however works as desired within the scope of the project.

#### Page sections: 

**Navigation**

- Navbar links were clicked to ensure that smooth scrolling was consistent from top to bottom and vice versa, to each section of the page.
- Hamburger menu (with navbar links) was tested on mobile devices to ensure it would open and close.
- Navbar tested to see if it appears and disappears on scroll (function disabled on mobile and Safari browser)

**Home: Images slideshow**

- Images in the home gallery slideshow fade in and out as desider.

**About section**

- Content animation on scroll (for section header and content) works as expected, only once after the page has loaded.
- All links connected to the Location section were clicked to ensure they would trigger the desired effect: automatic scroll to Location section displaying the right content (i.e. clicking the link for 'historical sites' would show the list of historical sites in the specific Location sections' menu/list).

**Location section**

- 'DAY' and 'NIGHT' buttons were clicked to ensure: 
    1. The Location and Contact section background color  change accordingly
    2. The 'activities' menu shows the respective activities (i.e. the menu shows 'restaurants + bars & clubs' when the 'NIGHT' button is clicked).
    3. The map shows a layer with the locations (markers) for the DAY or NIGHT group, based on which button is clicked 
- 'Activities' buttons (i.e. historical sites, restaurants,         etc.) were clicked to ensure that the locations' menu/list      would show the correct locations.  
- 'Location' buttons were clicked to ensure that the map would      clear from all the markers present and show only the marker     connected to the specific button (with location's info in       the popup attached to the marker). 
- Links attached to the popups were clicked to ensure they          open a new tab with the specific location's website.
- Markers on the map were clicked to ensure that the popup          attached they would open and close as expected.

**Contact section** 

- Contact form was tested to ensure:
    1. The message is sent and delivered to the desired email address.
    2. An alert popup appears once the message is sent (or alternatively when an error occurs) and the "send" button chages colour and content in case of success.
    3. The form resets once the message is sent.

---

### Testing User Stories 

1. "I want to navigate the website easily and intuitively, on any device (phone, tablet or laptop)"

    - Upon entering the site, the user can easily find the navigation bar on top of the page to move to the desired section with a simple click. 
    - Check the "responsiveness" section for information about testing of the website on different devices.

2. "I want to understand the main purpose of the site"

    - Right below the home-gallery, the user will find the about section featured with a welcome message and the description of the website's purpose and theme.

3. "I am interested in visiting Kyoto, but first, I would like to know what the city has to offer"

    - Also in the About section, the user can find a brief description of the locations selected for him/her which have been divided into four groups (historical sites, parks & gardens, restaurants, bars & clubs) with links connected to the Location section. 
    - The Location section, locations are divided into 'Day' locations (historical sites, parks & gardens) and 'Night' locations (restaurants, bars & clubs) to facilitate the navigation.
    - Each location button is connected to a marker on the map, which provides the user with specific information about the place selected.

4. "I want to get in touch with questions about the locations listed on the website or other locations I believe should be mentioned"

    - In the Contact section, the user can find a form to fill in to the get in touch with the 'organization' directly from the website. 

5. "I want to be able to follow the page on social medias to check for any update/reviews"  

    - In the footer, the user can find the social media links on the bottom right corner. 

--- 

### Responsiveness 

- The Website was tested on Google Chrome, Safari, Opera, Firefox and Internet Explorer browsers.
- The Website was tested on a variety of screen sizes using Google Developer Tools: iPhone X, iPhone 8, Samsung Galaxy S III, iPad, Laptop, Desktop, Large screen desktop (1920px).
- The Website was tested on physical devices: iPhone 8, MacBook Air. 
- [Google mobile-friendly test](https://search.google.com/test/mobile-friendly?id=5Pz7BqGGcZdRd5o9rkxA9A): The page passed the test as mobile friendly

---

### Other 

- All links to the website sections (website logo, navbar links,About section links), were clicked to ensure they worked correctly
- All links to external pages (location websites and social media links) were clicked to ensure they would open on a new tab.
- The contact form has been tested to ensure a 'required' message would appear in case the user would attempt to send a message leaving empty fields.

