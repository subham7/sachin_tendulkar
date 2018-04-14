const PROXY_CONFIG = [
    {
        context: [
            "/getstatsdata",
            "/getalldata",
            "/getcomparedata"
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;