package main

import (
	"encoding/json"
	"net/http"

	"lcdskids.ca/LCDSWebsite/back-end/lib/posts"
)

func main() {
	server()
}

func server() {
	//Muxer will be the router, we may switch to a gorilla muxer eventually depending on need
	muxer := http.NewServeMux()
	muxer.Handle("/", http.HandlerFunc(basicHandler))
	muxer.Handle("/api", http.HandlerFunc(samplePostAPI))
	http.ListenAndServe(":8888", muxer)
}

//Handlers take a response writer and a request, this is then passed to the muxer with a route
func basicHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("Here is the home page")
}

func samplePostAPI(w http.ResponseWriter, r *http.Request) {
	p := posts.Post{
		1, "Here is the content of the post",
	}
	json.NewEncoder(w).Encode(p)
}
