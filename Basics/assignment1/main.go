package assignment1

import "fmt"

func evnOdd() {
	arr := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	slc := arr[0:]
	for _, v := range slc {
		if v%2 == 0 {
			fmt.Println(v, "is even")
		} else {
			fmt.Println(v, "is odd")
		}
	}
}
