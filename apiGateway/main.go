package main

import (
	"errors"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(apiHandler)
}

func apiHandler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if req.HTTPMethod == "GET" {
		apiResponse := events.APIGatewayProxyResponse{Body: "Hey Govind, Successfully created an api gateway to connect to lambda with method:get", StatusCode: 200}
		return apiResponse, nil
	} else if req.HTTPMethod == "POST" {
		apiResponse := events.APIGatewayProxyResponse{Body: "Hey Govind, Successfully created an api gateway to connect to lambda with method:post", StatusCode: 400}
		return apiResponse, nil
	} else {
		apiResponse := events.APIGatewayProxyResponse{Body: "Hey Govind, Failed to create an api gateway to connect to lambda", StatusCode: 502}
		err := errors.New("sorry!! try again")
		return apiResponse, err
	}
}
