package main

import (
	"fmt"

	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql" // import your required driver
)

// Model Struct
type Loanhandler struct {
	Id   int64
	Name string `orm:"size(100)"`
}

func init() {
	// register model
	orm.RegisterModel(new(Loanhandler))

	// set default database
	orm.RegisterDataBase("default", "mysql", "govind-singh:govind@tcp(localhost:3306)/firstDB", 30)
}

func main() {

	//var x []int64

	//	x := []int64{1, 2, 3, 4, 5}

	//var y []string

	y := []string{"Govind", "Pankaj", "Arnab", "Ashish", "Abhishek"}

	for p, q := range y {
		createRow(int64(p+1), q)
	}

	// createRow(1, "Govind")
	// readRow(1)
	// updateRow(1)
	// deleteRow(1)
}

func createRow(id int64, name string) {
	o := orm.NewOrm()
	id, err := o.Insert(&Loanhandler{Id: id, Name: name})
	fmt.Println("one row is created with data Id: %d, and Name: %s, and Err: %v \n", id, name, err)
}

func readRow(id int64) {
	o := orm.NewOrm()
	u := Loanhandler{Id: id}
	err := o.Read(&u)
	if err == orm.ErrNoRows {
		fmt.Println("No result found.")
	} else if err == orm.ErrMissPK {
		fmt.Println("No primary key found.")
	} else {
		fmt.Println(u.Id, u.Name)
	}
}

func updateRow(id int64) {
	o := orm.NewOrm()
	u := Loanhandler{Id: id}
	u.Name = "Govind Singh"
	num, err := o.Update(&u)
	fmt.Println("Row is updated ", num, err, u.Id, u.Name)
}

func deleteRow(id int64) {
	o := orm.NewOrm()
	u := Loanhandler{Id: id}
	num, err := o.Delete(&u)
	fmt.Println("one row is deleted with data Id: %d, and Name: %s, and Err: %v \n", num, err)
}
