const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   #吸底模式
    autoplay: false,  #自动播放
    audio: [
	 {
		name: '红色高跟鞋',
		artist: '红色高跟鞋',
		url: 'http://music.163.com/song/media/outer/url?id=864043623.mp3',
		cover: 'http://p2.music.126.net/IZ5hcrme7k-xNG4gzw-NPg==/109951164627195322.jpg??',
	    lrc: 'images/.lrc' 
	 },
    ]
});