# HolidayList Request Code Examples

This guide provides code examples in multiple programming languages to interact with the **Holidays**, **Countries**, and **Languages** endpoints using the **Holiday API**. These examples demonstrate how to fetch data from each endpoint using mandatory and optional parameters.

## API Base URL
- **Base URL**: `https://back.holidaylist.io/v1`
- **Holidays Endpoint**: Requires `key`, `country`, and `year` as mandatory parameters.
- **Countries and Languages Endpoints**: Only `key` is mandatory; optional parameters may be added.

---

## 1. Python

```python
import requests

# For Holidays
url = "https://back.holidaylist.io/v1/holidays"
params = {
    "key": "YOUR_API_KEY", 
    "country": "US", 
    "year": 2023
}
response = requests.get(url, params=params)
print(response.json())

# For Countries
url = "https://back.holidaylist.io/v1/countries"
params = {"key": "YOUR_API_KEY"}
response = requests.get(url, params=params)
print(response.json())

# For Languages
url = "https://back.holidaylist.io/v1/languages"
params = {"key": "YOUR_API_KEY"}
response = requests.get(url, params=params)
print(response.json())
```
## 2. JavaScript (Node.js)
```javascript
const axios = require('axios');

// For Holidays
axios.get('https://back.holidaylist.io/v1/holidays', {
    params: {
        key: 'YOUR_API_KEY',
        country: 'US',
        year: 2023
    }
}).then(res => console.log(res.data));

// For Countries
axios.get('https://back.holidaylist.io/v1/countries', {
    params: { key: 'YOUR_API_KEY' }
}).then(res => console.log(res.data));

// For Languages
axios.get('https://back.holidaylist.io/v1/languages', {
    params: { key: 'YOUR_API_KEY' }
}).then(res => console.log(res.data));
```
## 3. Go (Golang)
```Go
package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

// Fetch function for the different endpoints
func fetch(url string) {
    resp, _ := http.Get(url)
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}

func main() {
    // For Holidays
    holidaysURL := "https://back.holidaylist.io/v1/holidays?key=YOUR_API_KEY&country=US&year=2023"
    fetch(holidaysURL)

    // For Countries
    countriesURL := "https://back.holidaylist.io/v1/countries?key=YOUR_API_KEY"
    fetch(countriesURL)

    // For Languages
    languagesURL := "https://back.holidaylist.io/v1/languages?key=YOUR_API_KEY"
    fetch(languagesURL)
}
```
## 4. PHP
```php
<?php
// For Holidays
$holidays_url = "https://back.holidaylist.io/v1/holidays?key=YOUR_API_KEY&country=US&year=2023";
$holidays_response = file_get_contents($holidays_url);
echo $holidays_response;

// For Countries
$countries_url = "https://back.holidaylist.io/v1/countries?key=YOUR_API_KEY";
$countries_response = file_get_contents($countries_url);
echo $countries_response;

// For Languages
$languages_url = "https://back.holidaylist.io/v1/languages?key=YOUR_API_KEY";
$languages_response = file_get_contents($languages_url);
echo $languages_response;
?>
```
## 5. Ruby
```ruby
require 'net/http'
require 'json'

# Fetch method for the different endpoints
def fetch(url)
  uri = URI(url)
  response = Net::HTTP.get(uri)
  puts JSON.pretty_generate(JSON.parse(response))
end
```
## 6. Curl
```curl
# For Holidays
curl -G -d country="US" -d year="2024" -d key="YOUR_API_KEY" https://back.holidaylist.io/api/v1/holidays

# For Countries
curl -X GET https://back.holidaylist.io/api/v1/countries?key=YOUR-API-KEY

# For Languages
curl -X GET https://back.holidaylist.io/api/v1/languages?key=YOUR-API-KEY
```
## 7. URL
```url
# For Holidays
holidays_url = "https://back.holidaylist.io/v1/holidays?key=YOUR_API_KEY&country=US&year=2023"
fetch(holidays_url)

# For Countries
countries_url = "https://back.holidaylist.io/v1/countries?key=YOUR_API_KEY"
fetch(countries_url)

# For Languages
languages_url = "https://back.holidaylist.io/v1/languages?key=YOUR_API_KEY"
fetch(languages_url)
```
