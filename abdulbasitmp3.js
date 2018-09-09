var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );
jQuery(function ($) {
    var supportsAudio = !! document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false;
        mediaPath = 'https://server13.mp3quran.net/basit_mjwd/',
        extension = '',
        tracks = [{
            "track": 1,
            "name": "Al-Fatihah",
            "length": "",
            "file": "001"
        }, {
            "track": 2,
            "name": "Al-Baqarah",
            "length": "",
            "file": "002"
        }, {
            "track": 3,
            "name": "Al-Imran",
            "length": "",
            "file": "003"
        }, {
            "track": 4,
            "name": "An-Nisa",
            "length": "",
            "file": "004"
        }, {
            "track": 5,
            "name": "Al-Maidah",
            "length": "",
            "file": "005"
        }, {
            "track": 6,
            "name": "Al-Anam",
            "length": "",
            "file": "006"
        }, {
            "track": 7,
            "name": "Al-Araf",
            "length": "",
            "file": "007"
        }, {
            "track": 8,
            "name": "Al-Anfal",
            "length": "",
            "file": "008"
        }, {
            "track": 9,
            "name": "At-Taubah",
            "length": "",
            "file": "009"
        }, {
            "track": 10,
            "name": "Yunus",
            "length": "",
            "file": "010"
        }, {
            "track": 11,
            "name": "Hood",
            "length": "",
            "file": "011"
        }, {
            "track": 12,
            "name": "Yusuf",
            "length": "",
            "file": "012"
        }, {
            "track": 13,
            "name": "Ar-Rad",
            "length": "",
            "file": "013"
        }, {
            "track": 14,
            "name": "Ibrahim",
            "length": "",
            "file": "014"
        }, {
            "track": 15,
            "name": "Al-Hijr",
            "length": "",
            "file": "015"
        }, {
            "track": 16,
            "name": "An-Nahl",
            "length": "",
            "file": "016"
        }, {
            "track": 17,
            "name": "Al-Isra",
            "length": "",
            "file": "017"
        }, {
            "track": 18,
            "name": "Al-Kahf",
            "length": "",
            "file": "018"
        }, {
            "track": 19,
            "name": "Maryam",
            "length": "",
            "file": "019"
        }, {
            "track": 20,
            "name": "Ta­Ha",
            "length": "",
            "file": "020"
        }, {
            "track": 21,
            "name": "Al-Anbiya",
            "length": "",
            "file": "021"
        }, {
            "track": 22,
            "name": "Al-Hajj",
            "length": "",
            "file": "022"
        }, {
            "track": 23,
            "name": "Al-Muminun",
            "length": "",
            "file": "023"
        }, {
            "track": 24,
            "name": "An-Nur",
            "length": "",
            "file": "024"
        }, {
            "track": 25,
            "name": "Al-Furqan",
            "length": "",
            "file": "025"
        }, {
            "track": 26,
            "name": "Ash-Shuara",
            "length": "",
            "file": "026"
        }, {
            "track": 27,
            "name": "An-Naml",
            "length": "",
            "file": "027"
        }, {
            "track": 28,
            "name": "Al-Qasas",
            "length": "",
            "file": "028"
        }, {
            "track": 29,
            "name": "Al-Ankabut",
            "length": "",
            "file": "029"
        }, {
            "track": 30,
            "name": "Ar­Room",
            "length": "",
            "file": "030"
        }, {
            "track": 31,
            "name": "Luqman",
            "length": "",
            "file": "031"
        }, {
            "track": 32,
            "name": "As­Sajdah",
            "length": "",
            "file": "032"
        }, {
            "track": 33,
            "name": "Al­Ahzab",
            "length": "",
            "file": "033"
        }, {
            "track": 34,
            "name": "Saba",
            "length": "",
            "file": "034"
        }, {
            "track": 35,
            "name": "Fatir",
            "length": "",
            "file": "035"
        }, {
			"track": 36,
            "name": "Ya­Sin",
            "length": "",
            "file": "036"
        }, {
			"track": 37,
            "name": "As-Saffat",
            "length": "",
            "file": "037"
        }, {
			"track": 38,
            "name": "Sad",
            "length": "",
            "file": "038"
        }, {
			"track": 39,
            "name": "Az-Zumar",
            "length": "",
            "file": "039"
        }, {
			"track": 40,
            "name": "Ghafir",
            "length": "",
            "file": "040"
        }, {
			"track": 41,
            "name": "Fussilat",
            "length": "",
            "file": "041"
        }, {
			"track": 42,
            "name": "Ash-Shura",
            "length": "",
            "file": "042"
        }, {
			"track": 43,
            "name": "Az-Zukhruf",
            "length": "",
            "file": "043"
        }, {
			"track": 44,
            "name": "Ad-Dukhan",
            "length": "",
            "file": "044"
        }, {
			"track": 45,
            "name": "Al-Jathiya",
            "length": "",
            "file": "045"
        }, {
			"track": 46,
            "name": "Al-Ahqaf",
            "length": "",
            "file": "046"
        }, {
			"track": 47,
            "name": "Muhammad",
            "length": "",
            "file": "047"
        }, {
			"track": 48,
            "name": "Al-Fath",
            "length": "",
            "file": "048"
        }, {
			"track": 49,
            "name": "Al-Hujurat",
            "length": "",
            "file": "049"
        }, {
			"track": 50,
            "name": "Qaf",
            "length": "",
            "file": "050"
        }, {
			"track": 51,
            "name": "Az-Zariyat",
            "length": "",
            "file": "051"
        }, {
			"track": 52,
            "name": "At-Tur",
            "length": "",
            "file": "052"
        }, {
			"track": 53,
            "name": "An-Najm",
            "length": "",
            "file": "053"
        }, {
			"track": 54,
            "name": "Al-Qamar",
            "length": "",
            "file": "054"
        }, {
			"track": 55,
            "name": "Ar-Rahman",
            "length": "",
            "file": "055"
        }, {
			"track": 56,
            "name": "Al-Waqiah",
            "length": "",
            "file": "056"
        }, {
			"track": 57,
            "name": "Al-Hadid",
            "length": "",
            "file": "057"
        }, {
			"track": 58,
            "name": "Al-Mujadilah",
            "length": "",
            "file": "058"
        }, {
			"track": 59,
            "name": "Al-Hashr",
            "length": "",
            "file": "059"
        }, {
			"track": 60,
            "name": "Al-Mumtahinah",
            "length": "",
            "file": "060"
        }, {
			"track": 61,
            "name": "As-Saff",
            "length": "",
            "file": "061"
        }, {
			"track": 62,
            "name": "Al-Jumuah",
            "length": "",
            "file": "062"
        }, {
			"track": 63,
            "name": "Al-Munafiqun",
            "length": "",
            "file": "063"
        }, {
			"track": 64,
            "name": "At-Taghabun",
            "length": "",
            "file": "064"
        }, {
			"track": 65,
            "name": "At-Talaq",
            "length": "",
            "file": "065"
        }, {
			"track": 66,
            "name": "At-Tahrim",
            "length": "",
            "file": "066"
        }, {
			"track": 67,
            "name": "Al-Mulk",
            "length": "",
            "file": "067"
        }, {
			"track": 68,
            "name": "Al-Qalam",
            "length": "",
            "file": "068"
        }, {
			"track": 69,
            "name": "Al-Haqqah",
            "length": "",
            "file": "069"
        }, {
			"track": 70,
            "name": "Al-Maarij",
            "length": "",
            "file": "070"
        }, {
			"track": 71,
            "name": "Nooh",
            "length": "",
            "file": "071"
        }, {
			"track": 72,
            "name": "Al-Jinn",
            "length": "",
            "file": "072"
        }, {
			"track": 73,
            "name": "Al-Muzzammil",
            "length": "",
            "file": "073"
        }, {
			"track": 74,
            "name": "Al-Muddaththir",
            "length": "",
            "file": "074"
        }, {
			"track": 75,
            "name": "Al-Qiyamah",
            "length": "",
            "file": "075"
        }, {
			"track": 76,
            "name": "Al-Insan",
            "length": "",
            "file": "076"
        }, {
			"track": 77,
            "name": "Al-Mursalat",
            "length": "",
            "file": "077"
        }, {
			"track": 78,
            "name": "An-Naba",
            "length": "",
            "file": "078"
        }, {
			"track": 79,
            "name": "An-Naziat",
            "length": "",
            "file": "079"
        }, {
			"track": 80,
            "name": "Abasa",
            "length": "",
            "file": "080"
        }, {
			"track": 81,
            "name": "At-Takwir",
            "length": "",
            "file": "081"
        }, {
			"track": 82,
            "name": "Al-Infitar",
            "length": "",
            "file": "082"
        }, {
			"track": 83,
            "name": "Al-Mutaffifin",
            "length": "",
            "file": "083"
        }, {
			"track": 84,
            "name": "Al-Inshiqaq",
            "length": "",
            "file": "084"
        }, {
			"track": 85,
            "name": "Al-Buruj",
            "length": "",
            "file": "085"
        }, {
			"track": 86,
            "name": "At-Tariq",
            "length": "",
            "file": "086"
        }, {
			"track": 87,
            "name": "Al-Ala",
            "length": "",
            "file": "087"
        }, {
			"track": 88,
            "name": "Al-Ghashiyah",
            "length": "",
            "file": "088"
        }, {
			"track": 89,
            "name": "Al-Fajr",
            "length": "",
            "file": "089"
        }, {
			"track": 90,
            "name": "Al-Balad",
            "length": "",
            "file": "090"
        }, {
			"track": 91,
            "name": "Ash-Shams",
            "length": "",
            "file": "091"
        }, {
			"track": 92,
            "name": "Al-Lail",
            "length": "",
            "file": "092"
        }, {
			"track": 93,
            "name": "Ad-Duha",
            "length": "",
            "file": "093"
        }, {
			"track": 94,
            "name": "Ash-Sharh",
            "length": "",
            "file": "094"
        }, {
			"track": 95,
            "name": "At-Tin",
            "length": "",
            "file": "095"
        }, {
			"track": 96,
            "name": "Al-Alaq",
            "length": "",
            "file": "096"
        }, {
			"track": 97,
            "name": "Al-Qadr",
            "length": "",
            "file": "097"
        }, {
			"track": 98,
            "name": "Al-Baiyinah",
            "length": "",
            "file": "098"
        }, {
			"track": 99,
            "name": "Az-Zalzalah",
            "length": "",
            "file": "099"
        }, {
			"track": 100,
            "name": "Al-Adiyat",
            "length": "",
            "file": "100"
        }, {
			"track": 101,
            "name": "Al-Qariah",
            "length": "",
            "file": "101"
        }, {
			"track": 102,
            "name": "At-Takathur",
            "length": "",
            "file": "102"
        }, {
			"track": 103,
            "name": "Al-Asr",
            "length": "",
            "file": "103"
        }, {
			"track": 104,
            "name": "Al-Humazah",
            "length": "",
            "file": "104"
        }, {
			"track": 105,
            "name": "Al-Fil",
            "length": "",
            "file": "105"
        }, {
			"track": 106,
            "name": "Quraish",
            "length": "",
            "file": "106"
        }, {
			"track": 107,
            "name": "Al-Maun",
            "length": "",
            "file": "107"
        }, {
			"track": 108,
            "name": "Al-Kauthar",
            "length": "",
            "file": "108"
        }, {
			"track": 109,
            "name": "Al-Kafirun",
            "length": "",
            "file": "109"
        }, {
			"track": 110,
            "name": "An-Nasr",
            "length": "",
            "file": "110"
        }, {
			"track": 111,
            "name": "Al-Masad",
            "length": "",
            "file": "111"
        }, {
			"track": 112,
            "name": "Al-Ikhlas",
            "length": "",
            "file": "112"
        }, {
			"track": 113,
            "name": "Al-Falaq",
            "length": "",
            "file": "113"
        }, {
            "track": 114,
            "name": "An-Nas",
            "length": "",
            "file": "114"
        }],
        trackCount = tracks.length,
        npAction = $('#npAction'),
        npTitle = $('#npTitle'),
        audio = $('#audio1').bind('play', function () {
            playing = true;
            npAction.text('Now Playing...');
        }).bind('pause', function () {
            playing = false;
            npAction.text('Paused...');
        }).bind('ended', function () {
            npAction.text('Paused...');
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                audio.play();
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }).get(0),
        btnPrev = $('#btnPrev').click(function () {
            if ((index - 1) > -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
        btnNext = $('#btnNext').click(function () {
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        }),
        li = $('#plList li').click(function () {
            var id = parseInt($(this).index());
            if (id !== index) {
                playTrack(id);
            }
        }),
        loadTrack = function (id) {
            $('.plSel').removeClass('plSel');
            $('#plList li:eq(' + id + ')').addClass('plSel');
            npTitle.text(tracks[id].name);
            index = id;
            audio.src = mediaPath + tracks[id].file + extension;
        },
        playTrack = function (id) {
            loadTrack(id);
            audio.play();
        };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});