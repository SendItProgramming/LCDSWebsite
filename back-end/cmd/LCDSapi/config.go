package main

import "os"

var config struct {
	db struct {
		user string
		pass string
		host string
		port string
		name string
	}
}

func configFromEnv() {
	config.db.user = readEnvOrDefault("POSTGRES_USER", "postgres")
	config.db.name = readEnvOrDefault("POSTGRES_DB", "lcds")
	config.db.host = readEnvOrDefault("POSTGRES_HOST", "localhost")
	config.db.pass = readEnvOrDefault("POSTGRES_PASSWORD", "admin")
	config.db.port = readEnvOrDefault("POSTGRES_PORT", "5432")
}

func readEnvOrDefault(env, defaultValue string) string {
	value := os.Getenv(env)
	if value == "" {
		return defaultValue
	}
	return value
}
