package main

import "fmt"

type person struct {
	firstName string
	lastName string
}

func main() {
	// firstEmployee := person{"Govind", "Thakur"}
	// // also we can define : firstEmployee := person{firstname: "Govind", lastName: "Thakur"}
	// // also var firstEmployee person
	// // fmt.Println(firstEmployee)
	
	// // fmt.Printf("%+v",firstEmployee)

	// firstEmployee.upadteStruct("Adity")
	// firstEmployee.print()

	person1 := person{"Govind","Thakur"}
	firstEmployeePointer := &person1
	firstEmployeePointer.upadteStruct("Adity")
	person1.print()
}

func (pointerTop *person) upadteStruct(newFirstName string) {
	(*pointerTop).firstName = newFirstName
//	p.print()
}

func (p person) print() {
	fmt.Printf("%+v",p)
}