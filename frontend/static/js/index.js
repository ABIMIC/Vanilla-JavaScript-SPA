import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";


/*history API would help you navigate without loading a new resource, i.e you can navigate to page easily without loading the page entirely with new resource, now we want to prevent the page from entirely reloading */

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
const routes = [
    {path: "/", view : Dashboard},
    {path : "/posts", view : Posts},
     {path : "/settings", view : Settings}, 
];

/*creating a path/match for each route */

const potentialMatches = routes.map(route => {
    return {
        route: route, isMatch: location.pathname === route.path
    };
}); 

/*this helps to know the path you are in, like maybe in posts, settings */
let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

/*if you are in no right path, the following would be shown, here we set it to dahsboard using route[0] */

if(!match) {
    match = {
        route : routes[0],
        isMatch:true
    };
}

const view = new match.route.view();

document.querySelector("#app").innerHTML = await view.getHtml();

/* this would show in the console, the view above in the router i.e if in settings, it would tell you viewing settings, same for posts too */

//console.log(match.route.view());
};



/* Now let us make the back and forward arrow on the browser work so that the console display the path we're currently in */

document.addEventListener("popstate", router);


/* from history api above, we would add a click event here to further prevent a page reload */

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
     
router();
});