import {generateId} from "../helperfunctions"
export const mockMessages = [
    {
        messageId: generateId(),
        userId: "fksj234234",
        userName: "Jennifer Bryant",
        userImage: "https://randomuser.me/api/portraits/women/80.jpg",
        threadId: "jfk23en",
        messages: [{content: "Hey, what's going on with you. i wanted to see if you wanted to hangout pretty soon/ maybe catch a movie"}]
    },
    {
        messageId: generateId(),
        userId: "jkljkl423423",
        userName: "Jessica Johnson",
        userImage: "https://randomuser.me/api/portraits/men/0.jpg",
        threadId: "3jjkfsd32",
        messages: [{content: "Hey, what's going on with you. i wanted to see if you wanted to hangout pretty soon/ maybe catch a movie"}]
    },
    {
        messageId: generateId(),
        userId: "sfdjkl3424j231",
        userName: "Ashley Corbi",
        userImage: "https://randomuser.me/api/portraits/women/90.jpg",
        threadId: "34423kjfksdajfks",
        messages: [{content: "Hey, what's going on with you. i wanted to see if you wanted to hangout pretty soon/ maybe catch a movie"}]
    },
    {
        messageId: generateId(),
        userId: "fjsajfk34324kj",
        userName: "Jordan Michael",
        userImage: "https://randomuser.me/api/portraits/women/37.jpg",
        threadId: "34dsfdsjkl4k",
        messages: [{content: "Hey, what's going on with you. i wanted to see if you wanted to hangout pretty soon/ maybe catch a movie"}]
    },
    {
        messageId: generateId(),
        userID: "fksj234234",
        userName: "Kyle James",
        userImage: "https://randomuser.me/api/portraits/men/33.jpg",
        threadId: "34434klln234",
        messages: [{content: "Hey, what's going on with you. i wanted to see if you wanted to hangout pretty soon/ maybe catch a movie"}]
    },
]

export const mockPendingQuestions = [{
    questionId: "34knksn32",
    userId: "fjkls;adjsakd",
    userName: "kfdsjk",
    profileImg: "https://randomuser.me/api/portraits/women/32.jpg",
    firstName: "Karen",
    lastName: "Johnson",
    title: "I'd love to have a conversation about this topic"

}, {
    questionId: "8uuoik432",
    userId: "jksdfjdf",
    userName: "kjfklkefsd",
    profileImg: "https://randomuser.me/api/portraits/men/73.jpg",
    firstName: "Jordan",
    lastName: "Davis",
    title: "If anyone is down to have a conversation about the best places to play basketball around here"
}, {
    questionId: "98hj34",
    userId: "kdjfwr234",
    userName: "kfjdskj342",
    profileImg: "https://randomuser.me/api/portraits/men/38.jpg",
    firstName: "David",
    lastName: "Michaelson",
    title: "I'm trying to find the best place to host a wedding. Does anyone have any recommendations"
}, {
    questionId: "nln342kl",
    userId: "4knf32",
    userName: "2k34nf",
    profileImg: "https://randomuser.me/api/portraits/men/34.jpg",
    firstName: "Kurt",
    lastName: "Johnson",
    title: "I'm a big hiker. I know Colorado is known for its peaks so who wants to be buddies?"
}, {
    questionId: "nknf3244fsdafa",
    userId: "32rkfjds",
    userName: "32nrksdf",
    profileImg: "https://randomuser.me/api/portraits/women/8.jpg",
    firstName: "Kathleen",
    lastName: "David",
    title: "I love to party and I'm moving here in December. Can someone show me around"
}]

export const dummyMapResults = [
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4900 Himalaya Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7862979,
                "lng": -104.7539009
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78757752989272,
                    "lng": -104.7526620701073
                },
                "southwest": {
                    "lat": 39.78487787010728,
                    "lng": -104.7553617298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Ebert's Terrace",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107071710100137658084\">carolina rincon</a>"
                ],
                "photo_reference": "ATtYBwJzk8D1uzimK67l5GBgE2emenNZZfQUgyHSChcOidBBUiZDs_rUbFC2IzdWZ3gSMtKKr3bSjdkxhLIB46QO0HsCp2NzFScRS1QqOaiVB6eR2p5PBmL-3lS4O1F5QRNOacjoGAz3UwcIcMz48uRvA6Aj8IG6uoSqDMfkvw2PHIw77h0C",
                "width": 4032
            }
        ],
        "place_id": "ChIJrVqJGgllbIcR8O5sAHCuc3o",
        "plus_code": {
            "compound_code": "Q6PW+GC Denver, Colorado",
            "global_code": "85FQQ6PW+GC"
        },
        "rating": 4.4,
        "reference": "ChIJrVqJGgllbIcR8O5sAHCuc3o",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 118
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4995 Argonne St, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7871437,
                "lng": -104.7701149
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78835202989272,
                    "lng": -104.7685833701073
                },
                "southwest": {
                    "lat": 39.78565237010728,
                    "lng": -104.7712830298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "name": "Green Valley Ranch Beer Garden",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118197186830918368397\">Edith PeVa</a>"
                ],
                "photo_reference": "ATtYBwK8tqT4FNvztob3S6VBRKhoe5-CfI5ozTHwLz8RfAjLIAKbx3D9gcJanHetAKs4l6XLb9SS_Y96rchL5Ugi0Ei4R-pBxW6pTYPQqkxO9zGtEM1PGUnc8CQBxqR30BSBum4lm4KwlxmDNN3bwdQijwxQ8ro5deWJ9q_VdM5s60Nb4xem",
                "width": 4032
            }
        ],
        "place_id": "ChIJgy5EThZkbIcRfEn5lwkucwA",
        "plus_code": {
            "compound_code": "Q6PH+VX Denver, Colorado",
            "global_code": "85FQQ6PH+VX"
        },
        "price_level": 2,
        "rating": 4.3,
        "reference": "ChIJgy5EThZkbIcRfEn5lwkucwA",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1778
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "18630 Green Valley Ranch Blvd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7833861,
                "lng": -104.7680194
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78478692989273,
                    "lng": -104.7666478701073
                },
                "southwest": {
                    "lat": 39.78208727010728,
                    "lng": -104.7693475298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Phở Kitchen 88",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115673259899623382692\">Hamala Makala</a>"
                ],
                "photo_reference": "ATtYBwJzKVoaikuRtkvpBaQauwlhsNTvBCfUf55qG9GjBeIxh5YJA49n-YT4aJlYvFYGxpUXRDTWs5n0fpmWT1BXfg5OnvU6aZCFdNg_VdUZi7WX3m9oHREJkiKSgJ7Hs5gziMoOOBx-cNZotV_AJ34sMvd2Y6beTNg1fffGs-eh3oqCO5gZ",
                "width": 3024
            }
        ],
        "place_id": "ChIJWd0D6xZkbIcR1v6mHY4YtG4",
        "plus_code": {
            "compound_code": "Q6MJ+9Q Denver, Colorado",
            "global_code": "85FQQ6MJ+9Q"
        },
        "price_level": 1,
        "rating": 4.2,
        "reference": "ChIJWd0D6xZkbIcR1v6mHY4YtG4",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 601
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4968 Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7870127,
                "lng": -104.7716496
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78836432989272,
                    "lng": -104.7701917201073
                },
                "southwest": {
                    "lat": 39.78566467010728,
                    "lng": -104.7728913798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Coriander",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1004,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102251006995781720060\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwIXiqbNbHy_RNAHAUv4ldYYNepiZlp59u5i6duu0-QmrU2ZVy6HumBd6nn6rb-inLCJZXcXLeoLUWK2olcpRgScMCfAjJGdw0rqdkk36y3WlUpQBcYjv_YeD7mWgxxza8-6KeVqIJYogv9K2dovtpEpYnNCO5gan-8BQBDRYfLK5Tjy",
                "width": 1600
            }
        ],
        "place_id": "ChIJOeLBVaRlbIcRJDt4itc_BVQ",
        "plus_code": {
            "compound_code": "Q6PH+R8 Denver, Colorado",
            "global_code": "85FQQ6PH+R8"
        },
        "price_level": 2,
        "rating": 4.3,
        "reference": "ChIJOeLBVaRlbIcRJDt4itc_BVQ",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 460
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "3751 Tower Rd, Aurora, CO 80011, United States",
        "geometry": {
            "location": {
                "lat": 39.7685869,
                "lng": -104.7728355
            },
            "viewport": {
                "northeast": {
                    "lat": 39.76982292989273,
                    "lng": -104.7713916701073
                },
                "southwest": {
                    "lat": 39.76712327010728,
                    "lng": -104.7740913298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Mondo's Pizza",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2648,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107436444300821841557\">A Google User</a>"
                ],
                "photo_reference": "ATtYBwIQIANX__uZm7VDXfqjxi5GkC0Dmpj3YyIFP1smpK1Fn25x1LMkyq4ZKEl3iqgBGa1l387UZKKzTwLU_6dE0kEVdrZpWMYM7AjETG5lZ9jlWchh4KRQDuVw1w0ZDqpgIsX2Ua4v_2IwBD5YKqW89UddBbJsUMoiSns55ThSvP88u4b1",
                "width": 3967
            }
        ],
        "place_id": "ChIJcfYPB3plbIcRiYqA0absecM",
        "plus_code": {
            "compound_code": "Q69G+CV Aurora, Colorado",
            "global_code": "85FQQ69G+CV"
        },
        "rating": 4.9,
        "reference": "ChIJcfYPB3plbIcRiYqA0absecM",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 179
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4650 Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7813413,
                "lng": -104.7715396
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78269217989272,
                    "lng": -104.7702625701073
                },
                "southwest": {
                    "lat": 39.77999252010728,
                    "lng": -104.7729622298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "la despensa latina",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107497336479457867950\">Alan Loo</a>"
                ],
                "photo_reference": "ATtYBwKat4zl4O0zGKQps7iyuhNgHS_y_BDH0tfitrottRnGAtpCMs_sjhjTdkrRdnVPLauhcdM-BcAel1CWKhEW3uZHZ9yRYXwTDuetQCmFn7wgvaT2WlXXYTUzxmLDF1gmjg7d62Hh8_B5aZZxI9zBQhId0Z7olFMA9dYO8qs3Ckru0qc8",
                "width": 4000
            }
        ],
        "place_id": "ChIJNxyrjhNkbIcRE1BMg1tDPkk",
        "plus_code": {
            "compound_code": "Q6JH+G9 Denver, Colorado",
            "global_code": "85FQQ6JH+G9"
        },
        "rating": 3.9,
        "reference": "ChIJNxyrjhNkbIcRE1BMg1tDPkk",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 462
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "18613 Green Valley Ranch Blvd Suite 104, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7846496,
                "lng": -104.7677327
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78604602989272,
                    "lng": -104.7665146701073
                },
                "southwest": {
                    "lat": 39.78334637010728,
                    "lng": -104.7692143298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Papa Murphy's | Take 'N' Bake Pizza",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103463985919891940951\">Danielle Cason</a>"
                ],
                "photo_reference": "ATtYBwKlc3wJh5TesZssz5yxoFmrRAeDEW9mmJ1X6ixPaOkADkg4QIvT8VCDZmerBWc_HgfGLkve_Er3sEnYT4TSc0l4ZMcjnS1yWIX6defO7qnXuzX-JKHGuPiFR5y3kLB8yoWk2KR4vsKLmnzO1RrghRm9F-i5aoBvjozdPNcvnQhqAY5a",
                "width": 1920
            }
        ],
        "place_id": "ChIJ-Zewt_RjbIcRIkd9a7FCe-E",
        "plus_code": {
            "compound_code": "Q6MJ+VW Denver, Colorado",
            "global_code": "85FQQ6MJ+VW"
        },
        "price_level": 1,
        "rating": 4.4,
        "reference": "ChIJ-Zewt_RjbIcRIkd9a7FCe-E",
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 152
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "3751 Tower Rd A, Aurora, CO 80011, United States",
        "geometry": {
            "location": {
                "lat": 39.7679982,
                "lng": -104.7730036
            },
            "viewport": {
                "northeast": {
                    "lat": 39.76931382989272,
                    "lng": -104.7715610201073
                },
                "southwest": {
                    "lat": 39.76661417010728,
                    "lng": -104.7742606798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "El Lucerito Jr.",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2100,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117848933877869494347\">El Luceritos Jr.</a>"
                ],
                "photo_reference": "ATtYBwKbCt84f3eTa3srg_F_52KJZZtM9CI4TI4WiL2q3NjmarsA_BAX9wcRMHZvYJnfZNQ0dhkH8d5jxIJCUemDyoexd6E6rsw9_FEt2IanFwEFqTEEfSG9tZJ6FlGgrKkVAWcyu_rL7LDeq0efsta0HIqVSosvXjQinE6GrSBZi9uYeBPm",
                "width": 1575
            }
        ],
        "place_id": "ChIJVdii8ApkbIcRCHwkSuMZv4w",
        "plus_code": {
            "compound_code": "Q69G+5Q Aurora, Colorado",
            "global_code": "85FQQ69G+5Q"
        },
        "price_level": 2,
        "rating": 4,
        "reference": "ChIJVdii8ApkbIcRCHwkSuMZv4w",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 721
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "18611 Green Valley Ranch Blvd Suite 100, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7850323,
                "lng": -104.7683423
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78630562989272,
                    "lng": -104.7669933201073
                },
                "southwest": {
                    "lat": 39.78360597010727,
                    "lng": -104.7696929798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Subway",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1300,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118042759343778769924\">SUBWAY® Restaurants</a>"
                ],
                "photo_reference": "ATtYBwKCOd_1tbAJ_970izEkbauKTfYhVyGqVRGx4nv-MojyB9UYksz5qwvJQ4yPJ1OKMwJRseQA-ILNTki5GTzhhK8Ywucknoe8RBAiUTZexaTIhYGl0QNg4yNluok14RJLBVK3RtM5mPnjxKyZ-XoyJSwB20bMwTfA_iK_iRoOSiirvtYX",
                "width": 1301
            }
        ],
        "place_id": "ChIJozaXLhRkbIcRVCWzD1Y66eo",
        "plus_code": {
            "compound_code": "Q6PJ+2M Denver, Colorado",
            "global_code": "85FQQ6PJ+2M"
        },
        "price_level": 1,
        "rating": 3.9,
        "reference": "ChIJozaXLhRkbIcRVCWzD1Y66eo",
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 145
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "18291 Green Valley Ranch Blvd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7839635,
                "lng": -104.7746792
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78522562989271,
                    "lng": -104.7733338201073
                },
                "southwest": {
                    "lat": 39.78252597010727,
                    "lng": -104.7760334798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Raising Cane's Chicken Fingers",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113274532431772938741\">Jose Namaste</a>"
                ],
                "photo_reference": "ATtYBwL59nxGmXAELgj-oKdQed9kzfDTmrwoEc3gmysQ7JhFqH5YZxuIp_EnhaGkZvZmSxcTeOQ5i5Q7eflXpjFUyQRwGqGqrFx9Uy5YFSeTXVnPPHrWSTqRpSeiH07XJCIp8tAOmukqvlATMN5yzlEe6Zp_8bNp4yUEGtInUwi-YDpAIsvL",
                "width": 3024
            }
        ],
        "place_id": "ChIJJWURjH5lbIcRD3RCCg-Z354",
        "plus_code": {
            "compound_code": "Q6MG+H4 Denver, Colorado",
            "global_code": "85FQQ6MG+H4"
        },
        "price_level": 1,
        "rating": 4.2,
        "reference": "ChIJJWURjH5lbIcRD3RCCg-Z354",
        "types": [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 288
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "6250 Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.8098928,
                "lng": -104.7717157
            },
            "viewport": {
                "northeast": {
                    "lat": 39.81112127989272,
                    "lng": -104.7704749701073
                },
                "southwest": {
                    "lat": 39.80842162010727,
                    "lng": -104.7731746298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Moonlight Diner",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102368649474858158761\">Michael Cannon</a>"
                ],
                "photo_reference": "ATtYBwL8yru2jRjFvQ4Ke2wSS7xGrHMdwjaM6r_Mv6egSlz3rqzQD_7dPPfddArGZ5-dEjbdslx_v3c1SKyhSVyCh_FzflupQeS8_ng-nqp_omcwmE6tKA30NvVlVw80QjRmRA3yCYMAGjW-idJy5bp7M0cctha7zJtM2VyhrdSby19aCzRf",
                "width": 4032
            }
        ],
        "place_id": "ChIJZSALccllbIcRtXCRutW8-U4",
        "plus_code": {
            "compound_code": "R65H+X8 Denver, Colorado",
            "global_code": "85FQR65H+X8"
        },
        "price_level": 1,
        "rating": 4.3,
        "reference": "ChIJZSALccllbIcRtXCRutW8-U4",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 3473
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "5910 N Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.8043564,
                "lng": -104.7712373
            },
            "viewport": {
                "northeast": {
                    "lat": 39.80572122989272,
                    "lng": -104.7699981701073
                },
                "southwest": {
                    "lat": 39.80302157010728,
                    "lng": -104.7726978298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Los Robles",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1659,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117837396188197453133\">Chris Hauge</a>"
                ],
                "photo_reference": "ATtYBwJPuYLwXQc_lTuvL8m1WgJAcBn_Re3X8HokkIPHmLk2QnCMLmbAXZYXWcNy5IX2VKWUmdAqTMo2vbnBwkqQqVBdzz9FCNRGvo50dv_KR-qEqNtwCqq_NWwFX82JFKk-XlTOWWewQ-kgboAd8FQ59Znd7cNWoxEVAI1UT5IwYHKDtryo",
                "width": 3003
            }
        ],
        "place_id": "ChIJSfWwVXRlbIcRiyG5jc9DZ0Q",
        "plus_code": {
            "compound_code": "R63H+PG Denver, Colorado",
            "global_code": "85FQR63H+PG"
        },
        "rating": 4,
        "reference": "ChIJSfWwVXRlbIcRiyG5jc9DZ0Q",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 84
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4730 Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.782744,
                "lng": -104.771463
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78417862989272,
                    "lng": -104.7701040201073
                },
                "southwest": {
                    "lat": 39.78147897010728,
                    "lng": -104.7728036798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Carl's Jr.",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1920,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113441194675264704203\">James</a>"
                ],
                "photo_reference": "ATtYBwLOR1o6__Oh54iYexzfr50HbadApwfa9qHYA1IV-7UBN-bEIW0yX4aOgVLIaBsRMRLIptfWlsivC6t-hvL6cukIZAM6Na-S6uygiuu6aQ9MUmVa1Uv5SUpoWvGhsey2Nulrj6g5cDwdsg8If_49Rg8z3Kc3a4pAoHm6P_fX5Kso7v0r",
                "width": 1080
            }
        ],
        "place_id": "ChIJpVn6rhVkbIcRutdF5jAdELs",
        "plus_code": {
            "compound_code": "Q6MH+3C Denver, Colorado",
            "global_code": "85FQQ6MH+3C"
        },
        "price_level": 1,
        "rating": 4,
        "reference": "ChIJpVn6rhVkbIcRutdF5jAdELs",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 457
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4671 Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7810612,
                "lng": -104.7727988
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78250292989272,
                    "lng": -104.7714281701073
                },
                "southwest": {
                    "lat": 39.77980327010728,
                    "lng": -104.7741278298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Sonic Drive-In",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103793671203195236804\">laura messina</a>"
                ],
                "photo_reference": "ATtYBwKl2OmtSYozQDcLimkiQ3t-SqOUYLR_-tArIfTLJRs83K3tcxBI_nUlzs8gP77qb7vz4PQ6u7rno8Owu9wrs7rT38J901-ia0hmkCCqcMUVDRejrKUSYRWMXct04FodKyyrZeu5sHOCDprMC1fyr7mx3uaHhJ6lxw0BezCSbzzZ1er4",
                "width": 3120
            }
        ],
        "place_id": "ChIJqXNFJ3RlbIcRDEuixf0tm-c",
        "plus_code": {
            "compound_code": "Q6JG+CV Denver, Colorado",
            "global_code": "85FQQ6JG+CV"
        },
        "price_level": 1,
        "rating": 3.9,
        "reference": "ChIJqXNFJ3RlbIcRDEuixf0tm-c",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 457
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "3444 N Salida St, Aurora, CO 80011, United States",
        "geometry": {
            "location": {
                "lat": 39.7651313,
                "lng": -104.7741431
            },
            "viewport": {
                "northeast": {
                    "lat": 39.76646222989272,
                    "lng": -104.7726750201073
                },
                "southwest": {
                    "lat": 39.76376257010728,
                    "lng": -104.7753746798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Chick-fil-A",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117196105865295494209\">Shanee Wiley</a>"
                ],
                "photo_reference": "ATtYBwJU5c0CLkDpUILyV3ZsGKzOZlKJgsBkhA-cLFTO7_yuhZo9fnyz5YGQb7SPYM0hw7lKz9Rd2QYFIwNGrXaZCsrGGw5am59FiMcZNsyL1mdtIcinQUB15RG-Cxol4OpNRkJCHEfu2cb4448dBxeK3TwEgano_GAZ1HLV4MT2m22C78e8",
                "width": 3024
            }
        ],
        "place_id": "ChIJURvsPvVjbIcR7tA-BUGgW3s",
        "plus_code": {
            "compound_code": "Q68G+38 Aurora, Colorado",
            "global_code": "85FQQ68G+38"
        },
        "price_level": 1,
        "rating": 4.5,
        "reference": "ChIJURvsPvVjbIcR7tA-BUGgW3s",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2539
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "3471 N Salida St, Aurora, CO 80011, United States",
        "geometry": {
            "location": {
                "lat": 39.7641172,
                "lng": -104.7762968
            },
            "viewport": {
                "northeast": {
                    "lat": 39.76546602989272,
                    "lng": -104.7750902701073
                },
                "southwest": {
                    "lat": 39.76276637010728,
                    "lng": -104.7777899298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "GARIBALDI MEXICAN RESTAURANT",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1080,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116545026824047496806\">Stuart Krouse</a>"
                ],
                "photo_reference": "ATtYBwIPzatoHIFpd18OukeCPHrYgv7HMTtcj_f9JgDpaoBz_kMNS-MIvD42yNKvBdVrqacKvMvYelnU1fG_tBwfc2igfMI-BFiSBzNJt9L5lcqfjFeWR8tQcuCnoHxLU310HqsomON4jwLFmVdg1X1QOsjN6pQ7g4BfcSKLO8XaRNCXPm0D",
                "width": 1920
            }
        ],
        "place_id": "ChIJNzfz1R1jbIcRnTX89xQisB4",
        "plus_code": {
            "compound_code": "Q67F+JF Aurora, Colorado",
            "global_code": "85FQQ67F+JF"
        },
        "rating": 4.3,
        "reference": "ChIJNzfz1R1jbIcRnTX89xQisB4",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 206
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "3451 Tower Rd, Aurora, CO 80011, United States",
        "geometry": {
            "location": {
                "lat": 39.7650859,
                "lng": -104.772898
            },
            "viewport": {
                "northeast": {
                    "lat": 39.76630942989273,
                    "lng": -104.7715631201073
                },
                "southwest": {
                    "lat": 39.76360977010728,
                    "lng": -104.7742627798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Chili's Grill & Bar",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101497447212025366000\">Jan Louis Martínez Delgado</a>"
                ],
                "photo_reference": "ATtYBwKsS-etrn4DTGJszZFYPTjTh0zZuiYP-tZnWZutA1e3CByqJyRM-pQ9CR-IE3L09dm5aNkIW2-sCeijIZqKgFznF6NshZnQm04ImVA-YexvaAGin8yp4LvlQGs7YoWN3M04irqNA1GCn_2MGjMmjiHZVWlMO-Y4yEFx86rDi50Cp_1h",
                "width": 4032
            }
        ],
        "place_id": "ChIJVUOBc_VjbIcR2vQHhA_72nw",
        "plus_code": {
            "compound_code": "Q68G+2R Aurora, Colorado",
            "global_code": "85FQQ68G+2R"
        },
        "price_level": 2,
        "rating": 4.2,
        "reference": "ChIJVUOBc_VjbIcR2vQHhA_72nw",
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1789
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "18607 Green Valley Ranch Blvd #106, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7851082,
                "lng": -104.7691008
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78638292989272,
                    "lng": -104.7677518701073
                },
                "southwest": {
                    "lat": 39.78368327010728,
                    "lng": -104.7704515298927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Blue Bay Asian Cafe Denver",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114449139254895223335\">Andi Adrienne</a>"
                ],
                "photo_reference": "ATtYBwJJSCDIHlNtO6fIV-cuZIDRq1diPfC5w7mq_lgH1LkYeRnXQQY4TfelYxg5h2NQr6QxHfQfOX3CNEihWVJc8VApDcj-dMlSHvSTx2MHu4Yz5nc3R_eu6YS1nS5xHaK6DlZpH2D1PF4Qn5ktzEWD55M43SrncivMOVKtHS1a3PpNfFjj",
                "width": 3024
            }
        ],
        "place_id": "ChIJrxyRZhZkbIcReaWWZ-1ZmfU",
        "plus_code": {
            "compound_code": "Q6PJ+29 Denver, Colorado",
            "global_code": "85FQQ6PJ+29"
        },
        "price_level": 2,
        "rating": 3.2,
        "reference": "ChIJrxyRZhZkbIcReaWWZ-1ZmfU",
        "types": [
            "meal_delivery",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 303
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "4830 Tower Rd, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7846234,
                "lng": -104.7713904
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78604737989273,
                    "lng": -104.7700759201073
                },
                "southwest": {
                    "lat": 39.78334772010728,
                    "lng": -104.7727755798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "name": "Wendy's",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4618,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112028434882870017998\">Bobbi Rakestraw</a>"
                ],
                "photo_reference": "ATtYBwJTljtSimwx_clJymWWQaredn2r1pHE7AdN2EojwT9ln0bbmahi9MGE6Q_KgVOW3Yrm_MqV6N02CRWYOxIU5LD15fLvpFvxkx5wTXHUAgaXX0NtBW5h2cdF2wtHjlGQO1c0EKA_n5EMZVlhpmJjz5acsYkOesWP_vxq2Pdddv29DIB1",
                "width": 3464
            }
        ],
        "place_id": "ChIJKzjkpRVkbIcRnePdieQ0NmQ",
        "plus_code": {
            "compound_code": "Q6MH+RC Denver, Colorado",
            "global_code": "85FQQ6MH+RC"
        },
        "price_level": 1,
        "rating": 3.4,
        "reference": "ChIJKzjkpRVkbIcRnePdieQ0NmQ",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 625
    },
    {
        "business_status": "OPERATIONAL",
        "formatted_address": "18630 E 48th Dr, Denver, CO 80249, United States",
        "geometry": {
            "location": {
                "lat": 39.7833417,
                "lng": -104.768192
            },
            "viewport": {
                "northeast": {
                    "lat": 39.78464087989272,
                    "lng": -104.7668546201073
                },
                "southwest": {
                    "lat": 39.78194122010728,
                    "lng": -104.7695542798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "name": "Domino's Pizza",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 768,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111304546040233705716\">Domino&#39;s Pizza</a>"
                ],
                "photo_reference": "ATtYBwI-Kl_V0y9JkOvY0yt8RkZwsN3vcT8jlr1JSLNJybPU9hl3dfQJv51zDC_LxVOTtzHHYp7pqzkVWY53oNR5DkC2zmywBXbziaKYGYvWhuoCuGbvUuY9RADxsT4ztvC8PFuJ05mCw58qArpbZUSStgt1CYgZsSKGwBhK9bTFOdMkGUN0",
                "width": 1024
            }
        ],
        "place_id": "ChIJXWde6hZkbIcR7qJMpSNMP7Y",
        "plus_code": {
            "compound_code": "Q6MJ+8P Denver, Colorado",
            "global_code": "85FQQ6MJ+8P"
        },
        "price_level": 1,
        "rating": 3.4,
        "reference": "ChIJXWde6hZkbIcR7qJMpSNMP7Y",
        "types": [
            "meal_delivery",
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 355
    }
]
