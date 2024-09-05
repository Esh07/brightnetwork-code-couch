# Image Gallery with Responsive Controls

<img src="https://img.shields.io/badge/%27Code%20to%20Couch%202024%27-23?&style=for-the-badge&logoColor=%23004b50&label=BrightNetwork&labelColor=%23f58f46&color=%23004b50" />

## Overview

This project is an image gallery that fetches images from the Unsplash API based on various categories. The gallery is designed to be responsive, with a hamburger menu for controls on smaller screens and a grid layout for the images.
![Couch to Coder by Bright Network](./img/banner-img.png)


## Features

- **Responsive Design**: The gallery and controls adapt to different screen sizes, providing a seamless experience on both desktop and mobile devices.
- **Hamburger Menu**: On tablet screens and smaller, the controls are hidden under a hamburger menu for better usability.
- **Smooth Transitions**: Smooth transitions are applied to the controls and images for a polished look.
- **Dynamic Image Fetching**: Images are fetched dynamically from the Unsplash API based on the selected category.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS**: For styling and responsive design.
- **JavaScript**: For dynamic functionality and API interactions.
- **Unsplash API**: For fetching images based on categories.
- **Font Awesome**: For icons used in the controls.

## Prerequisites

Before you can run this application, you need to have the following:

- **Unsplash API Access Key**: You need to sign up on [Unsplash](https://unsplash.com/developers) and create an application to get your API access key.
- **Vercel Account**: This project is designed to be deployed on [Vercel](https://vercel.com). You need to have a Vercel account and the Vercel CLI installed.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/esh07/brightnetwork-code-couch.git
   cd brightnetwork-code-couch
   ```
2. Create a `.env` file in the root directory and add your Unsplash API access key:
   ```sh
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```
3. Add remote to GitHub to your repository:
   ```sh
   git remote add origin <your_github_repository_url>
   ```
4. Now commit and push your changes to GitHub (to your cloned repository):
   ```sh
    git add .
    git commit -m "Add Unsplash API access key"
    git push -u origin main
   ```
5. Deploy the project to Vercel:
   Go to [Vercel](https://vercel.com) and import the project from your GitHub repository. Follow the instructions to deploy the project.
6. Once deployed, you can access the image gallery using the Vercel URL.

## Project Structure

The project structure is as follows:

- `index.html`: The main HTML file containing the structure of the web page.
- `style.css`: The CSS file containing the styles for the gallery and controls.
- `api/fetchImages.js`: The JavaScript file containing the API call to fetch images from Unsplash. (It is for vercel serverless function)
- `main.js`: The JavaScript file containing the functionality for the gallery and controls. (It is for client side)
- `README.md`: The README file containing information about the project.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Acknowledgements

- [Unsplash](https://unsplash.com) for providing the API to fetch images.
- [Font Awesome](https://fontawesome.com) for the icons used in the controls.
- [Vercel](https://vercel.com) for hosting the project.
