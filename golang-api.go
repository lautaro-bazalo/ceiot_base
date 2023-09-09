package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

type response struct {
	Message string `json:"status"`
}

func main() {

	r := gin.Default()
	r.Group("")
	r.GET("/device", Get)

	server := &http.Server{
		Addr:         ":9291",
		Handler:      r,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
	err := server.ListenAndServe()
	if err != nil {
		return
	}
}

func Get(ctx *gin.Context) {
	ctx.JSON(200, &response{
		"ok",
	})
}
