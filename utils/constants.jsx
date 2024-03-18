export const LAT = "28.6166063";

export const LNG = "77.1300404";

// export const PROXY_CORS = "https://thingproxy.freeboard.io/fetch/";
export const PROXY_CORS = "https://corsproxy.me/";

export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL)

export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=" + LAT + "&lng=" + LNG;

export const CDN_URL =
	"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const LOGO_URL =
	"https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018";

export const OFFERLOGO_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+ LAT +"&lng="+ LNG+"&restaurantId=";

export const MENU_FOOD_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const VEG_SYMBOL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC";

export const NON_VEG_SYMBOL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2Xv0oDQRDGtzOXmRi1VLGyt5AZgwh5E/++g4jiIxmtRNTsFIKgopZG7Iy9CbFX5gx2wSS32b2Q/WDgiluY383OzHfGREVFReVSwvidpzATC2ACSyJAYEmswCRV4KIyPVfn0q4QnAlDQxi+utGwBKeyVtq52SjP5g7gtmISS3gkBO3/RyK0LOOhnjF5ALhcT+Yt4/2gc90yPl+tFpaCAggni0L4MexysoTN60qyEARAr4AQPmbdsJbxQaqm4B1ACI+dWQXCA68AOm36a9h+A1q9ptNIACzjnrvksVuF0rY3gN857xbAMtS8AViCN+cVYGj4BOg4rwBBZ6wBhKDtDUAYXkfQAy/eAFJj5r4HTrwBqKt0DVDn4qbfRcbQcnh9PmWlPOMNQKWW2B0A7g+bx9AAasBSI5b97t8FMXMqtcJqiTN8+Xf9n8iaR6aDmkD6FQdP/in4D83fu1VTUEvcT2Nrw+qdP182U67zyHxQLbG6St0Tuph0Y6ehzww1S8WtXtMmFwCjkESAwJJYgXGvgOQkzMQBREVFRRkf+gHhzjmciMgUEwAAAABJRU5ErkJggg==";
