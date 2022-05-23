let albumLimit = new URL(window.location.href).searchParams.get("albumLimit");const MAX_TITLE_ALBUM=albumLimit!=null?parseInt(albumLimit):3;let titleCount={};let peeps_data = [
    {
        "song_artist": "Bande Originale",
        "song_album": "Bande Originale -201X",
        "song_title": "November",
        "song_url": "Bande Originale/Bande Originale -201X/01 November.mp3",
        "avatar": "Bande Originale/Bande Originale -201X/cover.jpg"
    },
    {
        "song_artist": "Choro de Aksak",
        "song_album": "Zéphyr - 2015",
        "song_title": "Mixing",
        "song_url": "Choro de Aksak/Zéphyr - 2015/01 Mixing (feat. Bongo Ben, Aldo Zein, Samuel Durand).mp3",
        "avatar": "Choro de Aksak/Zéphyr - 2015/cover.jpg"
    },
    {
        "song_artist": "Choro de Aksak",
        "song_album": "Zéphyr - 2015",
        "song_title": "Nordestina",
        "song_url": "Choro de Aksak/Zéphyr - 2015/02 Nordestina (feat. Bongo Ben, Aldo Zein, Samuel Durand).mp3",
        "avatar": "Choro de Aksak/Zéphyr - 2015/cover.jpg"
    },
    {
        "song_artist": "Choro de Aksak",
        "song_album": "Zéphyr - 2015",
        "song_title": "7 Anéis",
        "song_url": "Choro de Aksak/Zéphyr - 2015/03 7 Anéis (feat. Bongo Ben, Aldo Zein, Samuel Durand).mp3",
        "avatar": "Choro de Aksak/Zéphyr - 2015/cover.jpg"
    },
    {
        "song_artist": "Choro de Aksak",
        "song_album": "Zéphyr - 2015",
        "song_title": "Irmãos Latinos",
        "song_url": "Choro de Aksak/Zéphyr - 2015/04 Irmãos Latinos (feat. Bongo Ben, Aldo Zein, Samuel Durand).mp3",
        "avatar": "Choro de Aksak/Zéphyr - 2015/cover.jpg"
    },
    {
        "song_artist": "Choro de Aksak",
        "song_album": "Zéphyr - 2015",
        "song_title": "Flambée montalbanaise",
        "song_url": "Choro de Aksak/Zéphyr - 2015/05 Flambée montalbanaise (feat. Bongo Ben, Aldo Zein, Samuel Durand).mp3",
        "avatar": "Choro de Aksak/Zéphyr - 2015/cover.jpg"
    },
    {
        "song_artist": "David Forget",
        "song_album": "1.4 - 2020",
        "song_title": "Mr Moyen",
        "song_url": "David Forget/1.4 - 2020/01 Mr Moyen.mp3",
        "avatar": "David Forget/1.4 - 2020/cover.jpg"
    },
    {
        "song_artist": "David Forget",
        "song_album": "1.4 - 2020",
        "song_title": "Si j'avais",
        "song_url": "David Forget/1.4 - 2020/02 Si j'avais.mp3",
        "avatar": "David Forget/1.4 - 2020/cover.jpg"
    },
    {
        "song_artist": "David Forget",
        "song_album": "1.4 - 2020",
        "song_title": "La vertu",
        "song_url": "David Forget/1.4 - 2020/03 La vertu.mp3",
        "avatar": "David Forget/1.4 - 2020/cover.jpg"
    },
    {
        "song_artist": "David Forget",
        "song_album": "1.4 - 2020",
        "song_title": "Amour Ô mon Amour",
        "song_url": "David Forget/1.4 - 2020/04 Amour Ô mon Amour.mp3",
        "avatar": "David Forget/1.4 - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Vasco",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/01 Vasco.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Reflets d'influences 1",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/02 Reflets d'influences 1.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Avec un peu de a",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/03 Avec un peu de a.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Pouki Pouki",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/04 Pouki Pouki.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Mikrokosmos n116",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/05 Mikrokosmos n116.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Mikrokosmos n153",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/06 Mikrokosmos n153.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Very Early",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/07 Very Early.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Sang Mélé",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/08 Sang Mélé.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Reflets d'influences 2",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/09 Reflets d'influences 2.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "Fines Lames - 2017",
        "song_title": "Nuit rouge",
        "song_url": "Duo Fines Lames/Fines Lames - 2017/10 Nuit rouge.mp3",
        "avatar": "Duo Fines Lames/Fines Lames - 2017/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Fairy blades",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/01 Fairy blades.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Fast life",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/02 Fast life.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Take 11",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/03 Take 11.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "r0nd0",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/04 r0nd0.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Ibericana",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/05 Ibericana.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Bluette",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/06 Bluette.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Entre lacs et montagnes",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/07 Entre lacs et montagnes.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Tritonis",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/08 Tritonis.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Koto song",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/09 Koto song.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Tokyo traffic",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/10 Tokyo traffic.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "Duo Fines Lames",
        "song_album": "InTime Brubeck - 2020",
        "song_title": "Fujiyama",
        "song_url": "Duo Fines Lames/InTime Brubeck - 2020/11 Fujiyama.mp3",
        "avatar": "Duo Fines Lames/InTime Brubeck - 2020/cover.jpg"
    },
    {
        "song_artist": "KiffKiff",
        "song_album": "KiffKiff - 201X",
        "song_title": "Fallin' on the Floor",
        "song_url": "KiffKiff/KiffKiff - 201X/01 Fallin' on the Floor.mp3",
        "avatar": "KiffKiff/KiffKiff - 201X/cover.jpg"
    },
    {
        "song_artist": "KiffKiff",
        "song_album": "KiffKiff - 201X",
        "song_title": "Prairie Sunset",
        "song_url": "KiffKiff/KiffKiff - 201X/02 Prairie Sunset.mp3",
        "avatar": "KiffKiff/KiffKiff - 201X/cover.jpg"
    },
    {
        "song_artist": "KiffKiff",
        "song_album": "KiffKiff - 201X",
        "song_title": "The WindUp",
        "song_url": "KiffKiff/KiffKiff - 201X/03 The WindUp.mp3",
        "avatar": "KiffKiff/KiffKiff - 201X/cover.jpg"
    },
    {
        "song_artist": "La Fanfare Saugrenue",
        "song_album": "Brass Cover - 2021",
        "song_title": "Black Hole Sun",
        "song_url": "La Fanfare Saugrenue/Brass Cover - 2021/01 Black Hole Sun.mp3",
        "avatar": "La Fanfare Saugrenue/Brass Cover - 2021/cover.jpg"
    },
    {
        "song_artist": "La Fanfare Saugrenue",
        "song_album": "Brass Cover - 2021",
        "song_title": "Exit Music for a Film",
        "song_url": "La Fanfare Saugrenue/Brass Cover - 2021/02 Exit Music for a Film.mp3",
        "avatar": "La Fanfare Saugrenue/Brass Cover - 2021/cover.jpg"
    },
    {
        "song_artist": "La Fanfare Saugrenue",
        "song_album": "Brass Cover - 2021",
        "song_title": "Grace",
        "song_url": "La Fanfare Saugrenue/Brass Cover - 2021/03 Grace.mp3",
        "avatar": "La Fanfare Saugrenue/Brass Cover - 2021/cover.jpg"
    },
    {
        "song_artist": "La Fanfare Saugrenue",
        "song_album": "Brass Cover - 2021",
        "song_title": "No One Knows",
        "song_url": "La Fanfare Saugrenue/Brass Cover - 2021/04 No One Knows.mp3",
        "avatar": "La Fanfare Saugrenue/Brass Cover - 2021/cover.jpg"
    },
    {
        "song_artist": "La Fanfare Saugrenue",
        "song_album": "La Fanfare Saugrenue - 201X",
        "song_title": "Bicycle Race",
        "song_url": "La Fanfare Saugrenue/La Fanfare Saugrenue - 201X/01 Bicycle Race.mp3",
        "avatar": "La Fanfare Saugrenue/La Fanfare Saugrenue - 201X/cover.jpg"
    },
    {
        "song_artist": "La Fanfare Saugrenue",
        "song_album": "La Fanfare Saugrenue - 201X",
        "song_title": "Machine",
        "song_url": "La Fanfare Saugrenue/La Fanfare Saugrenue - 201X/02 Machine.mp3",
        "avatar": "La Fanfare Saugrenue/La Fanfare Saugrenue - 201X/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Police District",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/01 Police District.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "The Drogstore",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/02 The Drogstore.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Scareland",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/03 Scareland.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Backa I",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/04 Backa I.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "L’Oracle",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/05 L’Oracle.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Two men Come In, One Man Goes Out",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/06 Two men Come In, One Man Goes Out.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Red Light Quarter",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/07 Red Light Quarter.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Substance Mort",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/08 Substance Mort.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Uproar",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/09 Uproar.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Nuit de Sabbat",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/10 Nuit de Sabbat.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Come On Down!",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/11 Come On Down!.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Hunter",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/12 Hunter.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Cymbala’s Thor",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/13 Cymbala’s Thor.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Les Pavés Grondent - 2010",
        "song_title": "Sewers Anthem",
        "song_url": "La Goutte au Nez/Les Pavés Grondent - 2010/14 Sewers Anthem.mp3",
        "avatar": "La Goutte au Nez/Les Pavés Grondent - 2010/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ne pas jeter sur la voie publique - 2004",
        "song_title": "Sur place ou à emporter",
        "song_url": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/01 Sur place ou à emporter.mp3",
        "avatar": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ne pas jeter sur la voie publique - 2004",
        "song_title": "Slave-toi, tu pues",
        "song_url": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/02 Slave-toi, tu pues (ouverture).mp3",
        "avatar": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ne pas jeter sur la voie publique - 2004",
        "song_title": "Slave-toi, tu pues",
        "song_url": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/03 Slave-toi, tu pues (presto ma non tropo).mp3",
        "avatar": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ne pas jeter sur la voie publique - 2004",
        "song_title": "Sol Carelus",
        "song_url": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/04 Sol Carelus.mp3",
        "avatar": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ne pas jeter sur la voie publique - 2004",
        "song_title": "Onz Marre",
        "song_url": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/05 Onz Marre.mp3",
        "avatar": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ne pas jeter sur la voie publique - 2004",
        "song_title": "Greasy Roots And Dry Ends",
        "song_url": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/06 Greasy Roots And Dry Ends.mp3",
        "avatar": "La Goutte au Nez/Ne pas jeter sur la voie publique - 2004/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Hongroise les doigts",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/01 Hongroise les doigts.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Ouverture facile à la con",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/02 Ouverture facile à la con.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Magik box",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/03 Magik box.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Tabatha Cash nocturne",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/04 Tabatha Cash nocturne.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Ma première ligne",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/05 Ma première ligne (part 1).mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Gan Power",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/06 Gan Power.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Mulata",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/07 Mulata.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Chicango",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/08 Chicango.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Ma première ligne",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/09 Ma première ligne (part 2).mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Anarchie au Temps Des Rois",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/10 Anarchie au Temps Des Rois.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Police District",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/11 Police District.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Salsa Malikum",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/12 Salsa Malikum.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Ma première ligne",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/13 Ma première ligne (part 3).mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "La Goutte au Nez",
        "song_album": "Ouverture Facile - 2005",
        "song_title": "Paso Dub",
        "song_url": "La Goutte au Nez/Ouverture Facile - 2005/14 Paso Dub.mp3",
        "avatar": "La Goutte au Nez/Ouverture Facile - 2005/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Les petites amourettes",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/01 Les petites amourettes.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Le prince pas charmant",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/02 Le prince pas charmant.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "La rafale",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/03 La rafale.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Le beguin",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/04 Le beguin.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Le gigolo",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/05 Le gigolo.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "L'araignée",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/06 L'araignée.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "La COCO",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/07 La COCO.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "El relicario",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/08 El relicario.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Fleur de musette",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/09 Fleur de musette.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Whispering",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/10 Whispering.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Marco le maquereau",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/11 Marco le maquereau.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Jean - Jean la Taxe",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/12 Jean - Jean la Taxe.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Les petites amourettes - 2011",
        "song_title": "Douce joie",
        "song_url": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/13 Douce joie.mp3",
        "avatar": "Le Balluche de la Saugrenue/Les petites amourettes - 2011/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "C'est un petit bal musette",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/01 C'est un petit bal musette.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Florent la Bretelle",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/02 Florent la Bretelle.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Gallito",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/03 Gallito.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "TSF",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/04 TSF.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Soir de dispute",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/05 Soir de dispute.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Jalousie Dub",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/06 Jalousie Dub.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "J'ai le cafard",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/07 J'ai le cafard.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Jahva",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/08 Jahva.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Les triolets",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/09 Les triolets.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Mon drôle",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/10 Mon drôle.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "Quand il m'écrit",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/11 Quand il m'écrit.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Root's musette - 2010",
        "song_title": "La valse des costauds",
        "song_url": "Le Balluche de la Saugrenue/Root's musette - 2010/12 La valse des costauds.mp3",
        "avatar": "Le Balluche de la Saugrenue/Root's musette - 2010/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Les cabochards",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/01 Les cabochards.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "IL arrive",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/02 IL arrive.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "L'Ostrogoth",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/03 L'Ostrogoth.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "La constante",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/04 La constante.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Busy Line",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/05 Busy Line.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Accroche Coeur",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/06 Accroche Coeur.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Marco Le Maquereau",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/07 Marco Le Maquereau.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Sacha",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/08 Sacha.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Concierge Gamberge",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/09  Concierge Gamberge.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Folies Berberes",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/10 Folies Berberes.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "L'horloger",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/11 L'horloger.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Sputnik",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/12 Sputnik.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Bam Bal",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/13 Bam Bal.mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Tone Of Musette - 2019",
        "song_title": "Sacha Remix",
        "song_url": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/14 Sacha Remix .mp3",
        "avatar": "Le Balluche de la Saugrenue/Tone Of Musette - 2019/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Train fantasque dub",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/01 Train fantasque dub.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "L’hurluberlu",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/02 L’hurluberlu.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "J’ai l’cafard",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/03 J’ai l’cafard.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Jahva",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/04 Jahva.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Jean-Jean la taxe",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/05 Jean-Jean la taxe.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Moi j’m’ennuie",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/06 Moi j’m’ennuie.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Root’s ma poule",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/07 Root’s ma poule.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Train fantasque",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/08 Train fantasque.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Triple patte",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/09 Triple patte.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Le tango stupéfiant",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/10 Le tango stupéfiant.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Femme fatale",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/11 Femme fatale.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Gadjahdelik",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/12 Gadjahdelik.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Les petites amourettes",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/13 Les petites amourettes.mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Le Balluche de la Saugrenue",
        "song_album": "Train Fantasque - 2014",
        "song_title": "Jalousie",
        "song_url": "Le Balluche de la Saugrenue/Train Fantasque - 2014/14 Jalousie (Dub Version).mp3",
        "avatar": "Le Balluche de la Saugrenue/Train Fantasque - 2014/cover.jpg"
    },
    {
        "song_artist": "Les Aventures de P1N0",
        "song_album": "Les Aventures de P1N0 - 2021",
        "song_title": "L'Abracadabra du Magicien DOS",
        "song_url": "Les Aventures de P1N0/Les Aventures de P1N0 - 2021/01 L'Abracadabra du Magicien DOS.mp3",
        "avatar": "Les Aventures de P1N0/Les Aventures de P1N0 - 2021/cover.jpg"
    },
    {
        "song_artist": "Madamirma",
        "song_album": "Just One for Micki - 2008",
        "song_title": "I'll see you in my dreams",
        "song_url": "Madamirma/Just One for Micki - 2008/01 I'll see you in my dreams.mp3",
        "avatar": "Madamirma/Just One for Micki - 2008/cover.jpg"
    },
    {
        "song_artist": "Madamirma",
        "song_album": "Just One for Micki - 2008",
        "song_title": "Je me suis fait tout petit",
        "song_url": "Madamirma/Just One for Micki - 2008/02 Je me suis fait tout petit.mp3",
        "avatar": "Madamirma/Just One for Micki - 2008/cover.jpg"
    },
    {
        "song_artist": "Madamirma",
        "song_album": "Just One for Micki - 2008",
        "song_title": "Ménilmontant",
        "song_url": "Madamirma/Just One for Micki - 2008/03 Ménilmontant .mp3",
        "avatar": "Madamirma/Just One for Micki - 2008/cover.jpg"
    },
    {
        "song_artist": "Madamirma",
        "song_album": "Just One for Micki - 2008",
        "song_title": "Valse à Bamboula",
        "song_url": "Madamirma/Just One for Micki - 2008/04 Valse à Bamboula.mp3",
        "avatar": "Madamirma/Just One for Micki - 2008/cover.jpg"
    },
    {
        "song_artist": "Madamirma",
        "song_album": "Just One for Micki - 2008",
        "song_title": "Just one for Babik",
        "song_url": "Madamirma/Just One for Micki - 2008/05 Just one for Babik.mp3",
        "avatar": "Madamirma/Just One for Micki - 2008/cover.jpg"
    },
    {
        "song_artist": "Madamirma",
        "song_album": "Just One for Micki - 2008",
        "song_title": "Georgia on my mind",
        "song_url": "Madamirma/Just One for Micki - 2008/06 Georgia on my mind.mp3",
        "avatar": "Madamirma/Just One for Micki - 2008/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La musique de danse de la fin du XXe siècle - 2010",
        "song_title": "Love Don't Let Me Go",
        "song_url": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/01 Love Don't Let Me Go (flutes à bec).mp3",
        "avatar": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La musique de danse de la fin du XXe siècle - 2010",
        "song_title": "Medley Daft Punk",
        "song_url": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/02 Medley Daft Punk.mp3",
        "avatar": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La musique de danse de la fin du XXe siècle - 2010",
        "song_title": "Medley Dance 90",
        "song_url": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/03 Medley Dance 90.mp3",
        "avatar": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La musique de danse de la fin du XXe siècle - 2010",
        "song_title": "Pop Corn et Pinocchio aux boomwhackers",
        "song_url": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/04 Pop Corn et Pinocchio aux boomwhackers.mp3",
        "avatar": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La musique de danse de la fin du XXe siècle - 2010",
        "song_title": "Smells Like Teen Spiritus",
        "song_url": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/05 Smells Like Teen Spiritus (Nirvana).mp3",
        "avatar": "Quatuor Megamix/La musique de danse de la fin du XXe siècle - 2010/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "Medley Saint-Thetiseur",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/01 Medley Saint-Thetiseur.mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "Les démons de minuit",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/02 Les démons de minuit.mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "Thriller",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/03 Thriller (L'Angoisse).mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "Eurytmix",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/04 Eurytmix.mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "Medley New Age",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/05 Medley New Age.mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "Les JMJMJ",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/06 Les JMJMJ (Jean-Michel Jarre).mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Quatuor Megamix",
        "song_album": "La passion selon Saint-Thétiseur - 2016",
        "song_title": "La Madonna",
        "song_url": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/07 La Madonna.mp3",
        "avatar": "Quatuor Megamix/La passion selon Saint-Thétiseur - 2016/cover.jpg"
    },
    {
        "song_artist": "Suck Da Head",
        "song_album": "Suck Da Head - 202X",
        "song_title": "Keep On",
        "song_url": "Suck Da Head/Suck Da Head - 202X/01 Keep On.mp3",
        "avatar": "Suck Da Head/Suck Da Head - 202X/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Da ili ney",
        "song_url": "Ygranka/La danse du beau-frère - 2008/01 Da ili ney.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Pasona kolo",
        "song_url": "Ygranka/La danse du beau-frère - 2008/02 Pasona kolo.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Lud",
        "song_url": "Ygranka/La danse du beau-frère - 2008/03 Lud.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Pisko",
        "song_url": "Ygranka/La danse du beau-frère - 2008/04 Pisko.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Velika Kamenica",
        "song_url": "Ygranka/La danse du beau-frère - 2008/05 Velika Kamenica (intro).mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Velika Kamenica",
        "song_url": "Ygranka/La danse du beau-frère - 2008/06 Velika Kamenica.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Cevapcici",
        "song_url": "Ygranka/La danse du beau-frère - 2008/07 Cevapcici.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Arapsko kokonjeste",
        "song_url": "Ygranka/La danse du beau-frère - 2008/08 Arapsko kokonjeste.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Mali dupe",
        "song_url": "Ygranka/La danse du beau-frère - 2008/09 Mali dupe.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Belgrade la blanche",
        "song_url": "Ygranka/La danse du beau-frère - 2008/10 Belgrade la blanche.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Nikad prvi put",
        "song_url": "Ygranka/La danse du beau-frère - 2008/11 Nikad prvi put.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Kristina",
        "song_url": "Ygranka/La danse du beau-frère - 2008/12 Kristina.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Mekam cocek",
        "song_url": "Ygranka/La danse du beau-frère - 2008/13 Mekam cocek.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "La danse du beau-frère - 2008",
        "song_title": "Kadifka",
        "song_url": "Ygranka/La danse du beau-frère - 2008/14 Kadifka.mp3",
        "avatar": "Ygranka/La danse du beau-frère - 2008/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Agyrkanhoro",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/01 Agyrkanhoro.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Kolo 244",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/02 Kolo 244.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Duduk",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/03 Duduk.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "50 Dinars",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/04 50 Dinars.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Lara",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/05 Lara.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Le Tacot de Jeremia",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/06 Le Tacot de Jeremia.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Rakija",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/07 Rakija.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Le Clonck",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/08 Le Clonck.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Blues Carre a la Vitch",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/09 Blues Carre a la Vitch.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    },
    {
        "song_artist": "Ygranka",
        "song_album": "Le Tacot de Jeremia - 2014",
        "song_title": "Ring Ring",
        "song_url": "Ygranka/Le Tacot de Jeremia - 2014/10 Ring Ring.mp3",
        "avatar": "Ygranka/Le Tacot de Jeremia - 2014/cover.jpg"
    }
].map(value=>({value,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(({value})=>value).filter(a=>{if(titleCount[a.song_album]==null){titleCount[a.song_album]=0;};titleCount[a.song_album]++;return titleCount[a.song_album]<=MAX_TITLE_ALBUM;})

export default peeps_data;