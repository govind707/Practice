package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
)

type user struct {
	UserName string
}

func printDetails(name user) (string, error) {
	return fmt.Sprintf("<h1>Hey %s working on lambda Go</h1>", name.UserName), nil
}

func main() {

	lambda.Start(printDetails)

}
