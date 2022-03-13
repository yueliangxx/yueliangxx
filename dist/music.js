const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: true,  
    audio: [
	 {
        name: '红色高跟鞋',
        artist: '杜航',
        url: 'http://music.163.com/song/media/outer/url?id=864043623.mp3',
        cover: 'http://p2.music.126.net/IZ5hcrme7k-xNG4gzw-NPg==/109951164627195322.jpg?',
	 },
	  {
        name: '迪士尼在逃公主',
        artist: '徐秉龙',
        url: 'http://music.163.com/song/media/outer/url?id=1397679310.mp3',
        cover: 'http://p2.music.126.net/c2yS6qm0ukZTkgdSKlsNZA==/109951164528154947.jpg?',
      },
	  {
        name: '没有意外（女声版）',
        artist: '碳水化合潘',
        url: 'http://music.163.com/song/media/outer/url?id=1348995355.mp3',
        cover: 'http://p2.music.126.net/PcCfI0YGLYEaHRzJNBvkrg==/109951163893021871.jpg?',
      },
    ]
});