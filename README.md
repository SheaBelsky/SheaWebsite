# Old Website

New website code can be found here: https://github.com/SheaBelsky/SheaWebsite2

# React Portfolio

Portfolio website for designers, developers, and everyone who just wants a cool website in React.

Based off of [rafrex/spa-github-pages](https://github.com/rafrex/spa-github-pages).

# What's under the hood?
* Webpack and Babel configured and ready to rock
* LESS CSS pre-processing
* Automatic page transitions
* Page templates with header images (works best with panoramas)
* React Router for making all the pages about all the things
* Webpack-dev-server for developing locally
* ESLint config because I like Airbnb, double quotes, and four spaces. Use your own if you want!
* Service worker for assets like images, your resume, and whatever else you want! This requires an 
HTTPS certificate (if hosted on GitHub Pages, this is free.)
* GitHub Pages support, so you can host your site on GitHub! Set the site to serve from the `docs` branch
under your repository's settings.

# Get Started
1. Clone this repository to your computer
```
git clone https://github.com/SheaBelsky/SheaWebsite.git
```
2. Install all necessary depedencies
```
npm install
```
3. Edit `docs/index.html` and `docs/404.html` and put your own name and info there.

4. Edit `webpack.config.prod.js` with your domain name for Service Worker compatibility. 

5. Start it up
```
npm start
```
6. When you're ready to build it for production, run the following commmand:
```
npm run build
```
