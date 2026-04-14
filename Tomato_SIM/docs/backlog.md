# Product Backlog

**Project:** Photo Scanner App
**Last Updated:** 2026-04-14

---

## User Stories

---

### US-01 — Upload Photo
**Story:** As a user, I want to upload a photo from my device so that I can scan and digitize it using the app.

**Priority:** High
**Story Points:** 3

**Acceptance Criteria:**
- User can select an image file (JPG, PNG, PDF) from their device
- Uploaded file appears as a preview before confirming
- File size limit of 10MB is enforced with a clear error message
- Upload progress indicator is shown during file transfer

---

### US-02 — Scan Photo via Camera
**Story:** As a user, I want to use my device camera to scan a physical photo so that I don't need to manually transfer image files.

**Priority:** High
**Story Points:** 5

**Acceptance Criteria:**
- Camera access is requested with a clear permission prompt
- Live camera preview is displayed before capturing
- Captured image is saved and shown in the user's photo list
- User can retake the photo before confirming

---

### US-03 — View Scanned Photos
**Story:** As a user, I want to view all my scanned photos in a gallery so that I can browse and manage them easily.

**Priority:** High
**Story Points:** 3

**Acceptance Criteria:**
- Gallery displays all uploaded/scanned photos as thumbnails
- Clicking a thumbnail opens a full-size preview
- Photos are sorted by date (newest first) by default
- Gallery loads within 2 seconds for up to 50 photos

---

### US-04 — Delete a Photo
**Story:** As a user, I want to delete a photo from my collection so that I can remove unwanted or duplicate scans.

**Priority:** Medium
**Story Points:** 2

**Acceptance Criteria:**
- A delete button is visible on each photo in the gallery
- A confirmation dialog appears before permanent deletion
- Deleted photo is removed from the gallery immediately
- A success notification is shown after deletion

---

### US-05 — User Registration
**Story:** As a new user, I want to register an account so that my photos are saved and tied to my profile.

**Priority:** High
**Story Points:** 5

**Acceptance Criteria:**
- Registration form requires name, email, and password
- Email format is validated before submission
- Password must be at least 8 characters
- A confirmation email is sent upon successful registration

---

### US-06 — User Login
**Story:** As a registered user, I want to log in to my account so that I can access my saved photos securely.

**Priority:** High
**Story Points:** 3

**Acceptance Criteria:**
- Login form accepts email and password
- Incorrect credentials show a clear error message
- Successful login redirects user to their photo gallery
- Session persists for 7 days unless manually logged out

---

### US-07 — Download a Photo
**Story:** As a user, I want to download a scanned photo to my device so that I can keep a local copy.

**Priority:** Medium
**Story Points:** 2

**Acceptance Criteria:**
- A download button is available on the full-size photo view
- File downloads in its original format (JPG or PNG)
- Downloaded filename includes the scan date (e.g., scan-2026-04-14.jpg)
- Download works on both desktop and mobile browsers

---

### US-08 — Search Photos
**Story:** As a user, I want to search my photos by filename or date so that I can quickly find a specific scan.

**Priority:** Medium
**Story Points:** 3

**Acceptance Criteria:**
- A search bar is visible on the gallery page
- Search filters results in real time as the user types
- Searching by date range returns correct results
- "No results found" message is shown when no match exists

---

### US-09 — Rename a Photo
**Story:** As a user, I want to rename a scanned photo so that I can give it a meaningful label for easy identification.

**Priority:** Low
**Story Points:** 2

**Acceptance Criteria:**
- User can click a rename option on any photo
- Inline editing allows the user to type a new name
- Name is saved on pressing Enter or clicking a Save button
- Duplicate names within the same account are not allowed

---

### US-10 — Responsive Mobile UI
**Story:** As a mobile user, I want the app to work well on my phone so that I can scan and view photos on the go.

**Priority:** Low
**Story Points:** 5

**Acceptance Criteria:**
- All pages render correctly on screen widths from 320px to 1920px
- Buttons and touch targets are at least 44x44px
- No horizontal scrolling occurs on mobile devices
- Camera scan feature is accessible directly from the mobile home screen

---

## Summary Table

| ID    | Story Title           | Priority | Points |
|-------|-----------------------|----------|--------|
| US-01 | Upload Photo          | High     | 3      |
| US-02 | Scan via Camera       | High     | 5      |
| US-03 | View Scanned Photos   | High     | 3      |
| US-04 | Delete a Photo        | Medium   | 2      |
| US-05 | User Registration     | High     | 5      |
| US-06 | User Login            | High     | 3      |
| US-07 | Download a Photo      | Medium   | 2      |
| US-08 | Search Photos         | Medium   | 3      |
| US-09 | Rename a Photo        | Low      | 2      |
| US-10 | Responsive Mobile UI  | Low      | 5      |
