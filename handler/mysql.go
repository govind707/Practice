package main

import (
	"encoding/json"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Employee struct {
	ID   int
	Name string
	Age  int
}

func main() {

	// dsn := "govind-singh:govind@tcp(localhost:3306)/gormDB"
	// db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	//db.Migrator().CreateTable(&Employee{})

	// db.Migrator().AddColumn(&Employee{}, "Address")

	//result := db.Find(&Employee{})

	//fmt.Println(result.RowsAffected)

	// ***************** checking Tables/Fields exists *****************************

	// fmt.Println(db.Migrator().HasColumn(&Employee{}, "Address"))
	// fmt.Println(db.Migrator().HasColumn(&Employee{}, "Name"))
	// fmt.Println(db.Migrator().HasTable(&Employee{}))
	// fmt.Println(db)

	// *************** create multiple rows at a time ******************************

	// var users = []Employee{
	// 	{
	// 		ID:   1,
	// 		Name: "Govind Singh",
	// 		Age:  20,
	// 	},
	// 	{
	// 		ID:   2,
	// 		Name: "Kanwar Pal",
	// 		Age:  19,
	// 	},
	// 	{
	// 		ID:   3,
	// 		Name: "Pankaj Meena",
	// 		Age:  30,
	// 	},
	// 	{
	// 		ID:   4,
	// 		Name: "Sourabh Sonekar",
	// 		Age:  33,
	// 	},
	// }

	// result := db.Create(&users)
	//fmt.Println(result.RowsAffected)
	// fmt.Println(db.Find(&Employee{}))
	// fmt.Println(reflect.TypeOf(db.Find(&Employee{})))

	// res, err := json.Marshal(result)
	// n := len(res)
	// str := string(res[:n])
	//	fmt.Fprint(w, str)

	// *********** Create a Row *****************************************************
	//	createRow(5, "Ganesh Ram", 28)

	// *******************delete a Row, where Name=? *********************************

	//deleteRow("Ganesh Ram")

	// ******************* Update a Record *******************************************

	//updateRow("Ganesh Ram")

	// ****************** Select Everything from table *******************************

	printRows()

	//result := db.Find(&User)

}

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

func printRows() {
	dsn := "govind-singh:govind@tcp(localhost:3306)/gormDB"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
		return
	}

	result := db.Table("employees")
	res, err := json.Marshal(result)
	if err != nil {
		fmt.Println("error in type-conversion", err)
		return
	}
	// n := len(res)
	str := string(res)
	fmt.Println(str)

	fmt.Println(result)
	return
}
