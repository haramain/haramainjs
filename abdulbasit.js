var b=document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);
jQuery(function ($) {
    var supportsAudio=!!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index=0, playing=false, extension='', tracks=[ {
            "track": 1, "name": "Abdul Basit &#8211; Surah 001 AlFatiha", "length": "0:00:47", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-001.mp3", "fileSize": "0.18MB", "postTitle": "Abdul Basit &#8211; Surah 001 AlFatiha", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "001 Al-Fatihah", "postTagURL": "https://www.qurancentral.com/surah/001-al-fatiha/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-001-al-fatiha/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 002 AlBaqara", "length": "4:23:02", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-002.mp3", "fileSize": "30.11MB", "postTitle": "Abdul Basit &#8211; Surah 002 AlBaqara", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "002 Al-Baqarah", "postTagURL": "https://www.qurancentral.com/surah/002-al-baqara/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-002-al-baqara/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 003 AalEImran", "length": "2:35:49", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-003.mp3", "fileSize": "17.84MB", "postTitle": "Abdul Basit &#8211; Surah 003 AalEImran", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "003 Aal-E-Imran", "postTagURL": "https://www.qurancentral.com/surah/003-al-imran/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-003-aal-e-imran/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 004 AnNisa", "length": "2:47:21", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-004.mp3", "fileSize": "21.56MB", "postTitle": "Abdul Basit &#8211; Surah 004 AnNisa", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "004 An-Nisa", "postTagURL": "https://www.qurancentral.com/surah/004-an-nisa/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-004-al-maeda/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 005 AlMaidah", "length": "2:11:24", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-005.mp3", "fileSize": "30.08MB", "postTitle": "Abdul Basit &#8211; Surah 005 AlMaidah", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "005 Al-Ma-idah", "postTagURL": "https://www.qurancentral.com/surah/005-al-ma-idah/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-005-an-nisa/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 006 AlAnaam", "length": "2:20:11", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-006.mp3", "fileSize": "16.05MB", "postTitle": "Abdul Basit &#8211; Surah 006 AlAnaam", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "006 Al-Anaam", "postTagURL": "https://www.qurancentral.com/surah/006-al-anaam/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-006-al-anaam/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 007 AlAraf", "length": "2:36:02", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-007.mp3", "fileSize": "20.10MB", "postTitle": "Abdul Basit &#8211; Surah 007 AlAraf", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "007 Al-Araf", "postTagURL": "https://www.qurancentral.com/surah/007-al-araf/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-007-al-araf/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 008 AlAnfal", "length": "0:57:07", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-008.mp3", "fileSize": "6.54MB", "postTitle": "Abdul Basit &#8211; Surah 008 AlAnfal", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "008 Al-Anfal", "postTagURL": "https://www.qurancentral.com/surah/008-al-anfal/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-008-al-anfal/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 009 AtTawba", "length": "1:53:27", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-009.mp3", "fileSize": "12.99MB", "postTitle": "Abdul Basit &#8211; Surah 009 AtTawba", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "009 At-Tawba", "postTagURL": "https://www.qurancentral.com/surah/009-at-tawba/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-009-at-tawba/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 010 Yunus", "length": "1:20:38", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-010.mp3", "fileSize": "9.24MB", "postTitle": "Abdul Basit &#8211; Surah 010 Yunus", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "010 Yunus", "postTagURL": "https://www.qurancentral.com/surah/010-yunus/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-010-yunus/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 011 Hud", "length": "1:28:44", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-011.mp3", "fileSize": "10.16MB", "postTitle": "Abdul Basit &#8211; Surah 011 Hud", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "011 Hud", "postTagURL": "https://www.qurancentral.com/surah/011-hud/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-011-hud/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 012 Yusuf", "length": "1:21:35", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-012.mp3", "fileSize": "10.51MB", "postTitle": "Abdul Basit &#8211; Surah 012 Yusuf", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "012 Yusuf", "postTagURL": "https://www.qurancentral.com/surah/012-yusuf/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-012-yusuf/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 013 ArRad", "length": "0:38:46", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-013.mp3", "fileSize": "5.00MB", "postTitle": "Abdul Basit &#8211; Surah 013 ArRad", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "013 Ar-Rad", "postTagURL": "https://www.qurancentral.com/surah/013-ar-rad/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-013-ar-rad/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 014 Ibrahim", "length": "0:41:25", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-014.mp3", "fileSize": "5.34MB", "postTitle": "Abdul Basit &#8211; Surah 014 Ibrahim", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "014 Ibrahim", "postTagURL": "https://www.qurancentral.com/surah/014-ibrahim/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-014-ibrahim/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 015 AlHijr", "length": "0:35:13", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-015.mp3", "fileSize": "4.54MB", "postTitle": "Abdul Basit &#8211; Surah 015 AlHijr", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "015 Al-Hijr", "postTagURL": "https://www.qurancentral.com/surah/015-al-hijr/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-015-al-hijr/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 016 AnNahl", "length": "1:28:13", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-016.mp3", "fileSize": "11.37MB", "postTitle": "Abdul Basit &#8211; Surah 016 AnNahl", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "016 An-Nahl", "postTagURL": "https://www.qurancentral.com/surah/016-an-nahl/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-016-an-nahl/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 017 AlIsra", "length": "1:10:06", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-017.mp3", "fileSize": "9.03MB", "postTitle": "Abdul Basit &#8211; Surah 017 AlIsra", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "017 Al-Isra", "postTagURL": "https://www.qurancentral.com/surah/017-al-isra/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-017-al-isra/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 018 AlKahf", "length": "1:09:42", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-018.mp3", "fileSize": "8.98MB", "postTitle": "Abdul Basit &#8211; Surah 018 AlKahf", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "018 Al-Kahf", "postTagURL": "https://www.qurancentral.com/surah/018-al-kahf/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-018-al-kahf/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 019 Maryam", "length": "0:42:46", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-019.mp3", "fileSize": "5.52MB", "postTitle": "Abdul Basit &#8211; Surah 019 Maryam", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "019 Maryam", "postTagURL": "https://www.qurancentral.com/surah/019-maryam/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-019-maryam/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 020 TaHa", "length": "0:59:24", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-020.mp3", "fileSize": "7.66MB", "postTitle": "Abdul Basit &#8211; Surah 020 TaHa", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "020 Ta-Ha", "postTagURL": "https://www.qurancentral.com/surah/020-ta-ha/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-020-ta-ha/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 021 AlAnbiya", "length": "0:56:47", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-021.mp3", "fileSize": "7.32MB", "postTitle": "Abdul Basit &#8211; Surah 021 AlAnbiya", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "021 Al-Anbiya", "postTagURL": "https://www.qurancentral.com/surah/021-al-anbiya/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-021-al-anbiya/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 022 AlHajj", "length": "0:58:10", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-022.mp3", "fileSize": "6.67MB", "postTitle": "Abdul Basit &#8211; Surah 022 AlHajj", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "022 Al-Hajj", "postTagURL": "https://www.qurancentral.com/surah/022-al-hajj/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-022-al-hajj/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 023 AlMumenoon", "length": "0:51:05", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-023.mp3", "fileSize": "6.59MB", "postTitle": "Abdul Basit &#8211; Surah 023 AlMumenoon", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "023 Al-Muminoon", "postTagURL": "https://www.qurancentral.com/surah/023-al-muminoon/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-023-al-mumenoon/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 024 AnNoor", "length": "1:04:19", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-024.mp3", "fileSize": "8.29MB", "postTitle": "Abdul Basit &#8211; Surah 024 AnNoor", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "024 An-Noor", "postTagURL": "https://www.qurancentral.com/surah/024-an-noor/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-024-an-noor/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 025 AlFurqan", "length": "0:39:37", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-025.mp3", "fileSize": "5.68MB", "postTitle": "Abdul Basit &#8211; Surah 025 AlFurqan", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "025 Al-Furqan", "postTagURL": "https://www.qurancentral.com/surah/025-al-furqan/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-025-al-furqan/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 026 AshShuara", "length": "1:11:18", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-026.mp3", "fileSize": "9.19MB", "postTitle": "Abdul Basit &#8211; Surah 026 AshShuara", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "026 Ash-Shuara", "postTagURL": "https://www.qurancentral.com/surah/026-ash-shuara/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-026-ash-shuara/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 027 AnNaml", "length": "0:52:58", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-027.mp3", "fileSize": "6.83MB", "postTitle": "Abdul Basit &#8211; Surah 027 AnNaml", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "027 An-Naml", "postTagURL": "https://www.qurancentral.com/surah/027-an-naml/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-027-an-naml/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 028 AlQasas", "length": "1:04:59", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-028.mp3", "fileSize": "7.44MB", "postTitle": "Abdul Basit &#8211; Surah 028 AlQasas", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "028 Al-Qasas", "postTagURL": "https://www.qurancentral.com/surah/028-al-qasas/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-028-al-qasas/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 029 AlAnkaboot", "length": "0:47:46", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-029.mp3", "fileSize": "6.16MB", "postTitle": "Abdul Basit &#8211; Surah 029 AlAnkaboot", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "029 Al-Ankaboot", "postTagURL": "https://www.qurancentral.com/surah/029-al-ankaboot/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-029-al-ankaboot/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 030 ArRoom", "length": "0:37:25", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-030.mp3", "fileSize": "17.13MB", "postTitle": "Abdul Basit &#8211; Surah 030 ArRoom", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "030 Ar-Rum", "postTagURL": "https://www.qurancentral.com/surah/030-ar-rum/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-030-ar-room/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 031 Luqman", "length": "0:23:09", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-031.mp3", "fileSize": "5.31MB", "postTitle": "Abdul Basit &#8211; Surah 031 Luqman", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "031 Luqman", "postTagURL": "https://www.qurancentral.com/surah/031-luqman/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-031-luqman/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 032 AsSajda", "length": "0:16:28", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-032.mp3", "fileSize": "2.13MB", "postTitle": "Abdul Basit &#8211; Surah 032 AsSajda", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "032 As-Sajda", "postTagURL": "https://www.qurancentral.com/surah/032-as-sajda/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-032-as-sajda/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 033 AlAhzab", "length": "0:59:32", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-033.mp3", "fileSize": "7.68MB", "postTitle": "Abdul Basit &#8211; Surah 033 AlAhzab", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "033 Al-Ahzab", "postTagURL": "https://www.qurancentral.com/surah/033-al-ahzab/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-033-al-ahzab/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 034 Saba", "length": "0:38:26", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-034.mp3", "fileSize": "4.96MB", "postTitle": "Abdul Basit &#8211; Surah 034 Saba", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "034 Saba", "postTagURL": "https://www.qurancentral.com/surah/034-saba/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-034-saba/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 035 Fatir", "length": "0:35:53", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-035.mp3", "fileSize": "16.43MB", "postTitle": "Abdul Basit &#8211; Surah 035 Fatir", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "035 Fatir", "postTagURL": "https://www.qurancentral.com/surah/035-fatir/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-035-fatir/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 036 YaSeen", "length": "0:34:37", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-036.mp3", "fileSize": "23.78MB", "postTitle": "Abdul Basit &#8211; Surah 036 YaSeen", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "036 Ya-Seen", "postTagURL": "https://www.qurancentral.com/surah/036-ya-seen/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-036-ya-seen/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 037 AsSaaffat", "length": "0:52:26", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-037.mp3", "fileSize": "6.76MB", "postTitle": "Abdul Basit &#8211; Surah 037 AsSaaffat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "037 As-Saaffat", "postTagURL": "https://www.qurancentral.com/surah/037-as-saaffat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-037-as-saaffat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 038 Sad", "length": "0:36:49", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-038.mp3", "fileSize": "4.75MB", "postTitle": "Abdul Basit &#8211; Surah 038 Sad", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "038 Surah Sad", "postTagURL": "https://www.qurancentral.com/surah/038-sad/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-038-sad/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 039 AzZumar", "length": "0:55:01", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-039.mp3", "fileSize": "7.09MB", "postTitle": "Abdul Basit &#8211; Surah 039 AzZumar", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "039 Az-Zumar", "postTagURL": "https://www.qurancentral.com/surah/039-az-zumar/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-039-az-zumar/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 040 Ghafir", "length": "0:57:59", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-040.mp3", "fileSize": "7.47MB", "postTitle": "Abdul Basit &#8211; Surah 040 Ghafir", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "040 Ghafir", "postTagURL": "https://www.qurancentral.com/surah/040-ghafir/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-040-ghafir/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 041 Fussilat", "length": "0:38:10", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-041.mp3", "fileSize": "17.47MB", "postTitle": "Abdul Basit &#8211; Surah 041 Fussilat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "041 Fussilat", "postTagURL": "https://www.qurancentral.com/surah/041-fussilat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-041-fussilat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 042 AshShura", "length": "0:39:08", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-042.mp3", "fileSize": "5.05MB", "postTitle": "Abdul Basit &#8211; Surah 042 AshShura", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "042 Ash-Shura", "postTagURL": "https://www.qurancentral.com/surah/042-ash-shura/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-042-ash-shura/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 043 AzZukhruf", "length": "0:41:19", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-043.mp3", "fileSize": "5.33MB", "postTitle": "Abdul Basit &#8211; Surah 043 AzZukhruf", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "043 Az-Zukhruf", "postTagURL": "https://www.qurancentral.com/surah/043-az-zukhruf/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-043-az-zukhruf/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 044 AdDukhan", "length": "0:18:45", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-044.mp3", "fileSize": "2.42MB", "postTitle": "Abdul Basit &#8211; Surah 044 AdDukhan", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "044 Ad-Dukhan", "postTagURL": "https://www.qurancentral.com/surah/044-ad-dukhan/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-044-ad-dukhan/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 045 AlJathiya", "length": "0:22:48", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-045.mp3", "fileSize": "2.94MB", "postTitle": "Abdul Basit &#8211; Surah 045 AlJathiya", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "045 Al-Jathiya", "postTagURL": "https://www.qurancentral.com/surah/045-al-jathiya/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-045-al-jathiya/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 046 AlAhqaf", "length": "0:31:05", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-046.mp3", "fileSize": "4.01MB", "postTitle": "Abdul Basit &#8211; Surah 046 AlAhqaf", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "046 Al-Ahqaf", "postTagURL": "https://www.qurancentral.com/surah/046-al-ahqaf/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-046-al-ahqaf/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 047 Muhammad", "length": "0:25:34", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-047.mp3", "fileSize": "3.30MB", "postTitle": "Abdul Basit &#8211; Surah 047 Muhammad", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "047 Muhammad", "postTagURL": "https://www.qurancentral.com/surah/047-muhammad/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-047-muhammad/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 048 AlFath", "length": "0:25:57", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-048.mp3", "fileSize": "3.35MB", "postTitle": "Abdul Basit &#8211; Surah 048 AlFath", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "048 Al-Fath", "postTagURL": "https://www.qurancentral.com/surah/048-al-fath/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-048-al-fath/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 049 AlHujraat", "length": "0:18:05", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-049.mp3", "fileSize": "2.34MB", "postTitle": "Abdul Basit &#8211; Surah 049 AlHujraat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "049 Al-Hujraat", "postTagURL": "https://www.qurancentral.com/surah/049-al-hujraat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-049-al-hujraat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 050 Qaf", "length": "0:17:59", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-050.mp3", "fileSize": "2.32MB", "postTitle": "Abdul Basit &#8211; Surah 050 Qaf", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "050 Qaf", "postTagURL": "https://www.qurancentral.com/surah/050-qaf/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-050-qaf/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 051 AdhDhariyat", "length": "0:18:09", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-051.mp3", "fileSize": "2.35MB", "postTitle": "Abdul Basit &#8211; Surah 051 AdhDhariyat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "051 Adh-Dhariyat", "postTagURL": "https://www.qurancentral.com/surah/051-adh-dhariyat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-051-adh-dhariyat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 052 AtTur", "length": "0:15:52", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-052.mp3", "fileSize": "2.05MB", "postTitle": "Abdul Basit &#8211; Surah 052 AtTur", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "052 At-Tur", "postTagURL": "https://www.qurancentral.com/surah/052-at-tur/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-052-at-tur/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 053 AnNajm", "length": "0:16:59", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-053.mp3", "fileSize": "2.19MB", "postTitle": "Abdul Basit &#8211; Surah 053 AnNajm", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "053 An-Najm", "postTagURL": "https://www.qurancentral.com/surah/053-an-najm/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-053-an-najm/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 054 AlQamar", "length": "0:17:02", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-054.mp3", "fileSize": "2.20MB", "postTitle": "Abdul Basit &#8211; Surah 054 AlQamar", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "054 Al-Qamar", "postTagURL": "https://www.qurancentral.com/surah/054-al-qamar/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-054-al-qamar/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 055 ArRahman", "length": "0:20:49", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-055.mp3", "fileSize": "2.69MB", "postTitle": "Abdul Basit &#8211; Surah 055 ArRahman", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "055 Ar-Rahman", "postTagURL": "https://www.qurancentral.com/surah/055-ar-rahman/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-055-ar-rahman/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 056 AlWaqia", "length": "0:20:41", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-056.mp3", "fileSize": "2.67MB", "postTitle": "Abdul Basit &#8211; Surah 056 AlWaqia", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "056 Al-Waqia", "postTagURL": "https://www.qurancentral.com/surah/056-al-waqia/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-056-al-waqia/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 057 AlHadid", "length": "0:27:23", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-057.mp3", "fileSize": "3.53MB", "postTitle": "Abdul Basit &#8211; Surah 057 AlHadid", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "057 Al-Hadid", "postTagURL": "https://www.qurancentral.com/surah/057-al-hadid/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-057-al-hadid/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 058 AlMujadila", "length": "0:23:22", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-058.mp3", "fileSize": "3.02MB", "postTitle": "Abdul Basit &#8211; Surah 058 AlMujadila", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "058 Al-Mujadila", "postTagURL": "https://www.qurancentral.com/surah/058-al-mujadila/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-058-al-mujadila/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 059 AlHashr", "length": "0:22:58", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-059.mp3", "fileSize": "2.97MB", "postTitle": "Abdul Basit &#8211; Surah 059 AlHashr", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "059 Al-Hashr", "postTagURL": "https://www.qurancentral.com/surah/059-al-hashr/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-059-al-hashr/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 060 AlMumtahina", "length": "0:18:40", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-060.mp3", "fileSize": "2.41MB", "postTitle": "Abdul Basit &#8211; Surah 060 AlMumtahina", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "060 Al-Mumtahina", "postTagURL": "https://www.qurancentral.com/surah/060-al-mumtahina/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-060-al-mumtahina/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 061 AsSaff", "length": "0:10:22", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-061.mp3", "fileSize": "1.34MB", "postTitle": "Abdul Basit &#8211; Surah 061 AsSaff", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "061 As-Saff", "postTagURL": "https://www.qurancentral.com/surah/061-as-saff/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-061-as-saff/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 062 AlJumua", "length": "0:08:20", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-062.mp3", "fileSize": "1.08MB", "postTitle": "Abdul Basit &#8211; Surah 062 AlJumua", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "062 Al-Jumua", "postTagURL": "https://www.qurancentral.com/surah/062-al-jumua/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-062-al-jumua/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 063 AlMunafiqoon", "length": "0:08:45", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-063.mp3", "fileSize": "1.13MB", "postTitle": "Abdul Basit &#8211; Surah 063 AlMunafiqoon", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "063 Al-Munafiqoon", "postTagURL": "https://www.qurancentral.com/surah/063-al-munafiqoon/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-063-al-munafiqoon/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 064 AtTaghabun", "length": "0:11:33", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-064.mp3", "fileSize": "1.50MB", "postTitle": "Abdul Basit &#8211; Surah 064 AtTaghabun", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "064 At-Taghabun", "postTagURL": "https://www.qurancentral.com/surah/064-at-taghabun/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-064-at-taghabun/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 065 AtTalaq", "length": "0:13:34", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-065.mp3", "fileSize": "1.95MB", "postTitle": "Abdul Basit &#8211; Surah 065 AtTalaq", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "065 At-Talaq", "postTagURL": "https://www.qurancentral.com/surah/065-at-talaq/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-065-at-talaq/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 066 AtTahrim", "length": "0:12:28", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-066.mp3", "fileSize": "1.61MB", "postTitle": "Abdul Basit &#8211; Surah 066 AtTahrim", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "066 At-Tahrim", "postTagURL": "https://www.qurancentral.com/surah/066-at-tahrim/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-066-at-tahrim/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 067 AlMulk", "length": "0:14:09", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-067.mp3", "fileSize": "1.83MB", "postTitle": "Abdul Basit &#8211; Surah 067 AlMulk", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "067 Al-Mulk", "postTagURL": "https://www.qurancentral.com/surah/067-al-mulk/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-067-al-mulk/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 068 AlQalam", "length": "0:15:16", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-068.mp3", "fileSize": "1.98MB", "postTitle": "Abdul Basit &#8211; Surah 068 AlQalam", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "068 Al-Qalam", "postTagURL": "https://www.qurancentral.com/surah/068-al-qalam/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-068-al-qalam/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 069 AlHaaqqa", "length": "0:12:51", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-069.mp3", "fileSize": "1.66MB", "postTitle": "Abdul Basit &#8211; Surah 069 AlHaaqqa", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "069 Al-Haaqqa", "postTagURL": "https://www.qurancentral.com/surah/069-al-haaqqa/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-069-al-haaqqa/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 070 AlMaarij", "length": "0:10:38", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-070.mp3", "fileSize": "1.38MB", "postTitle": "Abdul Basit &#8211; Surah 070 AlMaarij", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "070 Al-Maarij", "postTagURL": "https://www.qurancentral.com/surah/070-al-maarij/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-070-al-maarij/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 071 Nooh", "length": "0:09:25", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-071.mp3", "fileSize": "1.22MB", "postTitle": "Abdul Basit &#8211; Surah 071 Nooh", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "071 Nooh", "postTagURL": "https://www.qurancentral.com/surah/071-nooh/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-071-nooh/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 072 AlJinn", "length": "0:11:40", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-072.mp3", "fileSize": "1.51MB", "postTitle": "Abdul Basit &#8211; Surah 072 AlJinn", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "072 Al-Jinn", "postTagURL": "https://www.qurancentral.com/surah/072-al-jinn/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-072-al-jinn/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 073 AlMuzzammil", "length": "0:08:47", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-073.mp3", "fileSize": "1.14MB", "postTitle": "Abdul Basit &#8211; Surah 073 AlMuzzammil", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "073 Al-Muzzammil", "postTagURL": "https://www.qurancentral.com/surah/073-al-muzzammil/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-073-al-muzzammil/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 074 AlMuddaththir", "length": "0:11:35", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-074.mp3", "fileSize": "1.50MB", "postTitle": "Abdul Basit &#8211; Surah 074 AlMuddaththir", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "074 Al-Muddaththir", "postTagURL": "https://www.qurancentral.com/surah/074-al-muddaththir/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-074-al-muddaththir/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 075 AlQiyama", "length": "0:07:24", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-075.mp3", "fileSize": "0.96MB", "postTitle": "Abdul Basit &#8211; Surah 075 AlQiyama", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "075 Al-Qiyama", "postTagURL": "https://www.qurancentral.com/surah/075-al-qiyama/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-075-al-qiyama/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 076 AlInsan", "length": "0:11:59", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-076.mp3", "fileSize": "1.55MB", "postTitle": "Abdul Basit &#8211; Surah 076 AlInsan", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "076 Al-Insan", "postTagURL": "https://www.qurancentral.com/surah/076-al-insan/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-076-al-insan/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 077 AlMursalat", "length": "0:09:43", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-077.mp3", "fileSize": "1.26MB", "postTitle": "Abdul Basit &#8211; Surah 077 AlMursalat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "077 Al-Mursalat", "postTagURL": "https://www.qurancentral.com/surah/077-al-mursalat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-077-al-mursalat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 078 AnNaba", "length": "0:08:39", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-078.mp3", "fileSize": "1.12MB", "postTitle": "Abdul Basit &#8211; Surah 078 AnNaba", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "078 An-Naba", "postTagURL": "https://www.qurancentral.com/surah/078-an-naba/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-078-an-naba/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 079 AnNaziat", "length": "0:08:03", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-079.mp3", "fileSize": "1.04MB", "postTitle": "Abdul Basit &#8211; Surah 079 AnNaziat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "079 An-Naziat", "postTagURL": "https://www.qurancentral.com/surah/079-an-naziat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-079-an-naziat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 080 Abasa", "length": "0:06:24", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-080.mp3", "fileSize": "0.83MB", "postTitle": "Abdul Basit &#8211; Surah 080 Abasa", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "080 Abasa", "postTagURL": "https://www.qurancentral.com/surah/080-abasa/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-080-abasa/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 081 AtTakwir", "length": "0:05:06", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-081.mp3", "fileSize": "0.66MB", "postTitle": "Abdul Basit &#8211; Surah 081 AtTakwir", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "081 At-Takwir", "postTagURL": "https://www.qurancentral.com/surah/081-at-takwir/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-081-at-takwir/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 082 AlInfitar", "length": "0:04:06", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-082.mp3", "fileSize": "0.54MB", "postTitle": "Abdul Basit &#8211; Surah 082 AlInfitar", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "082 Al-Infitar", "postTagURL": "https://www.qurancentral.com/surah/082-al-infitar/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-082-al-infitar/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 083 AlMutaffifin", "length": "0:08:48", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-083.mp3", "fileSize": "1.14MB", "postTitle": "Abdul Basit &#8211; Surah 083 AlMutaffifin", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "083 Al-Mutaffifin", "postTagURL": "https://www.qurancentral.com/surah/083-al-mutaffifin/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-083-al-mutaffifin/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 084 AlInshiqaq", "length": "0:05:08", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-084.mp3", "fileSize": "0.67MB", "postTitle": "Abdul Basit &#8211; Surah 084 AlInshiqaq", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "084 Al-Inshiqaq", "postTagURL": "https://www.qurancentral.com/surah/084-al-inshiqaq/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-084-al-inshiqaq/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 085 AlBurooj", "length": "0:05:32", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-085.mp3", "fileSize": "0.72MB", "postTitle": "Abdul Basit &#8211; Surah 085 AlBurooj", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "085 Al-Burooj", "postTagURL": "https://www.qurancentral.com/surah/085-al-burooj/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-085-al-burooj/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 086 AtTariq", "length": "0:03:08", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-086.mp3", "fileSize": "0.41MB", "postTitle": "Abdul Basit &#8211; Surah 086 AtTariq", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "086 At-Tariq", "postTagURL": "https://www.qurancentral.com/surah/086-at-tariq/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-086-at-tariq/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 087 AlAla", "length": "0:04:22", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-087.mp3", "fileSize": "0.57MB", "postTitle": "Abdul Basit &#8211; Surah 087 AlAla", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "087 Al-Ala", "postTagURL": "https://www.qurancentral.com/surah/087-al-ala/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-087-al-ala/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 088 AlGhashiya", "length": "0:05:31", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-088.mp3", "fileSize": "0.72MB", "postTitle": "Abdul Basit &#8211; Surah 088 AlGhashiya", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "088 Al-Ghashiya", "postTagURL": "https://www.qurancentral.com/surah/088-al-ghashiya/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-088-al-ghashiya/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 089 AlFajr", "length": "0:07:26", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-089.mp3", "fileSize": "0.97MB", "postTitle": "Abdul Basit &#8211; Surah 089 AlFajr", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "089 Al-Fajr", "postTagURL": "https://www.qurancentral.com/surah/089-al-fajr/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-089-al-fajr/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 090 AlBalad", "length": "0:04:13", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-090.mp3", "fileSize": "0.55MB", "postTitle": "Abdul Basit &#8211; Surah 090 AlBalad", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "090 Al-Balad", "postTagURL": "https://www.qurancentral.com/surah/090-al-balad/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-090-al-balad/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 091 AshShams", "length": "0:03:35", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-091.mp3", "fileSize": "0.47MB", "postTitle": "Abdul Basit &#8211; Surah 091 AshShams", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "091 Ash-Shams", "postTagURL": "https://www.qurancentral.com/surah/091-ash-shams/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-091-ash-shams/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 092 AlLail", "length": "0:04:17", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-092.mp3", "fileSize": "0.56MB", "postTitle": "Abdul Basit &#8211; Surah 092 AlLail", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "092 Al-Lail", "postTagURL": "https://www.qurancentral.com/surah/092-al-lail/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-092-al-lail/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 093 AdDhuha", "length": "0:02:20", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-093.mp3", "fileSize": "0.31MB", "postTitle": "Abdul Basit &#8211; Surah 093 AdDhuha", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "093 Ad-Dhuha", "postTagURL": "https://www.qurancentral.com/surah/093-ad-dhuha/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-093-ad-dhuha/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 094 AlInshirah", "length": "0:01:38", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-094.mp3", "fileSize": "0.22MB", "postTitle": "Abdul Basit &#8211; Surah 094 AlInshirah", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "094 Al-Inshirah", "postTagURL": "https://www.qurancentral.com/surah/094-al-inshirah/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-094-al-inshirah/"
        }
        , {

            "track": 1, "name": "Abdul Basit &#8211; Surah 095 AtTin", "length": "0:01:50", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-095.mp3", "fileSize": "0.25MB", "postTitle": "Abdul Basit &#8211; Surah 095 AtTin", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "095 At-Tin", "postTagURL": "https://www.qurancentral.com/surah/095-at-tin/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-095-at-tin/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 096 AlAlaq", "length": "0:03:23", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-096.mp3", "fileSize": "0.44MB", "postTitle": "Abdul Basit &#8211; Surah 096 AlAlaq", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "096 Al-Alaq", "postTagURL": "https://www.qurancentral.com/surah/096-al-alaq/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-096-al-alaq/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 097 AlQadr", "length": "0:01:23", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-097.mp3", "fileSize": "0.19MB", "postTitle": "Abdul Basit &#8211; Surah 097 AlQadr", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "097 Al-Qadr", "postTagURL": "https://www.qurancentral.com/surah/097-al-qadr/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-097-al-qadr/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 098 AlBayyina", "length": "0:04:08", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-098.mp3", "fileSize": "0.54MB", "postTitle": "Abdul Basit &#8211; Surah 098 AlBayyina", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "098 Al-Bayyina", "postTagURL": "https://www.qurancentral.com/surah/098-al-bayyina/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-098-al-bayyina/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 099 AzZalzala", "length": "0:02:02", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-099.mp3", "fileSize": "0.27MB", "postTitle": "Abdul Basit &#8211; Surah 099 AzZalzala", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "099 Az-Zalzala", "postTagURL": "https://www.qurancentral.com/surah/099-az-zalzala/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-099-az-zalzala/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 100 AlAdiyat", "length": "0:02:19", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-100.mp3", "fileSize": "0.31MB", "postTitle": "Abdul Basit &#8211; Surah 100 AlAdiyat", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "100 Al-Adiyat", "postTagURL": "https://www.qurancentral.com/surah/100-al-adiyat/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-100-al-adiyat/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 101 AlQaria", "length": "0:02:01", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-101.mp3", "fileSize": "0.27MB", "postTitle": "Abdul Basit &#8211; Surah 101 AlQaria", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "101 Al-Qaria", "postTagURL": "https://www.qurancentral.com/surah/101-al-qaria/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-101-al-qaria/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 102 AtTakathur", "length": "0:01:47", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-102.mp3", "fileSize": "0.24MB", "postTitle": "Abdul Basit &#8211; Surah 102 AtTakathur", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "102 At-Takathur", "postTagURL": "https://www.qurancentral.com/surah/102-at-takathur/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-102-at-takathur/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 103 AlAsr", "length": "0:00:49", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-103.mp3", "fileSize": "0.11MB", "postTitle": "Abdul Basit &#8211; Surah 103 AlAsr", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "103 Al-Asr", "postTagURL": "https://www.qurancentral.com/surah/103-al-asr/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-103-al-asr/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 104 AlHumaza", "length": "0:01:41", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-104.mp3", "fileSize": "0.23MB", "postTitle": "Abdul Basit &#8211; Surah 104 AlHumaza", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "104 Al-Humaza", "postTagURL": "https://www.qurancentral.com/surah/104-al-humaza/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-104-al-humaza/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 105 AlFil", "length": "0:01:26", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-105.mp3", "fileSize": "0.19MB", "postTitle": "Abdul Basit &#8211; Surah 105 AlFil", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "105 Al-Fil", "postTagURL": "https://www.qurancentral.com/surah/105-al-fil/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-105-al-fil/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 106 Quraish", "length": "0:01:10", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-106.mp3", "fileSize": "0.16MB", "postTitle": "Abdul Basit &#8211; Surah 106 Quraish", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "106 Quraish", "postTagURL": "https://www.qurancentral.com/surah/106-quraish/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-106-quraish/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 107 AlMaun", "length": "0:01:43", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-107.mp3", "fileSize": "0.23MB", "postTitle": "Abdul Basit &#8211; Surah 107 AlMaun", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "107 Al-Maun", "postTagURL": "https://www.qurancentral.com/surah/107-al-maun/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-107-al-maun/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 108 AlKauther", "length": "0:00:44", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-108.mp3", "fileSize": "0.10MB", "postTitle": "Abdul Basit &#8211; Surah 108 AlKauther", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "108 Al-Kauther", "postTagURL": "https://www.qurancentral.com/surah/108-al-kauther/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-108-al-kauther/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 109 AlKafiroon", "length": "0:01:30", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-109.mp3", "fileSize": "0.20MB", "postTitle": "Abdul Basit &#8211; Surah 109 AlKafiroon", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "109 Al-Kafiroon", "postTagURL": "https://www.qurancentral.com/surah/109-al-kafiroon/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-109-al-kafiroon/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 110 AnNasr", "length": "0:01:01", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-110.mp3", "fileSize": "0.14MB", "postTitle": "Abdul Basit &#8211; Surah 110 AnNasr", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "110 An-Nasr", "postTagURL": "https://www.qurancentral.com/surah/110-an-nasr/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-110-an-nasr/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 111 AlMasadd", "length": "0:01:11", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-111.mp3", "fileSize": "0.16MB", "postTitle": "Abdul Basit &#8211; Surah 111 AlMasadd", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "111 Al-Masadd", "postTagURL": "https://www.qurancentral.com/surah/111-al-masadd/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-111-al-masadd/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 112 AlIkhlas", "length": "0:00:41", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-112.mp3", "fileSize": "0.10MB", "postTitle": "Abdul Basit &#8211; Surah 112 AlIkhlas", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "112 Al-Ikhlas", "postTagURL": "https://www.qurancentral.com/surah/112-al-ikhlas/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-112-al-ikhlas/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 113 AlFalaq", "length": "0:01:03", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-113.mp3", "fileSize": "0.14MB", "postTitle": "Abdul Basit &#8211; Surah 113 AlFalaq", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "113 Al-Falaq", "postTagURL": "https://www.qurancentral.com/surah/113-al-falaq/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-113-al-falaq/"
        }
        , {
            "track": 1, "name": "Abdul Basit &#8211; Surah 114 AnNas", "length": "0:01:20", "file": "https://media.blubrry.com/muslim_central_quran/audio1.qurancentral.com/abdul-basit/abdul-basit-64-surah-114.mp3", "fileSize": "0.18MB", "postTitle": "Abdul Basit &#8211; Surah 114 AnNas", "postDate": "January 1, 2014", "postVideo": "", "postCategory": "Abdul Basit", "postCategoryURL": "https://www.qurancentral.com/audio/abdul-basit-abd-us-samad/", "postTag": "114 An-Nas", "postTagURL": "https://www.qurancentral.com/surah/114-an-nas/", "permalink": "https://www.qurancentral.com/abdul-basit-surah-114-an-nas/"
        }
        , ], buildPlaylist=$.each(tracks, function(key, value) {
            var trackNumber=value.track, trackName=value.name, trackLength=value.length;
            if (trackNumber.toString().length===1) {
                trackNumber='0' + trackNumber;
            }
            else {
                trackNumber='' + trackNumber;
            }
            $('#plList').append('<li><div class="plItem"><div class="plTitle">' + trackName + '</div><div class="plLength"><small>' + trackLength + '</small></div></div></li>');
        }
        ), trackCount=tracks.length, npTitle=$('#npTitle'), audio=$('#audio1').bind('play', function () {
            playing=true;
        }
        ).bind('pause', function () {
            playing=false;
        }
        ).bind('ended', function () {
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                audio.play();
            }
            else {
                audio.pause();
                index=0;
                loadTrack(index);
            }
        }
        ).get(0), btnPrev=$('#btnPrev').click(function () {
            if ((index - 1) > -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            }
            else {
                audio.pause();
                index=0;
                loadTrack(index);
            }
        }
        ), btnNext=$('#btnNext').click(function () {
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            }
            else {
                audio.pause();
                index=0;
                loadTrack(index);
            }
        }
        ), li=$('#plList li').click(function () {
            var id=parseInt($(this).index());
            if (id !==index) {
                playTrack(id);
            }
        }
        ), loadTrack=function (id) {
            $('.plSel').removeClass('plSel');
            $('#plList li:eq(' + id + ')').addClass('plSel');
            npTitle.html(tracks[id].name);
            npTitle.attr("href", tracks[id].permalink);
            index=id;
            audio.src=/* mediaPath + */
            tracks[id].file/*+ extension*/
            ;
            let filename=tracks[id].file.substring(tracks[id].file.lastIndexOf('/')+1);
            $('#audio-src').attr("href", tracks[id].file); // Firefox
            $('#audio-src').attr("download", filename); // Firefox
            $('#fileSize').text(tracks[id].fileSize);
            $('#postDate').text(tracks[id].postDate);
            setPlayBackSpeed ();
            // Post Video - only some have videos
            if (tracks[id].postVideo) {
                $('#postVideo').html('Watch Video');
                $('#postVideo').attr("href", tracks[id].permalink+ "#video");
                $('#PostVideoIcon').show();
            }
            else {
                $('#postVideo').text(" ");
                $('#PostVideoIcon').hide();
            }
            $('#postCategory').html(tracks[id].postCategory);
            $('#postCategory').attr("href", tracks[id].postCategoryURL);
            if (tracks[id].postTagURL) {
                $('#postTag').html(tracks[id].postTag);
                $('#postTag').attr("href", tracks[id].postTagURL);
                $('#postTagIcon').show();
            }
            else {
                $('#postTag').text(" ");
                $('#postTagIcon').hide();
            }
            formatPostTitle=tracks[id].postTitle;
            formatPostTitle=encodeURIComponent(formatPostTitle);
            formatPostPermalink=tracks[id].permalink formatPostPermalink=encodeURIComponent(formatPostPermalink);
            // At this point we need to change the URLs of the share buttons based on the URL
            $('#audio-single-fb').attr("href", "https://www.facebook.com/sharer.php?u=" + tracks[id].permalink);
            $('#audio-single-twitter').attr("href", " https://twitter.com/intent/tweet?url=" + tracks[id].permalink + "&text=" + tracks[id].postTitle);
            $('#audio-single-pinterest').attr("href", "javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());");
            $('#audio-single-google-plus').attr("href", "https://plus.google.com/share?url=" + tracks[id].permalink);
            $('#audio-single-linkedin').attr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + tracks[id].permalink);
            $('#audio-single-email').attr("href", "mailto:?subject=" + tracks[id].postTitle + "&body=%20" + tracks[id].permalink);
            $('#audio-single-whatsapp').attr("href", "whatsapp://send?text=" + formatPostTitle + "+" + formatPostPermalink);
        }
        , playTrack=function (id) {
            loadTrack(id);
            audio.play();
        }
        ;
        extension=audio.canPlayType('audio/mpeg') ? '.mp3': audio.canPlayType('audio/ogg') ? '.ogg': '';
        loadTrack(index);
    }
}

);
