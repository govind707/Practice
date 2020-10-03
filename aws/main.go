package main

import (
	"github.com/aws/aws-lambda-go/lambda"
)

type user struct {
	Firstname string
	Lastname  string
}

type localUser struct {
	name string
	tag  string
}

func userHandler(u user) (localUser, error) {
	//x := u.Firstname + " " + u.Lastname
	//return fmt.Sprintf("<h1> Hey %s, practicing lambda</h1>", x), nil

	return localUser{
		name: u.Firstname,
		tag:  u.Lastname,
	}, nil
}

func main() {
	lambda.Start(userHandler)
}
