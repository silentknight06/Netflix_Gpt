export const LOGO_PIC =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      // "Bearer" +process.env.REACT_APP_TMDB_KEY,
       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzBhYjk1MjgwZWVjZTJmNTMwM2E2MzYxMjkyOWMwYyIsInN1YiI6IjY1ZTVjMWY5MDA2YjAxMDE2M2EyMWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5bY0U1HbQWi9KwViPTCgZ6Bbds_NaK8xi5CB9R8VVo"
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  export const SUPPORT_LANGUAGE = [{identifier:"en", name:"English"},
                                   {identifier:"hindi", name:"hindi"},
                                    {identifier:"russian", name:"russian"},
 
];



export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY_val;