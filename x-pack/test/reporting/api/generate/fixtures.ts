/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export const CSV_RESULT_TIMEBASED = `"@timestamp",clientip,extension
"Sep 20, 2015 @ 10:26:48.725","74.214.76.90",jpg
"Sep 20, 2015 @ 10:26:48.540","146.86.123.109",jpg
"Sep 20, 2015 @ 10:26:48.353","233.126.159.144",jpg
"Sep 20, 2015 @ 10:26:45.468","153.139.156.196",png
"Sep 20, 2015 @ 10:26:34.063","25.140.171.133",css
"Sep 20, 2015 @ 10:26:11.181","239.249.202.59",jpg
"Sep 20, 2015 @ 10:26:00.639","95.59.225.31",css
"Sep 20, 2015 @ 10:26:00.094","247.174.57.245",jpg
"Sep 20, 2015 @ 10:25:55.744","116.126.47.226",css
"Sep 20, 2015 @ 10:25:54.701","169.228.188.120",jpg
"Sep 20, 2015 @ 10:25:52.360","74.224.77.232",css
"Sep 20, 2015 @ 10:25:49.913","97.83.96.39",css
"Sep 20, 2015 @ 10:25:44.979","175.188.44.145",css
"Sep 20, 2015 @ 10:25:40.968","89.143.125.181",jpg
"Sep 20, 2015 @ 10:25:36.331","231.169.195.137",css
"Sep 20, 2015 @ 10:25:34.064","137.205.146.206",jpg
"Sep 20, 2015 @ 10:25:32.312","53.0.188.251",jpg
"Sep 20, 2015 @ 10:25:27.254","111.214.104.239",jpg
"Sep 20, 2015 @ 10:25:22.561","111.46.85.146",jpg
"Sep 20, 2015 @ 10:25:06.674","55.100.60.111",jpg
"Sep 20, 2015 @ 10:25:05.114","34.197.178.155",jpg
"Sep 20, 2015 @ 10:24:55.114","163.123.136.118",jpg
"Sep 20, 2015 @ 10:24:54.818","11.195.163.57",jpg
"Sep 20, 2015 @ 10:24:53.742","96.222.137.213",png
"Sep 20, 2015 @ 10:24:48.798","227.228.214.218",jpg
"Sep 20, 2015 @ 10:24:20.223","228.53.110.116",jpg
"Sep 20, 2015 @ 10:24:01.794","196.131.253.111",png
"Sep 20, 2015 @ 10:23:49.521","125.163.133.47",jpg
"Sep 20, 2015 @ 10:23:45.816","148.47.216.255",jpg
"Sep 20, 2015 @ 10:23:36.052","51.105.100.214",jpg
"Sep 20, 2015 @ 10:23:34.323","41.210.252.157",gif
"Sep 20, 2015 @ 10:23:27.213","248.163.75.193",png
"Sep 20, 2015 @ 10:23:14.866","48.43.210.167",png
"Sep 20, 2015 @ 10:23:10.578","33.95.78.209",css
"Sep 20, 2015 @ 10:23:07.001","96.40.73.208",css
"Sep 20, 2015 @ 10:23:02.876","174.32.230.63",jpg
"Sep 20, 2015 @ 10:23:00.019","140.233.207.177",jpg
"Sep 20, 2015 @ 10:22:47.447","37.127.124.65",jpg
"Sep 20, 2015 @ 10:22:45.803","130.171.208.139",png
"Sep 20, 2015 @ 10:22:45.590","39.250.210.253",jpg
"Sep 20, 2015 @ 10:22:43.997","248.239.221.43",css
"Sep 20, 2015 @ 10:22:36.107","232.64.207.109",gif
"Sep 20, 2015 @ 10:22:30.527","24.186.122.118",jpg
"Sep 20, 2015 @ 10:22:25.697","23.3.174.206",jpg
"Sep 20, 2015 @ 10:22:08.272","185.170.80.142",php
"Sep 20, 2015 @ 10:21:40.822","202.22.74.232",png
"Sep 20, 2015 @ 10:21:36.210","39.227.27.167",jpg
"Sep 20, 2015 @ 10:21:19.154","140.233.207.177",jpg
"Sep 20, 2015 @ 10:21:09.852","22.151.97.227",jpg
"Sep 20, 2015 @ 10:21:06.079","157.39.25.197",css
"Sep 20, 2015 @ 10:21:01.357","37.127.124.65",jpg
"Sep 20, 2015 @ 10:20:56.519","23.184.94.58",jpg
"Sep 20, 2015 @ 10:20:40.189","80.83.92.252",jpg
"Sep 20, 2015 @ 10:20:27.012","66.194.157.171",png
"Sep 20, 2015 @ 10:20:24.450","15.191.218.38",jpg
"Sep 20, 2015 @ 10:19:45.764","199.113.69.162",jpg
"Sep 20, 2015 @ 10:19:43.754","171.243.18.67",gif
"Sep 20, 2015 @ 10:19:41.208","126.87.234.213",jpg
"Sep 20, 2015 @ 10:19:40.307","78.216.173.242",css
`;

export const CSV_RESULT_TIMELESS = `name,power
"Jonelle-Jane Marth","1.177"
"Suzie-May Rishel","1.824"
"Suzie-May Rishel","2.077"
"Rosana Casto","2.808"
"Stephen Cortez","4.986"
"Jonelle-Jane Marth","6.156"
"Jonelle-Jane Marth","7.097"
"Florinda Alejandro","10.373"
"Jonelle-Jane Marth","14.807"
"Suzie-May Rishel","19.738"
"Suzie-May Rishel","20.92"
"Florinda Alejandro","22.209"
`;

export const CSV_RESULT_SCRIPTED = `date,year,name,value,"years_ago"
"Jan 1, 1981 @ 00:00:00.000","1,981",Fetty,"1,763","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Fonnie,"2,330","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Farbara,"6,456","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Felinda,"1,886","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Frenda,"7,162","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Feth,"3,685","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Feverly,"1,987","38.000000000000000000000000000000000"
"Jan 1, 1981 @ 00:00:00.000","1,981",Fecky,"1,930","38.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Fonnie,"2,748","39.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Frenda,"8,335","39.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Fetty,"1,967","39.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Farbara,"8,026","39.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Feth,"4,246","39.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Feverly,"2,249","39.000000000000000000000000000000000"
"Jan 1, 1980 @ 00:00:00.000","1,980",Fecky,"2,071","39.000000000000000000000000000000000"
`;