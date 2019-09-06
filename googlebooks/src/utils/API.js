import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&maxResults=40&orderBy=newest&key=AIzaSyD5c7Uuj4hd7FPRO9A9o4zhWaCTsffKrNc";
// Export an object containing methods we'll use for accessing the Google Book API

export default { 
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }  
};
