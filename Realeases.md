## Version 0.2, 6th december 2022

This version includes several changes, most of them originating in the feedback Jonas and Michał gave on version 0.1.

### Changes

1. Implemented `Formik` form for AddEmployees. The user can now choose to either add an employee via a "Vanilla Form" or "Formik Form."

2. Rewrote SCSS to `Desktop-first` approach.

3. Implemented `classcat` in 5 Components.

4. Implemented `lodash` groupBy for the new SearchStatistics component.

5. Rewrote the whole Search feature into `Context`. One benefit is easy hiding of the placeholders, when there are search results, so it doesnt "shifts down the content".

6. Created the a TextLink component using classcat. So far, this is used for `Virk.dk` for Footer and Navbar.

7. Changed the logics for DarkmodeWrapper (now renamed `Themewrapper`) so it still uses localstorage, but loads the theme into context.

8. Made a `custom hook`, useModal, to seperate logic away from the Modal. Before it was context based that then added a css-class to toggle. The Modal Component was moved from LandingPage to MyAccount. The LogOut function is now run from the Modal button, and not when pressing logout.

9. Made `Navbar Fixed` with a hacky/hardcoded implementation for Navbar-expanding on small screens, when showing the navlinks.

10. In `Virkopedia and Company` component the app was relying an a static id-property from contentData.js. This was poor design, and a typo made "Collateral"-menu-tab break. Clicking "Colleteral" made the app look at the 13th array index, which did not exist. This is now done with index from mapping now, in both Company and Virkopedia.

11. Extracted several `long conditions into variables`.

12. Renaming Data.js with the JsData object to `contentData.js` with contentData object.

13. `Removed Backend folder` and distributed contents to constants and utils.

14. `"Back to Search"` link has been addet on Company, to return to the search-feature on the landing page. Added value={searchField} to the search input field, to fix an empty searchfield, not showing the State when returning to search. This was a poor user-experience.

15. Added `autoFocus` as an option in TextInput Component. This is used on LadingPage and in SignInPage, for a better user experience.

16. Seperated the `Context into 4 files`.

---

## Version 0.1, 23rd of November 2022

The first version of the App. This version is based on the scope descriped in the README.md.
