// Combined JavaScript for API Code Examples
const codeExamples = {
    "holidays": {
        "curl": `curl -G -d country="US" -d year="2024" -d key="YOUR_API_KEY" https://back.holidaylist.io/api/v1/holidays`,
        "go": `package main\nimport (\n    "github.com/feelgd777/holidaylist-go"\n)\n\nfunc main() {\n    api := holidaylist.NewAPI("YOUR_API_KEY")\n    holidaysResponse, _ := api.GetHolidays(map[string]interface{}{"country": "US", "year": 2005,})\n}`,        
        "python": `import requests\nurl = "https://back.holidaylist.io/v1/holidays"\nparams = {"country": "US", "year": "2005", "key": "YOUR_API_KEY"}\nresponse = requests.get(url, params=params)\nprint(response.json())`,
        "javascript": `import java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = "https://back.holidaylist.io/v1/holidays?key=YOUR_API_KEY&country=US&year=2005";\n        try {\n            URL obj = new URL(url);\n            HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n            con.setRequestMethod("GET");\n            int responseCode = con.getResponseCode();\n            System.out.println("Response Code : " + responseCode);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}`,
        "php": `<?php\n$holidays_url = "https://back.holidaylist.io/v1/holidays?key=YOUR_API_KEY&country=US&year=2005";\n$holidays_response = file_get_contents($holidays_url);\necho $holidays_response;\n?>`,
        "ruby": `require 'net/http'\nrequire 'json'\n\nuri = URI("https://back.holidaylist.io/v1/holidays?key=YOUR_API_KEY&country=US&year=2005")\nresponse = Net::HTTP.get(uri)\nputs JSON.pretty_generate(JSON.parse(response))`
    },
    "countries": {
        "curl": `curl -X GET https://back.holidaylist.io/api/v1/countries?key=YOUR_API_KEY`,
        "go": `package main\nimport (\n    "github.com/feelgd777/holidaylist-go"\n)\n\nfunc main() {\n    api := holidaylist.NewAPI("YOUR_API_KEY")\n    countriesResponse, _ := api.GetCountries(map[string]interface{}{"language": "es",})\n}`,
        "python": `import requests\nurl = "https://back.holidaylist.io/v1/countries"\nparams = {"key": "YOUR_API_KEY"}\nresponse = requests.get(url, params=params)\nprint(response.json())`,
        "javascript": `import java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = "https://back.holidaylist.io/v1/countries?key=YOUR_API_KEY";\n        try {\n            URL obj = new URL(url);\n            HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n            con.setRequestMethod("GET");\n            int responseCode = con.getResponseCode();\n            System.out.println("Response Code : " + responseCode);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}`,
        "php": `<?php\n$countries_url = "https://back.holidaylist.io/v1/countries?key=YOUR_API_KEY";\n$countries_response = file_get_contents($countries_url);\necho $countries_response;\n?>`,
        "ruby": `require 'net/http'\nrequire 'json'\n\nuri = URI("https://back.holidaylist.io/v1/countries?key=YOUR_API_KEY")\nresponse = Net::HTTP.get(uri)\nputs JSON.pretty_generate(JSON.parse(response))`
    },
    "languages": {
        "curl": `curl -X GET https://back.holidaylist.io/api/v1/languages?key=YOUR_API_KEY`,
        "go": `package main\nimport ("github.com/feelgd777/holidaylist-go")\nfunc main() {\n    api := holidaylist.NewAPI("YOUR_API_KEY")\n    languages, _ := api.GetLanguages()}`,
        "python": `import requests\nurl = "https://back.holidaylist.io/v1/languages"\nparams = {"key": "YOUR_API_KEY"}\nresponse = requests.get(url, params=params)\nprint(response.json())`,
        "javascript": `import java.net.HttpURLConnection;\nimport java.net.URL;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = "https://back.holidaylist.io/v1/languages?key=YOUR_API_KEY";\n        try {\n            URL obj = new URL(url);\n            HttpURLConnection con = (HttpURLConnection) obj.openConnection();\n            con.setRequestMethod("GET");\n            int responseCode = con.getResponseCode();\n            System.out.println("Response Code : " + responseCode);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}`,
        "php": `<?php\n$languages_url = "https://back.holidaylist.io/v1/languages?key=YOUR_API_KEY";\n$languages_response = file_get_contents($languages_url);\necho $languages_response;\n?>`,
        "ruby": `require 'net/http'\nrequire 'json'\n\nuri = URI("https://back.holidaylist.io/v1/languages?key=YOUR_API_KEY")\nresponse = Net::HTTP.get(uri)\nputs JSON.pretty_generate(JSON.parse(response))`
    }
};

function updateHolidaysCodeBlock() {
    const selectedLanguage = document.getElementById('holidays-language').value;
    document.getElementById('holidays-codeBlock').textContent = codeExamples['holidays'][selectedLanguage];
}

function updateCountriesCodeBlock() {
    const selectedLanguage = document.getElementById('countries-language').value;
    document.getElementById('countries-codeBlock').textContent = codeExamples['countries'][selectedLanguage];
}

function updateLanguagesCodeBlock() {
    const selectedLanguage = document.getElementById('languages-language').value;
    document.getElementById('languages-codeBlock').textContent = codeExamples['languages'][selectedLanguage];
}
document.getElementById('holidays-language').addEventListener('change', updateHolidaysCodeBlock);
document.getElementById('countries-language').addEventListener('change', updateCountriesCodeBlock);
document.getElementById('languages-language').addEventListener('change', updateLanguagesCodeBlock);

// Set default code for each section
updateHolidaysCodeBlock();
updateCountriesCodeBlock();
updateLanguagesCodeBlock();


// Collapsible sections functionality
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Copy button functionality
var copyButtons = document.getElementsByClassName('copy-btn');
for (var j = 0; j < copyButtons.length; j++) {
    copyButtons[j].addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const codeBlock = document.getElementById(targetId).textContent;
        navigator.clipboard.writeText(codeBlock).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
}