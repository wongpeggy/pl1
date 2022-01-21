# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJoxCPYfUhoFMRE7JXmPJlW8s&destination=place_id%3AChIJsbMcSLd9cVMR-wPI46n0rzY&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE&avoid=tolls&departure_time=1642806000&mode=driving&units=metric&waypoints=place_id%3AChIJCX_96tL5n1MRNlemXOYUdWQ%7Cplace_id%3AChIJW0gg56RWdFMRzgOLZ8Vw1fo%7Cplace_id%3AChIJsYFunvBgcVMRInXPXOMWPIQ
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJoxCPYfUhoFMRE7JXmPJlW8s",
         "types" : [ "establishment", "point_of_interest", "university" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJCX_96tL5n1MRNlemXOYUdWQ",
         "types" : [ "establishment", "point_of_interest", "store" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJW0gg56RWdFMRzgOLZ8Vw1fo",
         "types" : [
            "establishment",
            "gym",
            "health",
            "library",
            "lodging",
            "point_of_interest",
            "university"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJsYFunvBgcVMRInXPXOMWPIQ",
         "types" : [ "establishment", "point_of_interest", "shopping_mall" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJsbMcSLd9cVMR-wPI46n0rzY",
         "types" : [ "establishment", "point_of_interest", "university" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 53.5228921,
               "lng" : -113.4905542
            },
            "southwest" : {
               "lat" : 51.0775897,
               "lng" : -114.1412065
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "26.8 km",
                  "value" : 26821
               },
               "duration" : {
                  "text" : "27 mins",
                  "value" : 1617
               },
               "end_address" : "1 Outlet Collection Way, Leduc, AB T9E 1J5, Canada",
               "end_location" : {
                  "lat" : 53.3021039,
                  "lng" : -113.5547347
               },
               "start_address" : "116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada",
               "start_location" : {
                  "lat" : 53.5228921,
                  "lng" : -113.5150478
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 190
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 53.5228915,
                        "lng" : -113.5121724
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003e87 Ave NW\u003c/b\u003e toward \u003cb\u003e110 St NW\u003c/b\u003e",
                     "polyline" : {
                        "points" : "auteI`|ysT?G?gK?]?qC"
                     },
                     "start_location" : {
                        "lat" : 53.5228921,
                        "lng" : -113.5150478
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 386
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 53.5194206,
                        "lng" : -113.5121829
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e109 St NW S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "auteI`jysTzD?|A?~A?|A?~A?|B@"
                     },
                     "start_location" : {
                        "lat" : 53.5228915,
                        "lng" : -113.5121724
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2191
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 216
                     },
                     "end_location" : {
                        "lat" : 53.4997379,
                        "lng" : -113.5121817
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003e109 St NW S\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "k_teIbjysT|@Ab@Ch@BPATOfAAT@r@Bh@A|A?xAA`BCp@Al@?|A?f@?v@A|AAd@AB?fA@xA?x@@f@@~A@z@?d@?tA@z@?j@?|AB|A?|AA~AE|A?|A?~AA~A?|A?~A?|A?lAAjAA`B?xA?bB?zA?~A?|A?dB?vA?|A?~@?ZNlAN"
                     },
                     "start_location" : {
                        "lat" : 53.5194206,
                        "lng" : -113.5121829
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 166
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 53.4982532,
                        "lng" : -113.512049
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003e109 St NW S\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "kdpeIbjysTh@FPAV?f@Qd@ER?F@R?h@A@?j@G"
                     },
                     "start_location" : {
                        "lat" : 53.4997379,
                        "lng" : -113.5121817
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 635
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 69
                     },
                     "end_location" : {
                        "lat" : 53.4980602,
                        "lng" : -113.5026594
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e61 Ave NW E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a{oeIhiysTT@?]?oC?Q?oD?uD?wS?aIDwC@m@D{A@u@"
                     },
                     "start_location" : {
                        "lat" : 53.4982532,
                        "lng" : -113.512049
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 328
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 53.497985,
                        "lng" : -113.4977238
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003e61 Ave NW E\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "{yoeIrnwsTDQBS@e@@YDgC?IBiCAuEA{@?ACe@?{B?cD"
                     },
                     "start_location" : {
                        "lat" : 53.4980602,
                        "lng" : -113.5026594
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 603
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 53.4926733,
                        "lng" : -113.4969814
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e104 St NW S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCalgary Trl\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Calgary Trl\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kyoeIvovsTpCCl@AtC?`@AvA@b@?dA@dDAfC?HAF?PABA\\MNIHE|@eA^c@"
                     },
                     "start_location" : {
                        "lat" : 53.497985,
                        "lng" : -113.4977238
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.6 km",
                        "value" : 5555
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 387
                     },
                     "end_location" : {
                        "lat" : 53.443509,
                        "lng" : -113.4929721
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCalgary Trail NW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCalgary Trl\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "exneIbkvsTx@qBHOf@_An@}@JQV[LMFGdAu@XK`AKXA~@@jBAvBAVAT?Z?\\?v@?b@AZ?bBAZAL?lBB\\?vA@H?B?b@ATA~@A`C?~BDh@@lBJjAFjBP`@Dd@FTD@?f@HRD~@JhAH`ALv@Bv@BhBRx@B^@f@@fBBjB@h@?DAL?`B?|F@|@?xB?b@?pG@xC?lB?jB?`B@nAA~A?rCAz@Al@?d@?rAAdBBZBd@?~@Ar@AZAdA?Z?t@Cn@En@Gh@GLCTE^I\\IXIXKZIr@UVKVKHEVMr@c@|@q@p@a@~AgAv@k@`@_@VStAs@p@YdA]x@[`@Wn@Ub@K@?HALCD?VMXGvAEP@p@C`@@rBD|BJnADF@bGPfCJp@BV?fDLzDBfDBn@?`HAhA@F?|FBlB@zABbCDbABfLNdED"
                     },
                     "start_location" : {
                        "lat" : 53.4926733,
                        "lng" : -113.4969814
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "15.0 km",
                        "value" : 14959
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 512
                     },
                     "end_location" : {
                        "lat" : 53.31668570000001,
                        "lng" : -113.5498701
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAB-2 S\u003c/b\u003e (signs for \u003cb\u003eCalgary\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eEdmonton Int'l Airport\u003c/b\u003e)",
                     "polyline" : {
                        "points" : "}deeI`rusTNCF?V?dA?\\?x@C~@E^GZEjAWHEh@Qf@Sv@]jAg@tDmBfEqB\\O^OVI~@YZGpAUd@E|BCv@BT@V@`@Df@Hb@Hj@Nx@XHBpAj@t@b@hAr@|AfAz@j@n@b@bAr@ZRj@^x@`@D@b@Tr@Zj@Pb@N\\H`@HTDf@HTB^Db@Bh@BX@`A?l@C?A`@A`@CrBIVAFAbAEl@ET?j@C`AEnAErAAR?r@Ad@K`A@lA@b@@fA?b@@b@?@?hBBb@?~ABbABnA@bB?vBF`@@d@BVDV@R@^DdAPf@LTFZJp@RhBz@x@d@v@d@j@^z@j@dA~@RP\\^NPBDHFHLz@`Al@p@DF`@f@xAfBvAdBxAdBtBfC~@hAnCbD|HdJr@z@r@|@t@x@dApAb@h@rCjDj@l@p@r@TTdBdBdBvAvA~@rBlA`Bx@~@^`FrBd@PjAf@dAd@rAf@lCvA^Lf@VjDhBHDpAn@hBbAhB~@vAx@~A|@fAn@|@h@NH\\Rd@Xp@b@l@\\~@j@d@X?@|A|@n@b@zAv@t@^v@XhCv@fFpApFr@zAR`Dl@lBb@|@T|@XvAh@p@TtAl@fAj@\\P`Ah@z@j@tBtA~AdAjH|ETN^Vd@ZjErCrAz@vHbFtChBrCjBj@^xCnB`C|AfN`J~B|Al@`@zHdFjLrHpAz@|KjHnKdHzL`InD~BJHx@f@|A`AxA`AjCdBxBxAbBhAtJlG~@l@xA`ApAx@b@Zz@h@tHbF`NzI|BxAv@d@JF^V`@VZTb@XXTDDl@`@NNTLd@ZbDrBxGlE~P`Lp@b@`BhAlCfBv@d@j@ZvAr@x@^z@\\x@Z\\NjA\\xAb@z@RxB`@zAPjCVvAHt@BhABdH?nEA`@?F?~@A`@?`A?r@?zFB~E?lH?@?V?tG?jC?vG?dF@hGA`I?bDAxF?`B?`J?jD?vA@"
                     },
                     "start_location" : {
                        "lat" : 53.443509,
                        "lng" : -113.4929721
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 708
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 53.31054719999999,
                        "lng" : -113.5519997
                     },
                     "html_instructions" : "Take exit \u003cb\u003e522\u003c/b\u003e toward \u003cb\u003eEdmonton Int'l Airport\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNisku\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBusiness Pk\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e10th Ave\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "illdItu`tTNHJBTBt@@`@?R@P?\\BD?L?N@b@?B@fABN@dABt@@P@p@BX@L@H@RBH@p@F\\FRDNDVJ\\NZN\\P`GdEBB@?B@@@@@@@@@pA~@"
                     },
                     "start_location" : {
                        "lat" : 53.31668570000001,
                        "lng" : -113.5498701
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 202
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 53.30884289999999,
                        "lng" : -113.5526494
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e, follow signs for \u003cb\u003eNisku\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLeduc\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBusiness Park 10th Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Industrial Sector\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "}ekdI~batTl@Xd@Zb@V@@NFJFLDHBHBH@J@J@P?FARAb@GRCD?B@@@@@@B@BBN"
                     },
                     "start_location" : {
                        "lat" : 53.31054719999999,
                        "lng" : -113.5519997
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 443
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 53.3048623,
                        "lng" : -113.5525089
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOutlet Collection Way\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "g{jdI`gatTP?b@AnACZAb@Cb@ALAT?b@A`@A@?d@?hBAL?T?fALNCLAZ@jAGf@CZC"
                     },
                     "start_location" : {
                        "lat" : 53.30884289999999,
                        "lng" : -113.5526494
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 53.3048286,
                        "lng" : -113.5541796
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kbjdIdfatT@V@\\B`A?V?bBAxA"
                     },
                     "start_location" : {
                        "lat" : 53.3048623,
                        "lng" : -113.5525089
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "67 m",
                        "value" : 67
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 53.3042248,
                        "lng" : -113.5541754
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ebjdIrpatTRAfA@P?J?"
                     },
                     "start_location" : {
                        "lat" : 53.3048286,
                        "lng" : -113.5541796
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 277
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 71
                     },
                     "end_location" : {
                        "lat" : 53.3021039,
                        "lng" : -113.5547347
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k~idIrpatTDTDRDTDPLd@P^VZVLLF@@NHJJHDHBH?JC\\Kv@c@jAq@BAPGFAh@K"
                     },
                     "start_location" : {
                        "lat" : 53.3042248,
                        "lng" : -113.5541754
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "129 km",
                  "value" : 128580
               },
               "duration" : {
                  "text" : "1 hour 15 mins",
                  "value" : 4498
               },
               "end_address" : "100 College Blvd, Red Deer, AB T4N 5H5, Canada",
               "end_location" : {
                  "lat" : 52.2466221,
                  "lng" : -113.8276404
               },
               "start_address" : "1 Outlet Collection Way, Leduc, AB T9E 1J5, Canada",
               "start_location" : {
                  "lat" : 53.3021039,
                  "lng" : -113.5547347
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "28 m",
                        "value" : 28
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 53.3023483,
                        "lng" : -113.5548049
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cqidI`tatTi@JG@"
                     },
                     "start_location" : {
                        "lat" : 53.3021039,
                        "lng" : -113.5547347
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 110
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 53.3024534,
                        "lng" : -113.5563333
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003e44 Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uridIntatTQF?d@?jCAvB"
                     },
                     "start_location" : {
                        "lat" : 53.3023483,
                        "lng" : -113.5548049
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 353
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 53.30245009999999,
                        "lng" : -113.5616403
                     },
                     "html_instructions" : "Continue onto \u003cb\u003e44 Ave E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "isidI`~atT?d@A|@?F?`A@z@?hBAz@?rB?~@AhC?j@@z@?~B@nB"
                     },
                     "start_location" : {
                        "lat" : 53.3024534,
                        "lng" : -113.5563333
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 638
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 53.3081797,
                        "lng" : -113.5614093
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAirport Perimeter Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "isidIf_ctTkC?IGKCi@A]CgAGa@CA?eAG]AE?}ACsBEmABYDgAAc@?c@?c@?kEC"
                     },
                     "start_location" : {
                        "lat" : 53.30245009999999,
                        "lng" : -113.5616403
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 642
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 53.3087542,
                        "lng" : -113.5521076
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAirport Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cwjdIx}btT[a@MOIKOWKWAGKk@G]Ak@A}@@iCAo@CsAAiAAuC?CAgE?uE?C?Q@{E?A?o@?g@?mE?C?kB"
                     },
                     "start_location" : {
                        "lat" : 53.3081797,
                        "lng" : -113.5614093
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "125 km",
                        "value" : 124650
                     },
                     "duration" : {
                        "text" : "1 hour 7 mins",
                        "value" : 4022
                     },
                     "end_location" : {
                        "lat" : 52.2540558,
                        "lng" : -113.8474342
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eAB-2 S\u003c/b\u003e via the ramp to \u003cb\u003eCalgary\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "uzjdItcatTJi@Nq@?CRq@Xi@FEPMDC?AFCXOFCBAVGh@M~@SFAREDAbBc@LCZIbAWRIZIPEB?HCTEHAHA|AGlEEnAAnBCL?bB?j@A`@A`@?NAJAXOtA?tA?l@?p@?B?pf@?P?XAnC@pJ?tBArC@pA?lC@dEAdK?rA?T?hC@b@?r@@z@@tAFp@BfBL`@DVBJ@VBVDNBLB\\FZDt@N`AV|@Zp@Tj@Rn@ZVJRJ`@Vl@\\JFdAp@b@\\h@^b@^LLj@f@z@~@r@t@d@l@~@jAn@~@bAzAT`@Zj@Vd@z@`B`CpEzAxClA~BFHd@z@Xd@^n@`@n@\\f@b@l@PPPTb@f@Z\\v@v@XV?@TPh@`@f@^p@`@h@Xf@X@?^P`@PvBbAdBv@FD`ElBx@^nAn@LFl@Xl@Xn@XFDFBZLj@Rp@TPD\\Hz@PJ@B@XD`@FXBPBP@d@BZ@Z?H?F?X?@?\\AZAPAf@E`@CHAj@Ij@Kj@Md@MFCn@Sh@SBAHC`@QLEp@]@?VMLGnAm@HEFCDCPIb@S`Bu@\\OFCXIRGVGZIt@Ov@IPC^AL?TA\\AdA@r@?F?H?n@?b@?dA?b@?\\?r@?`B?dA?pB?@?f@?|@A@?`E?xC?vA?N?lA?tB?jB?p@?^ApB?lB?D?nB?nD?hC?xF?`@?j@?r@@`@@\\Bn@Dd@D`@FXBd@Hj@J\\H`@J~@Tf@PJDXJlAf@v@^z@f@z@f@x@l@XRj@b@xBfBbBtAnDrC^Xr@j@vAlAtAbADDbAx@ZTnAbAj@d@bDhCvAhAVRhBxArCzBdCnBhCtB~ApAtFlEpCzBx@n@|AlApDvC`PhMvAjA|CbC|CdCvEtDjA|@v@l@ZTJNzAjARNp@h@`@\\`DfCt@l@dAx@jFdEtC~Bp@h@dCnB`FzDn@h@bBtApA`AvBdBpAdAn@f@dAx@jCtBjCtBr@j@fCtB`At@j@d@ZV|AlAjBxAjBzA\\Xb@ZlDrCNLv@l@dBrA`@\\vBbB^XhBxAjCtBj@d@lA`AzAjAHH`CjBd@\\n@d@d@Xh@\\dAh@v@^\\N\\LVJt@Vn@Pt@Rx@Pz@Np@Hn@F|@Fj@Bh@@f@?rA?z@?hE?bB?~@?xH?p@An@@Z?RApC@L?xD?zB?`A?hBD~FAL?xGCh@@l@?hA?b@AlC?xN?`@?hA?hC?jA?jUAbC?vH?dG?lGAb@?`@?@?`@?p@?jL?dLBb@?fA?^?~E?fK?`@?@?lC?pCAzF?`I?b@?F?bB?b@?fKAbH@fA?b@?xD?\\?fA?b@?lC@jD?pLBlAAfF?zAAdC?l@AzHAvD?rN?vB?dB?rE?~C?R?hC?|EA\\?D?rD@b@?fA@xD?\\?|G?@?pD?tA?jF?|F?jR?Z?nF?xIArA@rH?~Y@hTCdK?fD?~A?|B?pB?r@?z@?rEAH?X?L?jD@hC?dA?n@A`A?lD?~B?fC?|B?D?lA?\\?b@?`@?dC?~A?nB?r@?B?xAAlA?pA@nD?D?fAAb@@b@?f@@dCAV?h@?pB?L?hA?v@AfC?F?vA@R?b@?fA?N?R?nA?xB?p@?fA?pA?tA?bB?dH?rB?dA?X?b@?t@?j@?fA?~B?V?`B?tE?xD?fA?D?fA?r@?h@?`A?tCA`C?vB?fC?|A@B?lCCl@?tABp@?~@?`B@bBAnD?^?lAAjAAdB@h@?xB?dB@L?pD@tAAV?V?tA?dA@v@?N?pA?`B@R?r@?lA?jC?X?b@?F?z@AJ?ZAd@?D?jBAt@?t@?vA?R?`@@f@?bCBlFAT?P?|BAr@?zA?j@?f@?V@ZBZ?l@Bh@DL?b@DlANN@J@n@Jf@Jh@L`@LB?h@Pv@Zl@V~@`@^R~@h@pBpATNXR~@v@@?fAz@fAx@zBdB|@p@NLHFDBpAbAhAz@^XBBXTj@b@bBpAPNd@^|AlApBzAh@`@~@t@bBpABBnA|@fA|@hAz@ZTBB`BnAv@n@bBnABB|@p@^Xt@j@bAv@b@Z^Z^Xp@f@n@h@`@ZZTj@b@n@f@pA~@~AlArDtCjDlCvB`BjA|@dBrA~@r@|@p@tAfAzC|BvC|BzIzG|AlAzDxC~BhBxDvCt@j@|@p@lBzAn@b@xAhAvAfAvCzB|C`CdBrAZV|C~BnCtBbCjBRPp@h@XRdAx@j@`@~BhBdClB`HlFhA|@BBlA|@DB~BhB\\XrHxFlCrBjEhD`ChBtB|AbCjBrCxB`DbCdBtAfBpA~@t@VRhBrAdE`DlBxApAbARPfClBbAv@pBzA|@r@d@^fCnB`At@jBvAlAx@v@h@j@\\|@f@l@Zj@X|@`@~@^x@\\v@X|@Vx@TbBb@dBZrAPdAJrALR@vALvCTfAF`BL`BJpAJlCRpAH~AL`@Dj@D`@B@?^BpAJpAJ`CNpAJpAJpCRj@Db@DP@`BL~BNlAHn@DvAJ~ALx@FvBNrCRtBNh@Db@B@?pBNnBNbCPvCTf@DP@ZB^Br@Fx@DlAJtDXnDVz@FpAJxAH~AJbAFjALl@DfCPdBLfAHr@D`CRdBLbBL|@FbAHfAHR@H@\\BbAH`AFD?p@FP@`@BD@N@dAHdAF|AJ~@Dp@D|@Bl@@R@l@?`A@|ABv@APAzAA^ApDOhE]vE_@pBOn@GLAVCfAI~BU`BOdD[jCW|BSt@Gb@Cb@En@GzAMnBQpAKv@GxBQ`BOrBQbAINCrDYrCW~BK~C[pBSzAKnBQpD]~D]`AG~Ea@zEe@xBQ|AIbBGpCG~DCpB?nD?`E?~CArE?bH?bE?pD?~E?rD?|A?p@?n@?^?|@?b@?n@AP?\\@n@?^?N?`@?^?^?n@?^?P?L?^?P?^?N?^?p@?^?^?n@?N?P?L?P?L?b@?\\?p@?~AAP?n@?^@N?^A`B?L?p@@~@A^?`@?^?n@?n@?N?\\?@?`@?^?vD?fJ?jB?d@?F?L?^?`@?n@?\\?P?^?^?N?N?D?Z?N?N?J?fE?bC?lD?^?l@?@?`@?n@?`@?N?H?R?`@?n@?D?V?`@?N?^?p@?l@@p@?n@?~B?P?n@?N?p@?j@?j@?T?\\?v@?x@?^@`C?b@?l@?lFA`@?`@?^?^?P?L?^?`@?^?n@?`@?^?^?n@?`@?^?P@j@?P?N?N?`@?\\?`@?^?bC?^?D?X?\\?n@?pA?~@?nA?`A@`AAl@@pB?r@A~@@|@Ap@@`A?l@?^?^?`@?^?x@?f@?^?^?`@?\\?`@?^?R?Z?P?X?d@?^?^?`@AP?l@?p@?`A?l@?`@?`A?|@?`@?^@^?l@?P?N?N?N?N?h@?F@|@?p@?`C?`@?\\?n@?pB?`A?l@?bC?b@?nAAn@?|A@fEA`A?\\?p@?zC@^?b@?^?`@?n@?~@?p@?^?^?`@?l@?p@?`A?~@?`EAj@?`@?bA@`@At@?h@?`@?^?n@?`C?Z?N@N?N?^AP@N?L?P?B?ZAR@RAh@@^?n@?p@?nA?|@?`@?n@?n@?d@?jB?p@?J?RAn@@^?P?N?N?P?l@A^@`@?\\Ar@?l@@bF?n@?`@?~D?p@?n@?n@?N?^?p@?p@?N?\\?`A?~@?jC?\\?f@?~A?bI?pA?tO?p@A\\?p@?r@?Z?`A?p@?\\?~@?p@?^?`A@~AAp@?t@@f@?^?p@A^?^?^@^?`@A^@n@?pA?bC?vB?bC?H?X?H?`B?tA?T?fA?b@@@?`AAB?j@?~@?~@?j@@P?~@?|@?@?vB@T?f@?lAAB?l@?bA@zAA`B?NA^@^?tC?zC?`@?T?X?^?`@?NA^?^?`@@n@A^?^?@?\\?`@?^?^?`@A^@^A^?`@?^AL?R@N?LA`@?N?`@?l@?P?N?N@^AP?`@?@?X?H?V?bF?~H?hA?`@@b@?fA?fA?@?b@?hB?b@?@?b@AtFAvMCvE?~GA`@?d@@fA?nC?b@?pEAnB?d@@pMCxC@bAAbA?X?rD?nEA|C@f@@`@?hA@bG?nC@jEBnA@bA?`@?R?NAfAArMAb@AnC?lU?b@?@?b@ApDAd@?`@?jB?H?X?vE?nL@fA?b@?nC@lI?bKA`@A\\@jA?zC?lK@nC?dK?nC?|@?|A@DAnB?`I?xE?dFAx@AhD?~ABT@b@Ab@Ab@?b@?~AAv@CZ?`ECnAA`C?bA@^@~BHN?tAAv@FT@pAAtA?|AEf@Ah@A`AAb@?nCCdFBvDAt@ChA@n@?dD@zBDrB?b@AzF?b@?jBCfAArD?bI@jTAb@?xF@n@?vB?~D@fA?r@@dE?rDAxABtG@dJAb@AnODJ?T?lHMb@?b@?jB?fA?fA?jB?nC@jB@rDCjT?jB?b@?`I@d@?zFAzFAfLA~P?rD?b@?vcA?xJ?`@Al@@H?b@?dC?bI?pA?@?pD?b@?vD?^?n@AV?hB@rD?dA?rOAbC@`AAvDAz@@pA?dB?bG@V?tC?`A@t@?xCPpBRp@Hl@LpAXH@nGhBhEhB^P`@PfAd@zM|FRJrB|@bEbBn@ZFBTJrD~Ab@PlBv@|BbAbAd@hAd@dBt@bCdALDJDFDn@Vj@VJDh@TfAh@p@Zd@L^NNDtAp@`@Rp@ZlAb@LF^PhChAr@ZrAl@`@PdBv@bCdAnD~A`@P`@Pb@P`@RnAh@RHf@Rd@RHBPHf@TvB~@`Bt@B@PFJDBBPFrAl@x@\\ZNPH`@PPH^PPFPHp@Z`@Pj@Vh@TPFNHvAn@^N@@NFNFPHrAl@\\ND@p@ZjAf@|@^b@RdGlCz@^PFNHB@`Ab@`@N`@RNFPH\\NB@ZNx@\\NF`@RjDxANHPHnAh@`@PDB`@P`@PPH^N@@fBv@^NtAh@PFPHNFPFTHvB|@VJ|@\\vBp@`@Lb@NbB\\VD~AZ|@J|AP@?N@`@B`@BlAHjA@j@?p@@vBAd@A`@?vECD?zCAV?F?`BA^?h@?vAA`@?R?b@?FA^?`CA`@?~@?RAxVIfA?R?l@@pFEf@@n@?nGCfD?fFCpKE\\?^?B?ZA\\?xBA~AAdA?fAA@?lC?nCAjKCdEAxA?tC@|CAzEA`B?vAAhA?hACvAChCC\\?|GCnICt]KrDArDAdEApCA`RGrDAzOGhECx@?|UIN?R?N?xA?PAP?fA?P?P?P?P?hFCP?fA?t@AP?jBAt@?b@?t@?b@AP?b@?`DAP?P?P?xSGr@AjBAR?bA?jAA~D?`@?X?nBC|B?lAAfBAjA?b@?^AnCAfAAb@?J?VAb@?`@?d@?jHAV?tC?`HCfDAv@?b@?TAP?nCAb@?nCAzTG~RGhLEjA?bFC`BAdC?P?P?P?P?fA?Z?~CCv@AV?lBAN@X?V?T?L?V@\\@d@@fBH|@HH@p@HtAN|AXbB^jAZhA^j@Rb@NtAf@rBv@xCdAhDlAx@VtCbAvE`BB?bExAx@X~Ah@vFnBzEbBXJ`@NVHtE~AlBp@bEvA~CfA~JjDJDbIpCnHfCbGrB~Ah@`@N@?`@N~@ZdL|D`@NLDTH`@NdA\\bA^lA`@z@ZlBp@jEzAlA`@dEzAlAd@XLr@ZzDdBHDVLbAd@bAb@bAd@lClAjEnBrAl@XLb@PbAb@bAd@`@PJDTJfCjAxBbApAl@dChA@?hCjAhDvAdBv@PH|Ar@hAj@jAn@z@j@t@p@B@v@v@x@z@VXbArAj@x@b@t@d@t@\\p@f@dANX^~@\\x@Xv@Vx@X~@^rA\\rAVjANp@N~@BJlF`ZhDjRtL`q@zAjI~CfQLt@xAbILt@rCxOH`@Lt@Lt@hB|JJn@z@vEDTJn@Jd@jEhVJj@DVfA~F~A`JFXPbA|ArITtAdA|FRdA?B\\jBDTb@dCt@|DZfBP~@RnAl@`DfAfGv@hEx@vE~BnMnAdHvBnLnAfHnBpKbAxF|AlIpArHn@|Ct@|Ch@nBr@zBh@|Ah@vAh@pA`ArB`AlBz@zAhAbBr@bAf@n@p@x@pBxBvAvAnApA`BbBtAtA~B~BvBtB|A`BbAfAbAbA~@`A|@|@dAfAdAdApApApArAvAxA|D|DPPh@j@lEnEpDrD`NfNdDfDrMxMpNtNjAlAf@f@d@f@zBzBfAhA~@~@Z\\zA|ArArAd@f@`DbDNNvFxFZ\\`AbAvArA|DxDb@d@b@d@~GfHNPhFhFzBzB|@`ArApApDtDp@p@RRzA|AtFxF~@|@v@x@xB|BbE`EdAfArEvE\\\\NNVVBBvCvCfNnNtKzK\\\\`@`@xAxA\\\\rGtGrBrBlAlAXZXZxDzDnAlA\\^@B`@^rAvAn@n@l@n@xBzBpCrC`WdWBBzE|EzE|ElAnAlFnFpArAjB~A|@p@v@j@XNzAz@p@\\d@RxAj@~@XtA\\x@PdBVbCNh@B~B@lI?jA?l@?pH?vHAtT@lAAd@?rBA~@?b@?lD@~A?xB?dA?xA?rE?p@?dJ?nD?~G?hI?bB?B?~A?nV?|G?l_@AzE@xLArD?vW?jB?jB?`B?x@?jB?`BA@?hB@tE?lF?@?n@?`B?x@@fABr@Hx@Jt@Lr@NzAd@VJPFn@Vl@X|@j@~DtCzAjAdAv@~AjA~BfB\\T@@VPDDbAt@|@p@@@b@\\ZT`D`CjCnBtAdA|@l@bBnAZRlA|@TRPPj@b@lA|@h@^`@XHF`Ap@RPRN^X^Xt@j@~@r@^X`Ar@~@p@~@r@`Ar@~@r@x@l@~AlA`EzCJFJFjA|@vDpCf@^RN\\VnCrBb@\\NJZVJHFDTPtB|Ad@\\n@f@v@j@j@d@~C~B~BfBtCvBJH|ElDtB~AtCtB^XJHtAbA^X~BfB`@XzEnDdCjBv@j@hBtA~@r@`CfB`FrD`D`C^XbGlE^V|HzF~FhE~AlAfClBpA~@rF`EjDrCj@^h@`@hBrA^VbFrD`D~BrHvF`GjEtGzEnA~@vEnDxCxBbAr@hAz@t@h@z@f@hAl@x@b@t@Xf@TbA\\n@Pn@P`@HvAVx@HB?ZD`@Bl@D`@@X@T?L@J?N?X?|B?Z?j@?L?dD?hM?jE?B?P?R?pA@rD?jB?|PAD?tF?rD?b@?nM?~J?rC?n@?~B?bG?dB?lH?vN?b@?nC?b@?`I?@?bG?|B?`@?n@A^@b@ApA?|E@jH?zF?nEAv@?R?V?pE?pA?n@?p@?`@?N?T?j@?N?^?T?r@?n@?`@?Z?j@Bz@D`BPrBVZHXDPDjCt@JDr@VrAh@dAh@x@d@PHxBvA`C`Bx@j@BBxJxGfAn@b@T\\Pn@Xf@Tr@Tv@Vn@Ll@Jt@H`AD~@?l@Ah@Cf@E@?p@I`@IVGNEn@Qf@QRI^O\\O`@U\\Sp@c@JIROl@g@j@k@`@c@v@y@hAuAlC}CPSPQz@aA\\_@\\_@pB_C`@e@`BkBh@o@FGNQLOlByBVYNOV[DE\\_@b@i@^a@RUtA}ABE`@e@X[VYh@o@f@k@JMNOd@i@Z_@FG^c@f@k@b@e@RUlB{B\\_@h@m@lBwBX_@PQfBsBvDiErA}AZ]b@g@`AgAj@o@`DsDlL{Mb@c@PULOLQb@i@"
                     },
                     "start_location" : {
                        "lat" : 53.3087542,
                        "lng" : -113.5521076
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 480
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 52.2503331,
                        "lng" : -113.8438965
                     },
                     "html_instructions" : "Take exit \u003cb\u003e397\u003c/b\u003e for \u003cb\u003e32nd St\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "{z|}HlyzuT^M@CX[ZYX[JKFITWRUJK`@c@BEh@g@@A\\_@t@u@b@c@~@aAz@_AZY^_@TQ`@]^WPM`Am@"
                     },
                     "start_location" : {
                        "lat" : 52.2540558,
                        "lng" : -113.8474342
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 217
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 52.2485967,
                        "lng" : -113.8424547
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003e32nd Street\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRed Deer\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "qc|}HjczuTLMjAw@XSl@c@PMrAaAr@q@\\a@"
                     },
                     "start_location" : {
                        "lat" : 52.2503331,
                        "lng" : -113.8438965
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 933
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 52.2506597,
                        "lng" : -113.8295496
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e32 St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wx{}HhzyuTLQ_@aB_@yAMi@IYGYa@kBkAeFYqAACq@sDY_BKq@Ga@e@yDKaAMyAKwAGwAAe@CwAEmP?eH"
                     },
                     "start_location" : {
                        "lat" : 52.2485967,
                        "lng" : -113.8424547
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 529
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 115
                     },
                     "end_location" : {
                        "lat" : 52.2466221,
                        "lng" : -113.8276404
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCollege Blvd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "se|}HtiwuT`@CHEHGFIHMFMBODQBOPmCJk@Pa@RULIFCHCNA~C@hB?b@@`A@`BDP@r@?V?R@JIDS"
                     },
                     "start_location" : {
                        "lat" : 52.2506597,
                        "lng" : -113.8295496
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "125 km",
                  "value" : 124585
               },
               "duration" : {
                  "text" : "1 hour 13 mins",
                  "value" : 4351
               },
               "end_address" : "261055 Crossiron Blvd, Alberta T4A 0G3, Canada",
               "end_location" : {
                  "lat" : 51.2052954,
                  "lng" : -113.9901117
               },
               "start_address" : "100 College Blvd, Red Deer, AB T4N 5H5, Canada",
               "start_location" : {
                  "lat" : 52.2466221,
                  "lng" : -113.8276404
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 491
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 114
                     },
                     "end_location" : {
                        "lat" : 52.2503148,
                        "lng" : -113.8258132
                     },
                     "html_instructions" : "Head \u003cb\u003enortheast\u003c/b\u003e on \u003cb\u003eCollege Blvd\u003c/b\u003e toward \u003cb\u003eCollege Cir\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kl{}Hv}vuTAQEMOCI?aB?WAmA?eBDeB@{@?o@?W@c@Aa@MSSQ[Kg@CME[Ew@Ee@AWIk@EMGO"
                     },
                     "start_location" : {
                        "lat" : 52.2466221,
                        "lng" : -113.8276404
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "42 m",
                        "value" : 42
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 52.2506785,
                        "lng" : -113.8257281
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eCollege Blvd\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "mc|}HhrvuTMGMGGAC?IASBC?"
                     },
                     "start_location" : {
                        "lat" : 52.2503148,
                        "lng" : -113.8258132
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1205
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 109
                     },
                     "end_location" : {
                        "lat" : 52.2485967,
                        "lng" : -113.8424547
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003e32 St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "we|}HxqvuTW@@|I?h@?hB?fG?tBAhFAz@AhF?x@FvEBd@Df@PnCRxBl@vFD`@p@bDv@tDr@xCn@nC`@dBPr@BHDPNp@?@Rt@^dB"
                     },
                     "start_location" : {
                        "lat" : 52.2506785,
                        "lng" : -113.8257281
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "120 km",
                        "value" : 120477
                     },
                     "duration" : {
                        "text" : "1 hour 5 mins",
                        "value" : 3891
                     },
                     "end_location" : {
                        "lat" : 51.2186786,
                        "lng" : -114.0017105
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eAB-2 S\u003c/b\u003e toward \u003cb\u003eCalgary\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "wx{}HhzyuTLQ^I^STMNOJMFGP[Te@b@aA`@y@JK`AwBd@aA^q@n@iAj@}@PYj@y@h@q@TYj@q@hAuAhAuAbAqAr@}@`@g@FIlAwAdAoAPUHK`@g@d@g@TYL[|EuFzLgN^c@PSp@{@hCuClD_Eb@g@d@g@HKPUJKPSfIkJZ]r@_Av@eA\\g@X_@Zc@x@gAlCqD`B{BNWz@}AP[Vg@Xi@|@cBXo@hA_CXk@n@uAhA_Cj@mADGVg@r@sAXg@JSLSZc@l@_AdCqCFKjAkATQdAq@f@[^U@?^UZSn@[XMZM`@KDCr@St@SLCj@Kb@EBAn@Ir@Kb@E^EB?\\CRAZA^?J?V?n@?T?p@?x@?`@?jB?@?dAAfA?d@?lC?vE?|A?dFCpECjBAxC?rF?bA@tA@bI?|F?hB@~ACJ?x@@rD@xB?t@AlE@dD?rGAtA?nA@lBBL?xBN|@H\\FdALvAXpAVTFxA`@fA\\LDTFv@X^Nj@Rz@^XLt@\\|@b@~@d@^RdI|DtJxEbCjAv@`@lAb@XJ^JTFl@LFBj@JtAPB?d@Bl@BnABh@C@?v@CtAMxAUb@M`@Kr@Up@Ux@]LI\\OPKpCaBnFaDn@_@pBmAb@W`@W^UvBoAbAi@f@Wv@_@dBs@bC{@pCu@~Be@b@GDAxBWbAIzAIxBE~AAbA?tG?R?b@?vN?rD@b@?~G?tA?hS?|G?b@?j]?r@?t@AdZ?jH?p@?n@?~@?p@?n@?nA?X?T?n@?|H?xH?~@?n@?L?bC?~@?nC?pB?`B?`A?^?v@?F?Z?B?N?N?N?N?B?hA?@?~@AD?X@l@?fA?J?zA?f@?h@?~@?d@?J?^?hD?T?^?~D?h@?R?~@?pA?~A?~A?n@?lA?P?|@?h@?|A@`DAn@?p@?xB?tA?vA?n@?r@?@?x@Ad@@^A`@@J?xAAxA?Z?t@?~@?`E?pA?nA?|@?bA?nA?~@?`@?n@?Z?H?x@@p@?n@@^@`@B^B^@n@Fn@F^D\\D^Fn@Jp@L|@R~@Rz@Tp@TlA`@l@Tl@TlAh@l@Xx@b@n@^z@f@h@^j@^l@b@ZTv@n@fA|@`B|Af@f@h@j@f@j@XZpA~ARXxAnBr@~@dEzFvAlBrCxDjCnDrBpCpBrCf@n@d@n@|@lAf@r@X^X`@VZ~@pALNbB~BNPn@~@f@n@d@n@pEhG~AxBjA~Ad@l@f@p@b@n@V\\fDpEr@`AlA`B|@lAr@`AX^d@p@r@~@d@n@p@|@d@n@Zb@TZZb@X^T\\LNX^p@~@LNX`@V\\X`@d@l@X`@Zb@jAzAp@`AxAnBjA~Ar@`AX^LPV\\d@l@p@~@r@`Ad@l@f@p@~@rA~@lAxK`ObB`CfB`Cp@~@X\\~@pAjA`BbHnJtBrClCpD~HpKTZ`C`DhCnDt@hAzC`EpBlCZb@~EzGhE|FtAhBrBtCtKzNpJpM|GdJpBlCdEzF|GdJnDzEvBvC`@j@RXpCvDjFdHpCvDvLfPvDfFX`@V\\bHhJ~DnFjEbGpQlVlCrDX`@rBjChBdC@@X`@tAjBpBnCJNfAvAvAlB~AvBRT\\b@rAhB`@f@dAxAj@v@r@~@p@|@~DpFh@t@n@x@|AvBfB~Bf@p@T\\|@lA~AvBPTpFpHxDfFHJbCdDHLtAhBlCrDZ`@PVbArAbB|BpCvD~@nAPVfB`Cd@l@d@p@r@~@dF~GV^Z^b@n@Z`@x@fAlNlRvAjBX`@@@nJnMpGtI`G`I`@j@j@t@d@j@JNh@t@v@fAZd@Zb@tAhBx@fAtAhB`ApAtBrCzFzHzGdJnCpD`ApAfBbCpH|Jh@v@`C|CxArBZ^t@dA`B|BX\\tDfFX`@t@~@vEpG~B|C`ErFpBtC~A`Cr@bAzCrE`ClDXd@X`@V`@xGxJZf@Zb@xBbDfA`B|CrExAzBv@hAx@lAd@r@h@x@pEvGj@|@zA~BZf@HL^l@z@tAnArBx@tAnArBZd@r@lAjBzCt@lAd@t@v@pAnArBhBxCZf@lB|Cr@jAdC`EnArBnArBtF`Jp@hAd@x@dA`B@BVb@rAvBV`@~CfFpCnEpCrEtA|BpUv_@Zd@dHhLPX~CdFnAtBZd@zDnGvJ~OXd@~I|NV`@Vb@~AfCXd@`@j@d@r@j@x@HJX`@X^bAlAd@j@p@r@PTXXjAjA`A|@jC~BfA~@bAz@lC`CpBbBZVbB|Ax@r@z@v@^Z^ZzCjCxDhDB@n@l@hFlErMhLnEzDxKpJxHzGpVfTzFbFpVfTzClC|FdFt@n@v@r@l@f@hFrEpBdBtDbDpAjAb@^XTtAnArAhAbBrAj@`@\\TNHfAr@l@\\x@d@z@`@|@d@tAf@f@Tv@TbAZHBb@LjAXjAVl@J|@Lb@F~@JrAJf@D`@@`@BrABfB?fC@dB?dA?p@@tB?jA?~@?b@?nL@lH@T?fA?rC@|H@nE?F?\\?vE@^?F?lJ@~A?^@v@?^?z@?~D@n@?J?vEBbA?jE@vA@pC@@?zC@|A?lA?b@@dB?~D@hC?H?jB?rD@`B?b@?pC@~A?zC@bA?b@?fA?Z?X?P@h@?^?PAzB@|C?fA?b@?b@?jA?nC?jB?pB?\\?nC?lB?`@?fA?@?hK@|@?H?B?pE?~L?dA?x@?rB?tI?jN?tC@~B?F?zC?fK?zI?pB?hC?rG@bBAbB?^@h@A`A@`A?lA?lB?R?fD?nJ@Z?F?Z?F?|M@V?@?`@AD?vC?lO@b@?b@?jB?jB?b@?bR@b@?pD?@?`@?lB?b@?rM?jB?`@?b[@b@?tW?bAD`B@bDApBApB@vWAB?b@?vN?nC?pPAzC?z@?J?V?J?r_@AV?nR?b[?b@?lLAd@?b@?fA?b@?z@?j@?fA?fA?fA?jB?P?pB?rA?xA?P?t@?|B?rD?~G?RC`PCT?p@?pDAjBDzCC~C?hB@~AA|A?nYE|D?zH@zBA~AAb@AlA@~A?zA@rFAbD?bOAlD?nA?F?H?r@?fAAzC@rD?jE?zC?jE?l@?hCBhBAnA@|@?dDBnHB|A@~F?zH?`B?|L?^?~A?bL?lD@\\?b@?h@?`J?lJ?jB?|G?@?`@?@?|P?jB?lA?tD?nD@lDA`D?jD?rF?pD?~C?|A?~D?pF?pU?`F@~E?nD?`I?jJ?tMAT?dD?xD?hD?fE?R?~C?l@?xD?xJ?|@?nC?nF?`D?~D?nD?pKApD@lGArC?j@?dC?~DAdO?`G?J?b@?jA?tF?bG?hM?nKA~F@~D?|CAtF?|I?h@?`W?dJ@~G?bI?b@?jo@@hB?lA?fAAn@?N?z@?n@?fA?D?|B?J?X?h@?lB?lB?jB?rB?xA?nA?V?jB?J?tG?tB?X?pB?lC?|D?bD?nAAl@?hC?b@?b@?b@?fD?bA?lD?`E?~@?r@?`@@j@?T?jF?z@@`B?tEAX?rJ?~@?jB?vA?zB?bC@jB?tC?lD?bD@~E?~@?nC?`A?xAAbD@ZAL?`A?hf@?rM@fA?fA?jB?jB?nC?r@@pAAn@?xB?T?fA?rD?tA?tH?L?dD?bI?J?V?vE?fA?zC?V?J?b@?b@?~A?J?~A?J?jK?b@?T?fA?|C?b@?b@?T?fA?fP?jE?J?V?J?xJAlE?hIAdD@|C?dA?jB?hB?jNAlB?bI?tKAvA?lI?b@?l@?jNAbIElA?hCCb@?jBA\\?DAjB?b@?fAAdCApAAdAAjBAjBAb@?B?bACb@?^Af@Ab@?fAAvECnCAb@?lCCd@?b@AnCAdAAvEAl@A`B?~E?fCAb@?tC?nK?z@?nO?`@?hB?jC?pE?dA?xG?`@?hB?^?@?dA?fA?`@?~I?fB?b@?fB?b@?jC?jC?jC?b@?vO?~FA`@?vE?^?nF@lJDzB?tA?F?bBA|GC`@?d@?b@?`A?D?|B?bA?@?@?\\?h@?b@?vA?V?H?|AAfA?@?D?Z?fA?J?V?b@?V?^?\\?J?xDA`E?T@b@?b@@`@?`@?b@?lB?^?`A?l@?\\?~@?vD?H?p@?hE?R?T@`AAR?R?^?t@@P?bF?bL?p@?dA?X?F?X?F?Z?lA?dA?^?@?bA?@?b@?nC?\\?`@?b@?~J@zI?zD?T?`@?`@?B?rK@pj@EvJ?nC?pD?@?d@?|HAB?`C?L?nCBfJ@fA?b@?b@?d@?b@?fA?fA?fA?b@?H?|@?b@?H?`B?vE?tB?X?fA?b@?pA?|@?zF?rM?zD?Z?F?b@?`K?l@?|R@b@?b@?p@?`JAjC?dCAD?hI@T?|C?X?H?|@?zBAfC@nBA|@?vA?`G?vB@nAAb@?B?pA?hE@jBAB?^?B?~G?bJ@@?b@?fA?vC?bAAv@?J?D?Z?X@H?xGAb@?dK@nB?jCAhA?hB?lC?fA?^?pB?b@?tG?j@?D?d@?v@?jB?b@?nC?lC?`D@`EBz@CvB@b@?d@?lB?r@ANAJ?TAD?h@EJAPATCHALATCNCRCRCj@KFAh@KZIr@QPGdA]XKh@UfAg@~@e@`@UJGbAo@p@g@~AmA^Wp@g@nA_AtB_BzAiAl@c@`As@|C_CvEmDjDiC^Y~D{C^Y|DwCrM{JDCXSl@c@p@i@^YNKl@e@hAy@vB_B`Au@^YTQHGjGyEtDqClBwA\\YrFeEfDgCdE_DlGyEt@i@^Y|BeBpCwB|BeB|FkEv@k@bAu@XQp@e@p@_@TM|@c@r@YJEd@Sp@Ud@MFC`@K@?z@SlAUHCPAHAb@GB?^EXCd@CFArACpACtB@jA?b@?b@?F?Z?b@?vE?b@?j@AZ?pD?N?zJ?rB?|@?tB?X?pB?vD?X?pC?|@At@@jB@hC?lA?rD?`F?rT?vA?bB?xA?|E?P?X?l@?`DAN?nC?X@J?pMAX?H?P?N?zA@rG?bC?j@?~A?lF@zDAD?xF?`H?^?\\?r@?x@A|D?lJ@bAA`A?lC?@?zC?H@fA?|C?P?|B?fJ?r@?d@?b@?t@?fA?b@?vA?hF?lC?b@?f@?f@@fA?jB@H?|A@BAP?P?bG@Z?bC?n@?F?Z?fAA\\?D?\\?lA?pB?tFGd@?zB?x@A^?zEFzACfA@lD?H?`@?H?|A?pACfBAhA@bF@zOB~E@bJCB?vF?XAN?P?NAP?X?vB@x@?xB?Z?F?B?R?f@?r@?X?h@?\\?D?R?pA?pC?|A?J?D?bH?`B?D?P?hA@`EA@?P?n@?fA?V?N?l@?hE?hC?dG@xF?pD?N?zD?H?vV?fB?vE?p@A`C?nB?lAA`B?L?x@Bt@@xAAJ?V?P@dE?H?X?jDAnA?V?X@dDAr@?fA?lL@dI?xA?fA?H?z@?|F?F?PA|D?bB@P?X?~DAhG?p@@hE?~E?hG?dDCHAD?xBB`J@vE?tDAxC?H?nB?rB@z@AxE@~AAJ?~C@nA?hD?F?pBA`BCf@?pB?F?v@?vA@tA?tD?`A?~B?xDB~IEb@?b@A|B@b@?D?XA@?xBGzAGzAMx@OhAOp@MtAY|EmArFsAvA_@v@Mt@Mp@ILCB?nAOtAGbAG\\AD?B?fAAv@AzA@^@b@@hAHrAJTB\\DB?`@DtDd@fC\\D?b@FdLxAD@jDb@B?d@FvARn@HB?dEh@XD\\Hj@FtHp@rBFlC@dC?nGWbK_@~GYtCKh@Al@AjBAnC?zAAzACn@@~FAtI@hB?nC?P?F?j@?dA@xRApEAdC?vA?pC?tI@b@@b@?nEA~G@H?nF?zFAbI?rM?fA?l@?bD@hFAtB?|D?jA?bB@zBAvD?bC@T?rA?pMAlO?~B@rMA`E?rH?tH?zT?vC?|@?b@?H?dC?pM?xK?"
                     },
                     "start_location" : {
                        "lat" : 52.2485967,
                        "lng" : -113.8424547
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 657
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 51.2129568,
                        "lng" : -114.0036597
                     },
                     "html_instructions" : "Take exit \u003cb\u003e275\u003c/b\u003e toward \u003cb\u003eAB-566 E\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "wsrwHt}xvTVLN@j@B@?`@@B?`@Bb@@fBFtBH`@BJ@L@P@RBLBTBLBNDND^JTHXLJDPFLFB@rAn@PHNHNHLFh@VJDx@b@RJRJFBVLTJv@`@HD"
                     },
                     "start_location" : {
                        "lat" : 51.2186786,
                        "lng" : -114.0017105
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "44 m",
                        "value" : 44
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 51.2125631,
                        "lng" : -114.0037483
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eKathyrn\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKeoma\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "_pqwHziyvTXJL@JBZ?"
                     },
                     "start_location" : {
                        "lat" : 51.2129568,
                        "lng" : -114.0036597
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 790
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 51.2122091,
                        "lng" : -113.9924451
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAB-566 E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "omqwHljyvTA{A?c@?KAcC?}@?cA?m@?Q?g@?}AA_D?S@w@D[?C@G?]?_A?{@?]?S@oB@y@DaCPoB@YJaDFgBBkADcBDsD?wB"
                     },
                     "start_location" : {
                        "lat" : 51.2125631,
                        "lng" : -114.0037483
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 853
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 51.2053449,
                        "lng" : -113.9897446
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCrossiron Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ikqwHxcwvTPaDJkAPo@j@u@`AGvIa@nCErDE|@AR@TARA`@Eb@IpA[nGcB"
                     },
                     "start_location" : {
                        "lat" : 51.2122091,
                        "lng" : -113.9924451
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26 m",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 51.2052954,
                        "lng" : -113.9901117
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eCrossiron Blvd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`pwHzrvvTFhA"
                     },
                     "start_location" : {
                        "lat" : 51.2053449,
                        "lng" : -113.9897446
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "23.8 km",
                  "value" : 23775
               },
               "duration" : {
                  "text" : "24 mins",
                  "value" : 1439
               },
               "end_address" : "2500 University Dr NW, Calgary, AB T2N 1N4, Canada",
               "end_location" : {
                  "lat" : 51.0775897,
                  "lng" : -114.1412049
               },
               "start_address" : "261055 Crossiron Blvd, Alberta T4A 0G3, Canada",
               "start_location" : {
                  "lat" : 51.2052954,
                  "lng" : -113.9901117
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "26 m",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 51.2053449,
                        "lng" : -113.9897446
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e toward \u003cb\u003eCrossiron Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "c`pwHduvvTGiA"
                     },
                     "start_location" : {
                        "lat" : 51.2052954,
                        "lng" : -113.9901117
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 787
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 51.1984174,
                        "lng" : -113.9909734
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street to stay on \u003cb\u003eCrossiron Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`pwHzrvvTfBg@~@Qt@Kn@Cf@@J?n@FpATD@`Bj@hC|@zBv@p@V@@`A\\p@XPHn@Np@Dh@D`@Bd@@b@@bCC"
                     },
                     "start_location" : {
                        "lat" : 51.2053449,
                        "lng" : -113.9897446
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1973
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 125
                     },
                     "end_location" : {
                        "lat" : 51.1925362,
                        "lng" : -114.0017543
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "cunwHpzvvTf@TJLPTA`BEdB?DGtBCRGhAO~AIr@]pCMlAGj@?BGpAC|@?bA?L?@@rABx@Bt@B^Fv@?@TjBlA~HJj@FVRfA?@Lt@Pt@Px@Jd@Hb@T`A?@Np@Jp@BZ?B@R@X?T?^APCNCZGVGVEFCHCDEJINMNKJMLMFQFSBO?O?IAICQEOKSOKMKMMWGQEMAEGYEYCYA[AO?G@]@[BY?AFWFYFQ?AHSHQLOFI@CLKFGLGRKLCDAFAZETA@?ZCh@?dAAN?RAd@?vBEjECh@Aj@?`CCF?B?jCCb@?|@AL?B?FCDCLI"
                     },
                     "start_location" : {
                        "lat" : 51.1984174,
                        "lng" : -113.9909734
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.1 km",
                        "value" : 11057
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 375
                     },
                     "end_location" : {
                        "lat" : 51.1027603,
                        "lng" : -114.045853
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eAB-2 S\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "kpmwH|}xvTvG@^?J?fA?jB?rGA`@?L?lI?zE@pA?rAGV?fA?`C?f@Ar@?b@A\\A`AA|AEl@CzCInAEbAGfAExAIpAG`AExEOrDEfDEj@?d@?f@?V?b@?F?`@?jB@p@@x@@hBBvFN^BrADn@D|@D\\BxBJfBNrFb@|@LZBt@J`ARfAVvAd@p@TfBv@nAp@rAz@x@l@jA|@bAbAhAhAjArAdAxANT|@rAr@jAh@~@r@pAb@z@HNb@v@f@z@Tf@l@fAp@lA`@t@T^j@bArBrDrA|BvChFh@~@^p@h@|@Vd@d@v@BFT`@f@z@f@z@LTP\\n@fAVb@d@x@dAjBh@~@FL`@p@^n@h@`A\\l@b@t@@BdAjB|@zAv@vAT`@T^d@z@`AdBz@vAj@bAf@|@h@~@Zf@`@t@rA~BhHfMPZp@hAR\\R^PVR\\Zf@^j@T^`@l@X`@^j@TZZd@X`@`@h@Zb@T\\Z`@TZZ`@\\`@b@j@Z^X\\Z^LNHJXXVZ\\^Z\\X^LLXXLNVX\\^f@h@x@z@NPrBxBb@d@DDd@h@XXNNfBnBp@r@PPlCvCbAfAJHPT\\^\\\\xA`B\\\\\\`@~@bAjAlA~BdCl@n@fCnCHHvFdGrDzDjAnA`ChCBB~BfCl@r@d@d@RRz@|@~@x@`Av@HD^X`@VFD\\Td@X|@d@t@\\fAf@f@Pr@VzA`@t@Pr@Lh@Ht@Hh@BjBJ~A@R?H?N?F?dEOdAERAlBGzAGt@AhACpAAlB?pA@J@n@@V?jADfAD`CPjAP`Ir@zD^bAHjE`@f@DP@L@L?P@bDFJ@xAJt@Dt@DnAHJ@L?T?\\@V@^?`@@\\?T@\\?P?X@^@X?`@?X?V?Z?\\?V?Z?Z?`@?h@?^AN?R?\\?n@CZ?\\Ad@Ad@AX?ZAn@Az@E~@GDAPAPCRARA\\CVCf@Cj@G\\C^Eb@G`@Ef@GTCZIXCb@Gh@In@Kt@Kp@OhB_@pEiAVGVGJCJA"
                     },
                     "start_location" : {
                        "lat" : 51.1925362,
                        "lng" : -114.0017543
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 279
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 51.10036179999999,
                        "lng" : -114.0448141
                     },
                     "html_instructions" : "Take exit \u003cb\u003e261\u003c/b\u003e for \u003cb\u003eMcKnight Blvd\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "g_|vHpqawTPJ@?@@?AN?TGj@Qb@OXIjBo@PIrAo@fB}@"
                     },
                     "start_location" : {
                        "lat" : 51.1027603,
                        "lng" : -114.045853
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3236
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 273
                     },
                     "end_location" : {
                        "lat" : 51.0974021,
                        "lng" : -114.0833007
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eMcKnight Blvd W\u003c/b\u003e and merge onto \u003cb\u003eMcKnight Blvd NE W\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "gp{vH`kawTREr@a@j@_@HENIf@[lBiAVQr@e@t@_@\\MVGRANAN?PBJ@B@RFLDJDPLB@RPRVRVR\\@@JRLXJXJTHVFXFVFXDX@RBXBX@T@\\DrB?DDjDBzC?d@@XBtD@xB@l@?bAFv@?xA?|@?Z?rB?T?T?vBAzD?`@?P?j@AfP?tE?bC?tE@tA?nB?lC?l@?x@Av@?\\@nBBxB?|B?tBAd@@lAAbBH\\?tA?JAdF@|BCvBGf@B|C?j@?fA?~C?Z?dBAt@El@Cb@SbBAJIdAE|@?d@?h@Dx@?DHx@Hl@VfBJv@Fv@D`AAp@?PIfAGl@YfBSlAAFQpAE`@Ef@C`AGdB?TCTEl@Ij@ET]vBIn@Mv@[lAIZSn@ERA@Ur@GT"
                     },
                     "start_location" : {
                        "lat" : 51.10036179999999,
                        "lng" : -114.0448141
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 2964
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 157
                     },
                     "end_location" : {
                        "lat" : 51.0969156,
                        "lng" : -114.1163795
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJohn Laurie Blvd NW W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w}zvHr{hwTNJz@j@pBx@tAr@l@d@FDrAzAr@|@V^TXnBdCd@l@rBhC@BLNJNBBnBbCv@dAx@bABBPTDFzAhBd@h@`AlABDX`@Zf@R\\BD`@z@L^Pb@Nf@BDLd@Np@Nx@@FLr@Hr@Fp@@FD`@BbA@n@?b@@l@?r@?@AZAZ?PCf@?@A^ATC\\IdASrASrAMx@ERg@~CI^SpAUhAOr@Ox@mAxFG\\iAbFGVSv@a@bBi@fDOhAQhAcAnH[vBU|AGh@Mx@k@bEa@tCIj@]`CQfACTQdA_@fBK`@?@K^]lASn@Qf@Qd@Uf@Wj@ABYh@_@t@cAhB[f@i@~@q@hAm@hA{@zAoAzB"
                     },
                     "start_location" : {
                        "lat" : 51.0974021,
                        "lng" : -114.0833007
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1833
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 205
                     },
                     "end_location" : {
                        "lat" : 51.0836702,
                        "lng" : -114.1249491
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCharleswood Dr NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wzzvHjjowTKRRXx@zA`@n@d@p@LPTVTRPNVJTF`@DF@L?^CXCDAXK\\OZUZ_@\\i@Zq@R]l@qAf@eA`@w@FMR_@LSTYRQLKNGHELCPG\\CZAVBPBRFF@HDNHNHTLNJhAr@d@^\\Tt@h@fCrB|@t@fAp@nA~@hAv@XRJHZ^JJR\\b@x@jAlBhBzCt@jAhAfBx@rAx@rAv@pAVh@h@bA~AnCtBfDnAlB"
                     },
                     "start_location" : {
                        "lat" : 51.0969156,
                        "lng" : -114.1163795
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 958
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 121
                     },
                     "end_location" : {
                        "lat" : 51.081548,
                        "lng" : -114.1374403
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003e32 Ave NW W\u003c/b\u003e (signs for \u003cb\u003eAlberta 1 Alt S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e32 Avenue N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCrowchild Trail\u003c/b\u003e)",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "}gxvH|_qwT\\l@JLl@bANV|@|ALPPZPXVd@Vh@R^DJFPJ\\JZL^Lh@@BHd@BLFXBTBPHd@Jx@BZ@VB^B\\@b@@d@?h@@dB?^?FAtC@vA?tA?nC?~@?nA?x@?vF?lK"
                     },
                     "start_location" : {
                        "lat" : 51.0836702,
                        "lng" : -114.1249491
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 51.0791982,
                        "lng" : -114.1375677
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCollegiate Blvd NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uzwvH~mswT?d@V?L?f@@Z?zFAd@?R?PARENC"
                     },
                     "start_location" : {
                        "lat" : 51.081548,
                        "lng" : -114.1374403
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 297
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 51.0783953,
                        "lng" : -114.1412075
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUniversity Ave NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_lwvHxnswTb@@B?B@DBVVPj@FTBJBJBJBNBLBNBNBNBL@LBLBRBP@P@J?D@L?N@P?N@N?R@R?^?|@AxD"
                     },
                     "start_location" : {
                        "lat" : 51.0791982,
                        "lng" : -114.1375677
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 51.0775897,
                        "lng" : -114.1412049
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWarren St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_gwvHpetwTV?fA?H?v@A"
                     },
                     "start_location" : {
                        "lat" : 51.0783953,
                        "lng" : -114.1412075
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "auteI`|ysT?_QvM?xMSt]G~pALjG?jBIT}DNws@TwQE_F?cDpCCbEAbF@~HCdF}F`FgGfWc@~]r@tZjBdt@?rWSdO_GfS}Jbo@bAtx@d@t^eMxKYlKdEzTzK`m@e@lYnBrQnNjl@tr@pXnPlSnJf[lQz\\pKfUbGnv@zf@bkBnmAdtBbtAfOrFn`@zAneA@zaAbA~WtMdXAfAl@@vGpCpAzBnCnE}ACxTAhJ@zDiCnB}AQqDSiMCcJqBa@}h@hBkRvLcDtfBiAnl@n@zPzF`UfXlTj]|h@zUhJAbLoDfOeFdTCpiAp@x]~Sdg@z`@xwBvdB~iAr}@`WrFjq@DvaDEtvICptCAtpC?t]ThUnIdt@vj@j_Er|Cvs@`j@p_@bUdmAtKbkCvPr~AwL|fAiGf~@Cx^@to@AtwABv|DB~wECpzLOnaKGj`AB`\\lHp\\tNj\\rNpW~Kvn@pXrg@xTfn@lUzlAVvaHqBrmEoA`RE~[vF`hCv|@niAvd@ze@dWfOd]zeAfaG~Xz}AfPtx@zLlVrg@xh@xuAxvA`hBjiBd`CpaC`OnK|TbDzqAArqEBlKdCjUhPrZ~T`w@~k@~uAvdA`dA~u@bz@|j@fRrAfbA?l{CAvRHhNrC~OlJfUnMtK\\xLwElh@gl@f{@uaAp^o[~@gE_AwDiFoW_Bqd@nA}I~AmHrN@zBy@iN@cEsBy@cFqAvIEza@|Cl^hFfU`AjCdB{@nEwInUs[li@on@r]id@jPe\\jRePlNyB~fBGb`@TbOxCvk@~WjGnAvL_@d`@qSbUuHrYu@~bB?hbB?bwB@zU~DpYtRhcArtA`uCb|D`pFrmHfhEv~FpwDhfGzfDtwCdf@|`@v[zIxnBb@|tATbvFJnpT?ntSA`dPaAdyJDj}EAnr@}@xWuNtw@ul@n~AckA`NgDb[QlwB@t}B?hlDAlaEBlzB?nv@EdKIt[_GvWkBdg@zFjVpCzn@uAxhAI~`E@dkAXdO|AzIfE~CrAb@mKHuWx@_Wb@yOvMoCdO_@nRiEhZzHnFBbAzCqAdRHjVrF`[aAxGwBj@mBkB@oHrD}Bj^]xqAqAjf@_@xUdAvShDjRrNrIlNvXtf@zd@|x@ra@~m@hl@~n@~e@~f@pIjEnN|B|_@i@bm@dEn^n@|`@wCzQwDtWsMjFhClBpMXbhBSpjA\\rMyA`O_D`SxM~J~H~JbQ`VdCtR}BxUqWtyA{NpZdFvGfDElKqOhJ`CtOfLvIbNbXxc@vDdLh@f\\d@tZnLKfC`FXzHfBxDv@A"
         },
         "summary" : "AB-2 S",
         "warnings" : [],
         "waypoint_order" : [ 0, 1, 2 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
