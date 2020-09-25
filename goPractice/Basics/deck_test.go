package main

import "testing"

func TestNewDeck(t *testing.T) {
	d := newDeck()

	if len(d) != 16 {
		t.Errorf("Expected deck length is %v",len(d))
	}

	if d[0] != "Govind is Boy" {
		t.Errorf("Expected first card %v", d[0])
	}
	if d[len(d)-1] != "Sourabh is Software Engineer" {
		t.Errorf("Expected last card %v", d[len(d)-1])
	}
}