**User Story 1: Desktop Navigation Display**  
As a desktop user, I want to see the full navigation menu (Home and Pokémon History) in the header so I can easily access key pages without extra clicks.

**Acceptance Criteria:**  
- **Scenario: Desktop viewport**  
  Given I am viewing the application on a desktop-sized screen (e.g., width ≥ 1024px)  
  When I load the page  
  Then the navigation bar displays "Home" and "Pokémon History" links horizontally without hiding them behind a menu icon

---

**User Story 2: Mobile/Tablet Navigation Icon**  
As a mobile or tablet user, I want to see a menu icon instead of full navigation items so I can view the site on a smaller screen without clutter.

**Acceptance Criteria:**  
- **Scenario: Mobile/tablet viewport**  
  Given I am viewing the application on a tablet or mobile screen (e.g., width < 1024px)  
  When I load the page  
  Then I only see a menu icon (hamburger menu) instead of the full "Home" and "Pokémon History" links in the header

---

**User Story 3: Toggling the Navigation Menu on Mobile/Tablet**  
As a mobile or tablet user, I want to tap the menu icon to reveal or hide the navigation items so I can easily access the pages I need without permanently using screen space.

**Acceptance Criteria:**  
- **Scenario: Opening and closing the navigation drawer**  
  Given I am on a mobile or tablet device  
  When I tap the menu icon  
  Then the navigation drawer or dropdown reveals "Home" and "Pokémon History" links  
  And when I tap the menu icon again  
  Then the drawer or dropdown hides, making the header clean again

---

**User Story 4: Access to Home (Pokédex Main Page)**  
As any user, I want a clearly labeled "Home" link accessible via the navigation so I can always return to the Pokédex main page.

**Acceptance Criteria:**  
- **Scenario: Viewing the Home link**  
  Given I am on any device (desktop, tablet, mobile)  
  When the navigation is displayed (either directly for desktop or upon opening the menu for mobile/tablet)  
  Then I see a "Home" link prominently available  
  And when I click "Home"  
  Then I am taken to the Pokédex main page

---

**User Story 5: Access to Pokémon History Page**  
As any user, I want a clearly labeled "Pokémon History" link so I can easily access my previously viewed Pokémon.

**Acceptance Criteria:**  
- **Scenario: Viewing the Pokémon History link**  
  Given I am on any device (desktop, tablet, mobile)  
  When the navigation is displayed (either directly for desktop or upon opening the menu for mobile/tablet)  
  Then I see a "Pokémon History" link  
  And when I click "Pokémon History"  
  Then I am taken to the page that lists all Pokémon I have previously viewed