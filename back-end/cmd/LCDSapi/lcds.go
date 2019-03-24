package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	_ "github.com/lib/pq"
<<<<<<< HEAD
	"../../lib/auth"
	"../../lib/posts"
	"../../lib/quotes"
=======
	"lcdskids.ca/LCDSWebsite/back-end/lib/auth"
	"lcdskids.ca/LCDSWebsite/back-end/lib/news"
	"lcdskids.ca/LCDSWebsite/back-end/lib/posts"
>>>>>>> f3462c6a41c30d3b6bc53e1cb565fecf5bb5c9b9
)

func main() {
	server()
}

func server() {
	//Muxer will be the router, we may switch to a gorilla muxer eventually depending on need
	configFromEnv()
	db, err := openDB()
	if err != nil {
		panic(err)
	}
	authApi := auth.NewAPI(db)
	postApi := posts.NewAPI()
<<<<<<< HEAD
	quoteApi := quotes.NewAPI(db)
	muxer := http.NewServeMux()
	muxer.Handle("/auth/", http.StripPrefix("/auth", authApi))
	muxer.Handle("/posts/", http.StripPrefix("/posts", postApi))
	muxer.Handle("/quotes/", http.StripPrefix("/quotes", quoteApi))
=======
	newsApi := news.NewAPI(db)
	muxer := http.NewServeMux()
	muxer.Handle("/auth/", http.StripPrefix("/auth", authApi))
	muxer.Handle("/posts/", http.StripPrefix("/posts", postApi))
	muxer.Handle("/news/", http.StripPrefix("/news", newsApi))
	muxer.Handle("/protected", authApi.Middleware(http.HandlerFunc(basicHandler)))
>>>>>>> f3462c6a41c30d3b6bc53e1cb565fecf5bb5c9b9
	muxer.Handle("/api", http.HandlerFunc(samplePostAPI))
	muxer.Handle("/", http.HandlerFunc(basicHandler))
	fmt.Println("Serving at port 8888")
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

func openDB() (*sql.DB, error) {
	args := fmt.Sprintf("user=%s password=%s dbname=%s host=%s port=%s sslmode=disable", config.db.user, config.db.pass, config.db.name, config.db.host, config.db.port)
	fmt.Println(config.db.user)
	db, err := sql.Open("postgres", args)
	if err != nil {
		return nil, err
	}

	const pingRetries = 5
	for trials := 0; trials < pingRetries; trials++ {
		err = db.Ping()
		if err == nil {
			break
		}
		time.Sleep(time.Second)
	}

	if err != nil {
		return nil, err
	}

	return db, nil
}
