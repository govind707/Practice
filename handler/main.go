package main

import (
	"encoding/json"
	"errors"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Employee struct {
	ID   int
	Name string
	Age  int
}

func main() {
	lambda.Start(apiHandler)
}

func apiHandler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if req.HTTPMethod == "GET" {
		result, err := printRows()
		if err != nil {
			return events.APIGatewayProxyResponse{}, err
		}
		res, err := json.Marshal(result)
		n := len(res)
		str := string(res[:n])
		apiResponse := events.APIGatewayProxyResponse{Body: str, StatusCode: 200, Headers: map[string]string{"h1": "head1", "h2": "head2"}}
		if err != nil {
			return apiResponse, err
		}
		return apiResponse, nil
	} else if req.HTTPMethod == "POST" {
		data := req.Body
		x := &Employee{}
		err := json.Unmarshal([]byte(data), x)
		fmt.Println(err)
		createRow(x.ID, x.Name, x.Age)
		apiResponse := events.APIGatewayProxyResponse{Body: req.Body, StatusCode: 400}
		return apiResponse, nil
	} else {
		apiResponse := events.APIGatewayProxyResponse{Body: "Hey Govind, Failed to create an api gateway to connect to lambda", StatusCode: 502}
		err := errors.New("sorry!! try again")
		return apiResponse, err
	}
}

// *********************mysql******************************************************************

func createRow(id int, name string, age int) {
	dsn := "govind-singh:govind@tcp(localhost:3306)/gormDB"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		return
	}

	x := Employee{ID: id, Name: name, Age: age}
	db.Create(&x)
	return
}

func deleteRow(name string) {
	dsn := "govind-singh:govind@tcp(localhost:3306)/gormDB"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		return
	}

	db.Where("Name = ?", name).Delete(&Employee{})
	return
}

func updateRow(name string) {
	dsn := "govind-singh:govind@tcp(localhost:3306)/gormDB"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		return
	}

	db.Table("employees").Where("Name = ?", name).Update("Name", "Ram")
	return
}

func printRows() (*gorm.DB, error) {
	dsn := "govind-singh:govind@tcp(localhost:3306)/gormDB"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		return db.Table("employees"), err
	}

	result := db.Table("employees")
	// res, err := json.Marshal(result)
	// if err != nil {
	// 	fmt.Println("error in type-conversion", err)
	// 	return
	// }
	// n := len(res)
	// str := string(res[:n])
	// fmt.Println(str)

	//fmt.Println(result)
	return result, nil
}
