export const LAT = "28.479549";

export const LNG = "77.5165962";

export const PROXY_CORS = "https://corsproxy.org/?";

export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL)

export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=" + LAT + "&lng=" + LNG;

export const CDN_URL =
	"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const LOGO_URL =
	"https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018";

export const OFFERLOGO_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+ LAT +"&lng="+ LNG+"&restaurantId=";

export const MENU_FOOD_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

