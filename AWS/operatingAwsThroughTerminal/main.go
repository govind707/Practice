package main

import "github.com/aws/aws-lambda-go/lambda"

type userName struct {
	Username string
}

type user struct {
	Unsername   string
	Performance string
}

func userHandler(u userName) (user, error) {
	return user{
		Unsername:   u.Username,
		Performance: u.Username + " is performing well ",
	}, nil
}

func main() {
	// u := user{
	// 	"Govind",
	// 	128,
	// }

	// fmt.Printf("%+v", u)

	lambda.Start(userHandler)
}
