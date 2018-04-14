const mysql = require('mysql');
const async = require('async');
const dbConfig = require('../config/config');

var connection = mysql.createPool(dbConfig);

module.exports = function(app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/getstatsdata', function(req, resp) {
        connection.getConnection(function(err, tempConn) {
            async.series({
                stats: function(callback) {
                    tempConn.query('SELECT sum(case when batting_score > 0 then batting_score else 0 end) AS `total_score`, count(batting_score) AS `total_match`, max(batting_score) AS `max_score` FROM sachin_stats', 
                    function(err, result) {
                        callback(err, result);
                    });
                },
                battingAvg: function(callback) {
                    tempConn.query('SELECT cast(sum(case when batting_score > 0 then batting_score else 0 end) AS unsigned) / cast(count(batting_score) AS unsigned) AS `avg` FROM sachin_stats WHERE batting_score > 0', 
                    function(err, result) {
                        callback(err, result);
                    })
                },
                inningsCount: function (callback) {
                    tempConn.query('SELECT count(batting_score) AS `innings` FROM sachin_stats WHERE batting_score > 0',
                    function (err, result) {
                        callback(err, result);
                    })
                },
                numCentury: function (callback) {
                    tempConn.query('SELECT count(batting_score) AS `century` FROM sachin_stats WHERE batting_score >= 100',
                    function (err, result) {
                        callback(err, result);
                    })
                },
                winCount: function(callback) {
                    tempConn.query("SELECT count(match_result) AS `wincount` FROM sachin_stats WHERE match_result = 'won'", 
                    function(err, result) {
                        callback(err, result);
                    })
                },
                wicketCatchesCount: function (callback) {
                    tempConn.query("SELECT sum(wickets) AS wicketcount, sum(catches) AS catches FROM sachin_stats",
                        function (err, result) {
                            callback(err, result);
                        })
                }
            }, function(err, result) {
                tempConn.release();
                resp.send(result);
            });
        });
    });

    app.get('/getalldata', function(req, resp) {
        connection.getConnection(function(err, tempConn) {
            if(err) throw err;
            tempConn.query('SELECT batting_score, date FROM sachin_stats WHERE batting_score != -1', 
            function(err, result) {
                tempConn.release();
                if(err) throw err;
                resp.send(result);
            });
        });
    });

    app.get('/getcomparedata', function(req, resp) {
        connection.getConnection(function(err, tempConn) {
            if(err) throw err;
            tempConn.query('SELECT * FROM stats_compare AS statsCompare', 
            function(err, result) {
                tempConn.release();
                if(err) throw err;
                resp.send(result);
            });
        });
    });

    // return router;
}