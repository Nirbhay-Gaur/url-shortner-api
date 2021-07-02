# URL Shortner API

> A URL shortener is a service that is used to create short links from very long URLs. Usually, short links have the size of one third or even one-fourth of the original URL, which makes them easier to type, present, or tweet. Hence, this is a RESTful API that generate short links from any given URL.

## Prerequisites

These are the following softwares that you need to install before setting up the
api.

* `node` & it's package manager `npm`
* `mongoDB` as a database

## Installation

In the root directory, install the required node modules using: `npm i`

## Configuration

Create .env file inside root directory and append the following variables inside
the file: 
* URI_DB
* BASE
* PORT

or<br>

```
$ echo "URI_DB={YOUR MONGODB URI}" >> .env
$ echo "BASE={BASE URL/localhost} >> .env
$ echo "PORT={PORT/3000} >> .env
```
