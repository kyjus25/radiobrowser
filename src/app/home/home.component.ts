import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public randomImg = this.randomIntFromInterval(0, 4);
  public searchText: string;
  public stats = {
    countries: 'Loading...',
    languages: 'Loading...',
    stations: 'Loading...',
    tags: 'Loading...'
  };
  public searchResults = [];
  public applications = [
    {
      icon: 'https://gitlab.gnome.org/GNOME/rhythmbox/raw/master/data/icons/hicolor/256x256/apps/rhythmbox.png',
      name: 'Rhythmbox-Radio-Browser',
      description: 'A plugin for Rhythmbox',
      link: ['https://www.programmierecke.net/programmed/rhythmbox-radio-browser.html']
    },
    {
      icon: 'https://gitlab.gnome.org/GNOME/rhythmbox/raw/master/data/icons/hicolor/256x256/apps/rhythmbox.png',
      name: 'Rhythmbox-Radio-Browser',
      description: 'GTK Fork for Rhythmbox',
      link: ['https://github.com/fossfreedom/radio-browser']
    },
    {
      icon: 'https://odio.io/imgs/logo_nav.png',
      name: 'Odio',
      description: 'GUI Player for Windows, Mac, Linux',
      link: ['https://odio.io/']
    },
    {
      icon: 'http://milki.include-once.org/streamtuner2/logo.png',
      name: 'StreamTuner2',
      description: 'Contributed Plugin',
      link: ['http://milki.include-once.org/streamtuner2/']
    },
    {
      icon: 'https://lh3.googleusercontent.com/ec5UdKD2rQi9j1Wc09B1-yTzeh2bb8eMXcRtI6NW7JDnciuoHa8FLRRahdPFsqOcLqM=s360-rw',
      name: 'RadioDroid',
      description: 'Android Application',
      availability: ['fab fa-google-play', 'fab fa-android', 'fab fa-github-square'],
      link: [
        'https://play.google.com/store/apps/details?id=net.programmierecke.radiodroid2',
        'https://f-droid.org/packages/net.programmierecke.radiodroid2/',
        'https://github.com/segler-alex/RadioDroid'
      ]
    },
    {
      icon: 'https://www.b2b.satking.de/media/image/af/81/6c/dreambox_logo_grau.png',
      name: 'InternetRadio Plugin E2',
      description: 'DreamBox Plugin',
      link: ['https://dreambox.de/board/index.php?thread/16645-e2-plugin-internetradio-mit-musik-visualisierung-und-webinterface/&postID=111994#post111994']
    },
    {
      icon: 'https://lh3.googleusercontent.com/H2o1av-P8mgq3UGB5JgttKeaqaEadM2Fxh4nnro5r-TgJvW1DsM7ch43Zm6uzuToaOAi=s180-rw',
      name: 'Musicbox',
      description: 'Android Application',
      link: ['https://play.google.com/store/apps/details?id=com.humbergsoftware.musicbox.androidapp']
    },
    {
      icon: 'https://raw.githubusercontent.com/haecker-felix/gradio/master/data/icons/hicolor/256x256/apps/de.haeckerfelix.gradio.png',
      name: 'Gradio',
      description: 'Linux Application',
      link: ['https://github.com/haecker-felix/gradio']
    },
    {
      icon: 'https://gitlab.gnome.org/uploads/-/system/project/avatar/5767/de.haeckerfelix.Gradio.png?width=64',
      name: 'Shortwave',
      description: 'Gradio Successor',
      availability: ['fab fa-gitlab'],
      link: ['https://gitlab.gnome.org/World/Shortwave']
    },
    {
      icon: 'https://kodi.tv/sites/default/themes/kodi/icon.png',
      name: 'Radio-Browser',
      description: 'Kodi/XBMC Plugin',
      availability: ['fas fa-download', 'fab fa-github-square'],
      link: [
        'https://kodi.tv/addon/music-add-ons-plugins/radio-browserinfo',
        'https://github.com/segler-alex/kodi-radio-browser'
      ]
    },
    {
      icon: 'https://image.flaticon.com/icons/png/512/70/70776.png',
      name: 'NetRadio',
      description: 'Windows Application',
      link: ['https://archive.codeplex.com/?p=netradio']
    },
    {
      icon: 'https://extensions.gnome.org/extension-data/icons/icon_836_zlraRvL.png',
      name: 'Internet Radio',
      description: 'GNOME Shell Radio Plugin',
      availability: ['fas fa-download', 'fab fa-github-square'],
      link: [
        'https://extensions.gnome.org/extension/836/internet-radio/',
        'https://github.com/hslbck/gnome-shell-extension-radio'
      ]
    },
    {
      icon: 'https://cdn.androidheadlines.com/wp-content/uploads/2014/01/Jolla-Sailfish.jpg',
      name: 'AllRadio',
      description: 'Jolla / Sailfish Application',
      availability: ['fas fa-download', 'fab fa-github-square'],
      link: [
        'https://nesnomis.wordpress.com/sailfishosjolla/allradio/',
        'https://github.com/nesnomis/harbour-allradio'
      ]
    },
    {
      icon: 'https://raw.githubusercontent.com/Pext/Pext/master/logo.png',
      name: 'RadioBrowser Module',
      description: 'RadioBrowser module for Pext',
      link: ['https://github.com/Pext/pext_module_radio']
    },
    {
      icon: 'https://radiolise.gitlab.io/img/logo.png',
      name: 'Radio-li-se',
      description: 'A beautiful web based client',
      link: ['https://radiolise.gitlab.io/']
    },
    {
      icon: 'https://bemba.surge.sh/assets/png/192.png',
      name: 'Radio Bempa',
      description: 'A nice web based client',
      link: ['https://bemba.surge.sh/']
    },
    {
      icon: 'https://www.b2b.satking.de/media/image/af/81/6c/dreambox_logo_grau.png',
      name: 'MusicCenter',
      description: 'For DreamOS enigma2',
      link: ['https://board.dreambox.tools/wbb/index.php?thread/9066-musiccenter-9-1-r0-musik-plugin-10-12-2017/&postID=169674#post169674']
    },
    {
      icon: 'https://image.flaticon.com/icons/png/512/70/70776.png',
      name: 'OCSP',
      description: 'Small and handy audio/video player',
      availability: ['fas fa-download', 'fab fa-sourceforge'],
      link: [
        'https://talk.maemo.org/showthread.php?t=94590',
        'https://sourceforge.net/projects/oscp/files/binaries/'
      ]
    },
    {
      icon: 'https://avatars1.githubusercontent.com/u/1558630?s=460&v=4',
      name: 'ZipTuner',
      description: 'Playlist fetcher for the console',
      link: ['https://github.com/deeice/ziptuner']
    },
    {
      icon: 'https://notabug.org/zPlus/InternetRadio/raw/85718d7d17bd4a64d12597a4f8aa8aca31034b7b/app/src/main/res/drawable/logo.png',
      name: 'Internet Radio',
      description: 'Simple, minimalist Android app',
      availability: ['fas fa-download', 'fab fa-android'],
      link: [
        'https://notabug.org/zPlus/InternetRadio',
        'https://f-droid.org/packages/community.peers.internetradio/'
      ]
    },
    {
      icon: 'https://lh3.googleusercontent.com/DMPdfo1zTLzAF5_ble9xszgBOwPN5wL2AlPfE5dqTm50aWVBUQ41BkmqbxUCyMjZ0Q=s360-rw',
      name: '335',
      description: 'Android app for visually impaired',
      availability: ['fas fa-download', 'fab fa-google-play', 'fab fa-github-square'],
      link: [
        'http://www.indr.ch/projects/',
        'https://play.google.com/store/apps/details?id=ch.indr.threethreefive',
        'https://github.com/indr/335'
      ]
    },
    {
      icon: 'https://lh3.googleusercontent.com/9ieIgFDwXMsnC3wqdqffIEsBtW8Y2ICrJyvJBuzuK3Y7ja6mp4bqbWTEPKi3lUkPCA=s180-rw',
      name: 'RadioS2S',
      description: 'Radio app for android',
      availability: ['fas fa-download', 'fab fa-google-play', 'fab fa-github-square'],
      link: [
        'https://radios2s.scriptel.nl/',
        'https://play.google.com/store/apps/details?id=com.scriptel.simplyradio',
        'https://github.com/fsch0203/radios2s'
      ]
    },
    {
      icon: 'https://apps.nextcloud.com/static/assets/img/favicon-180.png',
      name: 'Radio',
      description: 'Radio plugin for NextCloud',
      link: ['https://apps.nextcloud.com/apps/radio']
    },
    {
      icon: 'https://lh3.googleusercontent.com/sT_xCxNoSoj7xtsPpAoVsA-wvA9pnpooBAl3hqzIlkTLyBET2T6IluTaXh2-berADw=s180-rw',
      name: 'Castro',
      description: 'Chromecast Radio',
      link: ['https://play.google.com/store/apps/details?id=guru.tall.castro']
    },
    {
      icon: 'https://lh3.googleusercontent.com/LNU3wSeIqCtYvvbcklHr4mAQbG4EAVZ_kamQZ_6ECmyYqudAX3FoZy42bIGnSj3pFE5n=s360-rw',
      name: 'Radio FM Player',
      description: 'TuneFM Plugin',
      link: ['https://play.google.com/store/apps/details?id=fm.radio.sanity.radiofm']
    },
    {
      icon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/b6/89/4a/b6894ace-512f-9279-1371-73cb755f205c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/246x0w.jpg',
      name: 'Instaradio',
      availability: ['fas fa-download', 'fab fa-apple'],
      description: 'iOS app',
      link: ['https://www.soriko.no/instaradio/', 'https://itunes.apple.com/us/app/instaradio-radio-player/id538537206']
    },
    {
      icon: 'https://docs.mopidy.com/favicon.ico',
      name: 'RompR',
      availability: ['fas fa-download', 'fab fa-github-square'],
      description: 'Mopidy and MPD Web client',
      link: ['https://fatg3erman.github.io/RompR/', 'https://github.com/fatg3erman/RompR']
    }
  ];

  public libraries = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
      name: 'Radiobrowser4j',
      description: 'Java Library',
      link: ['https://github.com/sfuhrm/radiobrowser4j']
    },
    {
      icon: 'https://img.icons8.com/color/420/npm.png',
      name: 'radio-browser',
      description: 'NodeJS module',
      availability: ['fab fa-npm', 'fab fa-github-square'],
      link: ['https://www.npmjs.com/package/radio-browser', 'https://github.com/nepodev/radio-browser']
    },
    {
      icon: 'https://pypi.org/static/images/logo-small.6eef541e.svg',
      name: 'PyRadios',
      description: 'Python module',
      availability: ['fab fa-python', 'fab fa-github-square'],
      link: ['https://pypi.org/project/pyradios', 'https://github.com/andreztz/pyradios']
    },
    {
      icon: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/graphql.svg',
      name: 'radio-gql',
      description: 'GraphQL module',
      availability: ['fab fa-github-square'],
      link: ['https://github.com/ricardocasares/radio-gql']
    },
  ];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.getServerStats();

    const this1 = this;
    setInterval(function() {
      this1.randomImg = this1.randomIntFromInterval(0, 4);
    }, 10000);
  }
  private getServerStats() {
      this.http.get(
        'http://www.radio-browser.info/webservice/json/stats'
      ).subscribe(res => {
        this.stats = <any>res;
      });
  }

  public goToStations() {
    this.router.navigate(['/stations'], { queryParams: { search: this.searchText } });
  }

  public numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  public randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
