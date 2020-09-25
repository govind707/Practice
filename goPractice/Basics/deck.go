package main


import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"os"
	"strings"
)

type deck []string

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i,card)
	}
}

func newDeck() deck {
	slice1 := deck{}

	perSuits := deck{"Boy","Survivor","IITian","Software Engineer"}
	perName := deck{"Govind","Kanwar","Pankaj","Sourabh"}

	for _, name := range perName {
		for _, suit := range perSuits {
			slice1 = append(slice1,name + " is " + suit)
		}
	}
	return slice1;
}

func deal(d deck, n int) (deck,deck) {
	return d[:n], d[n:]
}

func (d deck) toString() string {
	return strings.Join([]string(d),",")
}

func (d deck) saveToFile(fileName string) error {
	return ioutil.WriteFile(fileName,[]byte(d.toString()),0666)
}

func  newDeckFromFile(fileName string) deck  {
	bs, err := ioutil.ReadFile(fileName)
	if err != nil {
		fmt.Println("Error",err)
		os.Exit(1)
	}
	s := strings.Split(string(bs),",")
	return deck(s)
}

func (d deck) shuffle()  {
	for i := range d {
		newPos := rand.Intn(len(d)-1)

		d[i], d[newPos] = d[newPos], d[i]
	}
	
}