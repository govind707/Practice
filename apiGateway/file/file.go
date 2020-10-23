package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	apiCall, err := http.Get("https://qn54rr4fw4.execute-api.ap-south-1.amazonaws.com/Prod/myapiresources")
	//fmt.Println("%s", apiCall)
	if err != nil {
		fmt.Println("Getting Error")
		log.Fatalln(err)
	}
	defer apiCall.Body.Close()

	body, err := ioutil.ReadAll(apiCall.Body)
	if err != nil {
		fmt.Println("Getting error in res.Body")
		log.Fatalln(err)
	}

	log.Println(string(body))
}
