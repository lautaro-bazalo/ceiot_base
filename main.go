package main

import "github.com/gin-gonic/gin"

type device struct {
	DeviceID string `xml:"device_id"`
	Name     string `xml:"name"`
	Key      string `xml:"key"`
}

func main() {
	r := gin.Default()
	r.GET("/device", func(context *gin.Context) {
		dev := &device{
			DeviceID: "111",
			Name:     "test-lau",
			Key:      "1112",
		}
		context.XML(200, dev)

	})
	_ = r.Run(":9290")
}
