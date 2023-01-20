# Innowise Lab Internship Mini Paint

#### [App Deploy](https://amgod1.github.io/Innowise-Lab-Internship-Mini-paint/)

#### [Task Link](https://drive.google.com/file/d/1Nf_uRL4kMaRjYkNAPvjQGaanrq2JtcZc/view)

## How to run the app:

##### Login and Sign Up Components:

- When you first enter the site, you have the option of **_creating_** an account or **_logging_** into an existing account.
- If the login or password is invalid, **_toast_** appears on the screen **_with an error message_**.
- When a user registers **_successfully_**, he is **_automatically logged in_** and his data is saved. The same happens when **_logging into_** an existing account.
- After a **_successful_** login, **_the todo component_** is rendered instead of the login.

##### ImagesList Component:

- This page **_displays all the uploaded images_** by all authorized users.
- You can **_filter_** images by user.
- Images are **_sorted by uploaded time_** (newest first).

##### Canvas Component:

- After drawing the component, we see a **_blank field and all possible tools_** for drawing and different actions.
- There are the following tools: **_pencil, line, rectangle, circle, line thickness and color setting, fill color setting, button to cancel the last action and button to clear the field_**.
- There is a button for **_uploading a photo_** (size should be less than 1 megabyte). The button for **_sending the image to the server_** appears only after a successful upload of your image.
- After a successful upload, a **_notification_** will appear and prompt you to look at the home page to **_see all the latest images_**.

##### Notes:

- For storing variables and some other data, there were created the **_redux environment_** files.
- The **_theme_** can be changed with the header switch. **_Dark_** and **_light_** themes are available. Value saves in the localstorage.

## Database snapshot:

- **_Firebase Authenticition_** was used for registration
- **_Firebase Firestore_** was used to store the uploaded images.

## Application stack:

- Redux & React-Redux (used for **_state management_**)
- React Router Dom (used for **_routing_**)
- Firebase (used for **_authentication and storing images_**)
- Dotenv (used for **_storing secret data_**)
- Material UI (used for **_fast layout_**)
- RoughJs (used for **_drawing all elements_**)
- Perfect Freehand (used for **_pencil drawing_**)

# Folder structure:

├── ...  
├── build **_(production build)_**  
├── node_modules **_(all downloaded packages)_**  
├── public **_(html & others)_**  
├── src **_(source files)_**  
 l      └── components  
 l       l      ├── Canvas **_(contains child jsx components for Canvas)_**  
 l       l      ├── Header **_(contains child jsx components for Header)_**  
 l       l      ├── ImagesList **_(contains child jsx components for ImagesList)_**  
 l       l      ├── Login **_(contains child jsx components for Login)_**  
 l       l      └── SignUp **_(contains child jsx components for SignUp)_**  
 l      ├── redux **_(contains reducers for main components)_**  
 l       l      ├── App **_(contains appReducer with appTypes)_**  
 l       l      ├── Canvas **_(contains canvasReducer with canvasTypes)_**  
 l       l      ├── Login **_(contains loginReducer with loginTypes)_**  
 l       l      └── store.ts **_(combines all reducers to store)\_**  
 l      ├── App.tsx  
 l      ├── AppContainer.tsx **_(container component for App.tsx)_**  
 l      ├── App.css **_(contains styles for scrollbar and app heigth)_**  
 l      ├── firebase.config.tsx **_(config for db connection + uses .env variables)_**  
 l      └── index.tsx  
└── .env **_(contains db api and other secret values)_**

Created by [Kamill](https://github.com/amgod1)
